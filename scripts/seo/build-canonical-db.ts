#!/usr/bin/env npx tsx
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { routeRegistry } from "../../src/routing/routeRegistry";
import { normalizePath, canonicalUrl } from "../../src/routing/path-normalization";

const ROOT = process.cwd();
const ORIGIN = "https://bestaiagent.in";

interface RouteInfo {
  path: string;
  kind: string;
  indexable: boolean;
  sitemap: boolean;
  source: string;
}

interface HistoricalRecord {
  historicalUrl: string;
  canonicalAtTime?: string;
  currentClassification?: string;
  replacementUrl?: string | null;
  gscEvidence?: Record<string, number>;
}

const knownRoutes: RouteInfo[] = routeRegistry.map((r) => ({
  path: r.path,
  kind: r.kind,
  indexable: r.indexable,
  sitemap: r.sitemap,
  source: "src/routing/routeRegistry.ts",
}));

async function main(): Promise<void> {
  const canonicalUrls = knownRoutes
    .filter((r) => r.indexable && r.sitemap)
    .map((r) => ({
      url: canonicalUrl(r.path),
      path: r.path,
      classification: "CURRENT_CANONICAL" as const,
      canonical: canonicalUrl(r.path),
      sources: [
        { type: "route", file: r.source },
        { type: "sitemap", file: "app/sitemap.ts" },
      ],
      currentEvidence: [
        { type: "page", source: r.source },
        { type: "metadata", canonical: canonicalUrl(r.path) },
        { type: "sitemap", file: "app/sitemap.ts" },
      ],
      redirect: null,
      status: 200,
      indexable: r.indexable,
      sitemap: r.sitemap,
      robotsAllowed: true,
      lastVerified: new Date().toISOString(),
      notes: "",
    }));

  const nonIndexable = knownRoutes
    .filter((r) => !r.indexable || !r.sitemap)
    .map((r) => ({
      url: canonicalUrl(r.path),
      path: r.path,
      classification: r.indexable ? ("CURRENT_CANONICAL" as const) : ("NOT_INDEXABLE" as const),
      canonical: r.indexable ? canonicalUrl(r.path) : null,
      sources: [{ type: "route", file: r.source }],
      currentEvidence: [{ type: "page", source: r.source }],
      redirect: null,
      status: r.kind === "admin" ? 404 : 200,
      indexable: r.indexable,
      sitemap: r.sitemap,
      robotsAllowed: true,
      lastVerified: new Date().toISOString(),
      notes: "",
    }));

  const currentPaths = new Set(knownRoutes.map((r) => normalizePath(r.path)));
  const historicalExtra: unknown[] = [];

  try {
    const raw = await readFile(join(ROOT, "data/seo/historical-canonical-urls.json"), "utf8");
    const historical = JSON.parse(raw) as { urls: HistoricalRecord[] };
    for (const rec of historical.urls) {
      const path = normalizePath(rec.historicalUrl);
      if (currentPaths.has(path)) continue;
      if (rec.currentClassification === "CURRENT_CANONICAL") continue;
      const classification = rec.currentClassification ?? "UNKNOWN";
      const replacement = rec.replacementUrl ? normalizePath(rec.replacementUrl) : null;
      const status = classification === "REDIRECT_CANDIDATE" ? 301 : classification === "GONE" ? 410 : 404;
      historicalExtra.push({
        url: canonicalUrl(path),
        path,
        classification,
        canonical: classification === "REDIRECT_CANDIDATE" && replacement ? canonicalUrl(replacement) : null,
        sources: [
          { type: "historical-db", file: "data/seo/historical-canonical-urls.json" },
          ...(rec.gscEvidence ? [{ type: "gsc" }] : []),
        ],
        currentEvidence: [],
        redirect: replacement ? canonicalUrl(replacement) : null,
        status,
        indexable: false,
        sitemap: false,
        robotsAllowed: true,
        lastVerified: new Date().toISOString(),
        notes: classification === "GONE" ? "Historical URL without current equivalent route. Returns 410 Gone; no fabricated replacement content." : "",
      });
    }
  } catch {
    // No historical database yet; canonical DB stays current-routes only.
  }

  const allEntries = [...canonicalUrls, ...nonIndexable, ...historicalExtra];

  await mkdir(join(ROOT, "data/seo"), { recursive: true });

  const output = {
    generatedAt: new Date().toISOString(),
    canonicalOrigin: ORIGIN,
    policy: {
      protocol: "https",
      hostname: "bestaiagent.in",
      noWww: true,
      trailingSlash: false,
      noTrackingParams: true,
      noFragment: true,
      noDuplicateSlashes: true,
    },
    urls: allEntries,
    total: allEntries.length,
    indexable: allEntries.filter((e: { indexable: boolean }) => e.indexable).length,
    sitemapCount: allEntries.filter((e: { sitemap: boolean }) => e.sitemap).length,
  };

  await writeFile(join(ROOT, "data/seo/canonical-urls.json"), JSON.stringify(output, null, 2) + "\n");

  const routesOutput = {
    generatedAt: new Date().toISOString(),
    source: "src/routing/routeRegistry.ts (single source of truth) + data/seo/historical-canonical-urls.json",
    canonicalOrigin: ORIGIN,
    preferredProtocol: "https",
    preferredHostname: "bestaiagent.in",
    wwwRedirect: true,
    httpRedirect: true,
    trailingSlashPolicy: "no-trailing-slash",
    routes: knownRoutes,
    indexableCount: knownRoutes.filter((r) => r.indexable).length,
    sitemapCount: knownRoutes.filter((r) => r.sitemap).length,
    historicalMerged: historicalExtra.length,
    notes:
      "Catalog entities are currently unpublished (no entities pass isEntityIndexable). Dynamic routes will be populated once catalog ingestion runs.",
  };

  await writeFile(join(ROOT, "data/seo/current-routes.json"), JSON.stringify(routesOutput, null, 2) + "\n");

  console.log(
    `Build canonical DB: ${allEntries.length} URLs (${canonicalUrls.length} indexable canonical, ${historicalExtra.length} historical merged), ${knownRoutes.filter((r) => r.sitemap).length} in sitemap.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
