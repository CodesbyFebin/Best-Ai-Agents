import { notFound } from "next/navigation";
import { Metadata } from "next";
import { agents } from "@/data/agents";
import { Agent } from "@/data/types";
import { EvidenceSection } from "@/components/EvidenceSection";
import { IndiaBadge } from "@/components/IndiaBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getAgent(slug: string): Promise<Agent | undefined> {
  return agents.find((a) => a.slug === slug);
}

export async function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = await getAgent(slug);
  if (!agent) return {};

  return {
    title: `${agent.name} (${agent.company}) — AI Agent for ${agent.category} | BestAIAgent.in`,
    description: agent.shortDesc,
    openGraph: {
      title: `${agent.name} (${agent.company}) — AI Agent Review`,
      description: agent.shortDesc,
      images: [`https://bestaiagent.in/api/og/agent/${slug}`],
      type: "article",
      publishedTime: "2026-08-01T00:00:00.000Z",
      modifiedTime: agent.lastVerified,
    },
    alternates: {
      canonical: `https://bestaiagent.in/agents/${slug}/`,
    },
    other: {
      "article:author": "BestAIAgent.in",
      "twitter:card": "summary_large_image",
    },
  };
}

const toneColors: Record<string, string> = {
  violet: "#8b5cf6",
  cyan: "#22d3ee",
  green: "#38d996",
  blue: "#3b82f6",
  pink: "#ec4899",
  rose: "#f43f5e",
  amber: "#f59e0b",
  orange: "#f97316",
  indigo: "#6366f1",
  teal: "#14b8a3",
  sky: "#06b6d4",
  emerald: "#10b981",
  gray: "#9ca3af",
  red: "#ef4444",
};

export default async function AgentPage({ params }: Props) {
  const { slug } = await params;
  const agent = await getAgent(slug);

  if (!agent) {
    notFound();
  }

  const relatedAgents = agents
    .filter((a) => a.category === agent.category && a.slug !== agent.slug)
    .slice(0, 4);

  const badgeColor = toneColors[agent.tone] || "#8b5cf6";

  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 pb-6 border-b border-[#252b4b]">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: badgeColor }}
              />
              <span className="text-sm font-medium text-[#9ca5c3]">
                {agent.category} · {agent.pillar}
              </span>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h1 className="text-4xl font-bold text-[#f7f7ff]">{agent.name}</h1>
              <span className="badge">{agent.badge}</span>
            </div>

            <p className="text-xl text-[#9ca5c3] mb-4">{agent.company}</p>

            <p className="text-lg text-[#c5c7d8] mb-6">{agent.shortDesc}</p>

            <div className="flex items-center gap-6 mb-4 flex-wrap">
              <IndiaBadge score={agent.indiaFit} />
              <div>
                <span className="text-sm text-[#9ca5c3]">Editorial score</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#38d996]">{agent.score}</span>
                  <span className="text-xl text-[#555872]">/10</span>
                </div>
              </div>
              <div>
                <span className="text-sm text-[#9ca5c3]">{agent.evidenceItems} evidence items</span>
              </div>
            </div>
          </header>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">About {agent.name}</h2>
              <p className="text-[#c5c7d8] leading-relaxed">{agent.longDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {agent.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#c5c7d8]">
                      <span className="text-[#38d996] mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Use Cases</h3>
                <ul className="space-y-2">
                  {agent.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#c5c7d8]">
                      <span className="text-[#8b5cf6] mt-0.5">▹</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Known Limitations</h3>
                <ul className="space-y-2">
                  {agent.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#c5c7d8]">
                      <span className="text-[#ef4444] mt-0.5">⚠</span>
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">Deployment:</span>
                  <span className="text-[#c5c7d8] ml-2">{agent.deployment.join(", ")}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">Integrations:</span>
                  <span className="text-[#c5c7d8] ml-2">{agent.integrations.join(", ")}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">Price:</span>
                  <span className="text-[#c5c7d8] ml-2">{agent.price}</span>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "rgba(13, 16, 37, 0.8)",
                borderColor: "rgba(139, 92, 246, 0.3)",
              }}
            >
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-2">Editorial Verdict</h3>
              <p className="text-[#c5c7d8] leading-relaxed">{agent.verdict}</p>
            </div>
          </section>

          <EvidenceSection
            evidenceCount={agent.evidenceItems}
            sources={agent.sources}
            lastVerified={agent.lastVerified}
          />

          {relatedAgents.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#252b4b]">
              <div className="sectionHead mb-6">
                <h2 className="text-2xl font-bold text-[#f7f7ff]">
                  More agents in <em>{agent.category}</em>
                </h2>
              </div>
              <div className="agentGrid">
                {relatedAgents.map((catAgent) => (
                  <article className="agentCard" key={catAgent.slug}>
                    <div className="cardTop">
                      <span
                        className={`agentLogo ${catAgent.tone}`}
                        style={{
                          backgroundColor:
                            toneColors[catAgent.tone] || "#352563",
                        }}
                      >
                        {catAgent.name.slice(0, 2)}
                      </span>
                      <a
                        href={`/agents/${catAgent.slug}/`}
                        className="compare"
                      >
                        →
                      </a>
                    </div>
                    <span className="badge">{catAgent.badge}</span>
                    <h3 className="text-[#f7f7ff]">{catAgent.name}</h3>
                    <small>
                      {catAgent.company} · {catAgent.category}
                    </small>
                    <p className="text-[#c5c7d8] min-h-[48px]">{catAgent.shortDesc}</p>
                    <div className="scores">
                      <div>
                        <span>Editorial score</span>
                        <strong>
                          {catAgent.score}
                          <small>/10</small>
                        </strong>
                      </div>
                      <div>
                        <span>India Fit</span>
                        <strong>
                          {catAgent.indiaFit}
                          <small>/10</small>
                        </strong>
                      </div>
                    </div>
                    <div className="cardMeta">
                      <span>{catAgent.price}</span>
                      <span>{catAgent.evidenceItems} evidence items</span>
                    </div>
                    <a
                      href={`/agents/${catAgent.slug}/`}
                      className="profile"
                    >
                      View evidence profile <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
