import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents Built for India — India Fit & Adoption Guide | BestAIAgent.in",
  description: "Evaluate AI agents through India-specific pricing, language, deployment, privacy, and adoption considerations.",
  alternates: { canonical: "https://bestaiagent.in/built-in-india" },
};

const signals = [
  ["₹", "Pricing", "Show INR context clearly and distinguish estimates from vendor-published prices."],
  ["अ", "Language", "Consider multilingual, Indic-language, speech, and local-user workflows where evidence exists."],
  ["⌂", "Deployment", "Check cloud, regional, enterprise, API, and self-hosting options before adoption."],
  ["◈", "Privacy", "Review published privacy, data-use, retention, security, and compliance information."],
];

const ecosystem = ["Developer agents", "Business automation", "Research assistants", "Voice AI", "Open-source frameworks", "Workflow platforms"];

export default function BuiltInIndiaPage() {
  return (
    <main className="authorityPage indiaAuthority">
      <header className="authorityNav"><a className="brand" href="/">BestAI<span>Agent</span><b>.in</b></a><nav><a href="/">Discover</a><a href="/categories">Categories</a><a href="/compare">Compare</a><a href="/methodology">Methodology</a><a href="/resources">Learn</a></nav></header>
      <section className="authorityHero"><span className="kicker">Built for Indian decisions</span><h1>Global AI tools. Local buying reality.</h1><p>India Fit is a decision layer, not a badge. It considers pricing context, language, deployment, privacy, and practical adoption signals without inventing unsupported scores or claims.</p><div className="indiaPulse"><span>INDIA</span><small>Evidence-led regional context</small></div></section>
      <section className="authorityGrid">{signals.map(([icon, title, copy]) => <article className="authorityCard" key={title}><span className="indiaIcon">{icon}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
      <section className="authorityBand"><span className="kicker">India AI ecosystem</span><h2>Evaluate the whole deployment context.</h2><div className="chipGrid">{ecosystem.map(item => <span key={item}>{item}</span>)}</div></section>
      <section className="authorityCallout"><span className="kicker">Important distinction</span><h2>India relevance is evidence-based, not geography theater.</h2><p>Being available in India does not automatically mean a product is locally optimised. We separate availability from language, payment, privacy, deployment, and workflow evidence.</p><a className="primary" href="/methodology">See how India Fit is evaluated →</a></section>
      <footer className="authorityFooter"><a href="/">BestAIAgent.in</a><span>India-first AI agent research, comparisons, and implementation context.</span></footer>
    </main>
  );
}
