#!/usr/bin/env npx tsx
import { indexablePages } from "./runtime-inventory.js";

const errors: string[] = [];
function scan(value: unknown, pagePath: string): void {
  if (Array.isArray(value)) { value.forEach((item) => scan(item, pagePath)); return; }
  if (!value || typeof value !== "object") return;
  const object = value as Record<string, unknown>;
  if (object["@type"] === "Review" && !object.author) errors.push(`${pagePath}: Review schema missing author.`);
  Object.values(object).forEach((item) => scan(item, pagePath));
}
indexablePages.forEach((page) => scan(page.schema, page.path));
if (errors.length) { errors.forEach((error) => console.error(`ERROR: ${error}`)); process.exit(1); }
console.log(`Structured-data review check passed across ${indexablePages.length} pages.`);
