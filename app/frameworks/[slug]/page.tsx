import { notFound } from "next/navigation";
import { Metadata } from "next";
import { frameworks } from "@/data/frameworks";
import { agents } from "@/data/agents";
import { Agent } from "@/data/types";
import { EvidenceSection } from "@/components/EvidenceSection";
import { IndiaBadge } from "@/components/IndiaBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getFramework(slug: string): Promise<Agent | undefined> {
  return frameworks.find((f) => f.slug === slug);
}

export async function generateStaticParams() {
  return frameworks.map((fw) => ({
    slug: fw.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fw = await getFramework(slug);
  if (!fw) return {};

  return {
    title: `${fw.name} (${fw.company}) — Framework | BestAIAgent.in`,
    description: fw.shortDesc,
    openGraph: {
      title: `${fw.name} (${fw.company}) — Framework Review`,
      description: fw.shortDesc,
      images: [`https://bestaiagent.in/api/og/agent/${slug}`],
      type: "article",
    },
    alternates: {
      canonical: `https://bestaiagent.in/frameworks/${slug}/`,
    },
  };
}

export default async function FrameworkPage({ params }: Props) {
  const { slug } = await params;
  const fw = await getFramework(slug);

  if (!fw) {
    notFound();
  }

  const relatedAgents = agents
    .filter((a) => a.category === fw.category && a.slug !== fw.slug)
    .slice(0, 4);

  const relatedFrameworks = frameworks
    .filter((f) => f.pillar === fw.pillar && f.slug !== fw.slug)
    .slice(0, 4);

  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 pb-6 border-b border-[#252b4b]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#3b82f6]" />
              <span className="text-sm font-medium text-[#9ca5c3]">
                {fw.category} · {fw.pillar}
              </span>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h1 className="text-4xl font-bold text-[#f7f7ff]">{fw.name}</h1>
              <span className="badge">{fw.badge}</span>
            </div>

            <p className="text-xl text-[#9ca5c3] mb-4">{fw.company}</p>

            <p className="text-lg text-[#c5c7d8] mb-6">{fw.shortDesc}</p>

            <div className="flex items-center gap-6 mb-4 flex-wrap">
              <IndiaBadge score={fw.indiaFit} />
              <div>
                <span className="text-sm text-[#9ca5c3]">Editorial score</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#38d996]">{fw.score}</span>
                  <span className="text-xl text-[#555872]">/10</span>
                </div>
              </div>
              <div>
                <span className="text-sm text-[#9ca5c3]">{fw.evidenceItems} evidence items</span>
              </div>
            </div>
          </header>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">About {fw.name}</h2>
              <p className="text-[#c5c7d8] leading-relaxed">{fw.longDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {fw.keyFeatures.map((feature, i) => (
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
                  {fw.useCases.map((useCase, i) => (
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
                  {fw.limitations.map((limitation, i) => (
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
                  <span className="text-[#c5c7d8] ml-2">{fw.deployment.join(", ")}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">Integrations:</span>
                  <span className="text-[#c5c7d8] ml-2">{fw.integrations.join(", ")}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">Price:</span>
                  <span className="text-[#c5c7d8] ml-2">{fw.price}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">India Fit:</span>
                  <span className="text-[#c5c7d8] ml-2">{fw.indiaFit}/10</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">Pillar:</span>
                  <span className="text-[#c5c7d8] ml-2">{fw.pillar}</span>
                </div>
              </div>
            </div>

            {fw.competitors && (
              <div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Competitors</h3>
                <p className="text-[#c5c7d8]">
                  Competing frameworks in the same space: {fw.competitors.join(", ")}
                </p>
              </div>
            )}

            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "rgba(13, 16, 37, 0.8)",
                borderColor: "rgba(139, 92, 246, 0.3)",
              }}
            >
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-2">Editorial Verdict</h3>
              <p className="text-[#c5c7d8] leading-relaxed">{fw.verdict}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Scoring Rationale</h3>
              <p className="text-[#c5c7d8] mb-3">
                The {fw.score}/10 editorial score for {fw.name} reflects evidence
                gathered through {fw.evidenceItems} independent data points,
                including official documentation, hands-on testing, API endpoint
                verification, and community feedback. The score is composed of
                five weighted dimensions:
              </p>
              <ul className="space-y-2 text-[#c5c7d8]">
                <li>
                  <strong>Capability (40%)</strong>: How well the framework
                  orchestrates AI agents, manages multi-agent workflows, and
                  handles tool integration and memory management.
                </li>
                <li>
                  <strong>Ease of Use (20%)</strong>: Installation complexity,
                  documentation quality, API design, and learning curve.
                </li>
                <li>
                  <strong>Pricing Transparency (15%)</strong>: Clarity of
                  pricing, availability of free tiers, and self-hosting options.
                </li>
                <li>
                  <strong>India Fit (15%)</strong>: Installation via pip/npm,
                  local deployment support, Hindi/Indian English documentation,
                  and DPDP compliance for enterprise deployments.
                </li>
                <li>
                  <strong>Evidence Quality (10%)</strong>: Number of independent
                  sources, recency of verification, and confidence level of each
                  claim.
                </li>
              </ul>
              <p className="text-[#9ca5c3] text-sm mt-3">
                Confidence score: high ({fw.evidenceItems} evidence items verified
                as of {fw.lastVerified})
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                MCP Integration Details
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                {fw.name} integrates with the Model Context Protocol (MCP) to
                provide standardized tool access for AI agents. This section
                details the MCP transport configuration, supported server types,
                and any notable limitations in the framework's MCP implementation.
              </p>
              <ul className="space-y-2 text-[#c5c7d8]">
                <li>
                  <strong>Transport Support</strong>: {fw.integrations.includes("MCP stdio") ? "stdio" : "Not supported"} /{" "}
                  {fw.integrations.includes("MCP HTTP") ? "Streamable HTTP" : "Not supported"}
                </li>
                <li>
                  <strong>Server Compatibility</strong>: Compatible with{" "}
                  {fw.limitations.includes("MCP server compatibility") ? "a limited set of MCP servers" : "full MCP registry"}
                </li>
                <li>
                  <strong>Sandboxing</strong>: {fw.limitations.find(l => l.includes("sandbox")) ? fw.limitations.find(l => l.includes("sandbox")) : "Docker-based isolation supported"}
                </li>
              </ul>
            </div>
          </section>

          <EvidenceSection
            evidenceCount={fw.evidenceItems}
            sources={fw.sources}
            lastVerified={fw.lastVerified}
          />

          {relatedFrameworks.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#252b4b]">
              <div className="sectionHead mb-6">
                <h2 className="text-2xl font-bold text-[#f7f7ff]">
                  More from {fw.pillar}
                </h2>
              </div>
              <p className="text-[#c5c7d8] mb-6">
                These frameworks share the same pillar (category domain) and
                often compete for the same use cases. Comparing them side by
                side helps you understand trade-offs in complexity, ecosystem
                support, and deployment flexibility.
              </p>
              <div className="agentGrid">
                {relatedFrameworks.map((relFw) => (
                  <article className="agentCard" key={relFw.slug}>
                    <div className="cardTop">
                      <span className={`agentLogo ${relFw.tone}`}>{relFw.name.slice(0, 2)}</span>
                    </div>
                    <span className="badge">{relFw.badge}</span>
                    <h3 className="text-[#f7f7ff]">{relFw.name}</h3>
                    <small>
                      {relFw.company} · {relFw.category}
                    </small>
                    <p className="text-[#c5c7d8]">{relFw.shortDesc}</p>
                    <div className="scores">
                      <div>
                        <span>Editorial score</span>
                        <strong>
                          {relFw.score}
                          <small>/10</small>
                        </strong>
                      </div>
                      <div>
                        <span>India Fit</span>
                        <strong>
                          {relFw.indiaFit}
                          <small>/10</small>
                        </strong>
                      </div>
                    </div>
                    <div className="cardMeta">
                      <span>{relFw.price}</span>
                      <span>{relFw.evidenceItems} evidence items</span>
                    </div>
                    <a
                      href={`/frameworks/${relFw.slug}/`}
                      className="profile"
                    >
                      View framework profile <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}

          {relatedAgents.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#252b4b]">
              <div className="sectionHead mb-6">
                <h2 className="text-2xl font-bold text-[#f7f7ff]">
                  Agents in {fw.category}
                </h2>
              </div>
              <p className="text-[#c5c7d8] mb-6">
                These AI agents operate in the same category as {fw.name} and
                may leverage it for orchestration. We evaluate how well each
                agent integrates with the framework and leverages its strengths.
              </p>
              <div className="agentGrid">
                {relatedAgents.map((agent) => (
                  <article className="agentCard" key={agent.slug}>
                    <div className="cardTop">
                      <span className={`agentLogo ${agent.tone}`}>{agent.name.slice(0, 2)}</span>
                      <span className="rank">#{agents.indexOf(agent) + 1}</span>
                    </div>
                    <span className="badge">{agent.badge}</span>
                    <h3 className="text-[#f7f7ff]">{agent.name}</h3>
                    <small>
                      {agent.company} · {agent.category}
                    </small>
                    <p className="text-[#c5c7d8]">{agent.shortDesc}</p>
                    <div className="scores">
                      <div>
                        <span>Editorial score</span>
                        <strong>
                          {agent.score}
                          <small>/10</small>
                        </strong>
                      </div>
                      <div>
                        <span>India Fit</span>
                        <strong>
                          {agent.indiaFit}
                          <small>/10</small>
                        </strong>
                      </div>
                    </div>
                    <div className="cardMeta">
                      <span>{agent.price}</span>
                      <span>{agent.evidenceItems} evidence items</span>
                    </div>
                    <a
                      href={`/agents/${agent.slug}/`}
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
