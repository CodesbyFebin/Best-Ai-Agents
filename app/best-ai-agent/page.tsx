export const runtime = "nodejs";
import { Metadata } from "next";
import { agents } from "@/data/agents";

export const metadata: Metadata = {
  title:
    "Best AI Agent — Evidence-Backed Recommendations by Use Case | BestAIAgent.in",
  description:
    "Find the best AI agent for your needs with evidence-backed evaluations. Compare coding agents, automation tools, voice AI, and more across capability, pricing, and India Fit. No pay-to-rank.",
  keywords: [
    "best AI agent",
    "best AI agent for coding",
    "best AI agent for automation",
    "best AI agent for research",
    "best AI agent India",
    "best free AI agents",
    "best open source AI agents",
    "evidence-backed AI agent recommendations",
    "AI agent comparison",
    "verified AI agents",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/best-ai-agent/",
  },
  openGraph: {
    title: "Best AI Agent — Evidence-Backed Recommendations | BestAIAgent.in",
    description: "Find the best AI agent for your needs with evidence-backed evaluations.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI agent for coding in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best coding agents in 2026 include Claude Code (terminal-first, repository-scale), Cursor (AI-first IDE with multi-model support), Cline (VS Code native, MCP stdio + Streamable HTTP), and Aider (terminal sandboxed). BestAIAgent.in ranks them by evidence-backed scoring, India Fit, and capability testing.",
      },
    },
    {
      "@type": "Question",
      name: "How does BestAIAgent determine the best AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We evaluate agents across five dimensions: Capability Assessment (40%), Ease of Use (20%), Pricing Transparency (15%), India Fit (15%), and Evidence Quality (10%). Every score is backed by primary source documentation and hands-on testing.",
      },
    },
  ],
};

export default function BestAIAgentPage() {
  const codingAgents = agents
    .filter((a) => a.category === "Coding")
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const topAgents = agents
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

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
              <span className="kicker">Evidence-Backed Recommendations</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                Best AI Agent — Evidence-Backed Recommendations
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                Find the best AI agent for your needs using our evidence-backed
                evaluation methodology. We test, verify, and score every agent—no
                pay-to-rank, no synthetic hype.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              How We Determine the Best
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">40%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Capability</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">20%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Ease of Use</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">15%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Pricing</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">15%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">India Fit</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">10%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Evidence</div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Top Rated Agents (All Categories)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {topAgents.map((agent, i) => (
                <div key={agent.slug} className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.tone === "violet" ? "from-brand-500 to-brand-700" : agent.tone === "cyan" ? "from-cyan-500 to-cyan-700" : agent.tone === "green" ? "from-trust-500 to-trust-600" : "from-indigo-500 to-indigo-700"} flex items-center justify-center text-white font-bold text-sm`}>
                      {agent.name.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{agent.name}</div>
                      <div className="text-[10px] text-slate-500">{agent.company}</div>
                    </div>
                    <span className="ml-auto tag tag-verified">#{i + 1}</span>
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
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Best Coding Agents
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {codingAgents.map((a) => (
                <div key={a.slug} className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${a.tone === "violet" ? "from-brand-500 to-brand-700" : a.tone === "cyan" ? "from-cyan-500 to-cyan-700" : a.tone === "green" ? "from-trust-500 to-trust-600" : "from-indigo-500 to-indigo-700"} flex items-center justify-center text-white font-bold text-sm`}>
                      {a.name.slice(0, 2)}
                    </div>
                    <div className="font-bold text-white text-sm">{a.name}</div>
                  </div>
                  <div className="text-xs text-slate-400 mb-3">{a.shortDesc}</div>
                  <a href={`/agents/${a.slug}/`} className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1 group">
                    View profile <span>→</span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-xl p-6 border text-center" style={{ backgroundColor: "rgba(13, 16, 37, 0.8)", borderColor: "rgba(139, 92, 246, 0.3)" }}>
            <p className="text-[#c5c7d8] mb-4">
              Ready to find the best AI agent for your specific use case?
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
