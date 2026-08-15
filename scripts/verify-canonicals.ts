#!/usr/bin/env npx tsx
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { normalizePath, canonicalUrl } from "../src/routing/path-normalization";
import canonicalData from "../data/seo/canonical-urls.json";

interface CanonicalEntry {
  url: string;
  path: string;
  classification: string;
  canonical: string | null;
  status: number;
  indexable: boolean;
  sitemap: boolean;
}

const errors: string[] = [];
const warnings: string[] = [];

const entries = (canonicalData as { urls: CanonicalEntry[] }).urls;

const seenUrls = new Set<string>();
const seenCanonicals = new Map<string, string>();

for (const entry of entries) {
  const normalized = canonicalUrl(entry.path);
  if (entry.url !== normalized) {
    errors.push(`URL not normalized: ${entry.url} should be ${normalized}`);
  }

  if (entry.url.startsWith("http://")) {
    errors.push(`Non-HTTPS canonical URL: ${entry.url}`);
  }

  if (!entry.url.startsWith("https://bestaiagent.in")) {
    errors.push(`URL does not use canonical hostname: ${entry.url}`);
  }

  if (entry.url.includes("#")) {
    errors.push(`Canonical URL contains fragment: ${entry.url}`);
  }

  if (entry.url.includes("?")) {
    errors.push(`Canonical URL contains query parameters: ${entry.url}`);
  }

  if (entry.url.endsWith("/") && entry.path !== "/") {
    errors.push(`Canonical URL has trailing slash (non-root): ${entry.url}`);
  }

  if (seenUrls.has(entry.url)) {
    errors.push(`Duplicate canonical URL: ${entry.url}`);
  }
  seenUrls.add(entry.url);

  if (entry.indexable) {
    if (entry.canonical !== entry.url) {
      errors.push(`Canonical mismatch for ${entry.url}: canonical=${entry.canonical}`);
    }

    if (seenCanonicals.has(entry.canonical)) {
      const prior = seenCanonicals.get(entry.canonical)!;
      if (prior !== entry.url) {
        errors.push(`Duplicate canonical: ${entry.canonical} owned by ${prior} and ${entry.url}`);
      }
    } else {
      seenCanonicals.set(entry.canonical, entry.url);
    }
  }

  if (entry.indexable && entry.classification !== "CURRENT_CANONICAL") {
    warnings.push(`Entry is indexable but classification is ${entry.classification}: ${entry.url}`);
  }

  if (!entry.indexable && entry.classification === "CURRENT_CANONICAL") {
    warnings.push(`CURRENT_CANONICAL entry is not indexable: ${entry.url}`);
  }
}

if (errors.length > 0) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}

if (warnings.length > 0) {
  for (const warning of warnings) console.warn(`WARN: ${warning}`);
}

console.log(
  `Canonical verification passed: ${entries.length} URLs, ${seenCanonicals.size} unique canonicals, ${warnings.length} warnings.`
);
