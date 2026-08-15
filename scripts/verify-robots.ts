#!/usr/bin/env npx tsx
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const errors: string[] = [];

const content = await readFile(join(process.cwd(), "public/robots.txt"), "utf8");

if (!content.includes("User-agent: *")) {
  errors.push("robots.txt missing 'User-agent: *' directive");
}

if (!content.includes("Allow: /")) {
  errors.push("robots.txt must allow all crawling");
}

if (!content.includes("Sitemap: https://bestaiagent.in/sitemap.xml")) {
  errors.push("robots.txt must declare sitemap: https://bestaiagent.in/sitemap.xml");
}

if (content.includes("www.bestaiagent.in")) {
  errors.push("robots.txt must not reference www.bestaiagent.in as canonical");
}

if (content.includes("http://")) {
  errors.push("robots.txt must not use http:// URLs");
}

if (errors.length > 0) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}

console.log("Robots verification passed: canonical origin, Allow: /, and sitemap declaration verified.");
