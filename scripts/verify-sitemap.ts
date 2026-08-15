#!/usr/bin/env npx tsx
import { normalizePath, canonicalUrl } from "../src/routing/path-normalization";
import { activeRedirectEntries } from "../src/routing/redirect-resolver";
import canonicalData from "../data/seo/canonical-urls.json";

interface CanonicalEntry {
  path: string;
  status: number;
  indexable: boolean;
  sitemap: boolean;
  classification: string;
  canonical: string | null;
  robotsAllowed: boolean;
}

const entries = (canonicalData as { urls: CanonicalEntry[] }).urls;

const redirectSources = new Set(activeRedirectEntries.map((e) => normalizePath(e.from)));

const errors: string[] = [];

const sitemapUrls = entries.filter((e) => e.sitemap && e.indexable && e.status === 200);

const seen = new Set<string>();
for (const entry of sitemapUrls) {
  const path = normalizePath(entry.path);
  const url = canonicalUrl(path);

  if (seen.has(url)) {
    errors.push(`Duplicate URL in sitemap: ${url}`);
  }
  seen.add(url);

  if (redirectSources.has(path)) {
    errors.push(`Redirect source URL included in sitemap: ${url}`);
  }

  if (entry.canonical !== entry.url) {
    errors.push(`Non-self-canonical URL in sitemap: ${url} (canonical=${entry.canonical})`);
  }

  if (!entry.robotsAllowed) {
    errors.push(`Noindex/blocked URL in sitemap: ${url}`);
  }

  if (entry.status !== 200) {
    errors.push(`Non-200 URL in sitemap: ${url} (status ${entry.status})`);
  }

  if (entry.classification !== "CURRENT_CANONICAL") {
    errors.push(`Non-CURRENT_CANONICAL URL in sitemap: ${url} (${entry.classification})`);
  }
}

const nonSitemapIndexable = entries.filter(
  (e) =>
    e.indexable &&
    e.status === 200 &&
    !e.sitemap &&
    !redirectSources.has(e.path) &&
    !e.path.includes("/:")
);
if (nonSitemapIndexable.length > 0) {
  for (const entry of nonSitemapIndexable) {
    errors.push(`Indexable canonical URL missing from sitemap: ${canonicalUrl(normalizePath(entry.path))}`);
  }
}

if (errors.length > 0) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}

console.log(
  `Sitemap verification passed: ${sitemapUrls.length} canonical URLs, 0 duplicates, 0 redirect sources, 0 non-200, 0 noindex, 0 non-canonical.`
);
