import { notFound } from "next/navigation";
import { Metadata } from "next";
import { models } from "@/data/models";
import { agents } from "@/data/agents";
import { Agent } from "@/data/types";
import { EvidenceSection } from "@/components/EvidenceSection";
import { IndiaBadge } from "@/components/IndiaBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getModel(slug: string): Promise<Agent | undefined> {
  return models.find((m) => m.slug === slug);
}

export async function generateStaticParams() {
  return models.map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const model = await getModel(slug);
  if (!model) return {};

  return {
    title: `${model.name} (${model.company}) — AI Model | BestAIAgent.in`,
    description: model.shortDesc,
    openGraph: {
      title: `${model.name} (${model.company}) — AI Model Review`,
      description: model.shortDesc,
      images: [`https://bestaiagent.in/api/og/agent/${slug}`],
      type: "article",
    },
    alternates: {
      canonical: `https://bestaiagent.in/models/${slug}/`,
    },
  };
}

export default async function ModelPage({ params }: Props) {
  const { slug } = await params;
  const model = await getModel(slug);

  if (!model) {
    notFound();
  }

  const relatedAgents = agents
    .filter((a) => a.category === model.category && a.slug !== model.slug)
    .slice(0, 4);

  const relatedModels = models
    .filter((m) => m.company === model.company && m.slug !== model.slug)
    .slice(0, 4);

  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 pb-6 border-b border-[#252b4b]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
              <span className="text-sm font-medium text-[#9ca5c3]">
                {model.category} · {model.pillar}
              </span>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h1 className="text-4xl font-bold text-[#f7f7ff]">{model.name}</h1>
              <span className="badge">{model.badge}</span>
            </div>

            <p className="text-xl text-[#9ca5c3] mb-4">{model.company}</p>

            <p className="text-lg text-[#c5c7d8] mb-6">{model.shortDesc}</p>

            <div className="flex items-center gap-6 mb-4 flex-wrap">
              <IndiaBadge score={model.indiaFit} />
              <div>
                <span className="text-sm text-[#9ca5c3]">Editorial score</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#38d996]">{model.score}</span>
                  <span className="text-xl text-[#555872]">/10</span>
                </div>
              </div>
              <div>
                <span className="text-sm text-[#9ca5c3]">{model.evidenceItems} evidence items</span>
              </div>
            </div>
          </header>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">About {model.name}</h2>
              <p className="text-[#c5c7d8] leading-relaxed">{model.longDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {model.keyFeatures.map((feature, i) => (
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
                  {model.useCases.map((useCase, i) => (
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
                  {model.limitations.map((limitation, i) => (
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
                  <span className="text-[#c5c7d8] ml-2">{model.deployment.join(", ")}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">Integrations:</span>
                  <span className="text-[#c5c7d8] ml-2">{model.integrations.join(", ")}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">Price:</span>
                  <span className="text-[#c5c7d8] ml-2">{model.price}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">India Fit:</span>
                  <span className="text-[#c5c7d8] ml-2">{model.indiaFit}/10</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#9ca5c3]">Pillar:</span>
                  <span className="text-[#c5c7d8] ml-2">{model.pillar}</span>
                </div>
              </div>
            </div>

            {model.competitors && (
              <div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Competitors</h3>
                <p className="text-[#c5c7d8]">
                  Competing models in the same space: {model.competitors.join(", ")}
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
              <p className="text-[#c5c7d8] leading-relaxed">{model.verdict}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Scoring Rationale</h3>
              <p className="text-[#c5c7d8] mb-3">
                The {model.score}/10 editorial score for {model.name} reflects
                evidence gathered through {model.evidenceItems} independent data
                points, including official documentation, benchmark tests,
                pricing verification, and hands-on evaluation. The score is
                composed of five weighted dimensions:
              </p>
              <ul className="space-y-2 text-[#c5c7d8]">
                <li>
                  <strong>Capability (40%)</strong>: How well the model performs
                  its stated functions across standard benchmarks and real-world
                  tasks.
                </li>
                <li>
                  <strong>Ease of Use (20%)</strong>: API design, documentation
                  quality, and developer experience.
                </li>
                <li>
                  <strong>Pricing Transparency (15%)</strong>: Clarity of
                  pricing, availability of INR billing, and free tier access.
                </li>
                <li>
                  <strong>India Fit (15%)</strong>: Indic language support, local
                  deployment options, DPDP compliance, and regional payment
                  method support.
                </li>
                <li>
                  <strong>Evidence Quality (10%)</strong>: Number of independent
                  sources, recency of verification, and confidence level of each
                  claim.
                </li>
              </ul>
              <p className="text-[#9ca5c3] text-sm mt-3">
                Confidence score: high ({model.evidenceItems} evidence items
                verified as of {model.lastVerified})
              </p>
            </div>
          </section>

          <EvidenceSection
            evidenceCount={model.evidenceItems}
            sources={model.sources}
            lastVerified={model.lastVerified}
          />

          {relatedModels.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#252b4b]">
              <div className="sectionHead mb-6">
                <h2 className="text-2xl font-bold text-[#f7f7ff]">
                  More from {model.company}
                </h2>
              </div>
              <p className="text-[#c5c7d8] mb-6">
                These models share the same vendor and often complement each
                other across capability tiers and use case specializations.
              </p>
              <div className="agentGrid">
                {relatedModels.map((relModel) => (
                  <article className="agentCard" key={relModel.slug}>
                    <div className="cardTop">
                      <span className={`agentLogo ${relModel.tone}`}>{relModel.name.slice(0, 2)}</span>
                    </div>
                    <span className="badge">{relModel.badge}</span>
                    <h3 className="text-[#f7f7ff]">{relModel.name}</h3>
                    <small>
                      {relModel.company} · {relModel.category}
                    </small>
                    <p className="text-[#c5c7d8]">{relModel.shortDesc}</p>
                    <div className="scores">
                      <div>
                        <span>Editorial score</span>
                        <strong>
                          {relModel.score}
                          <small>/10</small>
                        </strong>
                      </div>
                      <div>
                        <span>India Fit</span>
                        <strong>
                          {relModel.indiaFit}
                          <small>/10</small>
                        </strong>
                      </div>
                    </div>
                    <div className="cardMeta">
                      <span>{relModel.price}</span>
                      <span>{relModel.evidenceItems} evidence items</span>
                    </div>
                    <a
                      href={`/models/${relModel.slug}/`}
                      className="profile"
                    >
                      View model profile <span>→</span>
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
                  Agents That Use {model.name}
                </h2>
              </div>
              <p className="text-[#c5c7d8] mb-6">
                These AI agents integrate with {model.name}, either as their
                primary model backend or as one of several selectable options.
                We evaluate how well each agent leverages the model's strengths
                and compensates for its limitations.
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
