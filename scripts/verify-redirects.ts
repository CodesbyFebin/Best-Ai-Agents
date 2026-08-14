#!/usr/bin/env npx tsx
import { activeRedirectEntries, protectedPaths, resolveRedirect } from "../src/routing/redirect-resolver.js";
import { normalizePath } from "../src/routing/path-normalization.js";
import { directPageMap } from "./runtime-inventory.js";

const errors: string[] = [];
let checked = 0;
for (const entry of activeRedirectEntries) {
  const from = normalizePath(entry.from);
  const to = normalizePath(entry.to);
  const resolution = resolveRedirect(entry.from);
  checked++;
  if (protectedPaths.has(from)) {
    if (resolution) errors.push(`${from} must remain direct while it is in the preserved URL set.`);
    continue;
  }
  if (!resolution || normalizePath(resolution.destination) !== to || resolution.status !== 301) errors.push(`${from} does not resolve as a one-hop 301 to ${to}.`);
  if (resolveRedirect(to)) errors.push(`Redirect chain detected: ${from} -> ${to}.`);
  if (!directPageMap.has(to)) errors.push(`Redirect destination is not a direct live page: ${from} -> ${to}.`);
}
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log(`Redirect verification passed: ${checked} source entries checked with protected-source exceptions.`);
