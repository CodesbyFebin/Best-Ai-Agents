#!/usr/bin/env npx tsx
import { readFile, writeFile } from "node:fs/promises";
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

interface UrlEntry {
  url: string;
  normalizedUrl: string;
  path: string;
  classification: string;
  canonical: string | null;
  redirect: string | null;
  status: number;
  indexable: boolean;
  sitemap: boolean;
  sources?: unknown[];
  gscEvidence?: Record<string, number>;
  notes?: string;
  lastVerified?: string;
}

function csvEscape(value: unknown): string {
  const str = value === null || value === undefined ? "" : String(value);
  if (str.includes(",") || str.includes("\"") || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

async function main(): Promise<void> {
  const historical = JSON.parse(
    await readFile(join(ROOT, "data/seo/historical-url-sources.json"), "utf8")
  ) as { urls: UrlEntry[] };

  const canonical = JSON.parse(
    await readFile(join(ROOT, "data/seo/canonical-urls.json"), "utf8")
  ) as { urls: UrlEntry[]; total: number; indexable: number };

  const sources: Record<string, number> = {
    git: 0,
    sitemap: 0,
    searchConsole: 0,
    vercel: 0,
    searchDiscovery: 0,
    currentRoutes: canonical.urls.filter((u) => u.classification === "CURRENT_CANONICAL").length,
  };

  for (const entry of historical.urls) {
    const sourceTypes = new Set<string>();
    for (const source of (entry.sources as Array<{ type: string }>) || []) {
      const t = source.type;
      if (t === "git") sourceTypes.add("git");
      if (t === "sitemap") sourceTypes.add("sitemap");
      if (t === "gsc-protected" || t === "gsc" || t === "searchConsole" || t === "recovery") sourceTypes.add("searchConsole");
      if (t === "vercel" || t === "deployment") sourceTypes.add("vercel");
      if (t === "search-discovery" || t === "searchDiscovery") sourceTypes.add("searchDiscovery");
      if (t === "route" || t === "pillar-manifest" || t === "metadata" || t === "json-ld") sourceTypes.add("currentRoutes");
    }
    for (const t of sourceTypes) {
      if (t !== "currentRoutes") sources[t] = (sources[t] ?? 0) + 1;
    }
  }

  const classificationCounts: Record<string, number> = {};
  for (const entry of historical.urls) {
    classificationCounts[entry.classification] = (classificationCounts[entry.classification] ?? 0) + 1;
  }

  const report = {
    generatedAt: new Date().toISOString(),
    sources,
    totalUniqueUrls: historical.urls.length,
    currentCanonical: classificationCounts["CURRENT_CANONICAL"] ?? 0,
    historicalCanonical: classificationCounts["HISTORICAL_CANONICAL"] ?? 0,
    redirectCandidates: classificationCounts["REDIRECT_CANDIDATE"] ?? 0,
    notFound: classificationCounts["NOT_FOUND"] ?? 0,
    gone: classificationCounts["GONE"] ?? 0,
    duplicates: classificationCounts["DUPLICATE"] ?? 0,
    parameters: classificationCounts["PARAMETER"] ?? 0,
    assets: classificationCounts["ASSET"] ?? 0,
    unknown: classificationCounts["UNKNOWN"] ?? 0,
    byClassification: classificationCounts,
  };

  await writeFile(
    join(ROOT, "data/seo/url-recovery-report.json"),
    JSON.stringify(report, null, 2) + "\n"
  );

  const header = [
    "url", "normalizedUrl", "classification", "canonical", "redirectTarget",
    "status", "indexable", "sitemap", "historicalIndexed", "historicalCanonical",
    "sourceCount", "firstSeen", "lastSeen", "lastVerified", "notes",
  ];

  const canonicalMap = new Map<string, UrlEntry>();
  for (const entry of canonical.urls) {
    canonicalMap.set(entry.path, entry);
  }

  const rows: string[] = [header.join(",")];

  for (const entry of historical.urls) {
    const existing = canonicalMap.get(entry.path);
    const row = [
      csvEscape(entry.url),
      csvEscape(entry.normalizedUrl),
      csvEscape(entry.classification),
      csvEscape(existing ? existing.url : (entry.canonical ?? "")),
      csvEscape(entry.redirect ?? ""),
      csvEscape(entry.status),
      csvEscape(entry.indexable),
      csvEscape(entry.sitemap),
      csvEscape(entry.gscEvidence ? "true" : "false"),
      csvEscape(entry.classification === "CURRENT_CANONICAL" ? "true" : "false"),
      csvEscape((entry.sources || []).length),
      csvEscape(""),
      csvEscape(""),
      csvEscape(entry.lastVerified ?? ""),
      csvEscape(entry.notes ?? ""),
    ];
    rows.push(row.join(","));
  }

  for (const entry of canonical.urls) {
    if (!historical.urls.some((h) => h.path === entry.path)) {
      const row = [
        csvEscape(entry.url),
        csvEscape(entry.url),
        csvEscape(entry.classification),
        csvEscape(entry.canonical ?? ""),
        csvEscape(entry.redirect ?? ""),
        csvEscape(entry.status),
        csvEscape(entry.indexable),
        csvEscape(entry.sitemap),
        csvEscape("false"),
        csvEscape("true"),
        csvEscape((entry.sources || []).length),
        csvEscape(""),
        csvEscape(""),
        csvEscape(entry.lastVerified ?? ""),
        csvEscape(""),
      ];
      rows.push(row.join(","));
    }
  }

  await writeFile(join(ROOT, "data/seo/url-recovery.csv"), rows.join("\n") + "\n");

  console.log(`Reports generated: url-recovery-report.json (${historical.urls.length} historical + ${canonical.urls.length} canonical URLs), url-recovery.csv (${rows.length - 1} rows).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
