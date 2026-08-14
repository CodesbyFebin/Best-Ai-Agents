export interface RouteRecord {
  path: string;
  kind: "home" | "directory" | "agent" | "category" | "comparison" | "research" | "document" | "admin";
  indexable: boolean;
  sitemap: boolean;
}

export const routeRegistry: RouteRecord[] = [
  { path: "/", kind: "home", indexable: true, sitemap: true },
  { path: "/agents", kind: "directory", indexable: true, sitemap: true },
  { path: "/agents/:slug", kind: "agent", indexable: true, sitemap: false },
  { path: "/categories", kind: "directory", indexable: true, sitemap: true },
  { path: "/categories/:slug", kind: "category", indexable: true, sitemap: false },
  { path: "/compare", kind: "directory", indexable: true, sitemap: true },
  { path: "/compare/:pair", kind: "comparison", indexable: true, sitemap: false },
  { path: "/research", kind: "research", indexable: true, sitemap: true },
  { path: "/research/:slug", kind: "research", indexable: true, sitemap: false },
  { path: "/pricing", kind: "document", indexable: true, sitemap: true },
  { path: "/mcp-servers", kind: "directory", indexable: true, sitemap: true },
  { path: "/mcp-directory", kind: "directory", indexable: true, sitemap: true },
  { path: "/about", kind: "document", indexable: true, sitemap: true },
  { path: "/methodology", kind: "document", indexable: true, sitemap: true },
  { path: "/team", kind: "document", indexable: true, sitemap: true },
  { path: "/blog", kind: "document", indexable: true, sitemap: true },
  { path: "/press", kind: "document", indexable: true, sitemap: true },
  { path: "/contact", kind: "document", indexable: true, sitemap: true },
  { path: "/sitemap", kind: "document", indexable: true, sitemap: true },
  { path: "/admin", kind: "admin", indexable: false, sitemap: false }
];
