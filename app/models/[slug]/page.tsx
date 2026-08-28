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
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Model Selection Framework</h3>
              <p className="text-[#c5c7d8] mb-3">When choosing between {model.name} and competing models, consider four key factors: capability fit, cost efficiency, deployment flexibility, and India-specific requirements. Capability fit is the most important—a model that excels at code generation may be the wrong choice for a natural language task. Evaluate the model against your specific use case rather than relying on aggregate benchmarks.</p>
              <p className="text-[#c5c7d8] mb-3">Cost efficiency goes beyond the per-token price. Consider the context window size (larger windows reduce the need for chunking), the quality of output (higher quality reduces the need for re-generation), and the availability of batch pricing or committed use discounts. For Indian teams, INR billing and UPI payment support reduce forex overhead and administrative burden.</p>
              <p className="text-[#c5c7d8]">Deployment flexibility determines how easily you can integrate the model into your infrastructure. Models that offer both API access and self-hosted options provide the most flexibility. For regulated industries, self-hosted deployment may be required for DPDP compliance. Evaluate the model deployment options against your data residency requirements before making a decision.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">India-Specific Model Considerations</h3>
              <p className="text-[#c5c7d8] mb-3">For Indian deployments, model selection involves additional considerations beyond raw capability. Indic language support is critical for applications that serve Indian users. Models trained primarily on English data may exhibit lower quality for Hindi, Tamil, Telugu, and other Indian languages. Test the model with your target languages before committing to a deployment.</p>
              <p className="text-[#c5c7d8] mb-3">Data residency is another key consideration. If the model API processes data outside India, you may need explicit user consent under the DPDP Act. Models that offer Indian cloud regions or on-premise deployment simplify compliance. Our India Fit score captures these dimensions to help you quickly assess a model readiness for Indian deployment.</p>
              <p className="text-[#c5c7d8]">Finally, consider the model context window and token pricing in the context of Indian languages. Some Indian languages require more tokens to express the same content as English, which can significantly impact cost. Test with representative Indian language inputs to get accurate cost estimates for your use case.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Deployment Patterns</h3>
              <p className="text-[#c5c7d8] mb-3">{model.name} can be deployed in several patterns depending on your requirements. The most common pattern is API-based deployment, where your application sends requests to the model API and receives responses in real-time. This pattern is simple to implement but requires network connectivity and may raise data residency concerns for sensitive workloads.</p>
              <p className="text-[#c5c7d8] mb-3">For organizations that require data sovereignty, self-hosted deployment using Ollama, vLLM, or similar frameworks keeps all data on your infrastructure. This pattern requires more infrastructure investment but eliminates data residency concerns and can reduce latency for users in Indian regions. Self-hosted deployment also enables fine-tuning on domain-specific data, which can significantly improve performance for specialized use cases.</p>
              <p className="text-[#c5c7d8]">A hybrid deployment pattern combines both approaches: sensitive workloads run on self-hosted instances while less sensitive workloads use the API. This pattern provides flexibility but requires careful routing logic to ensure that sensitive data never leaves your infrastructure. Evaluate your compliance requirements and infrastructure capabilities to choose the right deployment pattern for your organization.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Performance Benchmarks and Expectations</h3>
              <p className="text-[#c5c7d8] mb-3">Understanding {model.name} performance characteristics helps you set realistic expectations and plan infrastructure accordingly. Key metrics include: time to first token (TTFT), tokens per second (throughput), maximum context window, and concurrent request capacity. These metrics vary significantly based on deployment mode—API deployments typically have higher throughput but more variable latency, while self-hosted deployments offer more consistent performance but require infrastructure investment.</p>
              <p className="text-[#c5c7d8] mb-3">For Indian deployments, network latency is an additional factor. If the model API is hosted outside India, expect additional latency for each request. Self-hosted deployments in Indian cloud regions (AWS Mumbai, GCP Hyderabad, Azure Pune) eliminate this latency but require GPU infrastructure. Benchmark with production-like workloads to get accurate performance estimates for your specific use case.</p>
              <p className="text-[#c5c7d8]">When comparing benchmarks across models, ensure that the test conditions are comparable. Differences in hardware, software stack, and network conditions can significantly impact results. Our evaluations standardize test conditions to enable fair comparisons, but you should validate benchmarks in your own environment before making procurement decisions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Integration Patterns</h3>
              <p className="text-[#c5c7d8] mb-3">{model.name} integrates with applications through several patterns. The simplest pattern is direct API integration, where your application sends requests to the model API using HTTP or gRPC. This pattern is suitable for most applications and is supported by official SDKs in Python, JavaScript, Java, and other languages.</p>
              <p className="text-[#c5c7d8] mb-3">For applications that require agent-like behavior, {model.name} can be integrated with agent frameworks such as LangChain, CrewAI, LangGraph, or AutoGen. These frameworks provide orchestration, tool integration, and multi-agent coordination capabilities that extend the model basic functionality. When using an agent framework, evaluate how well it leverages the model strengths and compensates for its limitations.</p>
              <p className="text-[#c5c7d8">MCP integration enables the model to connect to external tools and data sources. An MCP server can provide database access, API integration, file system operations, and specialized tools that extend the model capabilities. This pattern is particularly powerful for building custom workflows that combine the model intelligence with your existing systems.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Responsible AI and Ethical Considerations</h3>
              <p className="text-[#c5c7d8] mb-3">When deploying {model.name} in production, consider the ethical implications of AI-generated content. Implement content filtering to prevent harmful outputs, and establish human oversight for high-stakes decisions. Document your AI usage policies and communicate them clearly to users who interact with model outputs.</p>
              <p className="text-[#c5c7d8]">For Indian deployments, be attentive to language and cultural bias. Models trained primarily on English data may exhibit bias against Indian languages, accents, or cultural contexts. Test with diverse Indian language inputs and involve native speakers in the evaluation process. Report any biases you discover to the model vendor so they can be addressed in future updates.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Troubleshooting Common Issues</h3>
              <p className="text-[#c5c7d8] mb-3">When using {model.name}, you may encounter issues related to API rate limits, context window overflow, or output quality. Rate limits can be addressed by implementing exponential backoff and request queuing. Context window overflow can be addressed by chunking long inputs or using a model with a larger context window. Output quality issues can be addressed by adjusting temperature parameters, providing better prompts, or using system instructions to guide the model behavior.</p>
              <p className="text-[#c5c7d8]">For self-hosted deployments, common issues include GPU memory exhaustion, slow inference, and model loading failures. These can be addressed by using quantization (reducing model precision to 4-bit or 8-bit), implementing batch processing, and ensuring sufficient GPU memory for the model size. Monitor resource usage and scale infrastructure as needed to maintain acceptable performance.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Staying Updated</h3>
              <p className="text-[#c5c7d8] mb-3">AI models evolve rapidly, with new versions, capabilities, and pricing changes occurring frequently. To stay informed about updates to {model.name}, watch the official GitHub repository, follow the vendor on social media, or subscribe to their release notes. Our directory is updated regularly to reflect the latest model versions and capabilities.</p>
              <p className="text-[#c5c7d8]">If you notice that a model has changed significantly—new capabilities, pricing changes, or deprecation notices—please report it through our GitHub issues. Community feedback helps us keep the directory accurate and useful for all users.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Frequently Asked Questions</h3>
              <p className="text-[#c5c7d8] mb-3"><strong>How often is this model profile updated?</strong> We review model profiles quarterly and update them when new versions are released or material changes occur. The last-verified date is shown in the evidence section below.</p>
              <p className="text-[#c5c7d8] mb-3"><strong>Can I suggest a model for evaluation?</strong> Yes. Open a GitHub issue with the model name, official website, and a brief description of why it should be included. Our editorial team will evaluate the suggestion.</p>
              <p className="text-[#c5c7d8]"><strong>How do I compare this model with alternatives?</strong> Use our comparison pages for side-by-side evaluations. For cross-category comparisons, focus on the editorial score as a baseline but pay special attention to India Fit for Indian deployments.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Performance Optimization Tips</h3>
              <p className="text-[#c5c7d8] mb-3">To get the best performance from {model.name}, follow these optimization tips: use the appropriate model size for your task (larger models are not always better), implement caching for repeated queries, batch requests when possible to reduce overhead, and use streaming for real-time applications to reduce perceived latency.</p>
              <p className="text-[#c5c7d8] mb-3">For self-hosted deployments, optimize GPU utilization by using batching, quantization (reducing precision to 4-bit or 8-bit), and efficient memory management. Monitor resource usage and scale infrastructure based on actual demand rather than peak estimates.</p>
              <p className="text-[#c5c7d8]">For API deployments, implement retry logic with exponential backoff, use connection pooling to reduce connection overhead, and cache responses when appropriate. These optimizations can significantly reduce costs and improve user experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Security Best Practices</h3>
              <p className="text-[#c5c7d8] mb-3">When using {model.name} in production, follow these security best practices: never expose API keys in client-side code, implement rate limiting to prevent abuse, validate and sanitize all inputs to prevent prompt injection attacks, and monitor for unusual usage patterns that may indicate a security breach.</p>
              <p className="text-[#c5c7d8]">For Indian deployments, ensure that the model provider complies with DPDP requirements for data processing and storage. Verify that data residency is maintained and that consent management is implemented for any personal data processed by the model.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Model Governance and Compliance</h3>
              <p className="text-[#c5c7d8] mb-3">When deploying {model.name} in regulated industries, consider the governance implications. Document your AI usage policies, implement human oversight for high-stakes decisions, and establish clear accountability for AI-generated outputs. For Indian deployments, ensure compliance with the DPDP Act requirements for data processing, consent management, and breach notification.</p>
              <p className="text-[#c5c7d8]">Regularly review your AI governance framework to ensure it remains aligned with evolving regulations and best practices. Engage with legal and compliance teams to assess the impact of new regulations on your AI deployments. Our methodology page provides detailed guidance on how we evaluate model compliance and governance.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Community and Resources</h3>
              <p className="text-[#c5c7d8] mb-3">Join the growing community of developers building with {model.name}. Participate in forums, contribute to open-source projects, and share your experiences with other practitioners. The community is a valuable resource for troubleshooting, best practices, and staying informed about the latest developments.</p>
              <p className="text-[#c5c7d8]">For Indian developers, connect with local AI communities and meetups to learn from peers who are building similar applications. Share your India-specific use cases and contribute to the growing body of knowledge about AI deployment in the Indian context.</p>
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
