#!/usr/bin/env npx tsx
import { directPageMap, preservedUrls } from "./runtime-inventory.js";

const missing = preservedUrls.filter((url) => !directPageMap.has(url));
if (missing.length > 0) {
  missing.forEach((url) => console.error(`ERROR: required direct page missing: ${url}`));
  process.exit(1);
}
console.log(`Required URL check passed: ${preservedUrls.length} direct pages present.`);
