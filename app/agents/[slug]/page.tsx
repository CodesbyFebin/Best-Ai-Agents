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

  const categoryAgents = agents
    .filter((a) => a.category === agent.category && a.slug !== agent.slug)
    .slice(0, 4);

  const badgeColor = toneColors[agent.tone] || "#8b5cf6";

  return (
    <main className="section">
      <div className="container">
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
            <span
              className="px-3 py-1 rounded-full text-sm font-medium border"
              style={{
                backgroundColor: `${badgeColor}20`,
                borderColor: `${badgeColor}40`,
                color: badgeColor,
              }}
            >
              {agent.badge}
            </span>
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
              <span className="text-sm text-[#9ca5c3]">Evidence items</span>
              <div className="text-xl font-bold text-[#f7f7ff]">{agent.evidenceItems}</div>
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

        {categoryAgents.length > 0 && (
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Compare with Similar {agent.category} Agents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryAgents.map((catAgent) => (
                <a
                  key={catAgent.slug}
                  href={`/agents/${catAgent.slug}/`}
                  className="block p-4 rounded-xl border border-[#252b4b] hover:border-[#8b5cf6]/50 transition-all duration-200"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`agentLogo ${catAgent.tone}`}>{catAgent.name.slice(0, 2)}</span>
                    <div>
                      <h3 className="font-semibold text-[#f7f7ff]">{catAgent.name}</h3>
                      <p className="text-sm text-[#9ca5c3]">{catAgent.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#c5c7d8] mb-3">{catAgent.shortDesc}</p>
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-xs text-[#9ca5c3]">Score</span>
                      <span className="font-bold text-[#38d996] ml-2">{catAgent.score}/10</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#9ca5c3]">India Fit</span>
                      <span className="font-bold text-[#f7f7ff] ml-2">{catAgent.indiaFit}/10</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
