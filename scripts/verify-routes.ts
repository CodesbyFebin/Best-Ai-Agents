import { routeRegistry } from "../src/routing/routeRegistry";

const seen = new Set<string>();
for (const route of routeRegistry) {
  if (seen.has(route.path)) throw new Error(`Duplicate route: ${route.path}`);
  seen.add(route.path);
  if (route.kind === "admin" && (route.indexable || route.sitemap)) {
    throw new Error(`Admin route must remain private: ${route.path}`);
  }
}
console.log(`Route registry passed: ${routeRegistry.length} unique route contracts.`);
