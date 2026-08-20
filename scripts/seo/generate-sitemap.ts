#!/usr/bin/env npx tsx
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const ORIGIN = "https://bestaiagent.in";

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function normalizePath(input: string): string {
  if (!input) return "/";
  let value = input.trim();
  try {
    if (/^https?:\/\//i.test(value)) value = new URL(value).pathname;
  } catch {}
  value = value.split("?")[0]!.split("#")[0]!;
  if (!value.startsWith("/")) value = `/${value}`;
  value = value.replace(/\/{2,}/g, "/");
  if (value.length > 1) value = value.replace(/\/+$/, "");
  return value || "/";
}

interface CanonicalEntry {
  url: string;
  path: string;
  classification: string;
  canonical: string | null;
  status: number;
  indexable: boolean;
  sitemap: boolean;
}

async function main(): Promise<void> {
  const canonicalData = JSON.parse(
    await readFile(join(ROOT, "data/seo/canonical-urls.json"), "utf8")
  ) as { urls: CanonicalEntry[] };

  const indexablePaths = canonicalData.urls
    .filter((e) => e.indexable && e.status === 200 && e.sitemap && e.canonical === e.url)
    .map((e) => normalizePath(e.path));

  const unique = [...new Set(indexablePaths)].sort();

  const rows = unique.map(
    (path) =>
      `  <url><loc>${xmlEscape(ORIGIN + (path === "/" ? "/" : path))}</loc></url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows.join("\n")}\n</urlset>\n`;

  await mkdir(join(ROOT, "data/seo"), { recursive: true });
  await writeFile(join(ROOT, "data/seo/sitemap.xml"), xml);

  for (const path of unique) {
    const url = `${ORIGIN}${path === "/" ? "/" : path}`;
    const matching = canonicalData.urls.find((e) => normalizePath(e.path) === path);
    if (!matching) {
      throw new Error(`Sitemap entry without canonical DB backing: ${url}`);
    }
    if (!matching.canonical || matching.canonical !== url) {
      throw new Error(`Canonical mismatch for sitemap URL: ${url}`);
    }
    if (matching.classification !== "CURRENT_CANONICAL") {
      throw new Error(`Non-canonical URL in sitemap: ${url} (${matching.classification})`);
    }
  }

  if (unique.length !== new Set(unique).size) {
    throw new Error("Sitemap contains duplicate URLs");
  }

  console.log(
    `Generate sitemap: ${unique.length} canonical URLs written to data/seo/sitemap.xml`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
