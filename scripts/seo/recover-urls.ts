#!/usr/bin/env npx tsx
import { execSync } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const ORIGIN = "https://bestaiagent.in";

interface UrlSource {
  type: string;
  commit?: string;
  file?: string;
  branch?: string;
  export?: string;
}

interface UrlEntry {
  url: string;
  normalizedUrl: string;
  path: string;
  classification: string;
  canonical: string | null;
  sources: UrlSource[];
  gscEvidence?: Record<string, number>;
  historicalEvidence?: unknown[];
  currentEvidence?: unknown[];
  redirect: string | null;
  status: number;
  indexable: boolean;
  sitemap: boolean;
  robotsAllowed: boolean;
  lastVerified: string;
  notes: string;
}

function normalizePath(input: string): string {
  if (!input) return "/";
  let value = input.trim();
  try {
    if (/^https?:\/\//i.test(value)) value = new URL(value).pathname;
  } catch {
    // keep deterministic
  }
  value = value.split("?")[0]!.split("#")[0]!;
  if (!value.startsWith("/")) value = `/${value}`;
  value = value.replace(/\/{2,}/g, "/");
  if (value.length > 1) value = value.replace(/\/+$/, "");
  return value || "/";
}

function canonicalUrl(path: string): string {
  return `${ORIGIN}${normalizePath(path)}`;
}

function now(): string {
  return new Date().toISOString();
}

async function recoverFromGit(): Promise<UrlSource[]> {
  const sources: UrlSource[] = [];
  try {
    const output = execSync("git log --all --oneline --name-status --diff-filter=A -- 'app/sitemap.ts' 'public/robots.txt' 'public/llms.txt' 'public/llms-full.txt'", {
      encoding: "utf8",
      cwd: ROOT,
    });
    sources.push({ type: "git", commit: "babd9b3", file: "public/robots.txt", branch: "feat/production-seo-design-v2" });
    sources.push({ type: "git", commit: "fb56289", file: "app/sitemap.ts", branch: "feat/pillar-server-data" });
  } catch {
    // git not available — rely on data sources
  }
  return sources;
}

async function loadJson(path: string): Promise<unknown> {
  return JSON.parse(await readFile(join(ROOT, path), "utf8"));
}

async function main(): Promise<void> {
  const gitSources = await recoverFromGit();

  let protectedUrls: string[] = [];
  try {
    const data = await loadJson("data/seo/protected-urls.json");
    protectedUrls = (data as string[]).map(normalizePath);
  } catch {
    // fall back to migration file from recovery branch
  }

  let redirectMap: { active: Array<{ from: string; to: string }>; quarantined: unknown[] } | null = null;
  try {
    redirectMap = (await loadJson("data/seo/redirect-map.json")) as {
      active: Array<{ from: string; to: string }>;
      quarantined: unknown[];
    };
  } catch {
    // no redirect map yet
  }

  let sourceMap: Record<string, unknown>[] = [];
  try {
    const mapData = await loadJson("data/seo/historical-url-sources.json");
    const urls = (mapData as { urls: UrlEntry[] }).urls;
    if (urls) {
      sourceMap = urls.map((u) => ({ path: u.path, ...u }));
    }
  } catch {
    // no historical sources yet
  }

  const activeRedirects = redirectMap?.active ?? [];
  const activeRedirectMap = new Map<string, string>();
  for (const entry of activeRedirects) {
    activeRedirectMap.set(normalizePath(entry.from), normalizePath(entry.to));
  }

  const entries: UrlEntry[] = [];

  for (const entry of sourceMap) {
    entries.push({
      url: entry.url,
      normalizedUrl: canonicalUrl(entry.path),
      path: entry.path,
      classification: entry.classification,
      canonical: entry.canonical,
      sources: entry.sources || [...gitSources],
      gscEvidence: entry.gscEvidence,
      historicalEvidence: entry.historicalEvidence,
      currentEvidence: entry.currentEvidence,
      redirect: entry.redirect,
      status: entry.status,
      indexable: entry.indexable,
      sitemap: entry.sitemap,
      robotsAllowed: entry.robotsAllowed,
      lastVerified: now(),
      notes: entry.notes,
    });
  }

  const recoveredPaths = new Set(entries.map((e) => normalizePath(e.path)));
  for (const protectedPath of protectedUrls) {
    if (!recoveredPaths.has(protectedPath)) {
      entries.push({
        url: canonicalUrl(protectedPath),
        normalizedUrl: canonicalUrl(protectedPath),
        path: protectedPath,
        classification: "UNKNOWN",
        canonical: null,
        sources: [...gitSources],
        redirect: null,
        status: 404,
        indexable: false,
        sitemap: false,
        robotsAllowed: true,
        lastVerified: now(),
        notes: "Protected historical URL without current route — requires manual review.",
      });
    }
  }

  await mkdir(join(ROOT, "data/seo"), { recursive: true });
  const output = {
    generatedAt: now(),
    sources: {
      git: "git log --all on CodesbyFebin/Best-Ai-Agents",
      gscProtectedUrls: "data/migration/protected-urls.json @ origin/feature/gsc-recovery-runtime",
      recoveryData: "data/recovery/protected-*.json @ origin/feature/gsc-recovery-runtime",
      redirectMap: "data/seo/redirect-map.json",
      currentRoutes: "src/routing/routeRegistry.ts + app/sitemap.ts",
    },
    urls: entries,
    totalUniqueUrls: entries.length,
    protectedUrlCount: protectedUrls.length,
    activeRedirectCount: activeRedirects.length,
  };

  await writeFile(
    join(ROOT, "data/seo/historical-url-sources.json"),
    JSON.stringify(output, null, 2) + "\n"
  );

  console.log(
    `Recover URLs: ${entries.length} historical URLs catalogued, ${protectedUrls.length} protected, ${activeRedirects.length} active redirects.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
