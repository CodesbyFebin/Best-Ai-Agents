#!/usr/bin/env npx tsx
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();

function csvEscape(value: unknown): string {
  const str = value === null || value === undefined ? "" : String(value);
  if (str.includes(",") || str.includes("\"") || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

interface UrlEntry {
  url: string;
  normalizedUrl: string;
  path: string;
  classification: string;
  canonical: string | null;
  status: number;
  indexable: boolean;
  sitemap: boolean;
  gscEvidence?: Record<string, number>;
  notes?: string;
}

async function main(): Promise<void> {
  const historical = JSON.parse(
    await readFile(join(ROOT, "data/seo/historical-url-sources.json"), "utf8")
  ) as { urls: UrlEntry[] };

  const header = ["url", "googleStatus", "localStatus", "canonical", "expectedStatus", "action", "evidence"];
  const rows: string[] = [header.join(",")];

  const actions: Record<string, string> = {
    CURRENT_CANONICAL: "KEEP",
    REDIRECT_CANDIDATE: "REDIRECT",
    GONE: "REMOVE",
    REVIEW: "REVIEW",
    HISTORICAL_CANONICAL: "REVIEW",
    NOT_FOUND: "REMOVE",
    UNKNOWN: "REVIEW",
  };

  for (const entry of historical.urls) {
    const googleStatus = entry.gscEvidence
      ? `${entry.gscEvidence.clicks || 0} clicks, ${entry.gscEvidence.impressions || 0} impressions, pos ${entry.gscEvidence.position || 0}`
      : "unknown";

    let localStatus: string;
    if (entry.classification === "CURRENT_CANONICAL") {
      localStatus = `200, indexable, sitemap`;
    } else if (entry.classification === "REDIRECT_CANDIDATE") {
      localStatus = `301 redirect to ${entry.redirect || entry.canonical || "unknown"}`;
    } else if (entry.classification === "GONE") {
      localStatus = "410 Gone";
    } else {
      localStatus = "no current route";
    }

    const expectedStatus = entry.gscEvidence ? "preserve URL or redirect to equivalent" : "no action";
    const action = actions[entry.classification] || "REVIEW";
    const evidence = (entry.sources || [])
      .map((s) => `${s && typeof s === "object" ? (s as { type: string }).type : "unknown"}`)
      .join("; ");

    const row = [
      csvEscape(entry.url),
      csvEscape(googleStatus),
      csvEscape(localStatus),
      csvEscape(entry.canonical ?? ""),
      csvEscape(expectedStatus),
      csvEscape(action),
      csvEscape(evidence),
    ];
    rows.push(row.join(","));
  }

  await writeFile(
    join(ROOT, "data/seo/search-console-reconciliation.csv"),
    rows.join("\n") + "\n"
  );

  console.log(`Search Console reconciliation: ${rows.length - 1} URLs exported.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
