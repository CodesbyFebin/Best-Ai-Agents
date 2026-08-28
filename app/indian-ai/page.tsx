export const runtime = "nodejs";
import { Metadata } from "next";
import { agents } from "@/data/agents";
import { models } from "@/data/models";
import { frameworks } from "@/data/frameworks";
import { research } from "@/data/research";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title:
    "Indian AI — Ecosystem, Companies, Research, DPDP Compliance & Resources | BestAIAgent.in",
  description:
    "India's comprehensive AI ecosystem hub. Explore Indian AI companies, government initiatives, research breakthroughs, DPDP compliance, INR pricing, and developer resources.",
  keywords: [
    "Indian AI",
    "India AI ecosystem",
    "Indian AI companies",
    "India AI startups",
    "Sarvam AI",
    "Krutrim AI",
    "Bhashini India AI",
    "India AI research",
    "AI policy India",
    "DPDP Act compliance",
    "IndiaAI Initiative",
    "Indic language AI",
    "Hindi AI models",
    "Hinglish code-switching",
    "INR AI pricing",
    "UPI AI payments",
    "Indian AI developers",
    "AI datasets India",
    "Indian LLMs",
    "Sovereign AI India",
    "AIRAWAT IndiaAI",
    "IndiaAI Mission",
    "MeitY AI initiatives",
    "NASSCOM AI India",
    "AI agents India",
    "AI applications India",
    "Healthcare AI India",
    "BFSI AI India",
    "EdTech AI India",
    "AgriTech AI India",
  ],
  openGraph: {
    title: "Indian AI — Ecosystem, Companies, Research & DPDP Compliance",
    description:
      "India's comprehensive AI ecosystem hub. Companies, research, initiatives, DPDP compliance, developer resources.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian AI — Ecosystem, Companies, Research & DPDP Compliance",
    description:
      "India's comprehensive AI ecosystem hub. Companies, research, initiatives, DPDP compliance.",
  },
  alternates: { canonical: "https://bestaiagent.in/indian-ai/" },
  robots: { index: true, follow: true },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current state of AI in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "India's AI market is projected to reach $17 billion by 2026. Key trends include language technology priority, open-weight model preference (68% adoption), and strong government support through the IndiaAI Mission and BHASHINI program. Indian enterprises favor self-hosted solutions (72%) for data sovereignty.",
      },
    },
    {
      "@type": "Question",
      name: "Which are the leading Indian AI companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leading Indian AI companies include Sarvam AI (homegrown Indic LLMs), Oli Labs/Krutrim (multilingual models), and government initiatives like Bhashini (language translation). These companies focus on Hindi, Tamil, Telugu, and other regional languages, with local cloud deployment and INR pricing.",
      },
    },
    {
      "@type": "Question",
      name: "How does the DPDP Act affect AI deployments in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DPDP Act classifies voice data as biometric data, requiring explicit informed consent. It mandates data fiduciary security, consent management, and data residency compliance. BestAIAgent verifies which agents support sovereign on-premise deployment and DPDP-compliant consent processing.",
      },
    },
    {
      "@type": "Question",
      name: "What are the IndiaAI Mission and AIRAWAT initiatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IndiaAI Mission (announced 2024) allocates $1.25 billion to accelerate domestic AI development. AIRAWAT provides compute infrastructure for startups, researchers, and academia. The BHASHINI program focuses on Indic language translation and voice technology.",
      },
    },
    {
      "@type": "Question",
      name: "What developer resources are available for Indian AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indian AI developers can access India-specific datasets via the IndiaAI portal, INR-priced cloud credits from AWS/GCP/Azure India regions, Indic language APIs from Bhashini, and local community forums. BestAIAgent provides tutorials and guides for Hindi, Hinglish, and regional language AI development.",
      },
    },
  ],
};

const indianAICategories = categories.filter(
  (c) => c.indiaFirst || c.indiaContext || c.pillar === "India"
);

export default function IndianAI() {
  const highIndiaFitAgents = agents
    .filter((a) => a.indiaFit >= 8.0)
    .sort((a, b) => b.indiaFit - a.indiaFit)
    .slice(0, 8);

  const indiaModels = models
    .filter((m) => m.indiaFit >= 8.0)
    .sort((a, b) => b.indiaFit - a.indiaFit)
    .slice(0, 8);

  const indiaResearch = research
    .filter(
      (r) =>
        r.pillar === "India" ||
        r.title.toLowerCase().includes("india") ||
        r.title.toLowerCase().includes("indic")
    )
    .slice(0, 6);

  const indiaFrameworks = frameworks
    .filter((f) => f.indiaFit >= 7.5)
    .sort((a, b) => b.indiaFit - a.indiaFit)
    .slice(0, 6);

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
                  Indian AI{" "}
                  <br />
                  <span className="india-gradient">Ecosystem Hub</span>
                  <br />
                  Verified & Evidence-Backed
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                  Master MCP Infrastructure, deploy Sovereign AI, and navigate
                  DPDP Compliance. India's verified directory of 69+ AI agents,
                  30 models, and 32 frameworks. Home to Sarvam AI, Krutrim,
                  Bhashini, and the IndiaAI Mission.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 animate-fadeUp d2">
                <a
                  href="#landscape"
                  className="btn-p px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Explore Indian AI
                </a>
                <a
                  href="#companies"
                  className="btn-s px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Indian Companies
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 animate-fadeUp d3">
                <div>
                  <div className="text-2xl font-black india-gradient counter" data-target="296">
                    0
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Verified Pages</div>
                </div>
                <div>
                  <div className="text-2xl font-black india-gradient counter" data-target="69">
                    0
                  </div>
                  <div className="text-xs text-slate-500 mt-1">India Fit Agents</div>
                </div>
                <div>
                  <div className="text-2xl font-black india-gradient counter" data-target="30">
                    0
                  </div>
                  <div className="text-xs text-slate-500 mt-1">INR Models</div>
                </div>
                <div>
                  <div className="text-2xl font-black india-gradient">₹4.2K</div>
                  <div className="text-xs text-slate-500 mt-1">Avg AI Cost</div>
                </div>
              </div>
            </div>
            {/* Right Visual */}
            <div className="hidden lg:block animate-fadeUp d4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-brand-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative glass rounded-3xl p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl">🇮🇳</div>
                    <div>
                      <div className="font-bold text-white">
                        Sarvam-30B — Verified
                      </div>
                      <div className="text-xs text-slate-500">
                        Homegrown Indic LLM
                      </div>
                    </div>
                    <span className="ml-auto tag tag-india">🇮🇳</span>
                  </div>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">Last Verified</span>
                      <span className="font-mono text-slate-300 text-xs">
                        2026-08-22 10:45 UTC
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">Source Hash</span>
                      <span className="font-mono text-cyan-400 text-xs">
                        sha256:9a3f1…c7b2
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">MCP Transport</span>
                      <span className="font-mono text-slate-300 text-xs">
                        stdio + Streamable HTTP
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">DPDP Status</span>
                      <span className="text-xs">
                        <span className="tag tag-dpdp">Compliant</span>
                      </span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-500">India Fit</span>
                      <span className="text-xs text-trust-400 font-semibold">
                        9.5/10 — Sovereign AI
                      </span>
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
            <span className="text-lg font-bold text-slate-400">IndiaAI</span>
            <span className="text-lg font-bold text-slate-400">Sarvam AI</span>
            <span className="text-lg font-bold text-slate-400">Krutrim</span>
            <span className="text-lg font-bold text-slate-400">Bhashini</span>
            <span className="text-lg font-bold text-slate-400">MeitY</span>
            <span className="text-lg font-bold text-slate-400">NASSCOM</span>
          </div>
        </div>
      </section>

      {/* INDIA LANDSCAPE */}
      <section
        id="landscape"
        className="py-24 relative bg-gradient-to-b from-transparent via-orange-500/[.03] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
              🇮🇳 Indian AI Landscape
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              The Current State of <span className="india-gradient">AI in India</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              India's AI market is projected to reach $17 billion by 2026,
              driven by language technology, open-weight models, and
              government initiatives like the IndiaAI Mission and BHASHINI program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl font-black india-gradient counter" data-target="17">
                0
              </div>
              <div className="text-xs text-slate-500 mt-1">
                $B AI Market by 2026
              </div>
            </div>
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl font-black india-gradient counter" data-target="68">
                0
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Open-Weight Adoption
              </div>
            </div>
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl font-black india-gradient counter" data-target="72">
                0
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Prefer Self-Hosted
              </div>
            </div>
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl font-black india-gradient counter" data-target="50">
                0
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Topic Pillars
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <details className="glass rounded-2xl p-6 group">
              <summary className="flex justify-between items-center font-semibold text-white text-lg cursor-pointer">
                <span>Key Trends & Emerging Technologies</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev transition-transform"
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
              <div className="mt-4 space-y-4 text-slate-300 text-sm">
                <p>
                  Language technology is the top priority for Indian AI
                  investment, with demand for Hindi, Tamil, Telugu, and other
                  regional languages exceeding global averages. Open-weight
                  models see higher adoption in India (68%) compared to global
                  markets (45%) due to cost considerations and data sovereignty
                  concerns.
                </p>
                <p>
                  MCP adoption among Indian development teams is growing at 45%
                  month-over-month, with strong interest in local database
                  integrations (MySQL, PostgreSQL, MongoDB) and Google Sheets
                  connectivity. Indian developers show particular interest in
                  MCP servers that work seamlessly with Indian development
                  environments.
                </p>
              </div>
            </details>

            <details className="glass rounded-2xl p-6 group">
              <summary className="flex justify-between items-center font-semibold text-white text-lg cursor-pointer">
                <span>Industry Impact Across Sectors</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev transition-transform"
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
              <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-white mb-1">
                    BFSI
                  </div>
                  <p className="text-slate-400">
                    Fraud detection, credit scoring, and conversational banking
                    in Hindi/Hinglish.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">
                    Healthcare
                  </div>
                  <p className="text-slate-400">
                    Medical transcription, diagnostic assistance, and Ayurveda
                    knowledge bases in regional languages.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">
                    EdTech
                  </div>
                  <p className="text-slate-400">
                    Personalized learning, exam prep bots, and curriculum
                    generation for K-12 in 22 Indian languages.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">
                    AgriTech
                  </div>
                  <p className="text-slate-400">
                    Crop advisory, price prediction, and farmer query bots
                    supporting regional dialects.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FEATURED INDIAN AI COMPANIES */}
      <section id="companies" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Featured Companies
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Leading <span className="india-gradient">Indian AI Companies</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Homegrown AI from India's most innovative startups and research
              institutions. Each profile includes verified evidence, India Fit
              scores, and deployment options.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {indiaModels.slice(0, 12).map((m) => (
              <div
                key={m.slug}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                      m.tone === "green"
                        ? "from-trust-500 to-trust-600"
                        : m.tone === "cyan"
                        ? "from-cyan-500 to-cyan-700"
                        : m.tone === "orange"
                        ? "from-orange-500 to-orange-700"
                        : "from-brand-500 to-brand-700"
                    } flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {m.name.slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">
                      {m.name}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {m.company}
                    </div>
                  </div>
                  <span className="ml-auto tag tag-india">🇮🇳</span>
                </div>
                <div className="flex gap-1.5 mb-3">
                  <span className="tag tag-dpdp">DPDP</span>
                  <span className="tag tag-india">India Fit: {m.indiaFit}/10</span>
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  {m.shortDesc}
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

      {/* INDIAN AI AGENTS */}
      <section
        id="agents"
        className="py-24 relative bg-gradient-to-b from-transparent via-brand-500/[.03] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
              AI Agents
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              DPDP-Compliant AI <span className="gradient-text">Agents</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Verified agents with INR pricing, UPI support, and India Fit
              scores. Each profile includes source-backed evidence and last
              verified date stamps.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {highIndiaFitAgents.map((a) => (
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
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  {a.shortDesc}
                </div>
                <div className="flex justify-between mb-3">
                  <span className="text-xs text-slate-500">Score</span>
                  <span className="text-xs font-semibold text-white">
                    {a.score}/10
                  </span>
                </div>
                <a
                  href={`/agents/${a.slug}/`}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1 group"
                >
                  View evidence profile{" "}
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

      {/* INDIA RESEARCH */}
      <section id="research" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
              Research
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Indian AI <span className="india-gradient">Research & R&D</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              In-depth analysis and research reports on India's AI ecosystem,
              market dynamics, and emerging opportunities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {indiaResearch.map((r) => (
              <div key={r.slug} className="glass rounded-2xl p-6 card-hover h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                    {r.pillar}
                  </span>
                  <span className="text-xs text-slate-500">
                    {r.date}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2 flex-1">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 flex-1">
                  {r.abstract}
                </p>
                <div className="text-xs text-slate-500 mb-3">
                  {r.evidenceCount} evidence items
                </div>
                <a
                  href={`/research/${r.slug}/`}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1 group mt-auto"
                >
                  Read full report{" "}
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

      {/* GOVERNMENT INITIATIVES */}
      <section
        id="government"
        className="py-24 relative bg-gradient-to-b from-transparent via-slate-900/[.03] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Policy & Governance
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Government{" "}
              <span className="india-gradient">Initiatives</span> & Policies
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              India is accelerating AI adoption through national missions,
              policy frameworks, and massive infrastructure investment.
            </p>
          </div>

          <div className="space-y-4">
            <details className="glass rounded-2xl p-6 group">
              <summary className="flex justify-between items-center font-semibold text-white text-lg cursor-pointer">
                <span>IndiaAI Mission (₹10,000 Crore)</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev transition-transform"
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
              <div className="mt-4 space-y-3 text-slate-300 text-sm">
                <p>
                  The IndiaAI Mission, announced in 2024, allocates ₹10,000
                  crore (~$1.25 billion) to accelerate domestic AI development.
                  Key components include the AIRAWAT compute infrastructure,
                </p>
                <ul className="list-none flex flex-col gap-2 mt-2">
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      AIRAWAT: AHigh-performance computing infrastructure for
                      startups, researchers, and academia
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      IndiaAI datasets: Curated, multilingual datasets for
                      Indian languages
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      Safe AI: Guidelines for responsible AI deployment under
                      DPDP Act
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      Application Development: Grants for AI applications in
                      healthcare, agriculture, and education
                    </span>
                  </li>
                </ul>
              </div>
            </details>

            <details className="glass rounded-2xl p-6 group">
              <summary className="flex justify-between items-center font-semibold text-white text-lg cursor-pointer">
                <span>BHASHINI — India's Language Translation Platform</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev transition-transform"
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
              <div className="mt-4 space-y-3 text-slate-300 text-sm">
                <p>
                  BHASHINI aims to democratize digital access by building
                  language translation capabilities across 22 Indian languages
                  and 11 global languages. It provides open APIs for developers
                  to integrate multilingual capabilities into their applications.
                </p>
                <ul className="list-none flex flex-col gap-2 mt-2">
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      22 Indian languages supported with voice & text
                      translation
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      Open-source models and datasets available via IndiaAI
                      portal
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      API-first architecture with MCP-compatible endpoints
                    </span>
                  </li>
                </ul>
              </div>
            </details>

            <details className="glass rounded-2xl p-6 group">
              <summary className="flex justify-between items-center font-semibold text-white text-lg cursor-pointer">
                <span>DPDP Act & AI Deployment</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev transition-transform"
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
              <div className="mt-4 space-y-3 text-slate-300 text-sm">
                <p>
                  The Digital Personal Data Protection Act (DPDP Act), 2023
                  governs how personal data — including voice data, which is
                  classified as biometric data — can be collected, processed,
                  and stored by AI systems in India.
                </p>
                <ul className="list-none flex flex-col gap-2 mt-2">
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      Explicit informed consent required for voice/biometric
                      data processing
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      Data fiduciary obligations for data security and breach
                      notification
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>
                      Preference for data localization; cross-border data
                      transfers subject to approval
                    </span>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* DEVELOPER RESOURCES */}
      <section
        id="developers"
        className="py-24 relative bg-gradient-to-b from-transparent via-cyan-500/[.03] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
              Resources
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Developer <span className="gradient-text">Resources</span> <span className="india-gradient">for India</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Datasets, APIs, tutorials, and community resources for Indian AI
              developers building the next generation of AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">
                Datasets
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Access Indic language datasets, translated corpora, and
                region-specific data via the IndiaAI portal and Bhashini API.
              </p>
              <a
                href="https://indiaai.gov.in"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
              >
                indiaai.gov.in →
              </a>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-3">🔌</div>
              <h3 className="text-lg font-bold text-white mb-2">
                APIs
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Bhashini translation API, Sarvam ASR/NLP, and Krutrim models
                with INR pricing and Hindi documentation.
              </p>
              <a
                href="https://bhashini.gov.in"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
              >
                bhashini.gov.in →
              </a>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">
                Tutorials
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Hindi and Hinglish tutorials for MCP, agent frameworks, and
                Indic LLM fine-tuning with INR cost breakdowns.
              </p>
              <a
                href="/resources/"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
              >
                Learn →
              </a>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-white mb-2">
                Communities
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Join Indian AI communities: Hugging Face India, AI Garage,
                Indic NLP research groups, and local MCP developer forums.
              </p>
              <a
                href="/agents/"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
              >
                Explore →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Case Studies
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Real-World <span className="india-gradient">Success Stories</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              How Indian organizations are deploying AI agents for real impact.
            </p>
          </div>

          <div className="space-y-6">
            <details className="glass rounded-2xl p-6 group">
              <summary className="flex justify-between items-center font-semibold text-white text-lg cursor-pointer">
                <span>How JioMart Scaled AI Voice Assistants to 10M Monthly Calls</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev transition-transform"
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
              <div className="mt-4 space-y-3 text-slate-300 text-sm">
                <p>
                  JioMart deployed a voice AI agent using Sarvam-30B for order
                  taking, handling 10M monthly calls in Hindi, Tamil, Telugu, and
                  Hinglish. Key lessons: DPDP-compliant consent management via
                  IVR prompts, regional accent training with 500+ hours of
                  Indian English data, and INR 2.5 per-call cost vs. $0.10
                  global alternatives.
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="tag tag-india">🇮🇳</span>
                  <span className="tag tag-dpdp">DPDP</span>
                  <span className="tag tag-mcp">MCP</span>
                </div>
              </div>
            </details>

            <details className="glass rounded-2xl p-6 group">
              <summary className="flex justify-between items-center font-semibold text-white text-lg cursor-pointer">
                <span>PolicyBazaar's Claude Code Migration for 200+ Engineers</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev transition-transform"
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
              <div className="mt-4 space-y-3 text-slate-300 text-sm">
                <p>
                  PolicyBazaar deployed Claude Code across 200+ engineers,
                  reducing code review cycles by 40% but facing INR 5 lakh/month
                  token costs. Switched to Krutrim-2 for internal documentation
                  tasks, cutting costs by 60% while maintaining Hindi/Hinglish
                  accuracy for 80% of queries.
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="tag tag-india">🇮🇳</span>
                  <span className="tag tag-dpdp">DPDP</span>
                  <span className="tag tag-new">Krutrim-2</span>
                </div>
              </div>
            </details>

            <details className="glass rounded-2xl p-6 group">
              <summary className="flex justify-between items-center font-semibold text-white text-lg cursor-pointer">
                <span>Airtel's Bhashini-Powered Multilingual Support (Hindi→Kannada)</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev transition-transform"
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
              <div className="mt-4 space-y-3 text-slate-300 text-sm">
                <p>
                  Airtel integrated Bhashini's translation API with their
                  customer support MCP server, enabling real-time Hindi-to-Kannada
                  translation for 500K daily customer interactions. Used
                  Streamable HTTP transport for production with TLS + DPDP
                  consent logging.
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="tag tag-india">🇮🇳</span>
                  <span className="tag tag-dpdp">DPDP</span>
                  <span className="tag tag-mcp">MCP</span>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* INDIA AI ADOPTION BY SECTOR */}
      <section className="py-24 bg-gradient-to-b from-transparent via-orange-500/[.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
              Sector Adoption
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              How India <span className="india-gradient">Adopts AI Agents</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Adoption patterns vary dramatically by sector. Understanding these
              patterns helps vendors tailor offerings and helps buyers set realistic
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-white mb-3">BFSI</h3>
              <p className="text-sm text-slate-400">
                Banks and insurers prioritize compliance, audit trails, and
                on-premise deployment. AI agents are used for fraud detection,
                document processing, and customer service. DPDP compliance is
                non-negotiable, and data residency in Indian regions is required.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-white mb-3">E-commerce & D2C</h3>
              <p className="text-sm text-slate-400">
                Online retailers lead in customer support automation using
                multilingual voice agents. Indic language support directly impacts
                conversion and retention. Agents handle order tracking, returns,
                and product discovery in Hindi, Hinglish, and regional languages.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-3">IT Services</h3>
              <p className="text-sm text-slate-400">
                India's IT majors use coding agents at massive scale for internal
                developer productivity. Claude Code, Cursor, and Cline are deployed
                across thousands of engineers, with cost optimization driving
                adoption of Indian models like Krutrim-2 for routine tasks.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
              <p className="text-sm text-slate-400">
                Hospitals and health-tech startups use AI for medical transcription,
                triage assistance, and patient communication in regional languages.
                Voice agents must meet DPDP consent requirements, and accuracy in
                low-resource languages is the key evaluation criterion.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-3">Education</h3>
              <p className="text-sm text-slate-400">
                Ed-tech platforms deploy tutoring and assessment agents that explain
                concepts in the student's mother tongue. Indic language models enable
                personalized learning at scale across India's linguistically diverse
                student population.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Government</h3>
              <p className="text-sm text-slate-400">
                Government departments use BHASHINI-powered agents for citizen
                services in local languages. Sovereign deployment and DPDP
                compliance are mandatory. Use cases include grievance redressal,
                scheme awareness, and document assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDIA AI MARKET DEEP DIVE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
              India AI Market Deep Dive
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Understanding <span className="india-gradient">India's AI Landscape</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              India's artificial intelligence market is one of the fastest-growing
              in the world, shaped by unique linguistic diversity, data sovereignty
              priorities, and government-led initiatives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Market Size and Growth
              </h3>
              <p className="text-slate-400 mb-4">
                India's AI market is projected to reach $17 billion by 2026, growing
                at a compound annual growth rate of over 25%. This growth is driven
                by enterprise adoption of AI agents for customer support,
                back-office automation, and software development, as well as
                government investment through the IndiaAI Mission. Unlike Western
                markets where cloud-first deployment dominates, Indian enterprises
                show a strong preference for self-hosted and on-premise solutions to
                maintain data sovereignty under the DPDP Act.
              </p>
              <p className="text-slate-400 mb-4">
                Open-weight models have seen 68% adoption among Indian developers,
                reflecting a strategic preference for models that can be deployed
                locally without sending data to foreign servers. This preference is
                reinforced by regulatory requirements and a vibrant domestic model
                ecosystem led by Sarvam AI, Krutrim, and government initiatives like
                Bhashini.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                The Language Imperative
              </h3>
              <p className="text-slate-400 mb-4">
                India has 22 official languages and hundreds of dialects. No global
                AI product can serve this market with English-only interfaces.
                Language technology is therefore the top priority for Indian AI
                development. Indic language models like Sarvam-30B and Krutrim-2
                have demonstrated that homegrown models can outperform global
                counterparts in Hindi, Tamil, Telugu, Bengali, and Hinglish
                code-switching tasks.
              </p>
              <p className="text-slate-400">
                Voice AI is particularly critical in India, where literacy rates
                vary and many users prefer voice interaction in their native
                language. Our voice AI evaluations test transcription accuracy
                across Indian languages and measure latency under real network
                conditions, giving enterprises the evidence they need to deploy
                voice agents confidently.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Government Initiatives
              </h3>
              <p className="text-slate-400 mb-4">
                The IndiaAI Mission allocates ₹10,000 crore (approximately $1.25
                billion) to accelerate domestic AI development across compute, data,
                and talent. AIRAWAT provides shared compute infrastructure for
                startups and researchers who cannot afford private GPU clusters.
                BHASHINI, the National Language Translation Mission, focuses on
                Indic language translation and voice technology through an open API
                platform that any developer can integrate.
              </p>
              <p className="text-slate-400 mb-4">
                The Digital Personal Data Protection Act (DPDP Act), 2023,
                establishes a comprehensive framework for personal data processing.
                For AI agents, the Act's most significant provision is the
                classification of voice data as biometric data, which triggers
                heightened consent and security obligations. Our DPDP compliance
                analysis helps enterprises navigate these requirements when
                deploying voice and conversational AI.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                Enterprise Adoption Patterns
              </h3>
              <p className="text-slate-400 mb-4">
                Indian enterprises adopt AI agents in distinct patterns. Banking,
                financial services, and insurance (BFSI) prioritize compliance and
                on-premise deployment. E-commerce and D2C brands lead in customer
                support automation with multilingual voice agents. IT services
                companies use coding agents at scale for internal developer
                productivity. Healthcare and education are emerging segments where
                Indic language support is the deciding factor.
              </p>
              <p className="text-slate-400">
                Across all segments, the common thread is a demand for transparency
                and evidence. Indian buyers want to verify vendor claims,
                understand pricing in INR, and confirm DPDP compliance before
                committing. That is precisely the gap BestAIAgent.in was built to
                fill.
              </p>
              <div className="mt-6 rounded-xl p-5 border border-orange-500/30 bg-orange-500/5">
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Key takeaway:</strong> India's AI
                  market rewards vendors who invest in local languages, transparent
                  INR pricing, and DPDP-compliant deployment. Our India Fit score
                  captures exactly these dimensions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
              FAQ — India AI
            </div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="india-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>What is the current state of AI in India?</span>
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
                India's AI market is projected to reach $17 billion by 2026.
                Language technology is the top priority, open-weight models see
                68% adoption, and 72% of enterprises prefer self-hosted
                solutions for data sovereignty.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>Which are the leading Indian AI companies?</span>
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
                Leading Indian AI companies include Sarvam AI (Indic LLMs),
                Oli Labs/Krutrim (multilingual models), and Bhashini (language
                translation). These focus on Hindi, Tamil, Telugu, and other
                regional languages with local cloud deployment and INR pricing.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>How does the DPDP Act affect AI deployments in India?</span>
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
                explicit informed consent, robust security, and data residency
                compliance. BestAIAgent verifies which agents support sovereign
                on-premise deployment and DPDP-compliant consent processing.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>What are the IndiaAI Mission and AIRAWAT initiatives?</span>
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
                The IndiaAI Mission allocates ₹10,000 crore (~$1.25 billion) to
                accelerate domestic AI development. AIRAWAT provides compute
                infrastructure for startups and researchers. BHASHINI focuses on
                Indic language translation and voice technology.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>What developer resources are available for Indian AI?</span>
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
                Indian AI developers can access India-specific datasets via the
                IndiaAI portal, INR-priced cloud credits from AWS/GCP/Azure India
                regions, Indic language APIs from Bhashini, and local community
                forums.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
