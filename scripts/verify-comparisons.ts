#!/usr/bin/env npx tsx
import { comparisonKey, reciprocalComparisonPath, resolveRedirect } from "../src/routing/redirect-resolver.js";
import { normalizePath } from "../src/routing/path-normalization.js";
import { indexablePages } from "./runtime-inventory.js";

const errors: string[] = [];
const owners = new Map<string, string>();
for (const page of indexablePages) {
  const path = normalizePath(page.path);
  const key = comparisonKey(path);
  if (!key) continue;
  const prior = owners.get(key);
  if (prior && prior !== path) errors.push(`Two indexable comparison orientations: ${prior}, ${path}`);
  owners.set(key, path);
}
for (const path of owners.values()) {
  const reciprocal = reciprocalComparisonPath(path);
  if (!reciprocal || reciprocal === path) continue;
  const resolution = resolveRedirect(reciprocal);
  if (!resolution || normalizePath(resolution.destination) !== path) errors.push(`Reciprocal mismatch: ${reciprocal} should point to ${path}`);
}
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log(`Comparison verification passed: ${owners.size} canonical pairs.`);
