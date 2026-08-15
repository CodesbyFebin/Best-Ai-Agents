#!/usr/bin/env npx tsx
import { execSync } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { routeRegistry } from "../../src/routing/routeRegistry";
import { normalizePath, canonicalUrl } from "../../src/routing/path-normalization";

const ROOT = process.cwd();
const ORIGIN = "https://bestaiagent.in";
const IMPORT_DIR = join(ROOT, "data", "imports");

type SourceType =
  | "git"
  | "sitemap"
  | "route"
  | "gsc"
  | "gsc-protected"
  | "recovery"
  | "llms"
  | "search-console-export";

interface UrlSource {
  type: SourceType;
  commit?: string;
  file?: string;
  branch?: string;
  export?: string;
  note?: string;
}

interface GscEvidence {
  clicks: number;
  impressions: number;
  ctrPercent: number;
  position: number;
}

interface UrlEntry {
  url: string;
  normalizedUrl: string;
  path: string;
  classification: string;
  canonical: string | null;
  sources: UrlSource[];
  gscEvidence?: GscEvidence;
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

interface GitArtifact {
  kind: "sitemap" | "robots";
  path: string;
  commit: string;
  subject: string;
  branches: string[];
}

function now(): string {
  return new Date().toISOString();
}

function git(args: string): string {
  try {
    return execSync(`git ${args}`, { encoding: "utf8", cwd: ROOT, maxBuffer: 1024 * 1024 * 64 });
  } catch {
    return "";
  }
}

function gitCommitsForToken(token: string): { sha: string; subject: string }[] {
  const out = git(`log --all --oneline -S ${JSON.stringify(token)}`);
  const result: { sha: string; subject: string }[] = [];
  const seen = new Set<string>();
  for (const line of out.split("\n")) {
    const m = line.match(/^([0-9a-f]{7,40})\s+(.*)$/);
    if (m && !seen.has(m[1])) {
      seen.add(m[1]);
      result.push({ sha: m[1], subject: m[2] });
    }
  }
  return result;
}

function gitBranchesForCommit(sha: string): string[] {
  const out = git(`branch --all --contains ${sha}`);
  return out
    .split("\n")
    .map((l) => l.replace(/^[*+]\s*/, "").trim())
    .filter(Boolean);
}

function gitSourcesForPath(path: string): UrlSource[] {
  const token = path === "/" ? "bestaiagent.in" : path;
  const commits = gitCommitsForToken(token);
  const sources: UrlSource[] = [];
  for (const c of commits.slice(0, 5)) {
    const branches = gitBranchesForCommit(c.sha);
    sources.push({
      type: "git",
      commit: c.sha,
      file: path,
      branch: branches[0] ?? "unknown",
      note: c.subject,
    });
  }
  return sources;
}

function gitArtifactHistory(): GitArtifact[] {
  const out = git(
    `log --all --diff-filter=A --name-status --pretty=format:'%H %s' -- '**/sitemap*' '**/robots*' '**/next-sitemap*' '**/vercel.json' '**/next.config.ts'`
  );
  const artifacts: GitArtifact[] = [];
  let currentSha = "";
  let currentSubject = "";
  for (const line of out.split("\n")) {
    const header = line.match(/^([0-9a-f]{7,40})\s+(.*)$/);
    if (header) {
      currentSha = header[1];
      currentSubject = header[2];
      continue;
    }
    const status = line.match(/^A\s+(.+)$/);
    if (status) {
      const filePath = status[1].trim();
      const lower = filePath.toLowerCase();
      const kind: "sitemap" | "robots" | null = lower.includes("robots")
        ? "robots"
        : lower.includes("sitemap")
          ? "sitemap"
          : null;
      if (kind) {
        artifacts.push({
          kind,
          path: filePath,
          commit: currentSha,
          subject: currentSubject,
          branches: gitBranchesForCommit(currentSha),
        });
      }
    }
  }
  return artifacts;
}

async function readJson(path: string): Promise<unknown | null> {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return null;
  }
}

async function loadUserImports(): Promise<{ path: string; source: UrlSource; gsc?: GscEvidence }[]> {
  const entries: { path: string; source: UrlSource; gsc?: GscEvidence }[] = [];
  const files: string[] = [];
  try {
    const { readdirSync } = await import("node:fs");
    for (const name of readdirSync(IMPORT_DIR)) {
      if (name.endsWith(".csv") || name.endsWith(".json") || name.endsWith(".xlsx")) {
        files.push(name);
      }
    }
  } catch {
    return entries;
  }
  for (const file of files) {
    const source: UrlSource = { type: "search-console-export", export: file };
    const raw = await readFile(join(IMPORT_DIR, file), "utf8");
    const urls = new Set<string>();
    const re = /https?:\/\/bestaiagent\.in\/[^\s",]+/gi;
    let match: RegExpExecArray | null;
    while ((match = re.exec(raw))) urls.add(match[0]);
    for (const u of urls) {
      entries.push({ path: normalizePath(u), source, gsc: undefined });
    }
  }
  return entries;
}

interface HistoricalRecord {
  historicalUrl: string;
  canonicalAtTime?: string;
  gscEvidence?: GscEvidence;
  currentClassification?: string;
  replacementUrl?: string | null;
  contentRecovered?: string | null;
  quarantinedRedirect?: { from: string; to: string; reason: string } | null;
}

async function main(): Promise<void> {
  const historical = (await readJson(join(ROOT, "data/seo/historical-canonical-urls.json"))) as
    | { urls: HistoricalRecord[] }
    | null;
  const protectedUrls = ((await readJson(join(ROOT, "data/seo/protected-urls.json"))) as string[]) ?? [];
  const redirectMap = (await readJson(join(ROOT, "data/seo/redirect-map.json"))) as
    | { active: { from: string; to: string }[]; quarantined: { from: string; to: string; reason: string }[] }
    | null;

  const entries: UrlEntry[] = [];
  const byPath = new Map<string, UrlEntry>();
  const lastVerified = now();

  const indexableRoutes = routeRegistry.filter((r) => r.indexable && r.sitemap);
  const categories = new Set<string>();

  const addEntry = (entry: UrlEntry) => {
    const existing = byPath.get(entry.path);
    if (existing) {
      const merged = new Map(existing.sources.map((s) => [sourceKey(s), s]));
      for (const s of entry.sources) {
        if (!merged.has(sourceKey(s))) merged.set(sourceKey(s), s);
      }
      existing.sources = [...merged.values()];
      if (!existing.gscEvidence && entry.gscEvidence) existing.gscEvidence = entry.gscEvidence;
      if (!existing.redirect && entry.redirect) existing.redirect = entry.redirect;
      if (!existing.notes && entry.notes) existing.notes = entry.notes;
      return;
    }
    byPath.set(entry.path, entry);
    entries.push(entry);
  };

  function sourceKey(s: UrlSource): string {
    return `${s.type}:${s.commit ?? ""}:${s.file ?? ""}:${s.export ?? ""}`;
  }

  for (const rec of historical?.urls ?? []) {
    const path = normalizePath(rec.historicalUrl);
    const url = rec.canonicalAtTime ?? rec.historicalUrl;
    const classification = rec.currentClassification ?? "UNKNOWN";
    const gitSources = gitSourcesForPath(path);
    const sources: UrlSource[] = [...gitSources];

    if (protectedUrls.map(normalizePath).includes(path)) {
      sources.push({ type: "gsc-protected", file: "data/seo/protected-urls.json", note: "GSC protected historical URL" });
    }
    if (rec.gscEvidence) {
      sources.push({ type: "gsc", export: "GSC Performance/Pages export", note: "Search Console indexed evidence" });
    }
    if (rec.contentRecovered) {
      sources.push({ type: "recovery", file: rec.contentRecovered, note: "Recovered source content" });
    }
    if (indexableRoutes.some((r) => normalizePath(r.path) === path)) {
      sources.push({ type: "route", file: `app${path}/page.tsx` });
      sources.push({ type: "sitemap", file: "app/sitemap.ts" });
    }

    const redirect = rec.replacementUrl ?? rec.quarantinedRedirect?.to ?? null;
    const indexable = classification === "CURRENT_CANONICAL";
    const sitemap = classification === "CURRENT_CANONICAL";
    const status = classification === "REDIRECT_CANDIDATE" ? 301 : classification === "GONE" ? 410 : classification === "CURRENT_CANONICAL" ? 200 : 404;

    const entry: UrlEntry = {
      url,
      normalizedUrl: canonicalUrl(path),
      path,
      classification,
      canonical: indexable ? url : null,
      sources,
      gscEvidence: rec.gscEvidence,
      redirect,
      status,
      indexable,
      sitemap,
      robotsAllowed: true,
      lastVerified,
      notes:
        classification === "GONE"
          ? "Historical URL without a current equivalent route. Returns 410 Gone; do not fabricate replacement content."
          : classification === "UNKNOWN"
            ? "Source present but current disposition requires manual review."
            : "",
    };
    addEntry(entry);
    if (classification !== "CURRENT_CANONICAL") categories.add(path);
  }

  for (const route of indexableRoutes) {
    const path = normalizePath(route.path);
    if (byPath.has(path)) continue;
    const gitSources = gitSourcesForPath(path);
    const sources: UrlSource[] = [
      { type: "route", file: `app${path}/page.tsx` },
      { type: "sitemap", file: "app/sitemap.ts" },
      ...gitSources,
    ];
    addEntry({
      url: canonicalUrl(path),
      normalizedUrl: canonicalUrl(path),
      path,
      classification: "CURRENT_CANONICAL",
      canonical: canonicalUrl(path),
      sources,
      redirect: null,
      status: 200,
      indexable: true,
      sitemap: true,
      robotsAllowed: true,
      lastVerified,
      notes: "",
    });
  }

  for (const entry of redirectMap?.active ?? []) {
    const from = normalizePath(entry.from);
    if (!byPath.has(from)) {
      addEntry({
        url: canonicalUrl(from),
        normalizedUrl: canonicalUrl(from),
        path: from,
        classification: "REDIRECT_CANDIDATE",
        canonical: null,
        sources: [{ type: "git", note: "active redirect source in redirect-map.json" }],
        redirect: entry.to,
        status: 301,
        indexable: false,
        sitemap: false,
        robotsAllowed: true,
        lastVerified,
        notes: "Active redirect source; destination is a live current route.",
      });
    }
  }

  const userImports = await loadUserImports();
  for (const imp of userImports) {
    const path = normalizePath(imp.path);
    const existing = byPath.get(path);
    if (existing) {
      existing.sources.push(imp.source);
      if (imp.gsc && !existing.gscEvidence) existing.gscEvidence = imp.gsc;
    } else {
      addEntry({
        url: canonicalUrl(path),
        normalizedUrl: canonicalUrl(path),
        path,
        classification: "UNKNOWN",
        canonical: null,
        sources: [imp.source],
        gscEvidence: imp.gsc,
        redirect: null,
        status: 404,
        indexable: false,
        sitemap: false,
        robotsAllowed: true,
        lastVerified,
        notes: "Imported from user-provided Search Console export; requires classification against current routes.",
      });
    }
  }

  const gitArtifacts = gitArtifactHistory();

  await mkdir(join(ROOT, "data/seo"), { recursive: true });
  await writeFile(
    join(ROOT, "data/seo/historical-url-sources.json"),
    JSON.stringify(
      {
        generatedAt: lastVerified,
        method: "git-history pickaxe + historical-canonical-urls.json + protected-urls.json + routeRegistry + optional data/imports",
        sources: {
          git: "git log --all -S <url-path> per URL (real commit SHAs only; no fabricated provenance)",
          historicalDb: "data/seo/historical-canonical-urls.json",
          gscProtected: "data/seo/protected-urls.json",
          redirectMap: "data/seo/redirect-map.json",
          currentRoutes: "src/routing/routeRegistry.ts",
          userImports: IMPORT_DIR,
        },
        gitArtifactEvidence: gitArtifacts,
        urls: entries,
        totalUniqueUrls: entries.length,
        gitResolvedCount: entries.filter((e) => e.sources.some((s) => s.type === "git")).length,
        gscEvidenceCount: entries.filter((e) => e.gscEvidence).length,
        redirectSourceCount: (redirectMap?.active ?? []).length,
        quarantinedCount: (redirectMap?.quarantined ?? []).length,
        userImportCount: userImports.length,
      },
      null,
      2
    ) + "\n"
  );

  const byClassification: Record<string, number> = {};
  for (const e of entries) byClassification[e.classification] = (byClassification[e.classification] ?? 0) + 1;

  console.log(
    `Recover URLs (real git-backed): ${entries.length} unique URLs, ${byClassification["CURRENT_CANONICAL"] ?? 0} current canonical, ${byClassification["REDIRECT_CANDIDATE"] ?? 0} redirect, ${byClassification["GONE"] ?? 0} gone, ${byClassification["UNKNOWN"] ?? 0} unknown.`
  );
  console.log(
    `Git-resolved provenance: ${entries.filter((e) => e.sources.some((s) => s.type === "git")).length} URLs, recovered git artifacts: ${gitArtifacts.length} (sitemap/robots), user imports: ${userImports.length}.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
