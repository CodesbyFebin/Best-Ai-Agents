import { inferSitemapGroup } from "../../packages/sitemap/index.js";
import type { PublishedPage } from "./types.js";

const ORIGIN = "https://bestaiagent.in";
const corePaths = [
  "/", "/agents", "/categories", "/compare", "/research", "/pricing", "/mcp-servers", "/mcp-directory",
  "/about", "/methodology", "/team", "/blog", "/press", "/contact", "/sitemap"
];

function makeCorePage(path: string, title: string, description: string, text: string): PublishedPage {
  return {
    path,
    canonicalPath: path,
    title,
    description,
    text,
    type: "core",
    indexable: true,
    evidenceCount: 0,
    protected: false,
    internalLinks: corePaths.filter((item) => item !== path).slice(0, 12),
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: `${ORIGIN}${path === "/" ? "/" : path}`,
      isPartOf: { "@type": "WebSite", name: "BestAIAgent.in", url: `${ORIGIN}/` }
    },
    sitemapGroup: inferSitemapGroup(path),
    sourceId: `core:${path}`
  };
}

export const corePages: PublishedPage[] = [
  makeCorePage("/", "Find and compare AI agents", "Evidence-backed AI agent discovery without fabricated rankings or thin programmatic pages.", "BestAIAgent.in publishes AI-agent research only after URL, evidence, uniqueness, and quality checks. The clean runtime begins with a controlled URL inventory and expands only through verified migration and editorial gates."),
  makeCorePage("/agents", "AI Agents Directory", "The canonical directory for evidence-gated AI agent entities.", "Agent profiles enter this directory only after the publishing pipeline confirms the entity, canonical URL, evidence coverage, and page quality. Historical pages are not automatically copied into the clean repository."),
  makeCorePage("/categories", "AI Agent Categories", "Browse evidence-gated AI agent category hubs.", "Category hubs organize published agent entities by user intent. A category page is eligible only when it has enough distinct entities, useful supporting context, and internal links to justify an indexable destination."),
  makeCorePage("/compare", "AI Agent Comparisons", "Canonical head-to-head AI agent comparisons with duplicate orientation control.", "Comparison pages use one canonical orientation per pair. Reciprocal variants redirect to the chosen canonical, and a comparison is not published until both entities and the supporting evidence are sufficient."),
  makeCorePage("/research", "AI Agent Research", "Research and benchmark pages backed by dated evidence.", "Research pages distinguish sourced observations from editorial analysis. Benchmark or market claims require traceable evidence and are held back when the underlying material is incomplete or stale."),
  makeCorePage("/pricing", "AI Agent Pricing", "Pricing pages with source dates, evidence, and India context where supported.", "Pricing information is published only when a source and verification date are available. Currency conversions and India-specific context are identified as estimates when they are derived rather than vendor-published figures."),
  makeCorePage("/mcp-servers", "MCP Servers", "Evidence-gated Model Context Protocol server discovery.", "MCP entries describe real server entities and integrations only when the source material supports them. The directory does not create placeholder server pages simply to expand sitemap size."),
  makeCorePage("/mcp-directory", "MCP Directory", "Browse published MCP server and integration resources.", "The MCP directory provides a stable discovery hub for verified MCP resources while keeping unsupported, duplicate, or unfinished entries outside the indexable inventory."),
  makeCorePage("/about", "About BestAIAgent.in", "BestAIAgent.in is an evidence-backed AI agent research and discovery platform.", "The project is designed around independent research, transparent sourcing, stable canonical URLs, and explicit publication gates. It does not manufacture reviews, ratings, benchmark results, or vendor claims."),
  makeCorePage("/methodology", "Methodology", "Publication requires entity, evidence, canonical, uniqueness, and quality checks.", "The Page Opportunity Engine is a pre-publication eligibility gate. CREATE allows a candidate to continue into evidence, quality, and editorial checks. HOLD is a backlog state and never means automatic publication. REJECT keeps unsuitable candidates out of the active inventory."),
  makeCorePage("/team", "Team", "Verified author and reviewer profiles are published only when real identity information is available.", "Author and reviewer markup is emitted only for verified people. The platform does not invent names or credentials to satisfy structured-data validators."),
  makeCorePage("/blog", "Blog", "Editorial articles and release notes that pass review.", "Blog posts are added through the same canonical, evidence, and quality controls used elsewhere. Drafts and unfinished programmatic content stay outside public sitemaps."),
  makeCorePage("/press", "Press", "Verified press resources and coverage for BestAIAgent.in.", "This page is the canonical location for press material. External coverage is listed only when a verifiable source exists."),
  makeCorePage("/contact", "Contact", "Verified public contact channels for BestAIAgent.in.", "Public contact information is displayed only when an approved channel is configured. The clean baseline does not invent an office address, phone number, or other business details."),
  makeCorePage("/sitemap", "Site Directory", "Human-readable directory of the active, indexable BestAIAgent.in URL inventory.", "This directory mirrors the controlled publishing registry. Quarantined, HOLD, redirect-only, admin, and noindex URLs are excluded from the indexable sitemap inventory.")
];

export const corePageMap = new Map(corePages.map((page) => [page.path, page]));
