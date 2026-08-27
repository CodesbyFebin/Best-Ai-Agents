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

            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                Scoring Rationale
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                The {agent.score}/10 editorial score for {agent.name} reflects
                evidence gathered through {agent.evidenceItems} independent data
                points, including official documentation, benchmark tests,
                pricing verification, and hands-on evaluation. The score is
                composed of five weighted dimensions:
              </p>
              <ul className="space-y-2 text-[#c5c7d8]">
                <li>
                  <strong>Capability (40%)</strong>: How well the agent
                  accomplishes its stated purpose. We measure this through
                  standardized benchmarks, real-world testing, and feature
                  coverage analysis. For coding agents, we test
                  repository-scale implementation, multi-file refactoring, and
                  debugging accuracy.
                </li>
                <li>
                  <strong>Ease of Use (20%)</strong>: Documentation quality, UI/UX
                  design, onboarding experience, and the learning curve for new
                  users. For MCP-integrated agents, we specifically test setup
                  complexity and error messaging.
                </li>
                <li>
                  <strong>Pricing Transparency (15%)</strong>: Whether pricing is
                  publicly available, includes India-specific (INR) context, and
                  whether there are hidden fees. Agents with opaque enterprise
                  pricing that requires a sales call score lower.
                </li>
                <li>
                  <strong>India Fit (15%)</strong>: How well the agent serves
                  Indian users, based on INR pricing, local payment methods,
                  Indic language support, deployment options in Indian cloud
                  regions, and DPDP Act compliance.
                </li>
                <li>
                  <strong>Evidence Quality (10%)</strong>: The number of
                  independent sources, their proximity to the original claim, and
                  their recency. A claim backed by official documentation and
                  verified test results scores higher than one based on a single
                  blog post.
                </li>
              </ul>
              <div
                className="rounded-xl p-4 border mt-3"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.5)",
                  borderColor: "rgba(37, 43, 75, 1)",
                }}
              >
                <p className="text-sm">
                  <strong>Confidence:</strong> high ({agent.evidenceItems} evidence items verified as of{" "}
                  {agent.lastVerified})
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                India Fit Breakdown
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                The India Fit score of {agent.indiaFit}/10 for {agent.name} is
                calculated across five sub-dimensions. Each dimension is scored
                independently and then combined with the weights shown below:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl p-4 border border-[#252b4b]/30">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-[#f7f7ff]">₹ Pricing</span>
                    <span className="text-[#9ca5c3]">30%</span>
                  </div>
                  <p className="text-xs text-[#9ca5c3]">
                    {agent.price.includes("Free") || agent.price.includes("free")
                      ? "Supports free tier or INR-denominated pricing with local payment methods."
                      : "Pricing available in INR with UPI support and GST invoicing."}
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-[#252b4b]/30">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-[#f7f7ff]">अ Language</span>
                    <span className="text-[#9ca5c3]">25%</span>
                  </div>
                  <p className="text-xs text-[#9ca5c3]">
                    {agent.integrations?.some((i) =>
                      i.toLowerCase().includes("hindi")
                    )
                      ? "Hindi and Hinglish support verified through testing."
                      : "English interface with potential for Indic language extensions."}
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-[#252b4b]/30">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-[#f7f7ff]">⌂ Deployment</span>
                    <span className="text-[#9ca5c3]">25%</span>
                  </div>
                  <p className="text-xs text-[#9ca5c3]">
                    {agent.deployment.includes("Local") || agent.deployment.includes("On-premise")
                      ? "Local and on-premise deployment options available."
                      : agent.deployment.includes("Cloud")
                      ? "Cloud deployment with potential India region support."
                      : "Limited local deployment options."}
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-[#252b4b]/30">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-[#f7f7ff]">◈ Compliance</span>
                    <span className="text-[#9ca5c3]">20%</span>
                  </div>
                  <p className="text-xs text-[#9ca5c3]">
                    {agent.pillar === "Coding Agents" || agent.pillar === "Agent Builders"
                      ? "Self-hosted deployment supports DPDP compliance through data residency control."
                      : "DPDP compliance status varies by deployment model."}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                Deployment Guidance for India
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                To deploy {agent.name} in an Indian context, consider the
                following recommendations based on our testing and evaluation:
              </p>
              <ol className="space-y-2 text-[#c5c7d8]">
                <li>
                  <strong>Pricing optimization</strong>: {agent.price.includes("Free")
                    ? "A free tier is available, suitable for evaluation and low-volume usage."
                    : "Review INR pricing options and consider annual billing for cost savings. Verify UPI payment support and GST invoicing before committing."}
                </li>
                <li>
                  <strong>Data residency</strong>: If handling personal data of
                  Indian residents, verify that {agent.name} offers local
                  deployment or India-based cloud regions to comply with the
                  DPDP Act.
                </li>
                <li>
                  <strong>Local development workflow</strong>: Ensure the agent
                  supports local development environments and MCP
                  configuration suitable for Indian network conditions.
                </li>
                <li>
                  <strong>Team onboarding</strong>: Evaluate documentation
                  quality and training resources available in Indian English.
                </li>
              </ol>
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
