#!/usr/bin/env npx tsx
import { canonicalUrl, normalizePath } from "../src/routing/path-normalization.js";
import { indexablePages } from "./runtime-inventory.js";

const errors: string[] = [];
const owners = new Map<string, string>();
for (const page of indexablePages) {
  const path = normalizePath(page.path);
  const canonical = normalizePath(page.canonicalPath);
  if (path !== canonical) errors.push(`Non-self-canonical page: ${path} -> ${canonical}`);
  const absolute = canonicalUrl(canonical);
  const prior = owners.get(absolute);
  if (prior && prior !== path) errors.push(`Duplicate canonical ${absolute}: ${prior}, ${path}`);
  owners.set(absolute, path);
}
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log(`Canonical verification passed: ${indexablePages.length} indexable pages, ${owners.size} unique canonicals.`);
