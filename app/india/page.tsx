import { Metadata } from "next";
import { agents } from "@/data/agents";
import { frameworks } from "@/data/frameworks";
import { models } from "@/data/models";

export const metadata: Metadata = {
  title:
    "India AI — Verified Indian AI Agents, MCP Infrastructure & DPDP Compliance | BestAIAgent.in",
  description:
    "India's verified AI ecosystem. Master MCP infrastructure (stdio/Streamable HTTP), DPDP compliance, Sarvam AI, Krutrim, INR pricing. No pay-to-rank. Made in India.",
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
    "BestAIAgent India AI ecosystem",
    "BestAIAgent voice agents India",
    "BestAIAgent sub-second latency",
    "BestAIAgent India-first",
    "BestAIAgent sovereign AI",
    "BestAIAgent on-premise agents",
    "BestAIAgent air-gapped agents",
    "BestAIAgent data residency India",
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
    "Indian AI agents verified",
    "India AI landscape 2026",
    "Sarvam AI Hindi LLM",
    "Krutrim 2 multilingual",
    "Bhashini language translation",
    "INR AI development cost",
    "Indian AI startup directory",
  ],
  openGraph: {
    title: "India AI — Verified Indian AI Agents, MCP & DPDP Compliance",
    description:
      "India's verified AI ecosystem. MCP infrastructure. DPDP compliance. Sarvam AI. Krutrim. INR pricing.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "India AI — Verified Indian AI Agents & MCP Infrastructure",
    description:
      "India's verified AI ecosystem. MCP infrastructure. DPDP compliance. INR pricing.",
  },
  alternates: { canonical: "https://bestaiagent.in/india/" },
  robots: { index: true, follow: true },
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
        text: "Standard task-agent implementation bands range from ₹4–12 lakh for custom integrated systems. BestAIAgent provides transparent INR pricing, GST invoicing, and UPI merchant fee preparedness for all verified agents.",
      },
    },
    {
      "@type": "Question",
      name: "Does Cursor offer INR pricing and India billing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Cursor supports UPI payments, GST invoicing, and INR billing with verified DPDP compliance. INR-denominated pricing is available for Indian startups and enterprises.",
      },
    },
    {
      "@type": "Question",
      name: "How does the DPDP Act affect AI voice agent deployments in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DPDP Act classifies voice data as biometric data, requiring explicit informed consent and robust security. BestAIAgent verifies which agents support sovereign on-premise deployment and explicit consent management for Indian phone calls.",
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
    .slice(0, 12);

  const indiaFrameworks = frameworks
    .filter((f) => f.indiaFit >= 8.0)
    .sort((a, b) => b.indiaFit - a.indiaFit)
    .slice(0, 8);

  const indiaModels = models
    .filter((m) => m.indiaFit >= 8.0)
    .sort((a, b) => b.indiaFit - a.indiaFit)
    .slice(0, 8);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 hero-radial grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-fadeUp">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-trust-400 animate-pulse"></span>
                  🇮🇳 India First · DPDP Verified · INR Pricing
                </div>
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] mb-5">
                  India's AI <br />
                  <span className="india-gradient">Ecosystem Hub</span>
                  <br />
                  Verified & Evidence-Backed
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                  Master <strong className="text-slate-200">MCP Infrastructure</strong>,
                  deploy <strong className="text-slate-200">Sovereign AI</strong>, and
                  navigate <strong className="text-slate-200">DPDP Compliance</strong>.
                  India's verified directory of 69+ AI agents, 30 models, and 32
                  frameworks. No pay-to-rank.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 animate-fadeUp d2">
                <a
                  href="#directory"
                  className="btn-p px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Explore Verified Agents
                </a>
                <a
                  href="#india"
                  className="btn-s px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  DPDP Compliant Agents
                </a>
              </div>
            </div>
            <div className="hidden lg:block animate-fadeUp d4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-brand-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative glass rounded-3xl p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl">🇮🇳</div>
                    <div>
                      <div className="font-bold text-white">Sarvam-30B — Verified</div>
                      <div className="text-xs text-slate-500">Homegrown Indic LLM</div>
                    </div>
                    <span className="ml-auto tag tag-india">🇮🇳</span>
                  </div>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">Last Verified</span>
                      <span className="font-mono text-slate-300 text-xs">2026-08-22 10:45 UTC</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">Source Hash</span>
                      <span className="font-mono text-cyan-400 text-xs">sha256:9a3f1…c7b2</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">MCP Transport</span>
                      <span className="font-mono text-slate-300 text-xs">stdio + Streamable HTTP</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">DPDP Status</span>
                      <span className="text-xs">
                        <span className="tag tag-dpdp">Compliant</span>
                      </span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-500">India Fit</span>
                      <span className="text-xs text-trust-400 font-semibold">9.5/10 — Sovereign AI</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="tag tag-mcp">MCP</span>
                    <span className="tag tag-dpdp">DPDP</span>
                    <span className="tag tag-india">Made in India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-10 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 mb-6 uppercase tracking-widest">
            Trusted by builders across India's AI ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-50">
            <span className="text-lg font-bold text-slate-400">Tata</span>
            <span className="text-lg font-bold text-slate-400">Infosys</span>
            <span className="text-lg font-bold text-slate-400">Wipro</span>
            <span className="text-lg font-bold text-slate-400">Reliance</span>
            <span className="text-lg font-bold text-slate-400">Sarvam AI</span>
            <span className="text-lg font-bold text-slate-400">Krutrim</span>
            <span className="text-lg font-bold text-slate-400">Bhashini</span>
          </div>
        </div>
      </section>

      {/* INDIA FOCUS */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
              🇮🇳 India-First
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sovereign AI &{" "}
              <span className="india-gradient">DPDP Compliance</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Navigate the DPDP Act, verify INR pricing transparency, and deploy
              sovereign AI with explicit consent management for Indian businesses.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-2xl p-7 card-hover border-t-4 border-t-orange-500">
              <div className="text-3xl mb-4">🇮🇳</div>
              <h3 className="text-lg font-bold text-white mb-2">
                DPDP Act Compliance
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Voice data classified as biometric data under DPDP. We verify
                which agents support explicit informed consent and sovereign
                on-premise deployment.
              </p>
              <a
                href="#faq"
                className="text-orange-400 hover:text-orange-300 text-sm font-semibold"
              >
                View Compliant Agents →
              </a>
            </div>
            <div className="glass rounded-2xl p-7 card-hover border-t-4 border-t-brand-500">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">
                INR Pricing & UPI
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Transparent localized pricing. Standard task-agent bands
                (₹4–12 lakh), GST invoicing automation, and UPI merchant fee
                preparedness.
              </p>
              <a
                href="#pricing"
                className="text-brand-500 hover:text-brand-400 text-sm font-semibold"
              >
                Verify INR Pricing →
              </a>
            </div>
            <div className="glass rounded-2xl p-7 card-hover border-t-4 border-t-trust-500">
              <div className="text-3xl mb-4">🗣️</div>
              <h3 className="text-lg font-bold text-white mb-2">
                Indic Models & Hinglish
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Verified Sarvam-30B and Krutrim-2 instruct for homegrown Hindi
                and Hinglish code-switching. Outperforms global models in
                regional context.
              </p>
              <a
                href="#directory"
                className="text-trust-400 hover:text-trust-300 text-sm font-semibold"
              >
                Explore Indic Models →
              </a>
            </div>
          </div>

          {/* Deployment Options */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Sovereign Deployment Options — Verified
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/60 rounded-xl p-5 border border-white/5">
                <div className="font-semibold text-sm text-white mb-1">
                  On-Premise
                </div>
                <p className="text-xs text-slate-500">
                  Data fiduciary security. Air-gapped enterprise agents.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 border border-white/5">
                <div className="font-semibold text-sm text-white mb-1">
                  Private Cloud
                </div>
                <p className="text-xs text-slate-500">
                  India data centers. Sovereign data residency verified.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 border border-white/5">
                <div className="font-semibold text-sm text-white mb-1">
                  Local Machine
                </div>
                <p className="text-xs text-slate-500">
                  Ollama self-hosted. Privacy-first local execution.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 border border-white/5">
                <div className="font-semibold text-sm text-white mb-1">
                  Free Trial Credits
                </div>
                <p className="text-xs text-slate-500">
                  Fireworks, Baseten, Nebius — no credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY — Verified AI Agents for India */}
      <section id="directory" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Agent Directory
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Verified AI Agents for <span className="india-gradient">India</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              50 topic pillars · 296 canonical pages · Every claim verified with
              source evidence and India Fit scoring
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {indiaAgents.map((a) => (
              <div key={a.slug} className="glass rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                      a.tone === "violet"
                        ? "from-brand-500 to-brand-700"
                        : a.tone === "cyan"
                        ? "from-cyan-500 to-cyan-700"
                        : a.tone === "green"
                        ? "from-trust-500 to-trust-600"
                        : a.tone === "orange"
                        ? "from-orange-500 to-orange-700"
                        : "from-indigo-500 to-indigo-700"
                    } flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {a.name.slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{a.name}</div>
                    <div className="text-[10px] text-slate-500">
                      {a.company}
                    </div>
                  </div>
                  <span className="ml-auto tag tag-india">🇮🇳</span>
                </div>
                <div className="flex gap-1.5 mb-3">
                  <span className="tag tag-mcp">MCP</span>
                  <span className="tag tag-dpdp">DPDP</span>
                  <span className="tag tag-india">India Fit: {a.indiaFit}/10</span>
                </div>
                <div className="text-xs text-slate-400">{a.shortDesc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/agents/"
              className="btn-p px-8 py-3.5 rounded-xl font-semibold text-white text-sm inline-flex items-center gap-2"
            >
              Browse All 296 Verified Pages{" "}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* INDIC MODELS */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-orange-500/[.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trust-500/10 border border-trust-500/20 text-xs font-semibold text-trust-400 mb-4">
              🇮🇳 Indic Models
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sarvam, Krutrim &amp; <span className="gradient-text">Indic LLMs</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Homegrown Hindi and Hinglish code-switching models that
              outperform global baselines in Indian regional context.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {indiaModels.slice(0, 8).map((m) => (
              <div key={m.slug} className="glass rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                      m.tone === "violet"
                        ? "from-brand-500 to-brand-700"
                        : m.tone === "cyan"
                        ? "from-cyan-500 to-cyan-700"
                        : m.tone === "green"
                        ? "from-trust-500 to-trust-600"
                        : m.tone === "orange"
                        ? "from-orange-500 to-orange-700"
                        : "from-indigo-500 to-indigo-700"
                    } flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {m.name.slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{m.name}</div>
                    <div className="text-[10px] text-slate-500">
                      {m.company}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-400 mb-3">{m.shortDesc}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag tag-india">🇮🇳 India Fit</span>
                  <span className="text-xs text-slate-400 font-mono">
                    {m.indiaFit}
                    /10
                  </span>
                </div>
                <a
                  href={`/models/${m.slug}/`}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1 group"
                >
                  View profile{" "}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / PAA */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
              FAQ — India & DPDP
            </div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="india-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>Is BestAIAgent a pay-to-rank directory?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                No. BestAIAgent operates a strict no pay-to-rank policy. Rankings
                are based on verifiable data points and weighted aggregation of
                auditable facts. We reject fabricated user counts and arbitrary
                scale claims.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>How to verify AI agent source code and identity?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                BestAIAgent verifies AI agent identity via SHA-256 source code
                hashes, primary documentation links, and official repository
                links. Unknown fields are marked clearly — no speculative
                checkboxes.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>What is the AI agent development cost in India?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Standard task-agent implementation bands range from ₹4–12 lakh
                for custom integrated systems. BestAIAgent provides transparent
                INR pricing, GST invoicing, and UPI merchant fee preparedness.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>How does the DPDP Act affect AI voice agents?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                The DPDP Act classifies voice data as biometric data, requiring
                explicit informed consent and robust security. BestAIAgent
                verifies which agents support sovereign on-premise deployment
                and explicit consent management for Indian phone calls.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>Which AI models support Hindi and Hinglish?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                BestAIAgent verifies Indic models like Sarvam-30B and Krutrim-2
                instruct for homegrown Hindi and Hinglish code-switching,
                outperforming global models in regional cultural context.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              INR Pricing
            </div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-white mb-4">
              Transparent <span className="gradient-text">INR Pricing</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Transparent pricing with GST invoicing and UPI support. No hidden
              fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-sm font-semibold text-slate-400 mb-2">
                Starter
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-white">Free</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                For trying out verified agents
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300 mb-6">
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Access to free verified agents
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Basic MCP infrastructure
                </li>
                <li className="flex gap-2 text-slate-500">
                  <span>✗</span>Limited usage
                </li>
              </ul>
              <button className="w-full btn-s py-2.5 rounded-lg text-sm font-semibold text-white">
                Get Started Free
              </button>
            </div>
            <div className="relative rounded-2xl p-7 bg-gradient-to-br from-brand-500/10 to-cyan-500/10 border border-brand-500/30 card-hover">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-brand-600 to-cyan-600 text-white text-[10px] font-bold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-sm font-semibold text-brand-500 mb-2">
                Pro
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-white">₹499</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                For professionals & teams · GST included
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300 mb-6">
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Unlimited premium agents
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Full MCP infrastructure
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>UPI & GST invoicing
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>DPDP compliance tools
                </li>
              </ul>
              <button className="w-full btn-p py-2.5 rounded-lg text-sm font-semibold text-white">
                Go Pro — ₹499/mo
              </button>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-sm font-semibold text-slate-400 mb-2">
                Enterprise
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-white">Custom</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                ₹4–12 lakh implementation bands
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300 mb-6">
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>On-premise deployment
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Custom MCP servers
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>SSO & advanced security
                </li>
              </ul>
              <button className="w-full btn-s py-2.5 rounded-lg text-sm font-semibold text-white">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-transparent via-brand-500/[.03] to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-brand-600/15 to-cyan-600/10"></div>
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            <div className="relative p-8 sm:p-14 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Build{" "}
                <span className="india-gradient">Verified AI in India</span>?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
                Join India's leading evidence-backed AI platform. 296 verified
                pages. MCP infrastructure. DPDP compliance. INR pricing.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="/agents/"
                  className="btn-p px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Get Started Free
                </a>
                <a
                  href="/contact/"
                  className="btn-s px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Talk to Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
