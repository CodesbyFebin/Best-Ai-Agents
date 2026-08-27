import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Methodology — How We Score AI Agents with Evidence-Backed Transparency | BestAIAgent.in",
  description:
    "Every score on BestAIAgent.in is backed by evidence and a transparent methodology. Learn how we evaluate AI agents using primary sources, SHA-256 verification, and India Fit scoring. No pay-to-rank. Radical transparency.",
  keywords: [
    "BestAIAgent methodology",
    "how we score AI agents",
    "evidence-backed AI scoring",
    "AI agent evaluation framework",
    "transparent AI ranking methodology",
    "India Fit scoring",
    "SHA-256 source verification",
    "no pay-to-rank evaluation",
    "AI agent audit trail",
    "primary source verification AI",
    "AI agent confidence score",
    "last-verified timestamp AI",
    "AI agent scoring rubric",
    "evidence-first evaluation",
    "AI agent verification process",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/methodology/",
  },
};

export default function MethodologyPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Trust Layer</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                Methodology
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                Every score on BestAIAgent.in is backed by evidence and a
                transparent methodology. We don&apos;t accept vendor marketing
                copy—only traceable, primary-source evidence. Here&apos;s exactly
                how we evaluate AI agents, from initial audit to ongoing refresh.
              </p>
            </div>
          </div>

          {/* METRICS */}
          <section className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">40%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Capability Weight</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">20%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Ease of Use Weight</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">15%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Pricing Weight</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">15%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">India Fit Weight</div>
              </div>
            </div>
          </section>

          {/* SCORING FRAMEWORK */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Scoring Framework
            </h2>
            <p className="text-[#c5c7d8] mb-6">
              Our scoring framework is a weighted rubric that balances technical
              capability, usability, pricing transparency, India-specific
              considerations, and evidence quality. Each dimension is scored
              independently, then combined into a single composite score. The
              weights reflect what matters most to our audience: developers,
              businesses, and teams making evidence-based procurement decisions.
            </p>
            <div className="space-y-6">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  1. Capability Assessment (40%)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Does the agent accomplish its stated purpose? We measure this
                  through standardized benchmarks, real-world testing, and feature
                  coverage analysis. For coding agents, we test repository-scale
                  implementation, multi-file refactoring, and debugging accuracy.
                  For voice AI, we test transcription accuracy across Indian
                  languages and measure latency under real network conditions.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Capability is the most heavily weighted dimension because it
                  directly determines whether an agent is useful for its intended
                  purpose. An agent that fails at its core function scores poorly
                  regardless of its pricing or compliance status. We test
                  capability in isolation to avoid confounding factors.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  2. Ease of Use (20%)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  How easy is it to set up and operate? We consider
                  documentation quality, UI/UX design, onboarding experience, and
                  the learning curve for new users. An agent with excellent
                  capability but poor documentation will score lower than one with
                  slightly less capability but excellent usability.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  For MCP servers, we specifically test setup complexity, error
                  messages, configuration file clarity, and community support
                  responsiveness. We measure the time from installation to first
                  successful tool call, and we document any friction points that
                  could slow down adoption.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  3. Pricing Transparency (15%)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Is pricing clear, accessible, and fair? We evaluate whether
                  pricing is publicly available, whether it includes
                  India-specific (INR) context, and whether there are hidden fees
                  or usage-based surprises. Agents with opaque enterprise pricing
                  that requires a sales call score lower than those with
                  transparent self-serve pricing.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  For Indian users, we specifically check for UPI payment support,
                  GST invoicing automation, and INR-denominated pricing. We also
                  evaluate free tier availability and trial periods, as these
                  significantly impact adoption for startups and individual
                  developers.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  4. India Fit (15%)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  How well does this agent serve Indian users? India Fit is
                  calculated based on observable signals: INR pricing, Indian
                  language support, local deployment options, and DPDP
                  compliance. This dimension ensures that our recommendations are
                  relevant to the Indian market, not just global averages.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  India Fit is particularly important for MCP servers, where data
                  residency and compliance can significantly impact deployment
                  options. An MCP server that offers on-premise deployment in
                  India will score higher than one that only offers cloud
                  deployment in US regions.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  5. Evidence Quality (10%)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  How reliable are the sources behind our evaluation? We score
                  evidence quality based on the number of independent sources,
                  their proximity to the original claim, and their recency. A
                  claim backed by official documentation and verified test
                  results scores higher than one based on a single blog post.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Evidence quality acts as a confidence modifier. Even if an
                  agent scores well on capability and usability, low evidence
                  quality will reduce the overall score. This prevents us from
                  over-ranking agents that make bold claims without providing
                  verifiable proof.
                </p>
              </div>
            </div>
          </section>

          {/* INDIA FIT SCORING */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              India Fit Scoring
            </h2>
            <p className="text-[#c5c7d8] mb-6">
              India Fit is a unique scoring dimension that evaluates how well an
              AI agent serves the Indian market. It&apos;s not just about
              availability—it&apos;s about practical readiness for Indian users,
              businesses, and regulatory requirements. Here&apos;s how we
              calculate it:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  ₹ Pricing (30% of India Fit)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Does the agent offer INR-denominated pricing? Can Indian users
                  pay via UPI, net banking, or other local methods? Is GST
                  invoicing available? We verify pricing pages directly and
                  cross-reference with official payment processor documentation.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Agents that only accept USD payments or require international
                  credit cards receive lower scores. Agents that offer INR pricing
                  with UPI support and automated GST invoicing receive the highest
                  scores in this category.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  अ Language (25% of India Fit)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Does the agent support Hindi, Hinglish, Tamil, Telugu, and
                  other Indian languages? We test language support with native
                  speakers and evaluate both input understanding and output
                  quality. Documentation in Indian languages is a bonus.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  For voice AI agents, we specifically test accent recognition
                  for Indian English, Hindi, and regional language accents. MCP
                  servers that integrate with Bhashini or other Indian language
                  APIs receive higher scores.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  ⌂ Deployment (25% of India Fit)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Can the agent be deployed in India? We evaluate cloud region
                  availability (AWS Mumbai, GCP Hyderabad, Azure Pune), on-premise
                  deployment options, and air-gapped configurations for sensitive
                  environments.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  MCP servers that offer local deployment via Docker, pip install,
                  or npm receive higher scores. Agents that require cloud
                  connectivity to US-only endpoints receive lower scores due to
                  latency and data residency concerns.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  ◈ Compliance (20% of India Fit)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Does the agent comply with Indian regulations? We evaluate DPDP
                  Act compliance, data localization requirements, consent
                  management mechanisms, and audit logging capabilities. Agents
                  with SOC 2 or ISO 27001 certifications receive bonus points.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  For MCP servers, compliance is critical because they often
                  handle sensitive data. A MCP server that logs all tool calls,
                  supports data retention policies, and offers audit trails will
                  score higher than one without these features.
                </p>
              </div>
            </div>

            {/* SCORING SCALE TABLE */}
            <h3 className="text-xl font-semibold text-[#f7f7ff] mb-4">
              India Fit Scoring Scale
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#252b4b]">
                    <th className="text-left p-3 text-[#9ca5c3]">Score</th>
                    <th className="text-left p-3 text-[#9ca5c3]">Label</th>
                    <th className="text-left p-3 text-[#9ca5c3]">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#252b4b]/30">
                    <td className="p-3 text-[#c5c7d8]">9.0–10.0</td>
                    <td className="p-3 text-[#38d996] font-semibold">Excellent</td>
                    <td className="p-3 text-[#c5c7d8]">
                      Optimized for Indian markets. Full INR pricing, local
                      deployment, DPDP compliant.
                    </td>
                  </tr>
                  <tr className="border-b border-[#252b4b]/30">
                    <td className="p-3 text-[#c5c7d8]">7.5–8.9</td>
                    <td className="p-3 text-[#3b82f6] font-semibold">Strong</td>
                    <td className="p-3 text-[#c5c7d8]">
                      Good availability with some considerations. May lack INR
                      pricing or local deployment.
                    </td>
                  </tr>
                  <tr className="border-b border-[#252b4b]/30">
                    <td className="p-3 text-[#c5c7d8]">6.5–7.4</td>
                    <td className="p-3 text-[#f59e0b] font-semibold">Moderate</td>
                    <td className="p-3 text-[#c5c7d8]">
                      Usable but with notable friction. May require workarounds
                      for Indian users.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#c5c7d8]">Below 6.5</td>
                    <td className="p-3 text-[#ef4444] font-semibold">Limited</td>
                    <td className="p-3 text-[#c5c7d8]">
                      Significant barriers for Indian users. Not recommended
                      without substantial adaptation.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* VERIFICATION PROCESS */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Verification Process
            </h2>
            <p className="text-[#c5c7d8] mb-6">
              Our verification process is a four-phase cycle that ensures every
              score is backed by evidence. This process is continuous—agents are
              re-evaluated when material changes occur, not just on a fixed
              schedule.
            </p>
            <div className="space-y-6">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Phase 1: Collect
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  We gather official documentation, releases, policies, pricing
                  pages, and hands-on observations. Every source is catalogued
                  with retrieval date, region, and confidence score. We reject
                  speculative checkboxes and unknown fields—if we can&apos;t
                  verify it, we don&apos;t include it.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  For MCP servers, this phase includes inspecting the transport
                  configuration, verifying stdio vs HTTP implementations, and
                  testing sandboxing claims in Docker isolation. We also check
                  GitHub repositories for commit frequency, issue resolution time,
                  and maintainer responsiveness.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Phase 2: Verify
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Claims receive a source, retrieval date, region, confidence
                  and review status. We cross-reference multiple sources to ensure
                  consistency. If two sources conflict, we investigate further and
                  note the discrepancy in the agent profile.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  For pricing claims, we verify against official pricing pages
                  and, where possible, test with actual purchases or free tier
                  signups. For capability claims, we run hands-on tests in
                  controlled environments and document the results.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Phase 3: Evaluate
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Products are assessed against our published rubric with known
                  limitations. We document what we tested, how we tested it, and
                  what we found. This transparency allows anyone to understand
                  exactly how a score was derived and to challenge it if they
                  disagree.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Evaluation is performed by at least two independent reviewers
                  to minimize individual bias. Scores are compared, and any
                  significant discrepancies are resolved through discussion and
                  additional testing.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Phase 4: Refresh
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Material changes trigger review; stale commercial claims are
                  clearly marked. We monitor GitHub releases, pricing page
                  updates, documentation revisions, and community feedback. When
                  a change is detected, we initiate a targeted review of the
                  affected dimensions.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Our refresh schedule varies by category: MCP infrastructure is
                  checked monthly, pricing quarterly, and compliance status
                  whenever regulatory changes occur. Each profile shows its
                  last-verified date so you can assess the freshness of the data.
                </p>
              </div>
            </div>
          </section>

          {/* HOW TO CHALLENGE A SCORE */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">How to Challenge a Score</h2>
            <p className="text-[#c5c7d8] mb-6">
              We believe that scores should be challengeable. If you are a vendor who believes your agent has been scored incorrectly, or a user who has evidence that contradicts our assessment, you can submit a challenge through our public GitHub repository.
            </p>
            <div
              className="rounded-xl p-6 border mb-6"
              style={{ backgroundColor: "rgba(13, 16, 37, 0.8)", borderColor: "rgba(139, 92, 246, 0.3)" }}
            >
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Challenge Process</h3>
              <p className="text-[#9ca5c3] text-sm mb-3">
                To challenge a score, open a GitHub issue using the "Score Challenge" template. Include the agent name, the specific score dimension you are challenging, the evidence supporting your claim, and any relevant documentation links. Our editorial team reviews all challenges within 5 business days.
              </p>
              <p className="text-[#9ca5c3] text-sm">
                If the challenge is validated, we update the score and publish a changelog entry explaining the change. If the challenge is not validated, we provide a detailed explanation of why the original score stands. All challenge resolutions are public, creating an audit trail of score changes over time.
              </p>
            </div>
            <div
              className="rounded-xl p-6 border"
              style={{ backgroundColor: "rgba(13, 16, 37, 0.8)", borderColor: "rgba(139, 92, 246, 0.3)" }}
            >
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">What Makes a Valid Challenge</h3>
              <p className="text-[#9ca5c3] text-sm mb-3">
                A valid challenge must include primary-source evidence: official documentation, test results, or direct observation. Opinions, marketing materials, and anonymous claims are not considered sufficient evidence. The burden of proof is on the challenger to demonstrate that the current score does not reflect reality.
              </p>
              <p className="text-[#9ca5c3] text-sm">
                We particularly welcome challenges related to India Fit scores, where local knowledge may reveal nuances that our team missed. If you know that an agent supports Hindi but our evaluation missed it, please let us know with evidence.
              </p>
            </div>
          </section>

          {/* AUDIT TRAIL */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Audit Trail</h2>
            <p className="text-[#c5c7d8] mb-6">
              Every score change is recorded in a public audit trail. This trail includes the previous score, the new score, the reason for the change, the evidence that triggered it, and the date of the change. The audit trail is available on our GitHub repository and is updated in real-time.
            </p>
            <div
              className="rounded-xl p-6 border mb-6"
              style={{ backgroundColor: "rgba(13, 16, 37, 0.8)", borderColor: "rgba(139, 92, 246, 0.3)" }}
            >
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Six-Month Independent Audit</h3>
              <p className="text-[#9ca5c3] text-sm mb-3">
                Every six months, an independent reviewer conducts a comprehensive audit of our methodology and a sample of scores. The auditor is selected from the community and has no financial relationship with any vendor listed on our site. The audit examines whether our scoring rubric is being applied consistently, whether evidence is being evaluated fairly, and whether our weights remain appropriate.
              </p>
              <p className="text-[#9ca5c3] text-sm">
                Audit results are published publicly, including any recommendations for methodology changes. If the audit identifies systemic issues, we update our rubric and re-evaluate all affected profiles within 90 days. This ensures that our methodology evolves with the market and remains trustworthy over time.
              </p>
            </div>
            <div
              className="rounded-xl p-6 border"
              style={{ backgroundColor: "rgba(13, 16, 37, 0.8)", borderColor: "rgba(139, 92, 246, 0.3)" }}
            >
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Verification Log Format</h3>
              <p className="text-[#9ca5c3] text-sm mb-3">
                Our public verification log records every evidence-gathering activity. Each entry includes the source URL, retrieval date, geographic region, confidence score, and review status. For code-based evaluations, we include SHA-256 commit hashes so results can be reproduced against specific versions. For pricing evaluations, we include screenshots of pricing pages with timestamps.
              </p>
              <p className="text-[#9ca5c3] text-sm">
                The log is updated monthly and is available as a CSV download from our GitHub releases page. Researchers, analysts, and enterprises use this log to build their own evaluation tools or to verify our findings independently.
              </p>
            </div>
          </section>

          {/* CONFIDENCE SCORES */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Confidence Scores</h2>
            <p className="text-[#c5c7d8] mb-6">
              Every profile includes a confidence indicator that reflects the strength and recency of the underlying evidence. This indicator helps you assess how much weight to give a particular score.
            </p>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)", borderColor: "rgba(56, 217, 150, 0.3)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#38d996] font-bold">High Confidence</span>
                  <span className="text-xs text-[#9ca5c3]">8+ evidence items, verified within 30 days</span>
                </div>
                <p className="text-sm text-[#9ca5c3]">Score is based on multiple independent sources, recent hands-on testing, and official documentation. Suitable for procurement decisions.</p>
              </div>
              <div className="rounded-xl p-4 border" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)", borderColor: "rgba(59, 130, 246, 0.3)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#3b82f6] font-bold">Medium Confidence</span>
                  <span className="text-xs text-[#9ca5c3]">4–7 evidence items, verified within 90 days</span>
                </div>
                <p className="text-sm text-[#9ca5c3]">Score is based on documentation review and limited testing. May not reflect the latest product changes. Verify critical claims independently.</p>
              </div>
              <div className="rounded-xl p-4 border" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)", borderColor: "rgba(245, 158, 11, 0.3)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#f59e0b] font-bold">Low Confidence</span>
                  <span className="text-xs text-[#9ca5c3]">1–3 evidence items, verified over 90 days ago</span>
                </div>
                <p className="text-sm text-[#9ca5c3]">Score is based on limited or stale evidence. Flagged for re-evaluation. Not recommended for procurement decisions without independent verification.</p>
              </div>
            </div>
          </section>

          {/* NOTE ON RANKINGS */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Note on Rankings
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              We do not maintain a single &quot;best of&quot; ranking. Instead,
              each agent has a score within the context of its category and
              intended use case. The &quot;right&quot; agent depends on your
              specific needs, budget, and constraints. A coding agent that scores
              9.5/10 for repository-scale implementation may be the wrong choice
              for a team that needs strong MCP integration and India-specific
              compliance.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Our scoring system is designed to help you make informed trade-offs,
              not to declare a single winner. We encourage you to use our
              comparison tools to build a side-by-side matrix of the agents that
              matter to your specific use case.
            </p>
            <p className="text-[#c5c7d8]">
              If you have questions about our methodology or would like to
              suggest an improvement, please{" "}
              <a href="/contact/" className="text-[#8b5cf6] hover:underline">
                contact us
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/CodesbyFebin/bestaiagent.in/issues"
                className="text-[#8b5cf6] hover:underline"
              >
                open a GitHub issue
              </a>
               .
            </p>
            <p className="text-[#c5c7d8]">
              Our methodology is a living document that evolves with the AI landscape. We welcome feedback from researchers, practitioners, and users who can help us improve our evaluation framework. If you have suggestions for how we can make our methodology more rigorous, more transparent, or more useful, please reach out through our GitHub repository or contact us directly at methodology@bestaiagent.in.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
