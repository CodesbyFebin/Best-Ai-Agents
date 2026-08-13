#!/usr/bin/env npx tsx

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { comparisonKey, normalizePath, type MigrationManifest, type MigrationRecord } from "./migrate-from-old.js";

export interface ValidationResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
  checked: number;
}

const getArg = (name: string): string | undefined => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
};

function loadProtected(filePath: string): string[] {
  const parsed = JSON.parse(fs.readFileSync(filePath, "utf8")) as unknown;
  if (!Array.isArray(parsed)) throw new Error("Protected URL file must be a JSON array");
  return parsed.map((value) => normalizePath(typeof value === "string" ? value : String((value as { url?: unknown })?.url ?? "")));
}

export function validateMigration(manifest: MigrationManifest, protectedUrls: string[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const active = [...manifest.accepted, ...manifest.protected];
  const all = [...active, ...manifest.hold, ...manifest.quarantined];
  const activeUrls = new Set<string>();
  const activeCanonicals = new Map<string, string>();
  const publicationPairs = new Map<string, string>();

  if (manifest.counts.total !== all.length) {
    errors.push(`Count mismatch: total=${manifest.counts.total}, records=${all.length}`);
  }
  if (manifest.counts.accepted !== manifest.accepted.length) errors.push("Accepted count does not reconcile");
  if (manifest.counts.protected !== manifest.protected.length) errors.push("Protected count does not reconcile");
  if (manifest.counts.hold !== manifest.hold.length) errors.push("HOLD count does not reconcile");
  if (manifest.counts.quarantined !== manifest.quarantined.length) errors.push("Quarantine count does not reconcile");

  for (const record of active) {
    const url = normalizePath(record.url);
    const canonical = normalizePath(record.canonical);
    if (activeUrls.has(url)) errors.push(`Duplicate active URL: ${url}`);
    activeUrls.add(url);

    const canonicalOwner = activeCanonicals.get(canonical);
    if (canonicalOwner && canonicalOwner !== url) errors.push(`Duplicate active canonical: ${canonical} (${canonicalOwner}, ${url})`);
    else activeCanonicals.set(canonical, url);

    if (record.migrationStatus === "ACCEPTED" && canonical !== url) {
      errors.push(`Accepted URL is not self-canonical: ${url} -> ${canonical}`);
    }

    if (record.publicationEligible) {
      if (record.opportunity.verdict !== "CREATE") errors.push(`Non-CREATE record marked publicationEligible: ${url}`);
      if (record.placeholderLike) errors.push(`Placeholder-like record marked publicationEligible: ${url}`);
      if (record.evidenceCount < 1) errors.push(`Publication-eligible record lacks evidence: ${url}`);

      const pair = comparisonKey(url);
      if (pair) {
        const owner = publicationPairs.get(pair);
        if (owner && owner !== url) errors.push(`Reciprocal comparison pair both publication-eligible: ${owner} and ${url}`);
        else publicationPairs.set(pair, url);
      }
    }
  }

  for (const record of [...manifest.hold, ...manifest.quarantined]) {
    if (record.publicationEligible) errors.push(`${record.migrationStatus} record cannot be publicationEligible: ${record.url}`);
  }

  const migratedProtected = new Set(manifest.protected.map((record) => normalizePath(record.url)));
  for (const protectedUrl of protectedUrls.map(normalizePath)) {
    if (!migratedProtected.has(protectedUrl)) warnings.push(`Protected URL was not present in the supplied source manifest: ${protectedUrl}`);
  }

  const eligibleCount = all.filter((record: MigrationRecord) => record.publicationEligible).length;
  if (eligibleCount !== manifest.counts.publicationEligible) {
    errors.push(`publicationEligible count mismatch: expected ${manifest.counts.publicationEligible}, calculated ${eligibleCount}`);
  }

  return { ok: errors.length === 0, errors, warnings, checked: all.length };
}

export function validateMigrationFile(manifestPath: string, protectedPath: string): ValidationResult {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as MigrationManifest;
  return validateMigration(manifest, loadProtected(protectedPath));
}

function main(): void {
  const manifestPath = getArg("--manifest") ?? "migration-manifest.json";
  const protectedPath = getArg("--protected") ?? "data/migration/protected-urls.json";
  const result = validateMigrationFile(manifestPath, protectedPath);

  console.log(`Checked ${result.checked} migration records`);
  for (const warning of result.warnings) console.warn(`WARN: ${warning}`);
  if (!result.ok) {
    for (const error of result.errors) console.error(`ERROR: ${error}`);
    process.exitCode = 1;
    return;
  }
  console.log("Migration validation passed");
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
