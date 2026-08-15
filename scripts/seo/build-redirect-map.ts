#!/usr/bin/env npx tsx
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();

function normalizePath(input: string): string {
  if (!input) return "/";
  let value = input.trim();
  try {
    if (/^https?:\/\//i.test(value)) value = new URL(value).pathname;
  } catch {}
  value = value.split("?")[0]!.split("#")[0]!;
  if (!value.startsWith("/")) value = `/${value}`;
  value = value.replace(/\/{2,}/g, "/");
  if (value.length > 1) value = value.replace(/\/+$/, "");
  return value || "/";
}

interface CanonicalEntry {
  path: string;
  status: number;
  classification: string;
}

interface HistoricalEntry {
  path: string;
  classification: string;
  redirect: string | null;
}

interface RedirectEntry {
  from: string;
  to: string;
  reason?: string;
}

interface QuarantinedRedirect extends RedirectEntry {
  reason: string;
}

interface LegacyRedirectMap {
  active: RedirectEntry[];
  quarantined: QuarantinedRedirect[];
}

interface RedirectMapFile {
  source: string;
  policy: string;
  active: RedirectEntry[];
  quarantined: QuarantinedRedirect[];
  sourceUrls: string[];
}

async function main(): Promise<void> {
  const canonicalData = JSON.parse(
    await readFile(join(ROOT, "data/seo/canonical-urls.json"), "utf8")
  ) as { urls: CanonicalEntry[] };

  const livePaths = new Set(
    canonicalData.urls
      .filter((e) => e.status === 200 && e.classification === "CURRENT_CANONICAL")
      .map((e) => normalizePath(e.path))
  );

  const historicalData = JSON.parse(
    await readFile(join(ROOT, "data/seo/historical-url-sources.json"), "utf8")
  ) as { urls: HistoricalEntry[] };

  const legacyMap = JSON.parse(
    await readFile(join(ROOT, "data/migration/legacy-redirect-map.json"), "utf8")
  ) as LegacyRedirectMap;

  const active: RedirectEntry[] = [];
  const activeKeys = new Set<string>();

  for (const entry of legacyMap.active) {
    const from = normalizePath(entry.from);
    const to = normalizePath(entry.to);
    if (livePaths.has(to)) {
      const key = `${from}→${to}`;
      if (!activeKeys.has(key)) {
        activeKeys.add(key);
        active.push({ from, to, reason: entry.reason });
      }
    }
  }

  for (const entry of historicalData.urls) {
    const path = normalizePath(entry.path);
    if (entry.classification === "REDIRECT_CANDIDATE" && entry.redirect) {
      const to = normalizePath(entry.redirect);
      const key = `${path}→${to}`;
      if (livePaths.has(to)) {
        if (!activeKeys.has(key)) {
          activeKeys.add(key);
          active.push({
            from: path,
            to,
            reason: "Maps to a live canonical page in the evidence-backed redirect map",
          });
        }
      }
    }
  }

  const quarantined: QuarantinedRedirect[] = [];
  const quarantinedKeys = new Set<string>();

  for (const q of legacyMap.quarantined) {
    const from = normalizePath(q.from);
    const key = `${from}→${normalizePath(q.to)}`;
    const inActive = activeKeys.has(key);
    if (!inActive && !quarantinedKeys.has(from)) {
      quarantinedKeys.add(from);
      quarantined.push({ from, to: normalizePath(q.to), reason: q.reason });
    }
  }

  for (const entry of historicalData.urls) {
    const path = normalizePath(entry.path);
    if (entry.classification === "GONE" && entry.path) {
      if (!quarantinedKeys.has(path)) {
        quarantinedKeys.add(path);
        quarantined.push({
          from: path,
          to: "",
          reason: "Historical URL with no current equivalent route. Returns 410 Gone.",
        });
      }
    }
  }

  const deduplicatedActive: RedirectEntry[] = [];
  const seenActive = new Set<string>();
  for (const entry of active) {
    const key = `${normalizePath(entry.from)}→${normalizePath(entry.to)}`;
    if (!seenActive.has(key)) {
      seenActive.add(key);
      deduplicatedActive.push(entry);
    }
  }

  const deduplicatedQuarantined: QuarantinedRedirect[] = [];
  const seenQuarantined = new Set<string>();
  for (const entry of quarantined) {
    const key = normalizePath(entry.from);
    if (!seenQuarantined.has(key)) {
      seenQuarantined.add(key);
      deduplicatedQuarantined.push(entry);
    }
  }

  const output: RedirectMapFile = {
    source: "CodesbyFebin/Best-Ai-Agents:feat/pillar-server-data:data/seo/historical-url-sources.json + data/migration/protected-urls.json @ origin/feature/gsc-recovery-runtime",
    policy:
      "Only redirects whose destinations are direct live current routes are active. GSC-protected source URLs remain direct. Legacy rules with unrecovered destinations are retained in quarantine so the runtime never redirects users or crawlers to a 404.",
    active: deduplicatedActive,
    quarantined: deduplicatedQuarantined,
    sourceUrls: historicalData.urls.map((u) => normalizePath(u.path)),
  };

  await mkdir(join(ROOT, "data/seo"), { recursive: true });
  await writeFile(
    join(ROOT, "data/seo/redirect-map.json"),
    JSON.stringify(output, null, 2) + "\n"
  );

  console.log(
    `Build redirect map: ${deduplicatedActive.length} active redirects, ${deduplicatedQuarantined.length} quarantined.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
