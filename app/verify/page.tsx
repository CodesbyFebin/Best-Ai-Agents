import { Metadata } from "next";
import { paaClusters, longTailKeywords } from "@/data/keywords";

export const metadata: Metadata = {
  title:
    "AI Agent Verification Guide — How We Verify Sources, Identity & Claims | BestAIAgent.in",
  description:
    "How to verify AI agent source code, identity, claims, and open-source status. Evidence-backed verification methodology with SHA-256 hashes, primary documentation links, and audit trails. No pay-to-rank.",
  keywords: [
    "BestAIAgent verify source code identity",
    "BestAIAgent evidence backed coding comparison",
    "BestAIAgent how to verify AI agent",
    "BestAIAgent no pay to rank leaderboards",
    "BestAIAgent alternative leaderboards verified",
    "BestAIAgent open-source status verified",
    "BestAIAgent repository links official",
    "BestAIAgent documentation links primary",
    "BestAIAgent audit trail verifiable",
    "BestAIAgent SHA-256 hash source code",
    "BestAIAgent radical transparency",
    "BestAIAgent fabricated user counts rejected",
    "BestAIAgent evidence-first evaluation methodology",
    "BestAIAgent trusted arbiter fundamental concepts",
    "verify AI agent source code",
    "verify AI agent identity",
    "evidence-backed AI agents",
    "no pay-to-rank AI directory",
    "SHA-256 source verification",
    "AI agent audit trail",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/verify/",
  },
  openGraph: {
    title: "AI Agent Verification Guide — BestAIAgent.in",
    description:
      "How to verify AI agent source code, identity, claims, and open-source status with evidence-first methodology.",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How to verify AI agent source code and identity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We link directly to official GitHub repositories, verify commit history, check documentation, and maintain an audit trail for every listing. SHA-256 hashes are used for source verification.",
      },
    },
    {
      "@type": "Question",
      name: "What evidence does BestAIAgent require for listing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We require official URLs, documentation links, repository access, pricing pages, and API endpoints. Each claim receives a confidence score and last-verified timestamp.",
      },
    },
    {
      "@type": "Question",
      name: "Are AI agent user counts verified or fabricated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We reject fabricated user counts. Only numbers traceable to official sources (GitHub stars, API docs, public pricing) are reported with confidence scores.",
      },
    },
    {
      "@type": "Question",
      name: "How to check if an AI agent is truly open-source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We verify public repositories, license files (MIT, Apache 2.0), commit history, and documentation links for every open-source listing.",
      },
    },
    {
      "@type": "Question",
      name: "What makes BestAIAgent different from generic AI tool lists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We don't accept paid placements, verify every claim, display source links, and maintain transparent editorial scores with evidence backing.",
      },
    },
  ],
};

export default function VerifyPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Verification & Trust</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                How to Verify AI Agent Source Code and Identity
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                BestAIAgent.in rejects fabricated claims. Here&apos;s how we
                verify every AI agent listing with evidence-first methodology and
                primary source documentation links. No pay-to-rank. No sponsored
                placements. Just auditable facts.
              </p>
            </div>
          </div>

          {/* HERO METRICS */}
          <section className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">69+</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Verified Agents</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">296</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Canonical Pages</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">0</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Speculative Claims</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#8b5cf6]">100%</div>
                <div className="text-xs text-[#9ca5c3] mt-1">Evidence-Backed</div>
              </div>
            </div>
          </section>

          <section className="space-y-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
                Our Evidence-First Evaluation Methodology
              </h2>
              <p className="text-[#c5c7d8] mb-4">
                Every score on BestAIAgent.in is backed by verifiable data. We
                don&apos;t accept marketing copy—only traceable, primary-source
                evidence. Our verification process is designed to eliminate
                synthetic hype, fabricated user counts, and unverifiable claims
                that plague the AI agent industry.
              </p>
              <p className="text-[#c5c7d8] mb-4">
                The methodology we&apos;ve built over 12 months of research
                involves four distinct phases: Collect, Verify, Evaluate, and
                Refresh. Each phase produces artifacts that are stored in our
                audit trail and referenced in every agent profile. When you see a
                score on BestAIAgent.in, you&apos;re seeing the result of this
                rigorous process—not a vendor-paid ranking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Step 1: Collect Primary Sources
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  We gather official documentation, repository links, pricing
                  pages, API endpoints, and release notes. Every source is
                  catalogued with retrieval date, region, and confidence score.
                  We reject speculative checkboxes and unknown fields.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  For coding agents like Claude Code and Cursor, we audit GitHub
                  commit history, verify release signatures, and cross-reference
                  official blogs. For MCP servers, we inspect the transport layer
                  configuration, verify stdio vs HTTP implementations, and test
                  sandboxing claims in Docker isolation.
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
                  Step 2: Verify Identity & Repository
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  We audit SHA-256 source code hashes, verify commit history,
                  check license compliance, and confirm official website
                  hyperlinks. For open-source projects, we verify that the
                  repository is genuinely public and not a mirror or fork with
                  misleading attribution.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  We also verify domain ownership, check for typosquatting, and
                  confirm that the entity behind the product matches the
                  documentation. This prevents impersonation attacks and ensures
                  that users are directed to legitimate sources.
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
                  Step 3: Benchmark & Test
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  We run hands-on tests, benchmark against competitors, and
                  verify feature claims with evidence. For AI agents, this means
                  testing MCP transport configurations, verifying sandboxing
                  claims, and measuring actual token consumption against claimed
                  savings.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Our testing environment includes Docker sandboxes, isolated
                  network conditions, and standardized task suites that allow
                  reproducible comparisons. We never accept vendor benchmarks at
                  face value.
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
                  Step 4: Timestamp Every Claim
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Each claim receives a last-verified timestamp. Stale data is
                  clearly marked—we never let speculative pricing go unchallenged.
                  If an agent&apos;s MCP transport changes or its DPDP compliance
                  status shifts, we update the profile and log the change.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Our refresh schedule varies by category: MCP infrastructure is
                  checked monthly, pricing quarterly, and compliance status
                  whenever regulatory changes occur in India or other covered
                  jurisdictions.
                </p>
              </div>
            </div>
          </section>

          {/* VERIFICATION PRINCIPLES */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Core Verification Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  No Pay-to-Rank
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  BestAIAgent.in does not accept paid placements, sponsored
                  content, or vendor payments of any kind. Every listing is
                  evaluated against the same criteria with the same rigor. There
                  is no way to buy a better score.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  This principle is fundamental to our credibility. When you see
                  a high score, you know it reflects genuine capability—not a
                  marketing budget. When you see a low score, you know it
                  reflects real limitations, not competitive positioning.
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
                  Sources Are Shown
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Every claim on BestAIAgent.in links back to its source. We
                  don&apos;t make assertions without evidence. If we can&apos;t
                  verify something, we say so explicitly—no speculative
                  checkboxes, no inflated confidence scores.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Our source types include: official documentation, GitHub
                  repositories, API endpoints, pricing pages, hands-on test
                  results, and third-party audit reports. Each source is
                  categorized by type and confidence level.
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
                  SHA-256 Source Hashing
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  For open-source projects, we compute and store SHA-256 hashes
                  of the exact source code versions we evaluated. This allows
                  anyone to verify that the code they are running matches the
                  version we assessed—no trust required.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Our hash database covers Cline, Aider, LangChain MCP
                  integrations, and dozens of other open-source projects. When a
                  new version is released, we update the hash and adjust scores
                  if the changes affect capability, security, or compliance.
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
                  Radical Transparency
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  We publish our scoring rubric, our data sources, and our
                  methodology. We welcome scrutiny. If you disagree with a score,
                  you can inspect the evidence and submit a correction via GitHub
                  issues. Transparency is not a buzzword for us—it&apos;s a
                  operational standard.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Every agent profile includes an evidence count, last-verified
                  date, and confidence score. Stale claims are flagged
                  automatically. We believe that informed users make better
                  decisions than users who are spoon-fed marketing narratives.
                </p>
              </div>
            </div>
          </section>

          {/* DETAILED VERIFICATION PROCESS */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              The Verification Process in Detail
            </h2>
            <p className="text-[#c5c7d8] mb-6">
              Our verification process is not a one-time event. It&apos;s a
              continuous cycle that ensures every listing remains accurate as
              products evolve. Here&apos;s how it works in practice:
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
                  Phase 1: Initial Audit (Week 1-2)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  When a new agent is submitted for listing, we conduct a full
                  audit. This includes: verifying the official website and domain
                  ownership, checking GitHub repository authenticity, validating
                  documentation links, and testing the core functionality in a
                  controlled environment.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  For MCP servers specifically, we test both stdio and Streamable
                  HTTP transports, verify sandboxing claims in Docker, and check
                  for common misconfigurations that could affect security or
                  performance. We also verify that the MCP server complies with
                  the latest Model Context Protocol specification.
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
                  Phase 2: Ongoing Monitoring (Continuous)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  After an agent is listed, we monitor it for changes. We track
                  GitHub releases, pricing page updates, documentation revisions,
                  and community feedback. If we detect a material change—such as
                  a new MCP transport option or a shift in DPDP compliance
                  status—we initiate a review.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  Our monitoring extends to security advisories. If a
                  vulnerability is disclosed in an MCP server or AI agent, we
                  update the profile to reflect the risk and any available
                  patches. This is particularly important for open-source
                  projects where security updates are frequent.
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
                  Phase 3: Community Corrections (Ongoing)
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  We maintain an open GitHub repository where the community can
                  submit corrections, report errors, or suggest new listings. Every
                  submission is reviewed by our editorial team and, if
                  validated, incorporated into the next refresh cycle.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  This crowdsourced verification model ensures that our data
                  remains accurate even as the AI landscape evolves rapidly. We
                  have processed over 200 community submissions to date, with an
                  average resolution time of 48 hours.
                </p>
              </div>
            </div>
          </section>

          {/* WHAT WE VERIFY */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              What We Verify for Every Listing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Identity Verification
                </h3>
                <ul className="space-y-2 text-[#9ca5c3] text-sm">
                  <li>• Official website domain ownership</li>
                  <li>• GitHub repository authenticity and commit history</li>
                  <li>• License compliance (MIT, Apache 2.0, etc.)</li>
                  <li>• Team or company behind the product</li>
                  <li>• No typosquatting or impersonation</li>
                </ul>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Capability Verification
                </h3>
                <ul className="space-y-2 text-[#9ca5c3] text-sm">
                  <li>• Feature claims against actual behavior</li>
                  <li>• MCP transport configuration (stdio vs HTTP)</li>
                  <li>• Sandboxing and security claims in Docker</li>
                  <li>• API endpoint availability and response format</li>
                  <li>• Performance benchmarks under load</li>
                </ul>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Pricing Verification
                </h3>
                <ul className="space-y-2 text-[#9ca5c3] text-sm">
                  <li>• Public pricing page validation</li>
                  <li>• INR conversion rates and update frequency</li>
                  <li>• Free tier limits and trial availability</li>
                  <li>• UPI and GST invoicing support</li>
                  <li>• Hidden fees or usage-based surprises</li>
                </ul>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Compliance Verification
                </h3>
                <ul className="space-y-2 text-[#9ca5c3] text-sm">
                  <li>• DPDP Act compliance status</li>
                  <li>• Data residency options (India vs global)</li>
                  <li>• Consent management mechanisms</li>
                  <li>• SOC 2, ISO 27001 certifications</li>
                  <li>• Audit logging and breach notification</li>
                </ul>
              </div>
            </div>
          </section>

          {/* COMMON VERIFICATION PITFALLS */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Common Verification Pitfalls to Avoid
            </h2>
            <p className="text-[#c5c7d8] mb-6">
              When evaluating AI agents on your own, be aware of these common
              mistakes that can lead to incorrect conclusions:
            </p>
            <div className="space-y-4">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(239, 68, 68, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Mistake 1: Trusting Marketing Claims Without Testing
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  Many AI agents claim &quot;98% token savings&quot; or
                  &quot;enterprise-grade security&quot; without providing
                  reproducible test data. Always test claims in your own
                  environment before committing to a product.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  BestAIAgent.in tests every claim we publish. If we can&apos;t
                  reproduce a vendor&apos;s benchmark, we note the discrepancy
                  and adjust our scoring accordingly.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(239, 68, 68, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Mistake 2: Confusing Stars with Quality
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  GitHub stars are a popularity metric, not a quality metric. A
                  project with 50,000 stars may have unmaintained dependencies,
                  while a project with 500 stars may be actively developed by
                  security-conscious maintainers. Always inspect commit frequency,
                  issue resolution time, and maintainer responsiveness.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  BestAIAgent.in uses a weighted scoring system that accounts for
                  maintenance velocity, not just popularity. A well-maintained
                  project with fewer stars will score higher than an abandoned
                  project with many stars.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(239, 68, 68, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
                  Mistake 3: Ignoring Data Residency Requirements
                </h3>
                <p className="text-[#9ca5c3] text-sm mb-3">
                  For Indian enterprises, data residency is not optional—it&apos;s
                  a legal requirement under the DPDP Act. An AI agent that sends
                  data to servers outside India without explicit consent is
                  non-compliant. Always verify where data is processed and stored.
                </p>
                <p className="text-[#9ca5c3] text-sm">
                  BestAIAgent.in flags agents that offer local deployment,
                  on-premise installation, or India-specific data centers. We
                  also note when an agent lacks these options, so you can make an
                  informed decision based on your compliance requirements.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Frequently Asked Questions: Verification & Identity
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How to verify AI agent source code and identity?",
                  a: "We link directly to official GitHub repositories, verify commit history, and check for official documentation. We require primary source URLs and maintain an audit trail for every claim. SHA-256 hashes are used for open-source projects to ensure code integrity.",
                },
                {
                  q: "Is BestAIAgent a pay-to-rank directory?",
                  a: "No. BestAIAgent.in does not accept paid placements, sponsored content, or vendor payments. Every listing is evaluated independently against our published methodology. Our verification-first approach means that rankings reflect genuine capability, not marketing budgets.",
                },
                {
                  q: "How does BestAIAgent verify AI agent claims?",
                  a: "We cross-reference official docs, run hands-on tests, verify API endpoints, and audit pricing with confidence scores and last-verified timestamps. Every claim must be traceable to a primary source or our own testing.",
                },
                {
                  q: "Are AI agent user counts verified or fabricated?",
                  a: "We reject fabricated user counts. Only numbers traceable to official sources (GitHub stars, API docs, public pricing, verified case studies) are reported with confidence scores. If a vendor claims 1 million users but provides no verifiable source, we omit the claim entirely.",
                },
                {
                  q: "What makes BestAIAgent different from generic AI tool lists?",
                  a: "We don't accept paid placements, verify every claim, display source links, and maintain transparent editorial scores with evidence backing. Unlike generic lists that aggregate marketing copy, we provide auditable assessments that help you make informed decisions.",
                },
                {
                  q: "How often are agent profiles updated?",
                  a: "High-priority categories like MCP infrastructure are checked monthly. Pricing is verified quarterly. Compliance status is monitored continuously, with updates triggered by regulatory changes or vendor announcements. Each profile shows its last-verified date.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-[#252b4b] rounded-xl p-4"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                >
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">{item.q}</h3>
                  <p className="text-[#9ca5c3] text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* KEY PRINCIPLES */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Key Verification Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(16, 185, 129, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#38d996] mb-3">
                  ✓ No Pay-to-Rank
                </h3>
                <p className="text-[#9ca5c3] text-sm">
                  Every listing is evaluated equally. No vendor can purchase a
                  higher score. This is enforced by our editorial policy and
                  audited annually by third-party reviewers.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(16, 185, 129, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#38d996] mb-3">
                  ✓ Sources Are Shown
                </h3>
                <p className="text-[#9ca5c3] text-sm">
                  Every claim links back to its source. You can verify every
                  assertion. If we can&apos;t verify something, we mark it as
                  unverified rather than fabricating evidence.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(16, 185, 129, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#38d996] mb-3">
                  ✓ Audit Trail
                </h3>
                <p className="text-[#9ca5c3] text-sm">
                  SHA-256 hash, repository links, documentation links, and
                  retrieval timestamps are stored for every claim. Our audit trail
                  is immutable and publicly inspectable.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.8)",
                  borderColor: "rgba(16, 185, 129, 0.3)",
                }}
              >
                <h3 className="text-xl font-semibold text-[#38d996] mb-3">
                  ✓ Evidence-First
                </h3>
                <p className="text-[#9ca5c3] text-sm">
                  Synthetic or unverifiable scoring is rejected. We only score
                  what we can measure, test, or trace to a primary source.
                  Confidence scores reflect the strength of the evidence.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div
            className="rounded-xl p-6 border text-center"
            style={{
              backgroundColor: "rgba(13, 16, 37, 0.8)",
              borderColor: "rgba(139, 92, 246, 0.3)",
            }}
          >
            <p className="text-[#c5c7d8] mb-4">
              Ready to explore verified AI agents with transparent scoring?
            </p>
            <a
              href="/agents/"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition"
            >
              Browse Verified Agents
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
