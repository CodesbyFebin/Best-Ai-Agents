import express, { Request, Response, NextFunction } from "express";

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "64kb" }));

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "DENY");
  next();
});

function escapeHtml(value: string): string {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return value.replace(/[&<>"']/g, (m) => entities[m]);
}

function page(title: string, description: string, path: string, body: string) {
  const canonical = `https://www.bestaiagent.in${path}`;
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t}</title><meta name="description" content="${d}"><link rel="canonical" href="${canonical}"></head><body><header><a href="/">BestAIAgent.in</a> · <a href="/agents">Agents</a> · <a href="/methodology">Methodology</a></header><main><h1>${t}</h1><p data-direct-answer="true">${d}</p>${body}</main><footer><a href="/about">About</a> · <a href="/contact">Contact</a></footer></body></html>`;
}

app.get("/", (_req: Request, res: Response) => res.send(page("Find and compare AI agents", "Evidence-backed AI agent discovery without fabricated rankings or thin programmatic pages.", "/", "<p>This clean repository starts with the publishing and verification architecture before scaling content.</p>")));
app.get("/agents", (_req: Request, res: Response) => res.send(page("AI Agents Directory", "The canonical directory for evidence-gated AI agent entities.", "/agents", "<p>Entity imports are added only after evidence and page-opportunity validation.</p>")));
app.get("/about", (_req: Request, res: Response) => res.send(page("About", "BestAIAgent.in is an evidence-backed AI agent research and discovery platform.", "/about", "<p>No pay-to-rank listings and no fabricated reviews.</p>")));
app.get("/methodology", (_req: Request, res: Response) => res.send(page("Methodology", "Publication requires entity, evidence, canonical, uniqueness, and quality checks.", "/methodology", "<p>CREATE allows a candidate to continue through quality and editorial gates; HOLD never means publish.</p>")));
app.get("/team", (_req: Request, res: Response) => res.send(page("Team", "Real author and reviewer profiles are published only when verified.", "/team", "")));
app.get("/blog", (_req: Request, res: Response) => res.send(page("Blog", "Editorial articles appear only after review.", "/blog", "")));
app.get("/press", (_req: Request, res: Response) => res.send(page("Press", "Verified press resources and coverage appear here when available.", "/press", "")));
app.get("/contact", (_req: Request, res: Response) => res.send(page("Contact", "Contact details are published only when a verified public channel is configured.", "/contact", "")));
app.get("/robots.txt", (_req: Request, res: Response) => res.type("text/plain").send("User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/admin\n\nSitemap: https://www.bestaiagent.in/sitemap.xml\n"));
app.get("/llms.txt", (_req: Request, res: Response) => res.type("text/plain").send("# BestAIAgent.in\n\nEvidence-backed AI agent research and discovery.\n\n- https://www.bestaiagent.in/agents\n- https://www.bestaiagent.in/methodology\n- https://www.bestaiagent.in/about\n"));
app.get("/sitemap.xml", (_req: Request, res: Response) => res.type("application/xml").send("<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"><url><loc>https://www.bestaiagent.in/</loc></url><url><loc>https://www.bestaiagent.in/agents</loc></url><url><loc>https://www.bestaiagent.in/about</loc></url><url><loc>https://www.bestaiagent.in/methodology</loc></url></urlset>"));
app.get("/admin", (_req: Request, res: Response) => { res.setHeader("X-Robots-Tag", "noindex, nofollow"); res.status(404).send("Not found"); });
app.use((_req: Request, res: Response) => { res.setHeader("X-Robots-Tag", "noindex"); res.status(404).send("Not found"); });

export default app;
