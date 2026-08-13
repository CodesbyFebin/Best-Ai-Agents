#!/usr/bin/env npx tsx

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { corePages } from "../../../src/runtime/core-pages.js";
import { normalizePath } from "../../../src/routing/path-normalization.js";
import { buildSitemapIndex, buildUrlSet, inferSitemapGroup, SITEMAP_GROUPS } from "../../../packages/sitemap/index.js";
import type { PublishedPage, PublishedRegistry } from "../../../src/runtime/types.js";
import type { MigrationManifest, MigrationRecord } from "../../../scripts/migrate-from-old.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const ORIGIN = "https://bestaiagent.in";
const DEFAULT_MANIFEST = path.join(ROOT, "data/migration/migration-manifest.json");
const VIEWS_ROOT = path.join(ROOT, "packages/database/generated/views");
const SITEMAP_ROOT = path.join(ROOT, "packages/database/generated/sitemaps");
const REPORT_PATH = path.join(ROOT, "packages/database/generated/publish-report.json");

function arg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function asString(value: unknown): string { return typeof value === "string" ? value.trim() : ""; }

function collectText(value: unknown, depth = 0): string[] {
  if (depth > 5 || value == null) return [];
  if (typeof value === "string") return value.trim() ? [value.trim()] : [];
  if (Array.isArray(value)) return value.flatMap((entry) => collectText(entry, depth + 1));
  if (typeof value === "object") {
    const object = value as Record<string, unknown>;
    const preferred = ["text", "content", "body", "answer", "summary", "description", "paragraphs", "sections"];
    return preferred.filter((key) => key in object).flatMap((key) => collectText(object[key], depth + 1));
  }
  return [];
}

function recordText(record: MigrationRecord): string {
  const source = record.source as Record<string, unknown>;
  const metadata = source.metadata && typeof source.metadata === "object" ? source.metadata as Record<string, unknown> : {};
  return [...new Set([...collectText(source.content), ...collectText(source.body), asString(source.description), asString(metadata.description)].filter(Boolean))].join("\n\n").trim();
}

function recordTitle(record: MigrationRecord): string {
  const source = record.source as Record<string, unknown>;
  const metadata = source.metadata && typeof source.metadata === "object" ? source.metadata as Record<string, unknown> : {};
  const fallback = normalizePath(record.url).split("/").filter(Boolean).at(-1)?.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()) || "BestAIAgent.in";
  return asString(source.title) || asString(metadata.title) || fallback;
}

function recordDescription(record: MigrationRecord, text: string): string {
  const source = record.source as Record<string, unknown>;
  const metadata = source.metadata && typeof source.metadata === "object" ? source.metadata as Record<string, unknown> : {};
  const explicit = asString(source.description) || asString(metadata.description);
  if (explicit) return explicit.slice(0, 320);
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.length > 220 ? `${compact.slice(0, 217)}...` : compact;
}

function safeName(urlPath: string): string {
  return normalizePath(urlPath).replace(/^\//, "").replace(/[^a-z0-9._-]+/gi, "__") || "home";
}

function publicationFailure(record: MigrationRecord, text: string): string | null {
  if (!record.publicationEligible) return "NOT_PUBLICATION_ELIGIBLE";
  if (record.opportunity.verdict !== "CREATE") return "NON_CREATE_VERDICT";
  if (normalizePath(record.canonical) !== normalizePath(record.url)) return "NON_SELF_CANONICAL";
  if (record.evidenceCount < 1) return "MISSING_EVIDENCE";
  if (record.placeholderLike) return "PLACEHOLDER_LIKE";
  if (text.replace(/\s+/g, " ").trim().length < 600) return "CONTENT_BELOW_600_CHARS";
  return null;
}

function makePublishedPage(record: MigrationRecord, allCandidatePaths: string[]): PublishedPage {
  const url = normalizePath(record.url);
  const text = recordText(record);
  const title = recordTitle(record);
  const description = recordDescription(record, text);
  return {
    path: url,
    canonicalPath: url,
    title,
    description,
    text,
    type: record.type,
    indexable: true,
    evidenceCount: record.evidenceCount,
    protected: record.protected,
    internalLinks: allCandidatePaths.filter((candidate) => candidate !== url).slice(0, 12),
    sitemapGroup: inferSitemapGroup(url, record.type),
    sourceId: record.sourceId,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: `${ORIGIN}${url}`,
      isPartOf: { "@type": "WebSite", name: "BestAIAgent.in", url: `${ORIGIN}/` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "BestAIAgent.in", item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: title, item: `${ORIGIN}${url}` }
        ]
      }
    }
  };
}

function writeOutputs(pages: PublishedPage[], sourceManifest: string | null, skipped: Array<{ url: string; reason: string }>): void {
  fs.mkdirSync(VIEWS_ROOT, { recursive: true });
  fs.mkdirSync(SITEMAP_ROOT, { recursive: true });
  const registry: PublishedRegistry = { generatedAt: new Date().toISOString(), sourceManifest, pages };
  fs.writeFileSync(path.join(VIEWS_ROOT, "index.json"), `${JSON.stringify(registry, null, 2)}\n`);

  for (const page of pages) {
    const directory = path.join(VIEWS_ROOT, page.sitemapGroup);
    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(path.join(directory, `${safeName(page.path)}.json`), `${JSON.stringify(page, null, 2)}\n`);
  }

  const runtimePages = [...corePages, ...pages].filter((page) => page.indexable);
  fs.writeFileSync(path.join(SITEMAP_ROOT, "sitemap.xml"), buildSitemapIndex(ORIGIN));
  for (const group of SITEMAP_GROUPS) {
    const urls = runtimePages.filter((page) => page.sitemapGroup === group).map((page) => page.path);
    fs.writeFileSync(path.join(SITEMAP_ROOT, `${group}.xml`), buildUrlSet(urls, ORIGIN));
  }
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, `${JSON.stringify({ generatedAt: registry.generatedAt, sourceManifest, published: pages.length, skipped }, null, 2)}\n`);
}

export function generateFromManifest(manifest: MigrationManifest): { pages: PublishedPage[]; skipped: Array<{ url: string; reason: string }> } {
  const records = [...manifest.accepted, ...manifest.protected];
  const prelim = records.map((record) => ({ record, text: recordText(record) }));
  const eligible = prelim.filter(({ record, text }) => publicationFailure(record, text) === null);
  const candidatePaths = [...new Set([...corePages.filter((page) => page.indexable).map((page) => page.path), ...eligible.map(({ record }) => normalizePath(record.url))])];
  const pages = eligible.map(({ record }) => makePublishedPage(record, candidatePaths));
  const skipped = prelim
    .map(({ record, text }) => ({ url: normalizePath(record.url), reason: publicationFailure(record, text) }))
    .filter((entry): entry is { url: string; reason: string } => Boolean(entry.reason));
  return { pages, skipped };
}

function main(): void {
  const manifestPath = path.resolve(arg("--manifest") ?? DEFAULT_MANIFEST);
  if (!fs.existsSync(manifestPath)) {
    if (!process.argv.includes("--allow-missing")) throw new Error(`Migration manifest not found: ${manifestPath}`);
    writeOutputs([], null, []);
    console.log("Content build emitted the core-only runtime because no migration manifest was supplied.");
    return;
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as MigrationManifest;
  const { pages, skipped } = generateFromManifest(manifest);
  writeOutputs(pages, path.relative(ROOT, manifestPath), skipped);
  console.log(`Content build published ${pages.length} evidence-gated pages; skipped ${skipped.length}.`);
}

main();
