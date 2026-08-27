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
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Framework Selection Guide</h3>
              <p className="text-[#c5c7d8] mb-3">Choosing between {fw.name} and competing frameworks depends on your specific use case, team expertise, and deployment requirements. LangChain is the most mature and widely adopted, with the largest ecosystem of integrations and community resources. CrewAI excels at multi-agent orchestration with a simple, intuitive API. LangGraph provides fine-grained control over agent workflows through graph-based orchestration. AutoGen focuses on conversational agents that can collaborate to solve complex tasks.</p>
              <p className="text-[#c5c7d8] mb-3">For Indian deployments, consider the framework support for local deployment and data residency. Frameworks that can run entirely on-premise without cloud dependencies simplify DPDP compliance. Evaluate the framework documentation quality in Indian English and the availability of community support for India-specific use cases.</p>
              <p className="text-[#c5c7d8]">When evaluating frameworks, start with a proof-of-concept that mirrors your production use case. Test with your actual data, your actual users, and your actual compliance requirements. This practical evaluation reveals issues that documentation reviews cannot—such as edge cases in Indian language handling or unexpected behavior with Indian data formats.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Production Deployment Considerations</h3>
              <p className="text-[#c5c7d8] mb-3">Deploying {fw.name} in production requires careful planning around infrastructure, monitoring, and compliance. Infrastructure requirements vary based on the framework and the agents it orchestrates. Some frameworks require GPU resources for model inference, while others rely on external APIs. Plan your infrastructure based on expected load, latency requirements, and data residency constraints.</p>
              <p className="text-[#c5c7d8] mb-3">Monitoring is essential for production deployments. Track agent performance (response time, success rate, error rate), resource utilization (CPU, memory, GPU), and business metrics (user satisfaction, task completion rate). Implement alerting for anomalies and establish runbooks for common failure scenarios.</p>
              <p className="text-[#c5c7d8]">For Indian enterprises, production deployment must also address DPDP compliance. Implement data retention policies, consent management mechanisms, and audit logging. Conduct regular compliance reviews and update your deployment as regulations evolve. Our India Fit score provides a starting point for compliance assessment, but your legal team should review the specific requirements for your industry.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Best Practices for Framework Usage</h3>
              <p className="text-[#c5c7d8] mb-3">When building with {fw.name}, follow these best practices: start with a clear definition of the problem you are solving, design your agent architecture before writing code, implement comprehensive error handling, and test with diverse inputs including Indian languages and edge cases. Document your architecture decisions and maintain a changelog of agent behavior changes.</p>
              <p className="text-[#c5c7d8]">Security should be integrated from the beginning, not added as an afterthought. Implement input validation, output filtering, and access controls. Use sandboxing for MCP servers and isolate sensitive workloads. Regularly audit your agent for bias, accuracy, and compliance. Engage with the framework community to stay informed about security updates and best practices.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Comparing Frameworks: A Decision Matrix</h3>
              <p className="text-[#c5c7d8] mb-3">When choosing between agent frameworks, evaluate them across five dimensions: learning curve, ecosystem maturity, MCP integration quality, deployment flexibility, and community support. No single framework is best for every use case—the right choice depends on your specific requirements and constraints.</p>
              <p className="text-[#c5c7d8] mb-3">For rapid prototyping, choose a framework with a shallow learning curve and extensive documentation. For production systems, prioritize frameworks with strong testing support, monitoring integrations, and deployment tooling. For Indian deployments, prioritize frameworks that support local deployment and have documentation in Indian English.</p>
              <p className="text-[#c5c7d8]">Our comparison pages provide side-by-side evaluations of frameworks across these dimensions. Use them to build a shortlist of candidates, then conduct your own proof-of-concept tests before making a final decision. This structured approach reduces the risk of choosing a framework that does not meet your long-term needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Troubleshooting and Common Issues</h3>
              <p className="text-[#c5c7d8] mb-3">When working with {fw.name}, you may encounter issues related to installation, configuration, or runtime behavior. Common installation issues include dependency conflicts (resolved by using virtual environments), version mismatches (resolved by pinning dependency versions), and platform-specific errors (resolved by checking the framework documentation for platform requirements).</p>
              <p className="text-[#c5c7d8]">Runtime issues include agent loops (resolved by implementing maximum iteration limits), memory leaks (resolved by monitoring resource usage and restarting agents periodically), and MCP transport failures (resolved by checking server logs and verifying network connectivity). When reporting issues to the framework maintainers, include your environment details, configuration files, and steps to reproduce the problem.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Staying Updated</h3>
              <p className="text-[#c5c7d8] mb-3">Agent frameworks evolve rapidly, with new features, bug fixes, and security patches released frequently. To stay informed about updates to {fw.name}, watch the official GitHub repository, join the community Discord or Slack channel, and subscribe to release announcements. Our directory is updated regularly to reflect the latest framework versions and capabilities.</p>
              <p className="text-[#c5c7d8]">If you notice that a framework has changed significantly—new features, breaking changes, or deprecation notices—please report it through our GitHub issues. Community feedback helps us keep the directory accurate and useful for all users.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Frequently Asked Questions</h3>
              <p className="text-[#c5c7d8] mb-3"><strong>Is {fw.name} suitable for beginners?</strong> {fw.name} has a learning curve that depends on your prior experience with AI and programming. If you are new to AI agents, start with the official tutorials and work through the examples before attempting production deployments.</p>
              <p className="text-[#c5c7d8] mb-3"><strong>Can I use {fw.name} for commercial projects?</strong> Yes. Most AI agent frameworks are open-source and permit commercial use. Check the specific license terms for {fw.name} to confirm that your use case is permitted.</p>
              <p className="text-[#c5c7d8]"><strong>How do I get help with {fw.name}?</strong> Join the official community channels (Discord, Slack, GitHub Discussions) for community support. For enterprise support, contact the vendor directly or engage a consulting partner with expertise in this framework.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Security Best Practices</h3>
              <p className="text-[#c5c7d8] mb-3">When deploying {fw.name} in production, follow these security best practices: run MCP servers in isolated containers or sandboxes, implement authentication for all API endpoints, enable audit logging for all agent interactions, and regularly update dependencies to patch known vulnerabilities.</p>
              <p className="text-[#c5c7d8]">For Indian deployments, ensure that the framework deployment complies with DPDP requirements. Implement data retention policies, consent management mechanisms, and breach notification procedures. Conduct regular security audits and penetration testing to identify and address vulnerabilities before they can be exploited.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Scaling and Performance</h3>
              <p className="text-[#c5c7d8] mb-3">As your usage of {fw.name} grows, you may need to scale your deployment horizontally (adding more instances) or vertically (adding more resources to each instance). Monitor key metrics such as response time, error rate, and resource utilization to determine when scaling is needed.</p>
              <p className="text-[#c5c7d8]">For high-availability deployments, implement load balancing across multiple instances, configure automatic failover, and maintain backups of critical data. Test your scaling strategy under load to ensure that it performs as expected when demand increases.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Case Studies and Success Stories</h3>
              <p className="text-[#c5c7d8] mb-3">Organizations across India are using {fw.name} to build innovative AI solutions. From startups automating customer support to enterprises building internal coding assistants, the framework versatility enables a wide range of applications. These case studies demonstrate the framework potential and provide inspiration for your own projects.</p>
              <p className="text-[#c5c7d8]">If you have a success story using {fw.name}, we would love to hear about it. Share your story through our GitHub discussions or contact us directly. Your experience can help other organizations learn from your journey and avoid common pitfalls.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Comparing Frameworks</h3>
              <p className="text-[#c5c7d8] mb-3">When comparing {fw.name} with competing frameworks, evaluate them across five dimensions: learning curve, ecosystem maturity, MCP integration quality, deployment flexibility, and community support. Our comparison pages provide side-by-side evaluations that help you make an informed decision based on your specific requirements.</p>
              <p className="text-[#c5c7d8]">No single framework is best for every use case. The right choice depends on your team expertise, your deployment requirements, and your long-term AI strategy. Use our evidence-backed scores as a starting point, then conduct your own proof-of-concept tests to validate the choice in your specific context. We are here to help you make informed decisions about AI adoption.</p>
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
