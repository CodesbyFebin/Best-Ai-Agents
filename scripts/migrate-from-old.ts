#!/usr/bin/env npx tsx

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { evaluatePageOpportunity, type OpportunityResult, type PageCandidate } from "../packages/page-opportunity/engine.js";

type JsonObject = Record<string, unknown>;

export interface MigrationRecord {
  sourceId: string;
  url: string;
  canonical: string;
  type: string;
  protected: boolean;
  evidenceCount: number;
  placeholderLike: boolean;
  opportunity: OpportunityResult;
  migrationStatus: "ACCEPTED" | "PROTECTED" | "HOLD" | "QUARANTINED";
  publicationEligible: boolean;
  source: JsonObject;
}

export interface MigrationManifest {
  version: 1;
  generatedAt: string;
  source: string;
  counts: {
    total: number;
    accepted: number;
    protected: number;
    hold: number;
    quarantined: number;
    publicationEligible: number;
  };
  accepted: MigrationRecord[];
  protected: MigrationRecord[];
  hold: MigrationRecord[];
  quarantined: MigrationRecord[];
}

const toObject = (value: unknown): JsonObject =>
  value && typeof value === "object" && !Array.isArray(value) ? (value as JsonObject) : {};

const asString = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

export function normalizePath(input: string): string {
  if (!input) return "/";
  let pathname = input.trim();
  try {
    if (/^https?:\/\//i.test(pathname)) pathname = new URL(pathname).pathname;
  } catch {
    // Keep the raw path and let validation classify it later.
  }
  pathname = pathname.split("?")[0]!.split("#")[0]!;
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  pathname = pathname.replace(/\/{2,}/g, "/");
  if (pathname.length > 1) pathname = pathname.replace(/\/+$/, "");
  return pathname || "/";
}

export function comparisonKey(urlPath: string): string | null {
  const last = normalizePath(urlPath).split("/").filter(Boolean).at(-1) ?? "";
  const match = last.match(/^(.+)-vs-(.+)$/i);
  if (!match) return null;
  return [match[1]!.toLowerCase(), match[2]!.toLowerCase()].sort().join("::");
}

function extractEntries(parsed: unknown): JsonObject[] {
  if (Array.isArray(parsed)) return parsed.map(toObject);
  const root = toObject(parsed);
  for (const key of ["manifests", "pages", "entries", "items", "data"]) {
    const value = root[key];
    if (Array.isArray(value)) return value.map(toObject);
  }
  throw new Error("Unsupported manifest shape: expected an array or an object containing manifests/pages/entries/items/data");
}

function getMetadata(raw: JsonObject): JsonObject {
  return toObject(raw.metadata);
}

function extractUrl(raw: JsonObject): string {
  const direct = [raw.canonicalUrl, raw.canonical, raw.url, raw.path].map(asString).find(Boolean);
  if (direct) return normalizePath(direct);

  const slug = asString(raw.slug);
  const type = inferType(raw, "/");
  if (!slug) return "/";
  if (type === "agent") return normalizePath(`/agents/${slug}`);
  if (type === "category") return normalizePath(`/categories/${slug}`);
  if (type === "comparison") return normalizePath(`/compare/${slug}`);
  if (type === "research") return normalizePath(`/research/${slug}`);
  return normalizePath(`/${slug}`);
}

function inferType(raw: JsonObject, urlPath: string): string {
  const explicit = [raw.entityType, raw.type, raw.pageType, raw.contentType].map(asString).find(Boolean)?.toLowerCase();
  if (explicit) {
    if (explicit.includes("compar")) return "comparison";
    if (explicit.includes("categor")) return "category";
    if (explicit.includes("research") || explicit.includes("benchmark")) return "research";
    if (explicit.includes("agent") || explicit.includes("product") || explicit.includes("tool")) return "agent";
    if (explicit.includes("pricing")) return "pricing";
    return explicit;
  }
  const p = normalizePath(urlPath);
  if (p.startsWith("/agents/") || p.startsWith("/tools/")) return "agent";
  if (p.startsWith("/categories/")) return "category";
  if (p.startsWith("/compare/") || /\/[^/]+-vs-[^/]+$/.test(p)) return "comparison";
  if (p.startsWith("/research/")) return "research";
  if (/pricing/.test(p)) return "pricing";
  return "document";
}

function extractEvidenceCount(raw: JsonObject): number {
  const metadata = getMetadata(raw);
  const candidates = [raw.evidenceRefs, raw.evidenceClaimIds, raw.evidence, metadata.evidenceRefs, metadata.evidenceClaimIds];
  let count = 0;
  for (const value of candidates) {
    if (Array.isArray(value)) count = Math.max(count, value.length);
    else if (value && typeof value === "object") count = Math.max(count, Object.keys(value as object).length);
  }
  return count;
}

function extractText(raw: JsonObject): string {
  const metadata = getMetadata(raw);
  const values = [raw.title, raw.description, raw.content, raw.body, metadata.title, metadata.description]
    .map(asString)
    .filter(Boolean);
  return values.join("\n");
}

export function isPlaceholderLike(raw: JsonObject): boolean {
  const text = extractText(raw).toLowerCase();
  if (!text) return true;
  const patterns = [
    /generated content for .* focusing on/,
    /lorem ipsum/,
    /coming soon/,
    /placeholder/,
    /todo\b/,
    /sample content/,
    /content goes here/
  ];
  return patterns.some((pattern) => pattern.test(text));
}

function freshnessScore(raw: JsonObject): number {
  const metadata = getMetadata(raw);
  const value = [raw.updatedAt, raw.lastVerified, raw.dateVerified, metadata.updatedAt, metadata.lastVerified]
    .map(asString)
    .find(Boolean);
  if (!value) return 50;
  const time = Date.parse(value);
  if (!Number.isFinite(time)) return 50;
  const ageDays = Math.max(0, (Date.now() - time) / 86_400_000);
  if (ageDays <= 180) return 95;
  if (ageDays <= 365) return 85;
  if (ageDays <= 730) return 65;
  return 40;
}

function uniquenessScore(raw: JsonObject, urlPath: string): number {
  if (isPlaceholderLike(raw)) return 20;
  const text = extractText(raw);
  if (/(?:^|\/)\d+(?:\/|$)/.test(urlPath) || /(?:-|_)\d+$/.test(urlPath)) return 0;
  if (text.length >= 1200) return 95;
  if (text.length >= 500) return 85;
  if (text.length >= 180) return 70;
  return 55;
}

function commercialScore(type: string, urlPath: string): number {
  if (type === "pricing" || type === "comparison") return 90;
  if (/alternatives|best-|pricing|compare|vs-|reviews?/.test(urlPath)) return 85;
  if (type === "agent") return 70;
  return 55;
}

export function candidateFromManifest(raw: JsonObject): PageCandidate {
  const url = extractUrl(raw);
  const type = inferType(raw, url);
  const evidenceCount = extractEvidenceCount(raw);
  const hasEntityRef = Boolean(asString(raw.entityId) || asString(raw.graphNodeId));
  const metadata = getMetadata(raw);
  const quality = toObject(metadata.quality);
  const qualityPassed = quality.passed === true;

  return {
    slug: url,
    entityRelevance: hasEntityRef ? 92 : asString(raw.slug) ? 72 : 35,
    relationshipDepth: type === "comparison" ? (hasEntityRef ? 85 : 62) : hasEntityRef ? 75 : 55,
    evidenceAvailability: evidenceCount > 2 ? 95 : evidenceCount > 0 ? 80 : qualityPassed ? 45 : 20,
    uniqueness: uniquenessScore(raw, url),
    commercialValue: commercialScore(type, url),
    freshness: freshnessScore(raw)
  };
}

function sourceSubset(raw: JsonObject): JsonObject {
  const metadata = getMetadata(raw);
  const keep = [
    "id", "slug", "entityId", "entityType", "graphNodeId", "contentType", "canonicalUrl",
    "canonical", "url", "path", "title", "description", "content", "body", "evidenceRefs",
    "evidenceClaimIds", "updatedAt", "lastVerified", "status"
  ];
  const out: JsonObject = {};
  for (const key of keep) if (raw[key] !== undefined) out[key] = raw[key];
  if (Object.keys(metadata).length) out.metadata = metadata;
  return out;
}

export function migrateEntries(entries: JsonObject[], protectedUrls: string[]): Omit<MigrationManifest, "generatedAt" | "source"> {
  const protectedSet = new Set(protectedUrls.map(normalizePath));
  const accepted: MigrationRecord[] = [];
  const protectedRecords: MigrationRecord[] = [];
  const hold: MigrationRecord[] = [];
  const quarantined: MigrationRecord[] = [];

  for (const raw of entries) {
    const url = extractUrl(raw);
    const canonical = normalizePath(asString(raw.canonicalUrl) || asString(raw.canonical) || url);
    const type = inferType(raw, url);
    const evidenceCount = extractEvidenceCount(raw);
    const placeholderLike = isPlaceholderLike(raw);
    const candidate = candidateFromManifest(raw);
    const opportunity = evaluatePageOpportunity(candidate);
    const isProtected = protectedSet.has(url) || protectedSet.has(canonical);
    const sourceId = asString(raw.id) || asString(raw.slug) || url;

    let migrationStatus: MigrationRecord["migrationStatus"];
    let publicationEligible = false;
    if (isProtected) {
      migrationStatus = "PROTECTED";
      // Protection preserves the URL in the migration inventory, but never bypasses evidence/quality gates.
      publicationEligible = opportunity.verdict === "CREATE" && evidenceCount > 0 && !placeholderLike;
    } else if (opportunity.verdict === "CREATE") {
      migrationStatus = "ACCEPTED";
      publicationEligible = evidenceCount > 0 && !placeholderLike;
    } else if (opportunity.verdict === "HOLD") {
      migrationStatus = "HOLD";
    } else {
      migrationStatus = "QUARANTINED";
    }

    const record: MigrationRecord = {
      sourceId,
      url,
      canonical,
      type,
      protected: isProtected,
      evidenceCount,
      placeholderLike,
      opportunity,
      migrationStatus,
      publicationEligible,
      source: sourceSubset(raw)
    };

    if (migrationStatus === "ACCEPTED") accepted.push(record);
    else if (migrationStatus === "PROTECTED") protectedRecords.push(record);
    else if (migrationStatus === "HOLD") hold.push(record);
    else quarantined.push(record);
  }

  const publicationEligible = [...accepted, ...protectedRecords].filter((r) => r.publicationEligible).length;
  return {
    version: 1,
    counts: {
      total: entries.length,
      accepted: accepted.length,
      protected: protectedRecords.length,
      hold: hold.length,
      quarantined: quarantined.length,
      publicationEligible
    },
    accepted,
    protected: protectedRecords,
    hold,
    quarantined
  };
}

function getArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function readProtected(filePath: string): string[] {
  const parsed = JSON.parse(fs.readFileSync(filePath, "utf8")) as unknown;
  if (!Array.isArray(parsed)) throw new Error("Protected URL file must be a JSON array");
  return parsed.map((item) => typeof item === "string" ? item : asString(toObject(item).url)).filter(Boolean);
}

export function runMigration(sourcePath: string, outputPath: string, protectedPath: string): MigrationManifest {
  const parsed = JSON.parse(fs.readFileSync(sourcePath, "utf8")) as unknown;
  const entries = extractEntries(parsed);
  const protectedUrls = readProtected(protectedPath);
  const result = migrateEntries(entries, protectedUrls);
  const manifest: MigrationManifest = {
    ...result,
    generatedAt: new Date().toISOString(),
    source: path.resolve(sourcePath)
  };
  fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
  return manifest;
}

function main(): void {
  const source = getArg("--source");
  if (!source) throw new Error("Usage: npm run migrate -- --source <manifest-data.json> [--output migration-manifest.json] [--protected data/migration/protected-urls.json]");
  const output = getArg("--output") ?? "migration-manifest.json";
  const protectedFile = getArg("--protected") ?? "data/migration/protected-urls.json";
  const result = runMigration(source, output, protectedFile);
  console.log(JSON.stringify(result.counts, null, 2));
  console.log(`Migration manifest written to ${path.resolve(output)}`);
}

const invokedAsScript = process.argv[1] ? import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href : false;
if (invokedAsScript) {
  try {
    main();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
