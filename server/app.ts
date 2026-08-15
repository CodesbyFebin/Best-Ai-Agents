import express, { Request, Response, NextFunction } from "express";

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "64kb" }));

const CSP =
  "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';";

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Content-Security-Policy", CSP);
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), payment=()");
  res.setHeader("X-DNS-Prefetch-Control", "on");
  next();
});

function escapeHtml(value: string): string {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return value.replace(/[&<>"']/g, (m) => entities[m]);
}

function jsonld(obj: unknown) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
}

function page(title: string, description: string, path: string, body: string, schema?: unknown) {
  const canonical = `https://www.bestaiagent.in${path}`;
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const ld = schema ? jsonld(schema) : "";
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t}</title><meta name="description" content="${d}"><link rel="canonical" href="${canonical}">${ld}</head><body><header><a href="/">BestAIAgent.in</a> · <a href="/agents">Agents</a> · <a href="/methodology">Methodology</a></header><main><h1>${t}</h1><p data-direct-answer="true">${d}</p>${body}</main><footer><a href="/about">About</a> · <a href="/contact">Contact</a></footer></body></html>`;
}

const org = { "@context": "https://schema.org", "@type": "Organization", name: "BestAIAgent.in", url: "https://bestaiagent.in/", description: "Independent AI agent discovery and evaluation platform." };
const site = { "@context": "https://schema.org", "@type": "WebSite", url: "https://bestaiagent.in/", name: "BestAIAgent.in", publisher: org, potentialAction: { "@type": "SearchAction", target: "https://bestaiagent.in/?q={search_term_string}", "query-input": "required name=search_term_string" } };
const breadcrumb = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.name, item: x.item })),
});

app.get("/", (_req: Request, res: Response) =>
  res.send(
    page(
      "Find and compare AI agents",
      "Evidence-backed AI agent discovery without fabricated rankings or thin programmatic pages.",
      "/",
      "<p>This clean repository starts with the publishing and verification architecture before scaling content.</p>",
      { "@context": "https://schema.org", "@graph": [org, site, breadcrumb([{ name: "Home", item: "https://www.bestaiagent.in/" }])] }
    )
  )
);
app.get("/agents", (_req: Request, res: Response) =>
  res.send(
    page(
      "AI Agents Directory",
      "The canonical directory for evidence-gated AI agent entities.",
      "/agents",
      "<p>Entity imports are added only after evidence and page-opportunity validation.</p>",
      { "@context": "https://schema.org", "@graph": [org, site, breadcrumb([{ name: "Home", item: "https://www.bestaiagent.in/" }, { name: "Agents", item: "https://www.bestaiagent.in/agents" }])] }
    )
  )
);
app.get("/about", (_req: Request, res: Response) =>
  res.send(
    page(
      "About",
      "BestAIAgent.in is an evidence-backed AI agent research and discovery platform.",
      "/about",
      "<p>No pay-to-rank listings and no fabricated reviews.</p>",
      { "@context": "https://schema.org", "@type": "AboutPage", mainEntity: org }
    )
  )
);
app.get("/methodology", (_req: Request, res: Response) =>
  res.send(
    page(
      "Methodology",
      "Publication requires entity, evidence, canonical, uniqueness, and quality checks.",
      "/methodology",
      "<p>CREATE allows a candidate to continue through quality and editorial gates; HOLD never means publish.</p>",
      { "@context": "https://schema.org", "@type": "WebPage" }
    )
  )
);
app.get("/team", (_req: Request, res: Response) => res.send(page("Team", "Real author and reviewer profiles are published only when verified.", "/team", "")));
app.get("/blog", (_req: Request, res: Response) => res.send(page("Blog", "Editorial articles appear only after review.", "/blog", "")));
app.get("/press", (_req: Request, res: Response) => res.send(page("Press", "Verified press resources and coverage appear here when available.", "/press", "")));
app.get("/contact", (_req: Request, res: Response) => res.send(page("Contact", "Contact details are published only when a verified public channel is configured.", "/contact", "")));

const pillars = [
  "/ai-agents",
  "/ai-agents-2026",
  "/ai-agents-for-developers",
  "/enterprise-ai-agents",
  "/ai-agent-frameworks",
  "/big-tech-ai-agent-stack",
  "/vertical-ai-agents",
  "/ai-agent-security-ethics",
  "/future-of-agentic-ai",
  "/ai-agent-roi-implementation-strategy",
];

app.get("/robots.txt", (_req: Request, res: Response) =>
  res.type("text/plain").send(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/admin\n\nSitemap: https://www.bestaiagent.in/sitemap.xml\n`)
);
app.get(
  "/llms.txt",
  (_req: Request, res: Response) =>
    res.type("text/plain").send(
      `# BestAIAgent.in\n\nEvidence-backed AI agent research and discovery.\n\n## Pillars\n${pillars.map((p) => `- https://www.bestaiagent.in${p}`).join("\n")}\n\n## Core\n- https://www.bestaiagent.in/agents\n- https://www.bestaiagent.in/methodology\n- https://www.bestaiagent.in/about\n`
    )
);
app.get(
  "/sitemap.xml",
  (_req: Request, res: Response) =>
    res
      .type("application/xml")
      .send(
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[
          "/",
          "/agents",
          "/about",
          "/methodology",
          "/team",
          "/blog",
          "/press",
          "/contact",
          ...pillars,
        ]
          .map(
            (p) => `<url><loc>https://www.bestaiagent.in${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`
          )
          .join("")}</urlset>`
      )
);
app.get("/admin", (_req: Request, res: Response) => { res.setHeader("X-Robots-Tag", "noindex, nofollow"); res.status(404).send("Not found"); });
app.use((_req: Request, res: Response) => { res.setHeader("X-Robots-Tag", "noindex"); res.status(404).send("Not found"); });

export default app;
