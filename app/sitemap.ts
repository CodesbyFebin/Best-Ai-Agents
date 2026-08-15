import type { MetadataRoute } from "next";
import { catalog, providers } from "@/src/catalog/catalog";
import { isEntityIndexable } from "@/src/catalog/verification";
import { routeRegistry } from "@/src/routing/routeRegistry";
const base = "https://bestaiagent.in";

const staticRoutes = routeRegistry
  .filter((r) => r.indexable && r.sitemap)
  .map((r) => r.path);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = staticRoutes.map((path) => ({ url: base + path, lastModified: now }));
  const entities = catalog
    .filter(isEntityIndexable)
    .map((e) => ({
      url: `${base}/${"modelType" in e ? "models" : "agents"}/${e.slug}`,
      lastModified: new Date(e.lastModified),
    }));
  const providerRoutes = providers
    .filter((p) => p.verificationStatus === "verified")
    .map((p) => ({ url: `${base}/providers/${p.slug}`, lastModified: new Date(p.updatedAt) }));
  return [...routes, ...entities, ...providerRoutes];
}
