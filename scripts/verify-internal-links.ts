#!/usr/bin/env npx tsx
import { generatedPages, resolvesToLivePage } from "./runtime-inventory.js";

const errors: string[] = [];
for (const page of generatedPages.filter((item) => item.indexable)) {
  const uniqueLinks = [...new Set(page.internalLinks)];
  if (uniqueLinks.length < 12) errors.push(`${page.path} has ${uniqueLinks.length} internal links; requires at least 12.`);
  for (const link of uniqueLinks) if (!resolvesToLivePage(link)) errors.push(`${page.path} links to unresolved path ${link}`);
}
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log(`Internal-link verification passed for ${generatedPages.filter((item) => item.indexable).length} generated pages.`);
