#!/usr/bin/env npx tsx
import { generatedPages, isPlaceholderText } from "./runtime-inventory.js";

const errors: string[] = [];
for (const page of generatedPages.filter((item) => item.indexable)) {
  const compact = page.text.replace(/\s+/g, " ").trim();
  if (compact.length < 600) errors.push(`${page.path} has only ${compact.length} content characters.`);
  if (isPlaceholderText(compact)) errors.push(`${page.path} contains placeholder-like text.`);
  if (page.title.trim().length < 8) errors.push(`${page.path} has an insufficient title.`);
  if (page.description.trim().length < 40) errors.push(`${page.path} has an insufficient description.`);
  if (page.evidenceCount < 1) errors.push(`${page.path} has no evidence references.`);
}
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log(`Soft-404 verification passed for ${generatedPages.filter((item) => item.indexable).length} generated pages.`);
