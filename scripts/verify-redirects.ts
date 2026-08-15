#!/usr/bin/env npx tsx
import { activeRedirectEntries, quarantinedRedirectEntries } from "../src/routing/redirect-resolver";
import { normalizePath } from "../src/routing/path-normalization";
import canonicalData from "../data/seo/canonical-urls.json";

interface CanonicalEntry {
  url: string;
  path: string;
  classification: string;
  redirect: string | null;
  status: number;
}

const entries = (canonicalData as { urls: CanonicalEntry[] }).urls;
const livePaths = new Set(entries.filter((e) => e.status === 200).map((e) => normalizePath(e.path)));

const errors: string[] = [];
let checked = 0;

for (const entry of activeRedirectEntries) {
  const from = normalizePath(entry.from);
  const to = normalizePath(entry.to);
  checked++;

  if (!livePaths.has(to)) {
    errors.push(`Active redirect destination is not a live canonical page: ${entry.from} -> ${to}`);
  }

  if (livePaths.has(from) && from !== to) {
    errors.push(`Active redirect source is itself a live canonical page: ${entry.from}`);
  }

  if (normalizePath(entry.to) === normalizePath(entry.from)) {
    errors.push(`Redirect target equals source: ${entry.from}`);
  }
}

if (errors.length > 0) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}

console.log(
  `Redirect verification passed: ${checked} active redirects checked, ${quarantinedRedirectEntries.length} quarantined.`
);
