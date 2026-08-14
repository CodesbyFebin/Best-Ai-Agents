#!/usr/bin/env npx tsx
import { buildSitemapIndex, buildUrlSet, SITEMAP_GROUPS } from "../packages/sitemap/index.js";
import { indexablePages } from "./runtime-inventory.js";

const errors: string[] = [];
const indexXml = buildSitemapIndex();
for (const group of SITEMAP_GROUPS) {
  if (!indexXml.includes(`/sitemaps/${group}.xml`)) errors.push(`Missing sitemap child: ${group}.xml`);
  const paths = indexablePages.filter((page) => page.sitemapGroup === group).map((page) => page.path);
  const xml = buildUrlSet(paths);
  for (const path of new Set(paths)) {
    const url = `https://bestaiagent.in${path === "/" ? "/" : path}`;
    if (!xml.includes(`<loc>${url}</loc>`)) errors.push(`${group}.xml missing ${path}`);
  }
  if ((xml.match(/<url>/g) ?? []).length !== new Set(paths).size) errors.push(`${group}.xml URL count mismatch.`);
}
if ((indexXml.match(/<sitemap>/g) ?? []).length !== 8) errors.push("Sitemap index child count is not eight.");
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log(`Sitemap verification passed for ${indexablePages.length} indexable URLs.`);
