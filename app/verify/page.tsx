import { Metadata } from "next";
import { paaClusters, longTailKeywords } from "@/data/keywords";

export const metadata: Metadata = {
  title: "AI Agent Verification Guide — How We Verify Sources & Identity | BestAIAgent.in",
  description:
    "How to verify AI agent source code, identity, claims, and open-source status. Evidence-backed verification methodology with primary documentation links.",
  keywords: [
    "BestAIAgent verified sources over hype",
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
  ],
  alternates: {
    canonical: "https://bestaiagent.in/verify/",
  },
  openGraph: {
    title: "AI Agent Verification Guide — BestAIAgent.in",
    description:
      "How to verify AI agent source code, identity, claims, and open-source status.",
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
        text: "We link directly to official GitHub repositories, verify commit history, check documentation, and maintain an audit trail for every listing.",
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
                BestAIAgent.in rejects fabricated claims. Here's how we verify
                every AI agent listing with evidence-first methodology and
                primary source documentation links.
              </p>
            </div>
          </div>

          <section className="space-y-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
                Our Evidence-First Evaluation Methodology
              </h2>
              <p className="text-[#c5c7d8] mb-4">
                Every score on BestAIAgent.in is backed by verifiable data. We
                don't accept marketing copy—only traceable, primary-source
                evidence. Here's our process.
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
                <p className="text-[#9ca5c3] text-sm">
                  We gather official documentation, repository links, pricing
                  pages, API endpoints, and release notes. We reject speculative
                  checkboxes and unknown fields.
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
                <p className="text-[#9ca5c3] text-sm">
                  We audit SHA-256 source code hashes, verify commit history,
                  check license compliance, and confirm official website
                  hyperlinks.
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
                <p className="text-[#9ca5c3] text-sm">
                  We run hands-on tests, benchmark against competitors (e.g.,
                  Claude Cursor), and verify feature claims with evidence.
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
                <p className="text-[#9ca5c3] text-sm">
                  Each claim receives a last-verified timestamp. Stale data is
                  clearly marked—we never let speculative pricing go unchallenged.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Frequently Asked Questions: Verification & Identity
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How to verify AI agent source code and identity?",
                  a: "We link directly to official GitHub repositories, verify commit history, and check for official documentation. We require primary source URLs and maintain an audit trail for every claim.",
                },
                {
                  q: "Is BestAIAgent a pay-to-rank directory?",
                  a: "No. BestAIAgent.in does not accept paid placements, sponsored content, or vendor payments. Every listing is evaluated independently against our published methodology.",
                },
                {
                  q: "How does BestAIAgent verify AI agent claims?",
                  a: "We cross-reference official docs, run hands-on tests, verify API endpoints, and audit pricing with confidence scores and last-verified timestamps.",
                },
                {
                  q: "Are AI agent user counts verified or fabricated?",
                  a: "We reject fabricated user counts. Only numbers traceable to official sources (GitHub stars, API docs, public pricing) are reported.",
                },
                {
                  q: "What makes BestAIAgent different from generic AI tool lists?",
                  a: "We don't accept paid placements, verify every claim, display source links, and maintain transparent editorial scores with evidence backing.",
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

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Key Verification Principles
            </h2>
            <ul className="space-y-3">
              {[
                "No pay-to-rank: Every listing is evaluated equally",
                "Sources are shown: You can verify every claim",
                "Audit trail: SHA-256 hash, repository links, documentation",
                "Evidence-first: Synthetic or unverifiable scoring is rejected",
                "Radical transparency: Confidence scores and timestamps displayed",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#c5c7d8]"
                >
                  <span className="text-[#38d996] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

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
