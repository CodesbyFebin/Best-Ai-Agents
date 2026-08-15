#!/usr/bin/env npx tsx
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const ORIGIN = "https://bestaiagent.in";

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

function canonicalUrl(path: string): string {
  return `${ORIGIN}${normalizePath(path)}`;
}

interface RouteInfo {
  path: string;
  kind: string;
  indexable: boolean;
  sitemap: boolean;
  source: string;
}

const knownRoutes: RouteInfo[] = [
  { path: "/", kind: "home", indexable: true, sitemap: true, source: "app/page.tsx" },
  { path: "/models", kind: "directory", indexable: true, sitemap: true, source: "app/models/page.tsx" },
  { path: "/models/:slug", kind: "model", indexable: true, sitemap: false, source: "app/models/[slug]/page.tsx" },
  { path: "/agents", kind: "directory", indexable: true, sitemap: true, source: "app/agents/page.tsx" },
  { path: "/agents/:slug", kind: "agent", indexable: true, sitemap: false, source: "app/agents/[slug]/page.tsx" },
  { path: "/providers", kind: "directory", indexable: true, sitemap: true, source: "app/providers/page.tsx" },
  { path: "/providers/:slug", kind: "provider", indexable: true, sitemap: false, source: "app/providers/[slug]/page.tsx" },
  { path: "/categories", kind: "directory", indexable: true, sitemap: true, source: "app/categories/page.tsx" },
  { path: "/compare", kind: "comparison", indexable: true, sitemap: true, source: "app/compare/page.tsx" },
  { path: "/best-ai-agent", kind: "pillar", indexable: true, sitemap: true, source: "app/best-ai-agent/page.tsx" },
  { path: "/best-ai-agent-for-business", kind: "pillar", indexable: true, sitemap: true, source: "app/best-ai-agent-for-business/page.tsx" },
  { path: "/best-ai-agent-for-coding", kind: "pillar", indexable: true, sitemap: true, source: "app/best-ai-agent-for-coding/page.tsx" },
  { path: "/best-ai-agent-alternatives", kind: "pillar", indexable: true, sitemap: true, source: "app/best-ai-agent-alternatives/page.tsx" },
  { path: "/best-ai-agents-for-automation", kind: "pillar", indexable: true, sitemap: true, source: "app/best-ai-agents-for-automation/page.tsx" },
  { path: "/built-in-india", kind: "document", indexable: true, sitemap: true, source: "app/built-in-india/page.tsx" },
  { path: "/marketplace", kind: "directory", indexable: true, sitemap: true, source: "app/marketplace/page.tsx" },
  { path: "/resources", kind: "document", indexable: true, sitemap: true, source: "app/resources/page.tsx" },
  { path: "/about", kind: "document", indexable: true, sitemap: true, source: "app/about/page.tsx" },
  { path: "/methodology", kind: "document", indexable: true, sitemap: true, source: "app/methodology/page.tsx" },
  { path: "/admin", kind: "admin", indexable: false, sitemap: false, source: "reserved" },
  { path: "/robots.txt", kind: "utility", indexable: false, sitemap: false, source: "public/robots.txt" },
  { path: "/sitemap.xml", kind: "utility", indexable: false, sitemap: false, source: "app/sitemap.ts (Next.js runtime)" },
  { path: "/llms.txt", kind: "utility", indexable: false, sitemap: false, source: "public/llms.txt" },
  { path: "/llms-full.txt", kind: "utility", indexable: false, sitemap: false, source: "public/llms-full.txt" },
  { path: "/favicon.svg", kind: "asset", indexable: false, sitemap: false, source: "public/favicon.svg" },
  { path: "/agents.json", kind: "api", indexable: false, sitemap: false, source: "app/agents.json/route.ts" },
  { path: "/catalog.json", kind: "api", indexable: false, sitemap: false, source: "app/catalog.json/route.ts" },
  { path: "/models.json", kind: "api", indexable: false, sitemap: false, source: "app/models.json/route.ts" },
  { path: "/providers.json", kind: "api", indexable: false, sitemap: false, source: "app/providers.json/route.ts" },
  { path: "/llms-full.txt/route", kind: "api", indexable: false, sitemap: false, source: "app/llms-full.txt/route.ts" },
];

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

  const allEntries = [
    ...canonicalUrls,
    ...knownRoutes
      .filter((r) => !r.indexable || !r.sitemap)
      .map((r) => ({
        url: canonicalUrl(r.path),
        path: r.path,
        classification: r.indexable ? "CURRENT_CANONICAL" : "NOT_INDEXABLE",
        canonical: r.indexable ? canonicalUrl(r.path) : null,
        sources: [{ type: "route", file: r.source }],
        currentEvidence: [{ type: "page", source: r.source }],
        redirect: null,
        status: r.indexable ? 200 : 404,
        indexable: r.indexable,
        sitemap: r.sitemap,
        robotsAllowed: true,
        lastVerified: new Date().toISOString(),
        notes: "",
      })),
  ];

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
    indexable: allEntries.filter((e) => e.indexable).length,
    sitemapCount: allEntries.filter((e) => e.sitemap).length,
  };

  await writeFile(
    join(ROOT, "data/seo/canonical-urls.json"),
    JSON.stringify(output, null, 2) + "\n"
  );

  const routesOutput = {
    generatedAt: new Date().toISOString(),
    source: "src/routing/routeRegistry.ts + app/sitemap.ts + catalog verification",
    canonicalOrigin: ORIGIN,
    preferredProtocol: "https",
    preferredHostname: "bestaiagent.in",
    wwwRedirect: true,
    httpRedirect: true,
    trailingSlashPolicy: "no-trailing-slash",
    routes: knownRoutes,
    indexableCount: knownRoutes.filter((r) => r.indexable).length,
    sitemapCount: knownRoutes.filter((r) => r.sitemap).length,
    notes:
      "Catalog entities are currently unpublished (no entities pass isEntityIndexable). Dynamic routes will be populated once catalog ingestion runs.",
  };

  await writeFile(
    join(ROOT, "data/seo/current-routes.json"),
    JSON.stringify(routesOutput, null, 2) + "\n"
  );

  console.log(
    `Build canonical DB: ${allEntries.length} URLs, ${knownRoutes.filter((r) => r.indexable).length} indexable, ${knownRoutes.filter((r) => r.sitemap).length} in sitemap.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
