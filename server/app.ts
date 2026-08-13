import express from "express";
import generatedRegistryJson from "../packages/database/generated/views/index.json";
import { buildSitemapIndex, buildUrlSet, SITEMAP_GROUPS, type SitemapGroup } from "../packages/sitemap/index.js";
import { corePageMap, corePages } from "../src/runtime/core-pages.js";
import type { PublishedPage, PublishedRegistry } from "../src/runtime/types.js";
import { normalizePath } from "../src/routing/path-normalization.js";
import { resolveRedirect } from "../src/routing/redirect-resolver.js";

const ORIGIN = "https://bestaiagent.in";
const generatedRegistry = generatedRegistryJson as PublishedRegistry;
const generatedPages = generatedRegistry.pages ?? [];
const generatedPageMap = new Map(generatedPages.map((page) => [normalizePath(page.path), page]));
const runtimePages = [...corePages, ...generatedPages].filter((page) => page.indexable);

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "64kb" }));

app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'");
  next();
});

app.use((req, res, next) => {
  const resolution = resolveRedirect(req.path);
  if (!resolution) return next();
  return res.redirect(resolution.status, resolution.destination);
});

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
}

function safeJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

function renderPage(page: PublishedPage): string {
  const canonical = `${ORIGIN}${page.canonicalPath === "/" ? "/" : page.canonicalPath}`;
  const paragraphs = page.text.split(/\n{2,}/).map((item) => item.trim()).filter(Boolean).map((item) => `<p>${escapeHtml(item)}</p>`).join("");
  const links = page.internalLinks.map((href) => `<a href="${escapeHtml(href)}">${escapeHtml(href === "/" ? "Home" : href.replace(/^\//, "").replace(/[-/]+/g, " "))}</a>`).join(" · ");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}" />
  <link rel="canonical" href="${escapeHtml(canonical)}" />
  <meta property="og:title" content="${escapeHtml(page.title)}" />
  <meta property="og:description" content="${escapeHtml(page.description)}" />
  <meta property="og:url" content="${escapeHtml(canonical)}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <script type="application/ld+json">${safeJsonLd(page.schema)}</script>
</head>
<body>
  <header><a href="/">BestAIAgent.in</a> · <a href="/agents">Agents</a> · <a href="/categories">Categories</a> · <a href="/compare">Compare</a> · <a href="/methodology">Methodology</a></header>
  <main>
    <article>
      <h1>${escapeHtml(page.title)}</h1>
      <p data-testid="direct-answer">${escapeHtml(page.description)}</p>
      ${paragraphs}
      ${links ? `<nav aria-label="Related pages">${links}</nav>` : ""}
    </article>
  </main>
  <footer><a href="/about">About</a> · <a href="/contact">Contact</a> · <a href="/sitemap">Sitemap</a></footer>
</body>
</html>`;
}

function pagePaths(group: SitemapGroup): string[] {
  return runtimePages.filter((page) => page.sitemapGroup === group && page.indexable && normalizePath(page.canonicalPath) === normalizePath(page.path)).map((page) => page.path);
}

app.get("/robots.txt", (_req, res) => {
  res.type("text/plain").send(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/admin\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
});

app.get("/llms.txt", (_req, res) => {
  const keyPages = ["/agents", "/categories", "/compare", "/research", "/mcp-directory", "/methodology", "/about"];
  res.type("text/plain").send(`# BestAIAgent.in\n\nEvidence-backed AI agent research and discovery.\n\n${keyPages.map((path) => `- ${ORIGIN}${path}`).join("\n")}\n`);
});

app.get("/sitemap.xml", (_req, res) => {
  res.type("application/xml").send(buildSitemapIndex(ORIGIN));
});

app.get("/sitemaps/:name.xml", (req, res) => {
  const name = req.params.name as SitemapGroup;
  if (!SITEMAP_GROUPS.includes(name)) {
    res.setHeader("X-Robots-Tag", "noindex");
    return res.status(404).type("text/plain").send("Not found");
  }
  return res.type("application/xml").send(buildUrlSet(pagePaths(name), ORIGIN));
});

app.get("/admin", (_req, res) => {
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  return res.status(404).type("text/plain").send("Not found");
});

app.get("*", (req, res) => {
  const path = normalizePath(req.path);
  const page = corePageMap.get(path) ?? generatedPageMap.get(path);
  if (page) {
    if (!page.indexable) res.setHeader("X-Robots-Tag", "noindex");
    return res.status(200).type("html").send(renderPage(page));
  }
  res.setHeader("X-Robots-Tag", "noindex");
  return res.status(404).type("text/plain").send("Not found");
});

export default app;
