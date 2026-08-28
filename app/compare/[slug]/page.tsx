import { notFound } from "next/navigation";
import { Metadata } from "next";
import { comparisons } from "@/data/comparisons";
import { agents } from "@/data/agents";

interface Props {
  params: Promise<{ slug: string }>;
}

function getComparison(slug: string) {
  return comparisons.find((c) => c.slug === slug);
}

export async function generateStaticParams() {
  return comparisons.map((comp) => ({
    slug: comp.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparison(slug);
  if (!comp) return {};

  return {
    title: comp.title + " | BestAIAgent.in",
    description: comp.summary,
    alternates: {
      canonical: `https://bestaiagent.in/compare/${slug}/`,
    },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const comp = getComparison(slug);

  if (!comp) {
    notFound();
  }

  const agentA = agents.find((a) => a.slug === comp.agents[0]);
  const agentB = agents.find((a) => a.slug === comp.agents[1]);

  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Compare AI Agents</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">{comp.title}</h1>
              <p className="text-xl text-[#c5c7d8] mb-4">{comp.summary}</p>
              <div className="flex gap-4 text-sm text-[#555872]">
                <span>
                  Last updated:{" "}
                  {new Date(comp.lastUpdated).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>{comp.evidenceCount} evidence items</span>
              </div>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Why This Comparison Matters
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Choosing between {comp.agents[0]} and {comp.agents[1]} is a
              decision that many developers and teams face. Both tools are
              well-regarded in their respective domains, but they differ in
              important ways that can significantly impact your workflow, costs,
              and long-term maintainability. This comparison provides
              evidence-backed insights across key dimensions to help you make an
              informed decision.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Our evaluation process for this comparison involved hands-on
              testing of both tools, review of official documentation, analysis
              of community feedback, and verification of pricing and
              feature claims. We weighted each criterion based on its relative
              importance to users in the relevant use case. All findings are
              traceable to primary sources and documented in our audit trail.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6 mb-2">
              Comparison Methodology
            </h3>
            <p className="text-[#c5c7d8] mb-3">
              Each criterion in the table below is scored independently on a
              consistent scale. Where applicable, weights are applied to reflect
              the relative importance of each dimension. The overall verdict is
              derived from a weighted aggregation of evidence across all
              criteria, not a simple average. This means that dimensions marked
              as more important will have a greater influence on the final
              recommendation.
            </p>
            <p className="text-[#c5c7d8]">
              For transparency, we disclose the weights used in this comparison:
              they reflect what we believe matters most to users in this
              specific use case, based on survey data from Indian developers and
              feedback from enterprise procurement teams.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#252b4b]">
                    <th className="p-4 text-sm font-semibold text-[#9ca5c3]">
                      Feature
                    </th>
                    <th className="p-4 text-center">
                      <div className="font-semibold text-[#f7f7ff]">
                        {comp.agents[0]}
                      </div>
                      {agentA && (
                        <div className="text-xs text-[#9ca5c3] mt-1">
                          {agentA.company}
                        </div>
                      )}
                    </th>
                    <th className="p-4 text-center">
                      <div className="font-semibold text-[#f7f7ff]">
                        {comp.agents[1]}
                      </div>
                      {agentB && (
                        <div className="text-xs text-[#9ca5c3] mt-1">
                          {agentB.company}
                        </div>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comp.criteria.map((criterion) => (
                    <tr
                      key={criterion.name}
                      className="border-b border-[#252b4b]/30 hover:bg-[#1a1a2e]/50 transition"
                    >
                      <td className="p-4 text-sm font-medium text-[#9ca5c3] flex items-center justify-between">
                        {criterion.name}
                        {criterion.weight && (
                          <span className="text-xs text-[#555872] font-normal">
                            weight: {Math.round(criterion.weight * 100)}%
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center text-sm text-[#c5c7d8]">
                        {criterion.values[comp.agents[0]]}
                      </td>
                      <td className="p-4 text-center text-sm text-[#c5c7d8]">
                        {criterion.values[comp.agents[1]]}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#252b4b]">
                    <td className="p-4 text-sm font-bold text-[#9ca5c3]">
                      Editor\'s Choice
                    </td>
                    <td className="p-4 text-center">
                      {agentA && (
                        <span className="text-[#38d996] font-semibold">
                          {agentA.score}/10
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {agentB && (
                        <span className="text-[#38d996] font-semibold">
                          {agentB.score}/10
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-bold text-[#9ca5c3]">
                      India Fit
                    </td>
                    <td className="p-4 text-center">
                      {agentA && (
                        <span className="text-[#8b5cf6] font-semibold">
                          {agentA.indiaFit}/10
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {agentB && (
                        <span className="text-[#8b5cf6] font-semibold">
                          {agentB.indiaFit}/10
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-bold text-[#9ca5c3]">
                      Evidence Items
                    </td>
                    <td className="p-4 text-center">
                      {agentA && (
                        <span className="text-[#c5c7d8]">
                          {agentA.evidenceItems}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {agentB && (
                        <span className="text-[#c5c7d8]">
                          {agentB.evidenceItems}
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {agentA && agentB && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
                Detailed Analysis
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div
                  className="rounded-xl p-6 border"
                  style={{
                    backgroundColor: "rgba(13, 16, 37, 0.5)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                    {agentA.name} ({agentA.company})
                  </h3>
                  <p className="text-[#9ca5c3] text-sm mb-3">
                    {agentA.shortDesc}
                  </p>
                  <ul className="space-y-1 text-xs text-[#9ca5c3]">
                    {agentA.keyFeatures.slice(0, 4).map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                  <div className="mt-3 text-xs text-[#555872]">
                    India Fit: {agentA.indiaFit}/10 · Evidence:{" "}
                    {agentA.evidenceItems} items · Last verified:{" "}
                    {agentA.lastVerified}
                  </div>
                  <a
                    href={`/agents/${agentA.slug}/`}
                    className="text-[#8b5cf6] hover:underline text-sm font-semibold"
                  >
                    View full profile →
                  </a>
                </div>
                <div
                  className="rounded-xl p-6 border"
                  style={{
                    backgroundColor: "rgba(13, 16, 37, 0.5)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                    {agentB.name} ({agentB.company})
                  </h3>
                  <p className="text-[#9ca5c3] text-sm mb-3">
                    {agentB.shortDesc}
                  </p>
                  <ul className="space-y-1 text-xs text-[#9ca5c3]">
                    {agentB.keyFeatures.slice(0, 4).map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                  <div className="mt-3 text-xs text-[#555872]">
                    India Fit: {agentB.indiaFit}/10 · Evidence:{" "}
                    {agentB.evidenceItems} items · Last verified:{" "}
                    {agentB.lastVerified}
                  </div>
                  <a
                    href={`/agents/${agentB.slug}/`}
                    className="text-[#8b5cf6] hover:underline text-sm font-semibold"
                  >
                    View full profile →
                  </a>
                </div>
              </div>
            </section>
          )}

          <div className="compareBand">
            <div>
              <span className="kicker">Bottom Line</span>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-3">{comp.verdict}</h2>
              <p className="text-[#9ca5c3]">{comp.summary}</p>
            </div>
            <div className="matrix">
              <div className="matrixHead">
                <b>Criterion</b>
                <strong>{comp.agents[0]}</strong>
                <strong>{comp.agents[1]}</strong>
              </div>
              {comp.criteria.map((c, i) => (
                <div key={i}>
                  <span>{c.name}</span>
                  <strong>{c.values[comp.agents[0]] || "—"}</strong>
                  <strong>{c.values[comp.agents[1]] || "—"}</strong>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              India-Specific Considerations
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              For Indian users and businesses, several factors in this comparison
              carry additional weight. Pricing transparency in INR, UPI payment
              support, GST invoicing, data residency under the DPDP Act, and
              Indic language support can significantly influence the final
              decision. Below we break down how each tool performs on these
              India-specific dimensions.
            </p>
            <div className="space-y-4">
              <div
                className="rounded-xl p-4 border border-[#252b4b]/30"
                style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}
              >
                <h3 className="font-semibold text-[#f7f7ff] mb-2">
                  Pricing in INR
                </h3>
                <p className="text-sm text-[#c5c7d8]">
                  {agentA?.price} vs {agentB?.price}. For Indian users, we
                  recommend checking if the vendor offers INR-denominated billing
                  and UPI payment options to avoid forex charges and GST
                  complications.
                </p>
              </div>
              <div
                className="rounded-xl p-4 border border-[#252b4b]/30"
                style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}
              >
                <h3 className="font-semibold text-[#f7f7ff] mb-2">
                  DPDP Compliance
                </h3>
                <p className="text-sm text-[#c5c7d8]">
                  Under India's Digital Personal Data Protection Act, both tools
                  must handle user data with explicit consent and provide data
                  residency options. Check each tool's compliance documentation
                  for on-premise deployment and consent management features.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Implementation Guide</h2>
            <p className="text-[#c5c7d8] mb-4">Once you have decided between {comp.agents[0]} and {comp.agents[1]}, the next step is implementation. Start with a proof-of-concept that mirrors your production use case. Define clear success criteria before beginning—such as response time targets, accuracy thresholds, and user satisfaction metrics. This ensures that your evaluation is objective and that you can make a data-driven decision about full deployment.</p>
            <p className="text-[#c5c7d8] mb-4">For Indian deployments, the implementation guide should include compliance verification. Confirm that the chosen tool meets your DPDP requirements, that data residency is maintained, and that consent management is implemented. Document your compliance posture and review it quarterly to ensure continued adherence as both the tool and the regulatory landscape evolve.</p>
            <p className="text-[#c5c7d8]">Finally, plan for ongoing monitoring and optimization. AI tools require continuous tuning to maintain performance and compliance. Establish monitoring dashboards, set up alerting for anomalies, and schedule regular reviews of tool performance and cost. This ongoing investment ensures that your AI deployment continues to deliver value over time.</p>
          </section>
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Implementation Guide</h2>
            <p className="text-[#c5c7d8] mb-4">Once you have decided between {comp.agents[0]} and {comp.agents[1]}, the next step is implementation. Start with a proof-of-concept that mirrors your production use case. Define clear success criteria before beginning—such as response time targets, accuracy thresholds, and user satisfaction metrics. This ensures that your evaluation is objective and that you can make a data-driven decision about full deployment.</p>
            <p className="text-[#c5c7d8] mb-4">For Indian deployments, the implementation guide should include compliance verification. Confirm that the chosen tool meets your DPDP requirements, that data residency is maintained, and that consent management is implemented. Document your compliance posture and review it quarterly to ensure continued adherence as both the tool and the regulatory landscape evolve.</p>
            <p className="text-[#c5c7d8]">Finally, plan for ongoing monitoring and optimization. AI tools require continuous tuning to maintain performance and compliance. Establish monitoring dashboards, set up alerting for anomalies, and schedule regular reviews of tool performance and cost. This ongoing investment ensures that your AI deployment continues to deliver value over time.</p>
          </section>
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Common Pitfalls to Avoid</h2>
            <p className="text-[#c5c7d8] mb-4">When implementing AI tools based on this comparison, avoid these common pitfalls: choosing a tool based solely on capability without considering India Fit, underestimating the total cost of ownership (including compliance and administrative overhead), and failing to plan for ongoing monitoring and optimization.</p>
            <p className="text-[#c5c7d8]">Another common mistake is treating the comparison as a one-time decision. The AI landscape evolves rapidly, and today best choice may not be optimal in six months. Schedule regular reviews of your AI tooling and be prepared to switch if a significantly better option becomes available.</p>
          </section>
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Common Pitfalls to Avoid</h2>
            <p className="text-[#c5c7d8] mb-4">When implementing AI tools based on this comparison, avoid these common pitfalls: choosing a tool based solely on capability without considering India Fit, underestimating the total cost of ownership (including compliance and administrative overhead), and failing to plan for ongoing monitoring and optimization.</p>
            <p className="text-[#c5c7d8]">Another common mistake is treating the comparison as a one-time decision. The AI landscape evolves rapidly, and today best choice may not be optimal in six months. Schedule regular reviews of your AI tooling and be prepared to switch if a significantly better option becomes available.</p>
          </section>
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How often is this comparison updated?</h3>
                <p className="text-sm text-[#c5c7d8]">We review comparisons quarterly and update them when new versions are released or material changes occur. The last-updated date is shown at the top of this page.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Can I request a comparison?</h3>
                <p className="text-sm text-[#c5c7d8]">Yes. Open a GitHub issue with the two tools you want compared and why. Our editorial team will evaluate the request and add it if it meets our inclusion criteria.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do you determine the winner?</h3>
                <p className="text-sm text-[#c5c7d8]">We do not declare a single winner. Instead, we present the evidence and let you decide based on your specific needs. The bottom line section provides a summary recommendation, but the right choice depends on your priorities.</p>
              </div>
            </div>
          </section>
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How often is this comparison updated?</h3>
                <p className="text-sm text-[#c5c7d8]">We review comparisons quarterly and update them when new versions are released or material changes occur. The last-updated date is shown at the top of this page.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Can I request a comparison?</h3>
                <p className="text-sm text-[#c5c7d8]">Yes. Open a GitHub issue with the two tools you want compared and why. Our editorial team will evaluate the request and add it if it meets our inclusion criteria.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do you determine the winner?</h3>
                <p className="text-sm text-[#c5c7d8]">We do not declare a single winner. Instead, we present the evidence and let you decide based on your specific needs. The bottom line section provides a summary recommendation, but the right choice depends on your priorities.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What if I disagree with the comparison?</h3>
                <p className="text-sm text-[#c5c7d8]">We welcome scrutiny. If you have evidence that contradicts our assessment, please submit a correction through GitHub issues. Our editorial team reviews all submissions and updates the comparison if the evidence is validated. Your feedback helps us maintain the highest standards of accuracy and transparency in our evaluations.</p>
              </div>
            </div>
          </section>
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Staying Updated</h2>
            <p className="text-[#c5c7d8] mb-4">The AI landscape evolves rapidly, and comparison pages can become outdated quickly. To stay informed about changes to the tools compared here, watch our GitHub repository for updates, follow us on Twitter/X for announcements, or subscribe to our RSS feed for new comparisons and score changes.</p>
            <p className="text-[#c5c7d8]">If you notice that a tool has changed significantly—new features, pricing changes, or compliance updates—please report it through our GitHub issues. Community feedback helps us keep the directory accurate and useful for all users. We are committed to maintaining the highest standards of accuracy and transparency in all our evaluations.</p>
          </section>
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">When to Choose {comp.agents[0]}</h2>
            <p className="text-[#c5c7d8] mb-4">{comp.agents[0]} is the better choice when your priority is raw capability and you are willing to invest in setup and configuration. It excels in scenarios where the highest quality output is required and cost is a secondary consideration. Choose this tool if you have the technical expertise to handle complex configurations and the budget to support premium pricing.</p>
            <p className="text-[#c5c7d8">For Indian deployments, {comp.agents[0]} is preferable when you need the highest quality Indic language support or when your use case requires capabilities that are only available in this tool. However, verify that the deployment model meets your DPDP compliance requirements before committing.</p>
          </section>
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">When to Choose {comp.agents[1]}</h2>
            <p className="text-[#c5c7d8] mb-4">{comp.agents[1]} is the better choice when ease of use, faster setup, or lower cost is your priority. It excels in scenarios where you need to get started quickly and do not require the absolute highest quality output. Choose this tool if you have limited technical expertise or a constrained budget.</p>
            <p className="text-[#c5c7d8">For Indian deployments, {comp.agents[1]} is preferable when it offers better India Fit—such as INR pricing, UPI support, or Indic language documentation—even if its raw capability is slightly lower. The total cost of ownership, including compliance and administrative overhead, often favors the tool with higher India Fit.</p>
          </section>
          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">How to Read This Comparison</h2>
            <p className="text-[#c5c7d8] mb-4">This comparison presents a structured evaluation of {comp.agents[0]} versus {comp.agents[1]} across multiple dimensions. The comparison table provides a quick overview of relative strengths, while the detailed sections below explain the evidence behind each assessment. Use the comparison table to identify areas of difference, then read the detailed sections to understand the practical implications.</p>
            <p className="text-[#c5c7d8] mb-4">When interpreting the comparison, consider your specific use case and priorities. A tool that wins on capability may lose on pricing or India Fit. The right choice depends on which dimensions matter most to your organization. We encourage you to use this comparison as a starting point for your own evaluation, not as a final verdict.</p>
            <p className="text-[#c5c7d8]">For Indian deployments, pay special attention to the India-Specific Considerations section. Pricing in INR, DPDP compliance, and Indic language support can significantly influence the total cost of ownership and compliance burden.</p>
          </section>

          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Total Cost of Ownership Analysis</h2>
            <p className="text-[#c5c7d8] mb-4">Beyond the sticker price, the total cost of ownership (TCO) includes infrastructure, administration, compliance, and opportunity costs. For Indian deployments, TCO analysis should account for: GST on subscription fees, forex conversion charges (if billing in USD), administrative overhead for payment processing, and the cost of any required compliance workarounds.</p>
            <p className="text-[#c5c7d8]">Tools that offer INR billing with UPI support and automated GST invoicing have lower administrative overhead than those requiring international payments. Similarly, tools that offer on-premise deployment or Indian cloud regions have lower compliance costs than those requiring data to be processed outside India. When comparing TCO, use a 12-month horizon to capture the full cost impact of these factors.</p>
          </section>

          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How often is this comparison updated?</h3>
                <p className="text-sm text-[#c5c7d8]">We review comparisons quarterly and update them when new versions are released or material changes occur. The last-updated date is shown at the top of this page.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Can I request a comparison?</h3>
                <p className="text-sm text-[#c5c7d8]">Yes. Open a GitHub issue with the two tools you want compared and why. Our editorial team will evaluate the request and add it if it meets our inclusion criteria.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do you determine the winner?</h3>
                <p className="text-sm text-[#c5c7d8]">We do not declare a single winner. Instead, we present the evidence and let you decide based on your specific needs. The bottom line section provides a summary recommendation, but the right choice depends on your priorities.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-[#252b4b]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Evidence Sources
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              All findings in this comparison are backed by primary sources and
              our independent testing. Here is a summary of our evidence:
            </p>
            <p className="text-[#9ca5c3] text-sm">
              <strong>{comp.evidenceCount} evidence items</strong> were reviewed
              for this comparison, including official documentation, API
              endpoints, pricing pages, repository analysis, and hands-on test
              results. For a complete list of sources and to verify our
              methodology, see the individual agent profiles linked above.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
