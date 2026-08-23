export const runtime = "nodejs";
import { Metadata } from "next";
import { agents } from "@/data/agents";

export const metadata: Metadata = {
  title:
    "Best Free AI Agents — Open Source & Free Tier | BestAIAgent.in",
  description:
    "Find the best free and open source AI agents with verified licenses. Compare free tiers, open-source capabilities, and India Fit. Only agents with repository/license evidence are listed.",
  keywords: [
    "best free AI agents",
    "open source AI agents",
    "free AI coding agents",
    "free AI automation tools",
    "free tier AI agents India",
    "MIT license AI agents",
    "Apache 2.0 AI agents",
    "no cost AI tools",
    "free AI agent directory",
    "evidence-backed free AI",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/best-free-ai-agents/",
  },
  openGraph: {
    title: "Best Free AI Agents — Open Source & Free Tier | BestAIAgent.in",
    description: "Find the best free and open source AI agents with verified licenses.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best free AI agents in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best free AI agents include Cline (VS Code native, MIT license), Aider (terminal sandboxed, Apache 2.0), Flowise (no-code builder, Apache 2.0), and LangChain (open-source framework). BestAIAgent.in only lists agents with verified repository and license evidence.",
      },
    },
    {
      "@type": "Question",
      name: "Are open source AI agents truly free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open source agents with MIT or Apache 2.0 licenses are free to use, modify, and distribute. However, some agents may require API keys for underlying models (GPT-4, Claude) which have associated costs. We clearly distinguish between free software and free usage.",
      },
    },
  ],
};

export default function BestFreeAIAgentsPage() {
  const freeAgents = agents
    .filter((a) => {
      const price = a.price.toLowerCase();
      return price.includes("free") || price.includes("open source") || price.includes("open-source") || price === "open source + paid";
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  const openSourceFrameworks = agents
    .filter((a) => {
      const name = a.name.toLowerCase();
      return name.includes("langchain") || name.includes("crewai") || name.includes("langgraph") || name.includes("autogen") || name.includes("flowise");
    })
    .sort((a, b) => b.score - a.score);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Open Source & Free Tier</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                Best Free AI Agents — Open Source & Free Tier
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                Find the best free and open source AI agents with verified
                licenses. We only list agents with repository and license
                evidence—no speculation, no unsupported claims.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="glass rounded-xl p-6 text-center card-hover">
                <div className="text-3xl mb-3">🔓</div>
                <h3 className="font-bold text-white mb-2">Open Source</h3>
                <p className="text-xs text-slate-400">MIT, Apache 2.0, GPL licenses verified with repository evidence</p>
              </div>
              <div className="glass rounded-xl p-6 text-center card-hover">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-white mb-2">Free Tier</h3>
                <p className="text-xs text-slate-400">No-cost tiers with transparent limits and usage policies</p>
              </div>
              <div className="glass rounded-xl p-6 text-center card-hover">
                <div className="text-3xl mb-3">🇮🇳</div>
                <h3 className="font-bold text-white mb-2">India Fit</h3>
                <p className="text-xs text-slate-400">INR pricing, local deployment, and DPDP compliance evaluated</p>
              </div>
              <div className="glass rounded-xl p-6 text-center card-hover">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-bold text-white mb-2">Evidence-Backed</h3>
                <p className="text-xs text-slate-400">Repository links, license files, and commit history verified</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Free Agents (Verified)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {freeAgents.length > 0 ? freeAgents.map((agent) => (
                <div key={agent.slug} className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.tone === "violet" ? "from-brand-500 to-brand-700" : agent.tone === "cyan" ? "from-cyan-500 to-cyan-700" : agent.tone === "green" ? "from-trust-500 to-trust-600" : "from-indigo-500 to-indigo-700"} flex items-center justify-center text-white font-bold text-sm`}>
                      {agent.name.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{agent.name}</div>
                      <div className="text-[10px] text-slate-500">{agent.category}</div>
                    </div>
                    <span className="ml-auto tag tag-new">Free</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-3">{agent.shortDesc}</div>
                  <div className="flex justify-between mb-3">
                    <span className="text-xs text-slate-500">Score</span>
                    <span className="text-xs font-semibold text-white">{agent.score}/10</span>
                  </div>
                  <a href={`/agents/${agent.slug}/`} className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1 group">
                    View evidence profile <span>→</span>
                  </a>
                </div>
              )) : (
                <div className="col-span-full text-center text-slate-400 py-8">
                  No free agents found in directory. We only list agents with verified pricing evidence.
                </div>
              )}
            </div>
          </section>

          {openSourceFrameworks.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
                Open Source Frameworks
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {openSourceFrameworks.map((fw) => (
                  <div key={fw.slug} className="glass rounded-2xl p-6 card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${fw.tone === "violet" ? "from-brand-500 to-brand-700" : fw.tone === "cyan" ? "from-cyan-500 to-cyan-700" : fw.tone === "green" ? "from-trust-500 to-trust-600" : "from-indigo-500 to-indigo-700"} flex items-center justify-center text-white font-bold text-sm`}>
                        {fw.name.slice(0, 2)}
                      </div>
                      <div className="font-bold text-white text-sm">{fw.name}</div>
                    </div>
                    <div className="text-xs text-slate-400 mb-3">{fw.shortDesc}</div>
                    <a href={`/frameworks/${fw.slug}/`} className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1 group">
                      View framework <span>→</span>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="rounded-xl p-6 border text-center" style={{ backgroundColor: "rgba(13, 16, 37, 0.8)", borderColor: "rgba(139, 92, 246, 0.3)" }}>
            <p className="text-[#c5c7d8] mb-4">
              Looking for the best AI agent for your specific needs?
            </p>
            <a href="/agents/" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition">
              Browse All Agents
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
