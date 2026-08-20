#!/usr/bin/env npx tsx
import { execSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const steps = [
  { name: "routes", command: "npx tsx scripts/verify-routes.ts" },
  { name: "pillars", command: "npm run verify:pillars" },
  { name: "no-legacy-server", command: "npm run verify:no-legacy-server" },
  { name: "canonicals", command: "npx tsx scripts/verify-canonicals.ts" },
  { name: "redirects", command: "npx tsx scripts/verify-redirects.ts" },
  { name: "sitemap", command: "npx tsx scripts/verify-sitemap.ts" },
  { name: "robots", command: "npx tsx scripts/verify-robots.ts" },
  { name: "typecheck", command: "npx tsc --noEmit" },
];

const results: { name: string; pass: boolean }[] = [];

for (const step of steps) {
  try {
    execSync(step.command, { stdio: "inherit", cwd: process.cwd() });
    results.push({ name: step.name, pass: true });
  } catch {
    results.push({ name: step.name, pass: false });
  }
}

const failed = results.filter((r) => !r.pass);

console.log("\nSEO verification summary:");
for (const result of results) {
  console.log(`  ${result.pass ? "PASS" : "FAIL"}  ${result.name}`);
}

if (failed.length > 0) {
  console.error(`\n${failed.length} SEO gate(s) failed.`);
  process.exit(1);
}

console.log("\nAll SEO gates passed.");
