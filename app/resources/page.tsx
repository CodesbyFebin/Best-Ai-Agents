import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Resources & Field Guides | BestAIAgent.in",
  description: "Practical field guides covering AI agents, reasoning, retrieval, automation, India adoption, privacy, and implementation decisions.",
  alternates: { canonical: "https://bestaiagent.in/resources" },
};

const resources = [
  ["Primer", "GenAI 101 for India", "Models, tokens, context, privacy, cost, and safe adoption basics."],
  ["Reasoning", "CoT, ToT & tool use", "Understand reasoning patterns without confusing fluent output with proof."],
  ["Retrieval", "Vector search & RAG", "Semantic retrieval, provenance, permissions, and evaluation fundamentals."],
  ["Ecosystem", "India AI landscape", "IndiaAI, BHASHINI, DPDP context, multilingual workflows, and adoption considerations."],
  ["Implementation", "Agent architecture", "Tools, memory, orchestration, evaluation, observability, and failure handling."],
  ["Buying guide", "How to evaluate an AI agent", "A practical framework for comparing capability, cost, privacy, deployment, and evidence."],
];

export default function ResourcesPage() {
  return (
    <main className="authorityPage">
      <header className="authorityNav"><a className="brand" href="/">BestAI<span>Agent</span><b>.in</b></a><nav><a href="/">Discover</a><a href="/categories">Categories</a><a href="/compare">Compare</a><a href="/built-in-india">India Fit</a><a href="/methodology">Methodology</a></nav></header>
      <section className="authorityHero"><span className="kicker">Knowledge hub</span><h1>Learn how agents work before you decide which one to use.</h1><p>Short, practical field guides for developers, operators, researchers, and teams adopting AI agents in India and globally.</p></section>
      <section className="authorityGrid resourceGrid">{resources.map(([tag, title, copy]) => <article className="authorityCard" key={title}><span className="cardEyebrow">{tag}</span><h2>{title}</h2><p>{copy}</p><a href={`/resources/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}>Read field guide →</a></article>)}</section>
      <section className="authorityCallout"><span className="kicker">Editorial standard</span><h2>Depth over page count.</h2><p>Resources are intended to answer a real question. We will not turn glossary concepts into thousands of near-identical pages simply to increase URL count.</p><a className="primary" href="/methodology">Read the editorial methodology →</a></section>
      <footer className="authorityFooter"><a href="/">BestAIAgent.in</a><span>Practical AI-agent education with India-specific context.</span></footer>
    </main>
  );
}
