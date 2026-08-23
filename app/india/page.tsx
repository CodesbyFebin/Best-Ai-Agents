import { Metadata } from "next";
import { agents } from "@/data/agents";

export const metadata: Metadata = {
  title: "AI Agents in India — INR Pricing, UPI Support & DPDP Compliance | BestAIAgent.in",
  description:
    "Find DPDP-compliant AI agents with INR pricing, UPI support, GST invoicing, and India-first deployment for Indian startups and enterprises.",
  keywords: [
    "BestAIAgent India",
    "BestAIAgent INR pricing",
    "BestAIAgent UPI support",
    "BestAIAgent DPDP compliance",
    "BestAIAgent Sarvam AI",
    "BestAIAgent Krutrim",
    "BestAIAgent Bhashini",
    "BestAIAgent Hindi agents",
    "BestAIAgent Hinglish support",
    "BestAIAgent Indic models",
    "BestAIAgent voice agents",
    "BestAIAgent sub-second latency",
    "BestAIAgent India-first",
    "BestAIAgent sovereign AI",
    "BestAIAgent on-premise agents",
    "BestAIAgent air-gapped agents",
    "BestAIAgent data residency",
    "BestAIAgent GST invoicing",
    "BestAIAgent Indian startups",
    "BestAIAgent enterprise India",
    "BestAIAgent free tools India",
    "BestAIAgent developer India",
    "BestAIAgent tech ecosystem",
    "BestAIAgent regional languages",
    "BestAIAgent privacy-first",
    "BestAIAgent payment support UPI",
    "BestAIAgent local deployment India",
    "BestAIAgent DPDP Act compliance",
    "BestAIAgent consent management",
    "BestAIAgent biometric data",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/india/",
  },
  openGraph: {
    title: "AI Agents in India — BestAIAgent.in",
    description:
      "DPDP-compliant AI agents with INR pricing, UPI support, and India-first deployment.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the AI agent development cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs range from free tools (0 INR) to custom integrated systems (4-12 lakh INR). We provide transparent, INR-denominated pricing with date-last-verified stamps.",
      },
    },
    {
      "@type": "Question",
      name: "Does Cursor offer INR pricing and India billing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Cursor supports UPI payments, GST invoicing, and INR billing with verified DPDP compliance.",
      },
    },
    {
      "@type": "Question",
      name: "How does the DPDP Act affect AI voice agent deployments in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DPDP Act requires explicit consent for voice data, biometric classification, and data fiduciary security with stringent consent processing rules.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI agents support UPI payments and GST invoicing in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verified agents with UPI support and GST invoicing include Cursor, Claude Code, and ChatGPT with confirmed payment support under the Payment Settlement Systems Act.",
      },
    },
    {
      "@type": "Question",
      name: "Are there DPDP compliant enterprise coding agents available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain a verified list of DPDP-compliant agents including Sarvam AI, Krutrim-2, and Bhashini-based tools with compliance scores reflecting data fiduciary security.",
      },
    },
  ],
};

export default function IndiaPage() {
  const indiaAgents = agents
    .filter((a) => a.indiaFit >= 8.0)
    .sort((a, b) => b.indiaFit - a.indiaFit)
    .slice(0, 18);

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs text-orange-300 mb-4">
                🇮🇳 Proudly Built in India
              </div>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                AI Agents for the Indian Market
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                Find DPDP-compliant AI agents with INR pricing, UPI support,
                GST invoicing, and India-first deployment. Evidence-backed
                scores for Indian startups, enterprises, and developers.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-[#8b5cf6]">69+</div>
                <div className="text-xs text-[#9ca5c3] mt-1">
                  Curated Agents
                </div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-[#8b5cf6]">
                  30+
                </div>
                <div className="text-xs text-[#9ca5c3] mt-1">
                  Indic Models
                </div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-[#8b5cf6]">
                  100%
                </div>
                <div className="text-xs text-[#9ca5c3] mt-1">
                  Evidence-backed
                </div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-[#8b5cf6]">3+</div>
                <div className="text-xs text-[#9ca5c3] mt-1">
                  Indian Startups
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Why Indian AI Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.5)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-lg font-semibold text-[#f7f7ff] mb-2">
                  🇮🇳 Made in India
                </h3>
                <p className="text-sm text-[#9ca5c3]">
                  Discover 1,000+ AI agents and tools proudly built in India,
                  from startups to enterprises, with verified DPDP compliance.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.5)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-lg font-semibold text-[#f7f7ff] mb-2">
                  💰 INR Pricing & UPI
                </h3>
                <p className="text-sm text-[#9ca5c3]">
                  INR-denominated pricing with UPI payment support, GST
                  invoicing, and Payment Settlement Systems Act compliance.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.5)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-lg font-semibold text-[#f7f7ff] mb-2">
                  🔒 DPDP First
                </h3>
                <p className="text-sm text-[#9ca5c3]">
                  Data residency compliance with Section 16 of the DPDP Act,
                  consent management, and biometric data classification.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.5)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h3 className="text-lg font-semibold text-[#f7f7ff] mb-2">
                  🗣️ Indic Languages
                </h3>
                <p className="text-sm text-[#9ca5c3]">
                  Hindi, Hinglish, Tamil, Telugu support with sub-second
                  latency voice agents and Bhashini translation verified.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="sectionHead mb-6">
              <h2 className="text-2xl font-bold text-[#f7f7ff]">
                Top AI Agents for India (High India Fit)
              </h2>
            </div>
            <div className="agentGrid">
              {indiaAgents.map((agent) => (
                <article key={agent.slug} className="agentCard">
                  <div className="cardTop">
                    <span className={`agentLogo ${agent.tone}`}>
                      {agent.name.slice(0, 2)}
                    </span>
                    <span className="badge badge-india">🇮🇳</span>
                  </div>
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
                  <a href={`/agents/${agent.slug}/`} className="profile">
                    View evidence profile <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Frequently Asked Questions: India &amp; DPDP
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the AI agent development cost in India?",
                  a: "Costs range from free tools (0 INR) to custom integrated systems (4-12 lakh INR). We provide transparent, INR-denominated pricing.",
                },
                {
                  q: "Does Cursor offer INR pricing and India billing?",
                  a: "Yes, Cursor supports UPI payments, GST invoicing, and INR billing with verified DPDP compliance.",
                },
                {
                  q: "How does the DPDP Act affect AI voice agent deployments in India?",
                  a: "The DPDP Act requires explicit consent for voice data, biometric classification, and data fiduciary security.",
                },
                {
                  q: "Which AI agents support UPI payments and GST invoicing in India?",
                  a: "Verified agents include Cursor, Claude Code, and ChatGPT with confirmed UPI support and GST invoicing.",
                },
                {
                  q: "Are there DPDP compliant enterprise coding agents available?",
                  a: "We maintain verified DPDP-compliant agents including Sarvam AI, Krutrim-2, and Bhashini-based tools.",
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

          <div
            className="rounded-xl p-6 border text-center"
            style={{
              backgroundColor: "rgba(13, 16, 37, 0.8)",
              borderColor: "rgba(139, 92, 246, 0.3)",
            }}
          >
            <p className="text-[#c5c7d8] mb-4">
              Explore our full directory of verified AI agents for India.
            </p>
            <a
              href="/agents/"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition"
            >
              Browse All Agents
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
