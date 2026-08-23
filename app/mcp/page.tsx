import { Metadata } from "next";
import { agents } from "@/data/agents";
import { models } from "@/data/models";
import { frameworks } from "@/data/frameworks";

export const metadata: Metadata = {
  title:
    "MCP — Model Context Protocol Servers, Verified Directory, DPDP Compliance & India-First Integration | BestAIAgent.in",
  description:
    "India's verified MCP directory. 50 topic clusters, 500 keywords. Explore MCP servers, stdio/Streamable HTTP, DPDP compliance, INR pricing, AI agent integration. No pay-to-rank. Evidence-backed.",
  keywords: [
    "BestAIAgent MCP",
    "MCP server directory",
    "best MCP server for AI agents 2026",
    "top best MCP server evidence-backed directory",
    "best open source MCP server github",
    "best MCP server for coding agents",
    "best enterprise MCP server scalable",
    "best local MCP server for privacy",
    "best cloud hosted MCP server",
    "best MCP server for databases SQL",
    "best MCP server for local file system",
    "best MCP server for REST API integration",
    "best verified MCP server no pay-to-rank",
    "best Indian MCP server providers",
    "Indian MCP server INR pricing transparency",
    "best DPDP compliant MCP server India",
    "best MCP server for Indic languages",
    "best MCP server for Indian startups",
    "best on-premise MCP server India",
    "best MCP server for Sarvam AI integration",
    "best MCP server for Indian tech ecosystem",
    "best sovereign AI MCP server India",
    "best MCP server for Indian developers free trial",
    "best AI agent for MCP server integration",
    "how to use AI MCP with coding agents effectively",
    "best AI agent for multi-MCP server orchestration",
    "best AI agent to manage multiple MCP tools",
    "how to use AI MCP for workflow automation",
    "best AI agent for secure MCP sandboxed execution",
    "best AI agent for MCP context window optimization",
    "how to use AI MCP to reduce token bloat by 98%",
    "best AI agent for MCP stdio transport local",
    "best AI agent for MCP streamable HTTP remote",
    "best verified AI agent for MCP tool execution",
    "best AI agent for building custom MCP servers",
    "best AI agent for MCP server debugging",
    "best MCP server for VS Code extensions",
    "best MCP server for GitHub automation",
    "best MCP server for Jira integration",
    "best MCP server for Linear project management",
    "best MCP server for Slack bot integration",
    "best MCP server for Notion database querying",
    "best MCP server for PostgreSQL schema reading",
    "best MCP server for Docker container execution",
    "best MCP server for Google Drive document retrieval",
    "best MCP server for automated web scraping",
    "how MCP server works with AI agents",
    "how to fix MCP stdio connection timeout",
    "how to fix MCP non-JSON lines transport corruption",
    "how to fix MCP session initialization indefinite hang",
    "how to fix MCP server authentication errors",
    "how to fix MCP server permission denied local file",
    "how to fix MCP token bloat in AI agent context",
    "how to fix MCP server installation failures docker",
    "how to fix AI agent MCP server unexpected disconnect",
    "Model Context Protocol",
    "MCP stdio transport",
    "Streamable HTTP MCP",
    "MCP servers India",
    "MCP ecosystem 2026",
  ],
  openGraph: {
    title:
      "MCP — Model Context Protocol Servers, Verified Directory & India Integration",
    description:
      "India's verified MCP directory. 50 topic clusters, 500 keywords. MCP servers, stdio/Streamable HTTP, DPDP compliance, INR pricing.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP — Model Context Protocol Servers & Verified Directory",
    description:
      "India's verified MCP directory. 50 topic clusters, 500 keywords. MCP servers, stdio/Streamable HTTP, DPDP compliance.",
  },
  alternates: { canonical: "https://bestaiagent.in/mcp/" },
  robots: { index: true, follow: true },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best MCP server for AI agents in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best MCP servers in 2026 include Cline (open-source, VS Code native), Cursor (AI-first IDE with Streamable HTTP), and custom enterprise MCP servers for databases and APIs. BestAIAgent.in ranks them by evidence-backed scoring, SHA-256 source verification, and India Fit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between stdio and Streamable HTTP in MCP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "stdio is for secure local development via inter-process communication — ideal for inner-loop iteration with Cline, Aider, and SWE-agent. Streamable HTTP is for scalable enterprise deployments with TLS authentication, web observability, and remote MCP endpoints like Cursor Enterprise.",
      },
    },
    {
      "@type": "Question",
      name: "How does MCP reduce context window token bloat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MCP enables a code-as-a-tool approach where the agent writes executable code (TypeScript/Python) to call the MCP server directly as a pure API — bypassing the LLM context window for data transfer and saving up to 98% of tokens.",
      },
    },
    {
      "@type": "Question",
      name: "Are there DPDP-compliant MCP servers for India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BestAIAgent.in verifies MCP servers with DPDP compliance including on-premise deployment options, data residency in India, explicit consent management for voice/biometric data, and audit logging. Verified options include Bhashini MCP, Sarvam AI MCP, and air-gapped enterprise deployments.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best open-source MCP servers on GitHub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top open-source MCP servers include: Cline (VS Code native, stdio + Streamable HTTP), Aider (terminal sandboxed), Flowise (no-code builder), LangChain MCP integration, and community servers for PostgreSQL, GitHub, Jira, Linear, Notion, and Google Drive. All verified on GitHub with transparent commit history.",
      },
    },
    {
      "@type": "Question",
      name: "How to fix MCP stdio connection timeout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fix MCP stdio timeout by: 1) increasing timeout in mcp.json config, 2) ensuring the MCP server binary is in PATH, 3) checking for zombie processes, 4) verifying Node.js/Python version compatibility, 5) using Docker sandbox for isolation. Cline and Aider have verified fixes for macOS-specific hangs.",
      },
    },
  ],
};

const mcpAgents = agents.filter(
  (a) =>
    a.keyFeatures.some((f) =>
      f.toLowerCase().includes("mcp")
    ) ||
    a.category.toLowerCase().includes("mcp") ||
    a.pillar.toLowerCase().includes("mcp")
);

const mcpFrameworks = frameworks.filter((f) =>
  f.keyFeatures.some((f) => f.toLowerCase().includes("mcp"))
);

const mcpModelsList = models.filter(
  (m) =>
    m.keyFeatures.some((f) => f.toLowerCase().includes("mcp")) ||
    m.category.toLowerCase().includes("mcp")
);

const mcpComparisons = [
  {
    title: "Cline vs Aider",
    slug: "cline-vs-aider",
    agents: ["cline", "aider"],
    summary:
      "Compare two leading open-source MCP-native coding agents: Cline (VS Code native, stdio + Streamable HTTP) vs Aider (terminal-first, git-committed diffs, sandboxed execution).",
    criteria: [
      { name: "MCP Transport", values: { cline: "stdio + HTTP", aider: "stdio" }, weight: 0.3 },
      { name: "IDE Integration", values: { cline: "VS Code native", aider: "Terminal + Git" }, weight: 0.2 },
      { name: "Sandboxing", values: { cline: "Docker optional", aider: "Git-committed" }, weight: 0.2 },
      { name: "Evidence Score", values: { cline: "9.2/10", aider: "8.8/10" }, weight: 0.15 },
      { name: "India Fit", values: { cline: "8.4/10", aider: "7.9/10" }, weight: 0.15 },
    ],
  },
  {
    title: "Cursor vs Cline",
    slug: "cursor-vs-cline",
    agents: ["cursor", "cline"],
    summary:
      "Compare Cursor (AI-first IDE with proprietary + open models) vs Cline (open-source, VS Code extension, evidence-backed MCP integration).",
    criteria: [
      { name: "MCP Transport", values: { cursor: "stdio + HTTP", cline: "stdio + HTTP" }, weight: 0.3 },
      { name: "Model Choice", values: { cursor: "Multi-model", cline: "Configurable" }, weight: 0.2 },
      { name: "Privacy", values: { cursor: "Enterprise tier", cline: "Local-first" }, weight: 0.2 },
      { name: "Evidence Score", values: { cursor: "9.0/10", cline: "9.2/10" }, weight: 0.15 },
      { name: "India Fit", values: { cursor: "8.8/10", cline: "8.4/10" }, weight: 0.15 },
    ],
  },
];
export default function MCPPage() {
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
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-trust-400 animate-pulse"></span>
                  Model Context Protocol · Evidence-Backed · No Pay-to-Rank
                </div>
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] mb-5">
                  The Definitive{" "}
                  <span className="gradient-text">MCP Directory</span>
                  <br />
                  for Verified AI Agents
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                  Master Model Context Protocol infrastructure: stdio vs
                  Streamable HTTP, sandboxed execution, DPDP-compliant
                  deployment, and code-as-a-tool architecture. 50 topic
                  clusters. 500 keywords. Evidence-backed.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 animate-fadeUp d2">
                <a
                  href="#buckets"
                  className="btn-p px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Explore 50 Topic Clusters
                </a>
                <a
                  href="#verified"
                  className="btn-s px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Verified MCP Servers
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 animate-fadeUp d3">
                <div>
                  <div className="text-2xl font-black gradient-text counter" data-target="50">
                    0
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Topic Clusters</div>
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text counter" data-target="500">
                    0
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Keywords</div>
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text counter" data-target="32">
                    0
                  </div>
                  <div className="text-xs text-slate-500 mt-1">MCP Frameworks</div>
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text">98%</div>
                  <div className="text-xs text-slate-500 mt-1">Token Savings</div>
                </div>
              </div>
            </div>
            {/* Right Visual */}
            <div className="hidden lg:block animate-fadeUp d4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-brand-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative glass rounded-3xl p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-lg">
                      M
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        Cline — Verified MCP Agent
                      </div>
                      <div className="text-xs text-slate-500">
                        Open-Source Coding Agent
                      </div>
                    </div>
                    <span className="ml-auto tag tag-verified">✓ VERIFIED</span>
                  </div>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">Last Verified</span>
                      <span className="font-mono text-slate-300 text-xs">
                        2026-08-22 14:32 UTC
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">Source Hash</span>
                      <span className="font-mono text-cyan-400 text-xs">
                        sha256:8f4e2…a1b9
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
                      <span className="text-slate-500">Speculative Claims</span>
                      <span className="text-xs text-trust-400 font-semibold">
                        0 — All Verified
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="tag tag-mcp">MCP</span>
                    <span className="tag tag-dpdp">DPDP</span>
                    <span className="tag tag-new">Open Source</span>
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
            <span className="text-lg font-bold text-slate-400">Cline</span>
            <span className="text-lg font-bold text-slate-400">Cursor</span>
            <span className="text-lg font-bold text-slate-400">Aider</span>
            <span className="text-lg font-bold text-slate-400">LangChain</span>
            <span className="text-lg font-bold text-slate-400">Sarvam AI</span>
            <span className="text-lg font-bold text-slate-400">Krutrim</span>
          </div>
        </div>
      </section>

      {/* 50 TOPIC CLUSTERS — 5 BUCKETS */}
      <section id="buckets" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
              MCP Topic Clusters
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              50 Verified <span className="gradient-text">MCP Clusters</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              5 search intent buckets. 500 keywords. Evidence-backed. No
              pay-to-rank. Every cluster interlinked.
            </p>
          </div>

          <div className="space-y-12">
            {/* BUCKET 1 */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Bucket 1: Commercial Intent — "Best MCP"
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ["Best MCP Server Overall", "best MCP server for AI agents 2026", "top best MCP server evidence-backed directory"],
                  ["Best Open-Source MCP", "best open source MCP server github", "top best MCP server with transparent repository"],
                  ["Best MCP for Coding", "best MCP server for coding agents", "top best MCP server for developers"],
                  ["Best Enterprise MCP", "best enterprise MCP server scalable", "top best MCP server for business workflows"],
                  ["Best Local/Privacy MCP", "best local MCP server for privacy", "top best MCP server for offline development"],
                  ["Best Cloud/Remote MCP", "best cloud hosted MCP server", "top best MCP server streamable HTTP remote"],
                  ["Best Database MCP", "best MCP server for databases SQL", "top best MCP server for PostgreSQL integration"],
                  ["Best File System MCP", "best MCP server for local file system", "top best MCP server for documentation retrieval"],
                  ["Best API Integration MCP", "best MCP server for REST API integration", "top best MCP server for custom tool wrappers"],
                  ["Best Verified MCP", "best verified MCP server no pay-to-rank", "top best MCP server with SHA-256 source verification"],
                ].map(([cluster, k1, k2]) => (
                  <div key={cluster as string} className="glass rounded-2xl p-6 card-hover">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag tag-verified">Best</span>
                      <h4 className="font-bold text-white text-sm">{cluster}</h4>
                    </div>
                    <div className="text-xs text-slate-400 mb-3">{k1}</div>
                    <div className="text-xs text-slate-500">{k2}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BUCKET 2 */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Bucket 2: Transactional / Localized — "Indian MCP Server"
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ["Indian MCP Server Providers", "best Indian MCP server providers", "top MCP server built in India for enterprises"],
                  ["MCP Server INR Pricing", "Indian MCP server INR pricing transparency", "best MCP server with UPI payment support"],
                  ["DPDP Compliant MCP", "best DPDP compliant MCP server India", "top MCP server for India data residency compliance"],
                  ["Indic Language MCP", "best MCP server for Indic languages", "top MCP server with Hindi and Hinglish support"],
                  ["Indian Startup MCP", "best MCP server for Indian startups", "top MCP server with automated GST invoicing"],
                  ["Local Deployment India", "best on-premise MCP server India", "top air-gapped MCP server for Indian enterprises"],
                  ["Indian AI Model MCP", "best MCP server for Sarvam AI integration", "top MCP server for Krutrim local deployment"],
                  ["India Tech Ecosystem MCP", "best MCP server for Indian tech ecosystem", "top MCP server preferred by Bengaluru developers"],
                  ["Sovereign AI MCP", "best sovereign AI MCP server India", "top MCP server for Indian government compliance"],
                  ["Indian Developer Tools MCP", "best MCP server for Indian developers free trial", "top MCP server with local deployment guides India"],
                ].map(([cluster, k1, k2]) => (
                  <div key={cluster as string} className="glass rounded-2xl p-6 card-hover">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag tag-india">🇮🇳 India</span>
                      <h4 className="font-bold text-white text-sm">{cluster}</h4>
                    </div>
                    <div className="text-xs text-slate-400 mb-3">{k1}</div>
                    <div className="text-xs text-slate-500">{k2}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BUCKET 3 */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Bucket 3: Informational / Commercial — "AI Agent for MCP"
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ["AI Agent MCP Integration", "best AI agent for MCP server integration", "how to use AI MCP with coding agents effectively"],
                  ["AI Agent MCP Orchestration", "top AI agent for multi-MCP server orchestration", "best AI agent to manage multiple MCP tools"],
                  ["Use AI MCP for Automation", "how to use AI MCP for workflow automation", "best AI agent to execute MCP tools autonomously"],
                  ["AI Agent MCP Security", "best AI agent for secure MCP sandboxed execution", "how to use AI MCP with isolated Docker containers"],
                  ["AI Agent MCP Context Optimization", "best AI agent for MCP context window optimization", "how to use AI MCP to reduce token bloat by 98%"],
                  ["AI Agent MCP Stdio Transport", "best AI agent for MCP stdio transport local", "how to use AI MCP for secure inner-loop development"],
                  ["AI Agent MCP HTTP Transport", "best AI agent for MCP streamable HTTP remote", "how to use AI MCP for scalable enterprise deployments"],
                  ["AI Agent MCP Verification", "best verified AI agent for MCP tool execution", "how to use AI MCP with evidence-backed source links"],
                  ["AI Agent Custom MCP Tools", "best AI agent for building custom MCP servers", "how to use AI MCP to wrap proprietary APIs"],
                  ["AI Agent MCP Debugging", "best AI agent for MCP server debugging", "how to use AI MCP error logs for troubleshooting"],
                ].map(([cluster, k1, k2]) => (
                  <div key={cluster as string} className="glass rounded-2xl p-6 card-hover">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag tag-mcp">AI Agent</span>
                      <h4 className="font-bold text-white text-sm">{cluster}</h4>
                    </div>
                    <div className="text-xs text-slate-400 mb-3">{k1}</div>
                    <div className="text-xs text-slate-500">{k2}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BUCKET 4 */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Bucket 4: Navigational / Use-Case — "MCP for [Specific Tool]"
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ["MCP for VS Code", "best MCP server for VS Code extensions", "how to use MCP for VS Code native agent setup"],
                  ["MCP for GitHub", "best MCP server for GitHub automation", "top MCP for GitHub issue and PR management"],
                  ["MCP for Jira", "best MCP server for Jira integration", "how to use MCP for automated Jira task creation"],
                  ["MCP for Linear", "best MCP server for Linear project management", "top MCP for Linear issue tracking automation"],
                  ["MCP for Slack", "best MCP server for Slack bot integration", "how to use MCP for Slack workspace queries"],
                  ["MCP for Notion", "best MCP server for Notion database querying", "top MCP for Notion workspace knowledge retrieval"],
                  ["MCP for PostgreSQL", "best MCP server for PostgreSQL schema reading", "how to use MCP for secure database interactions"],
                  ["MCP for Docker", "best MCP server for Docker container execution", "top MCP for sandboxed agent tool calls"],
                  ["MCP for Google Drive", "best MCP server for Google Drive document retrieval", "how to use MCP for secure cloud storage access"],
                  ["MCP for Web Scraping", "best MCP server for automated web scraping", "top MCP for extracting structured data to agents"],
                ].map(([cluster, k1, k2]) => (
                  <div key={cluster as string} className="glass rounded-2xl p-6 card-hover">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag tag-new">Integration</span>
                      <h4 className="font-bold text-white text-sm">{cluster}</h4>
                    </div>
                    <div className="text-xs text-slate-400 mb-3">{k1}</div>
                    <div className="text-xs text-slate-500">{k2}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BUCKET 5 */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Bucket 5: Troubleshooting — "How to Fix" / "How MCP Server"
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ["How MCP Server Works", "how MCP server works with AI agents", "how MCP server decouples reasoning from execution"],
                  ["How to Fix Stdio Timeout", "how to fix MCP stdio connection timeout", "how to fix MCP server hanging on macOS startup"],
                  ["How to Fix JSON Corruption", "how to fix MCP non-JSON lines transport corruption", "how to fix MCP stream parsing errors before first request"],
                  ["How to Fix Session Hang", "how to fix MCP session initialization indefinite hang", "how to fix MCP subprocess lifecycle management failures"],
                  ["How to Fix Auth Errors", "how to fix MCP server authentication errors", "how to fix MCP streamable HTTP TLS certificate issues"],
                  ["How to Fix Permission Denied", "how to fix MCP server permission denied local file", "how to fix MCP local file access restriction errors"],
                  ["How to Fix Token Bloat", "how to fix MCP token bloat in AI agent context", "how to fix MCP context window overflow during tool calls"],
                  ["How to Fix Installation", "how to fix MCP server installation failures docker", "how to fix MCP docker-compose setup configuration errors"],
                  ["How to Fix Agent Disconnect", "how to fix AI agent MCP server unexpected disconnect", "how to fix MCP tool call timeout and retry failures"],
                ].map(([cluster, k1, k2]) => (
                  <div key={cluster as string} className="glass rounded-2xl p-6 card-hover">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag tag-dpdp">Fix</span>
                      <h4 className="font-bold text-white text-sm">{cluster}</h4>
                    </div>
                    <div className="text-xs text-slate-400 mb-3">{k1}</div>
                    <div className="text-xs text-slate-500">{k2}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINKED AGENT SHOWCASE */}
      <section id="verified" className="py-24 relative bg-gradient-to-b from-transparent via-cyan-500/[.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Verified MCP Agents
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Evidence-Backed <span className="gradient-text">MCP Agents</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every claim verified with SHA-256 source hashes. No speculative
              checkboxes. No pay-to-rank.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {mcpAgents.slice(0, 8).map((a) => (
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
                  <span className="ml-auto tag tag-verified">✓</span>
                </div>
                <div className="flex gap-1.5 mb-3">
                  <span className="tag tag-mcp">MCP</span>
                  <span className="tag tag-new">{a.category}</span>
                </div>
                <div className="text-xs text-slate-400 mb-3">{a.shortDesc}</div>
                <div className="flex justify-between mb-3">
                  <span className="text-xs text-slate-500">Evidence</span>
                  <span className="text-xs font-semibold text-white">
                    {a.evidenceItems} items
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-brand-600/15 to-trust-600/10"></div>
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            <div className="relative p-8 sm:p-14 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Build{" "}
                <span className="gradient-text">Verified MCP</span>?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
                Explore 50 topic clusters, 500 keywords, and 296 verified pages.
                No pay-to-rank. Evidence-backed MCP directory.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="#buckets"
                  className="btn-p px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Explore MCP Clusters
                </a>
                <a
                  href="/agents/"
                  className="btn-s px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Browse All Agents
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
