import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Categories — Coding, Automation, Research & More | BestAIAgent.in",
  description: "Explore AI agents by practical use case, including coding, automation, research, voice, frameworks, sales, and support.",
  alternates: { canonical: "https://bestaiagent.in/categories" },
};

const categories = [
  ["Coding", "Code, test, review, debug, and ship software with agentic developer tools."],
  ["Automation", "Connect repetitive business work across email, CRM, documents, and operations."],
  ["Research", "Search, synthesise, compare, and work with sources and structured evidence."],
  ["Voice", "Build conversational phone and speech experiences with programmable AI."],
  ["Frameworks", "Orchestrate custom agents, tools, memory, workflows, and multi-agent systems."],
  ["Sales & support", "Assist teams with qualification, customer service, knowledge, and retention workflows."],
  ["Productivity", "Plan, write, organise, summarise, and manage everyday knowledge work."],
  ["Data & analytics", "Explore data, generate analysis, and turn information into useful decisions."],
];

export default function CategoriesPage() {
  return (
    <main className="authorityPage">
      <header className="authorityNav"><a className="brand" href="/">BestAI<span>Agent</span><b>.in</b></a><nav><a href="/">Discover</a><a href="/#compare">Compare</a><a href="/built-in-india">India Fit</a><a href="/#methodology">Methodology</a><a href="/resources">Learn</a></nav></header>
      <section className="authorityHero"><span className="kicker">Explore the ecosystem</span><h1>Find AI agents by the job you need done.</h1><p>Categories are organised around user intent rather than vendor marketing. Start with a task, then inspect products, evidence, pricing context, and deployment trade-offs.</p></section>
      <section className="authorityGrid">{categories.map(([name, copy]) => <article className="authorityCard" key={name}><span className="cardEyebrow">Category</span><h2>{name}</h2><p>{copy}</p><a href={`/?category=${encodeURIComponent(name)}#discover`}>Explore {name} agents →</a></article>)}</section>
      <section className="authorityCallout"><span className="kicker">Evidence first</span><h2>Category membership is not a ranking.</h2><p>Products are grouped by observable use case. Any editorial assessment should be accompanied by methodology and evidence rather than implied endorsement.</p><a className="primary" href="/#methodology">Read the methodology →</a></section>
      <footer className="authorityFooter"><a href="/">BestAIAgent.in</a><span>Independent AI-agent discovery and India-first evaluation.</span></footer>
    </main>
  );
}
