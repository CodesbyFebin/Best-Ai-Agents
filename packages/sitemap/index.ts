import { canonicalUrl, normalizePath } from "../../src/routing/path-normalization.js";

export const SITEMAP_GROUPS = [
  "core",
  "agents",
  "categories",
  "comparisons",
  "pricing",
  "research",
  "blog",
  "mcp"
] as const;

export type SitemapGroup = (typeof SITEMAP_GROUPS)[number];

function xmlEscape(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&apos;");
}

export function inferSitemapGroup(pathInput: string, type = ""): SitemapGroup {
  const path = normalizePath(pathInput);
  const normalizedType = type.toLowerCase();
  if (path === "/blog" || path.startsWith("/blog/")) return "blog";
  if (path === "/mcp-directory" || path === "/mcp-servers" || path.startsWith("/mcp/")) return "mcp";
  if (path === "/pricing" || /(?:^|\/)pricing(?:$|[-/])/.test(path) || normalizedType.includes("pricing")) return "pricing";
  if (path === "/compare" || path.startsWith("/compare/") || /\/[^/]+-vs-[^/]+$/.test(path) || normalizedType.includes("compar")) return "comparisons";
  if (path === "/research" || path.startsWith("/research/") || normalizedType.includes("research") || normalizedType.includes("benchmark")) return "research";
  if (path === "/categories" || path.startsWith("/categories/") || normalizedType.includes("categor")) return "categories";
  if (path === "/agents" || path.startsWith("/agents/") || path.startsWith("/tools/") || normalizedType.includes("agent") || normalizedType.includes("tool")) return "agents";
  return "core";
}

export function buildSitemapIndex(origin = "https://bestaiagent.in", groups: readonly SitemapGroup[] = SITEMAP_GROUPS): string {
  const rows = groups.map((group) => `  <sitemap><loc>${xmlEscape(canonicalUrl(`/sitemaps/${group}.xml`, origin))}</loc></sitemap>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</sitemapindex>\n`;
}

export function buildUrlSet(paths: readonly string[], origin = "https://bestaiagent.in"): string {
  const unique = [...new Set(paths.map(normalizePath))].sort();
  const rows = unique.map((path) => `  <url><loc>${xmlEscape(canonicalUrl(path, origin))}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
}
