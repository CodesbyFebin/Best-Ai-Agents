export interface RouteRecord {
  path: string;
  kind: "home" | "directory" | "agent" | "category" | "comparison" | "research" | "document" | "pillar" | "admin";
  indexable: boolean;
  sitemap: boolean;
}

export const routeRegistry: RouteRecord[] = [
  { path: "/", kind: "home", indexable: true, sitemap: true },
  { path: "/agents", kind: "directory", indexable: true, sitemap: true },
  { path: "/agents/:slug", kind: "agent", indexable: true, sitemap: false },
  { path: "/categories/:slug", kind: "category", indexable: true, sitemap: false },
  { path: "/compare/:pair", kind: "comparison", indexable: true, sitemap: false },
  { path: "/research/:slug", kind: "research", indexable: true, sitemap: false },
  { path: "/about", kind: "document", indexable: true, sitemap: true },
  { path: "/methodology", kind: "document", indexable: true, sitemap: true },
  { path: "/team", kind: "document", indexable: true, sitemap: true },
  { path: "/blog", kind: "document", indexable: true, sitemap: true },
  { path: "/press", kind: "document", indexable: true, sitemap: true },
  { path: "/contact", kind: "document", indexable: true, sitemap: true },
  { path: "/ai-agents", kind: "pillar", indexable: true, sitemap: true },
  { path: "/ai-agents-2026", kind: "pillar", indexable: true, sitemap: true },
  { path: "/ai-agents-for-developers", kind: "pillar", indexable: true, sitemap: true },
  { path: "/enterprise-ai-agents", kind: "pillar", indexable: true, sitemap: true },
  { path: "/ai-agent-frameworks", kind: "pillar", indexable: true, sitemap: true },
  { path: "/big-tech-ai-agent-stack", kind: "pillar", indexable: true, sitemap: true },
  { path: "/vertical-ai-agents", kind: "pillar", indexable: true, sitemap: true },
  { path: "/ai-agent-security-ethics", kind: "pillar", indexable: true, sitemap: true },
  { path: "/future-of-agentic-ai", kind: "pillar", indexable: true, sitemap: true },
  { path: "/ai-agent-roi-implementation-strategy", kind: "pillar", indexable: true, sitemap: true },
  { path: "/admin", kind: "admin", indexable: false, sitemap: false },
];
