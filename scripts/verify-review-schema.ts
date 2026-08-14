#!/usr/bin/env npx tsx
import { indexablePages } from "./runtime-inventory.js";

const errors: string[] = [];

function scan(value: unknown, pagePath: string, parentType = "", parentKey = ""): void {
  if (Array.isArray(value)) {
    for (const item of value) scan(item, pagePath, parentType, parentKey);
    return;
  }
  if (!value || typeof value !== "object") return;
  const object = value as Record<string, unknown>;
  const type = typeof object["@type"] === "string" ? String(object["@type"]) : "";

  if (type === "Review") {
    const author = object.author;
    const authorName = typeof author === "string"
      ? author.trim()
      : author && typeof author === "object"
        ? String((author as Record<string, unknown>).name ?? "").trim()
        : "";
    if (!authorName) errors.push(`${pagePath}: Review schema is missing author.`);

    const nestedInSoftwareApplication = parentType === "SoftwareApplication" && (parentKey === "review" || parentKey === "reviews");
    if (nestedInSoftwareApplication && object.itemReviewed !== undefined) {
      errors.push(`${pagePath}: nested SoftwareApplication Review must omit itemReviewed.`);
    }
    if (!nestedInSoftwareApplication && object.itemReviewed === undefined) {
      errors.push(`${pagePath}: standalone Review must provide itemReviewed.`);
    }
  }

  for (const [key, child] of Object.entries(object)) scan(child, pagePath, type, key);
}

for (const page of indexablePages) scan(page.schema, page.path);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log(`Review-schema verification passed across ${indexablePages.length} indexable pages.`);
