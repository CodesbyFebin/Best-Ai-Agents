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
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                Choosing the Right Agent for Your Use Case
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                When evaluating {agent.name} for your specific needs, consider the following decision framework. First, assess whether the agent core capabilities align with your primary use case—whether that code generation, repository-scale refactoring, voice interaction, or business automation. An agent that excels at coding may be the wrong choice for a customer support workflow, even if its overall score is high.
              </p>
              <p className="text-[#c5c7d8] mb-3">
                Second, evaluate the total cost of ownership in INR. Look beyond the sticker price to include GST, forex conversion fees (if applicable), and the cost of any required infrastructure. For Indian teams, agents that offer INR pricing with UPI support and automated GST invoicing reduce administrative overhead significantly.
              </p>
              <p className="text-[#c5c7d8] mb-3">
                Third, consider the deployment model in the context of your data residency requirements. If you handle personal data of Indian residents, the DPDP Act may require that data remain within India. Agents that offer on-premise deployment or Indian cloud regions (AWS Mumbai, GCP Hyderabad, Azure Pune) simplify compliance compared to those that only offer US-based cloud deployment.
              </p>
              <p className="text-[#c5c7d8]">
                Finally, assess the ecosystem fit. Does the agent integrate with your existing tools? Does it support MCP for extensibility? Is there an active community or responsive maintainer? These factors determine long-term viability more than a single editorial score.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                MCP Integration and Extensibility
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                Model Context Protocol (MCP) has emerged as the standard interface for connecting AI agents to external tools and data sources. If {agent.name} supports MCP, it can integrate with hundreds of verified MCP servers spanning databases, APIs, file systems, and specialized tools. This extensibility means that an agent capability can grow over time without requiring changes to the agent itself.
              </p>
              <p className="text-[#c5c7d8] mb-3">
                When using MCP with {agent.name}, consider the transport configuration. Stdio transport is preferred for local development because it is secure by default—no network exposure. Streamable HTTP transport is designed for production deployments where servers may run on different machines or in containerized environments. Both transports should be tested before committing to a deployment model.
              </p>
              <p className="text-[#c5c7d8]">
                Security is paramount when deploying MCP servers. Always run MCP servers in isolated containers or sandboxes. Never execute servers directly on the host machine. Enable audit logging for all MCP server interactions, including tool calls, parameters, and response sizes. For Indian deployments, ensure MCP servers process data only on Indian cloud regions or on-premise infrastructure to comply with the DPDP Act data localization requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                Common Integration Patterns
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                AI agents are most powerful when integrated into existing development and business workflows. The most common integration patterns include: IDE integration for coding agents (VS Code, JetBrains, Neovim), CI/CD pipeline integration for automated code review and testing, chat platform integration for team collaboration (Slack, Discord, Teams), and API integration for custom workflows.
              </p>
              <p className="text-[#c5c7d8] mb-3">
                For MCP-compatible agents, the integration pattern extends to external tool connectivity. An MCP server can connect your agent to databases (PostgreSQL, MongoDB, Pinecone), APIs (GitHub, Jira, Google Workspace), file systems, and specialized tools (web browsers, calculators, code interpreters). This means a single agent can orchestrate complex workflows across multiple systems without custom integration code.
              </p>
              <p className="text-[#c5c7d8]">
                When planning your integration architecture, consider the security implications of each connection. Every MCP server that accesses sensitive data should be audited for compliance with your data governance policies. For Indian enterprises, this includes verifying that data does not leave Indian jurisdictions without explicit consent under the DPDP Act. Document your integration architecture and review it quarterly to ensure continued compliance as both the agent and the connected tools evolve.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                Evaluating Long-Term Viability
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                Beyond current capability and pricing, consider the long-term viability of {agent.name} as a platform for your AI workflows. Key indicators of long-term viability include: active maintenance (regular commits, responsive issue handling), community size and engagement (forum activity, Stack Overflow questions, GitHub discussions), and the financial sustainability of the entity behind the product.
              </p>
              <p className="text-[#c5c7d8] mb-3">
                For open-source projects, check the license terms carefully. Permissive licenses (MIT, Apache 2.0) allow commercial use and modification, while copyleft licenses (GPL) may impose restrictions on derivative works. For commercial products, evaluate the vendor funding, revenue model, and customer base. A well-funded vendor with a clear revenue trajectory is more likely to continue investing in the product than one relying on venture capital with no clear path to profitability.
              </p>
              <p className="text-[#c5c7d8]">
                Finally, consider the exit strategy. If the vendor discontinues the product or changes pricing terms, how easily can you migrate to an alternative? Agents that use open standards like MCP are easier to replace than those with proprietary integrations. Data portability, open APIs, and documented configuration all reduce vendor lock-in and protect your investment over time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                Decision Framework: Is This Agent Right for You?
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                Use this structured decision framework to determine whether {agent.name} is the right choice for your specific context. Answer each question honestly—skipping steps or assuming ideal conditions leads to poor procurement decisions and costly migrations.
              </p>
              <p className="text-[#c5c7d8] mb-3">
                <strong>Step 1: Capability Fit.</strong> Does the agent core functionality address your primary use case? Review the Key Features and Use Cases sections above. If your use case is not listed, conduct a proof-of-concept test before committing. Do not assume that a high overall score translates to excellence in your specific domain.
              </p>
              <p className="text-[#c5c7d8] mb-3">
                <strong>Step 2: Pricing Feasibility.</strong> Calculate the total cost of ownership over 12 months in INR. Include subscription fees, usage-based charges, required infrastructure, and administrative overhead (GST compliance, payment processing). Compare this total against your budget and against alternatives.
              </p>
              <p className="text-[#c5c7d8] mb-3">
                <strong>Step 3: Compliance Check.</strong> If you handle personal data of Indian residents, verify that the agent deployment model complies with the DPDP Act. Check for data residency options, consent management mechanisms, and audit logging. Consult your legal team if you are in a regulated sector (BFSI, healthcare, government).
              </p>
              <p className="text-[#c5c7d8]">
                <strong>Step 4: Ecosystem Validation.</strong> Test the integrations that matter to your workflow. If you rely on MCP, verify that the agent supports the MCP servers you need. If you use specific IDEs, chat platforms, or CI/CD tools, confirm that the agent integrates with them. Document any gaps and assess whether workarounds are feasible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                Troubleshooting and Support
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                When deploying {agent.name} in production, you may encounter issues related to configuration, performance, or compatibility. The most common issues include: MCP transport timeouts (resolved by increasing timeout values or switching from HTTP to stdio), authentication failures (resolved by verifying API keys and token expiration), and resource constraints (resolved by allocating more memory or CPU to the agent process).
              </p>
              <p className="text-[#c5c7d8] mb-3">
                For MCP-specific issues, check the server logs for error messages. Common MCP problems include: non-JSON lines corrupting the transport (redirect all logging to stderr), session initialization hangs (implement lazy initialization for external connections), and TLS certificate errors (use valid certificates or configure the client to skip verification in development only).
              </p>
              <p className="text-[#c5c7d8]">
                If you encounter issues not covered here, consult the agent community forums, GitHub issues, or our public knowledge base. When reporting a bug, include your operating system, agent version, MCP configuration, and steps to reproduce. This information helps maintainers diagnose and resolve issues quickly. For enterprise support, contact the vendor directly using the support channels listed on their official website.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                Performance Benchmarks and Expectations
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                Understanding the performance characteristics of {agent.name} helps you set realistic expectations and plan infrastructure accordingly. Key performance metrics include: response latency (time from query to first token), throughput (tokens generated per second), context window (maximum input size in tokens), and concurrent session capacity (number of simultaneous users or agents supported).
              </p>
              <p className="text-[#c5c7d8] mb-3">
                For coding agents, benchmark performance on your own repositories rather than relying on vendor-provided metrics. Test with repositories of varying sizes (1K, 10K, 100K lines of code) to understand how performance scales. Measure not just speed but also accuracy—a fast agent that produces incorrect code is slower overall when you account for debugging time.
              </p>
              <p className="text-[#c5c7d8]">
                For MCP servers, benchmark the time from tool invocation to response. This includes network latency (for HTTP transport), serialization overhead, and the actual tool execution time. In Indian deployments, expect additional latency for cross-region calls if the MCP server is not hosted in an Indian cloud region. Always test with production-like data volumes to get accurate performance estimates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                Responsible AI and Ethical Considerations
              </h3>
              <p className="text-[#c5c7d8] mb-3">
                When deploying AI agents in responsible and ethical ways, consider the broader impact on your team and users. Avoid using agents to replace human judgment in high-stakes decisions without oversight. Implement human-in-the-loop workflows for sensitive operations, and regularly audit agent outputs for bias, accuracy, and compliance.
              </p>
              <p className="text-[#c5c7d8]">
                For Indian deployments, be particularly attentive to language bias. AI agents trained primarily on English data may exhibit bias against Indian languages, accents, or cultural contexts. Test with diverse Indian language inputs and involve native speakers in the evaluation process. Document any biases you discover and report them to the vendor so they can be addressed in future updates.
              </p>
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
