import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Marketplace — Discover, Submit & Deploy Agents | BestAIAgent.in",
  description: "A structured marketplace surface for discovering, submitting, hosting, and deploying AI agents with evidence and transparent product information.",
  alternates: { canonical: "https://bestaiagent.in/marketplace" },
};

const steps = [
  ["01", "Discover", "Find agents by task, category, deployment model, and practical requirements."],
  ["02", "Evaluate", "Inspect capabilities, pricing context, documentation, evidence, limitations, and update status."],
  ["03", "Deploy", "Move from discovery to the vendor, API, repository, or deployment path appropriate to your use case."],
];

const principles = ["No pay-to-rank claims", "Vendor facts remain attributable", "Pricing is region-aware", "Unsupported ratings stay out", "Submission does not equal endorsement", "Evidence can become stale and is rechecked"];

export default function MarketplacePage() {
  return (
    <main className="authorityPage marketplaceAuthority">
      <header className="authorityNav"><a className="brand" href="/">BestAI<span>Agent</span><b>.in</b></a><nav><a href="/">Discover</a><a href="/categories">Categories</a><a href="/built-in-india">India Fit</a><a href="/methodology">Methodology</a><a href="/resources">Learn</a></nav></header>
      <section className="authorityHero"><span className="kicker">Discover · submit · deploy</span><h1>A marketplace layer without turning discovery into advertising.</h1><p>Marketplace pages help users move from a verified product description to the appropriate vendor or deployment surface. Listing and submission are distinct from editorial endorsement.</p><div className="marketCore"><strong>AI</strong><span>DISCOVER</span><span>EVALUATE</span><span>DEPLOY</span></div></section>
      <section className="stepGrid">{steps.map(([n, title, copy]) => <article className="authorityCard" key={n}><span className="stepNo">{n}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
      <section className="authorityBand"><span className="kicker">Marketplace policy</span><h2>Trust is part of the product.</h2><div className="chipGrid">{principles.map(item => <span key={item}>✓ {item}</span>)}</div></section>
      <section className="authorityCallout"><span className="kicker">For builders</span><h2>Submit an agent when you can document what it does.</h2><p>Future submissions should provide a canonical product page, documentation, pricing or commercial model where applicable, supported capabilities, and contact or ownership information.</p><a className="primary" href="mailto:submit@bestaiagent.in">Submit an agent →</a></section>
      <footer className="authorityFooter"><a href="/">BestAIAgent.in</a><span>Evidence-led discovery for the agentic software ecosystem.</span></footer>
    </main>
  );
}
