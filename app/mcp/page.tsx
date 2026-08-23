import { Metadata } from "next";
import { agents } from "@/data/agents";
import { frameworks } from "@/data/frameworks";

export const metadata: Metadata = {
  title: "MCP Servers & AI Agents — Complete Guide to Model Context Protocol | BestAIAgent.in",
  description:
    "Find the best AI agents with MCP support, stdio transport, Streamable HTTP, and sandboxed execution. Compare Cline, Cursor, OpenHands, and more.",
  keywords: [
    "BestAIAgent MCP",
    "BestAIAgent Cline MCP support",
    "BestAIAgent Cursor MCP configuration",
    "BestAIAgent OpenHands local dev setup",
    "BestAIAgent Aider stdio transport",
    "BestAIAgent LangGraph agent interoperability",
    "BestAIAgent AutoGen code execution",
    "BestAIAgent CrewAI background sessions",
    "BestAIAgent SWE-agent terminal bench",
    "BestAIAgent VS Code native agent",
    "BestAIAgent stdio transport",
    "BestAIAgent streamable HTTP",
    "BestAIAgent sandboxed execution",
    "BestAIAgent MCP servers",
    "BestAIAgent agent interoperability",
    "BestAIAgent code-as-a-tool approach",
    "BestAIAgent token bloat reduction",
    "BestAIAgent isolated subprocess tools",
    "BestAIAgent MCP security model",
    "BestAIAgent MCP installation complexity",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/mcp/",
  },
  openGraph: {
    title: "MCP Servers & AI Agents — BestAIAgent.in",
    description:
      "Complete guide to MCP-compatible AI agents with verified support, transport options, and security models.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI coding agent with MCP support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cline and Cursor are top for MCP support. Cline offers direct VS Code integration with MCP stdio transport. Cursor supports Streamable HTTP MCP server configuration.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between stdio and Streamable HTTP in MCP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "stdio transport runs MCP servers as local subprocesses for secure local development. Streamable HTTP allows remote MCP servers over HTTP with optional TLS authentication for enterprise.",
      },
    },
    {
      "@type": "Question",
      name: "How to fix MCP stdio connection timeouts on macOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is often a process lifecycle issue. Solutions include increasing timeout limits, checking process initialization, and verifying non-JSON lines don't corrupt transport streams.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI agents support sandboxed code execution via MCP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agents with MCP sandboxed execution include Cline, Cursor, and OpenHands. These run code safely within Docker containers with isolated subprocesses.",
      },
    },
    {
      "@type": "Question",
      name: "How does MCP reduce context window token bloat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MCP uses a 'code-as-a-tool' approach where instead of sending data to the LLM, the agent calls MCP tools that fetch data via API, saving up to 98% of context window.",
      },
    },
  ],
};

export default function McpPage() {
  const mcpAgents = agents.filter(
    (a) =>
      a.name.toLowerCase().includes("cline") ||
      a.name.toLowerCase().includes("cursor") ||
      a.name.toLowerCase().includes("openhands") ||
      a.name.toLowerCase().includes("aider") ||
      a.category === "Frameworks"
  );
  const mcpFrameworks = frameworks.filter((f) =>
    f.keyFeatures.some((feature) =>
      feature.toLowerCase().includes("mcp")
    )
  );

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
              <span className="kicker">MCP Infrastructure</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                BestAIAgent MCP — AI Agents with Model Context Protocol Support
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                Find the best AI coding agents with MCP support, stdio transport,
                Streamable HTTP, and sandboxed execution. Verified installation
                complexity and security models.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              What is MCP (Model Context Protocol)?
            </h2>
            <p className="text-[#c5c7d8] leading-relaxed mb-4">
              MCP is an open protocol that standardizes how AI agents connect to
              data sources, tools, and services. By using MCP servers, agents can
              fetch data via API calls instead of embedding it in conversation,
              reducing context window bloat by up to 98%.
            </p>
            <p className="text-[#c5c7d8] leading-relaxed">
              BestAIAgent.in verifies MCP transport options (stdio, Streamable
              HTTP, SSE), security models (sandboxed, network-isolated), and
              installation complexity (one-click Docker vs manual setup).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Best AI Agents with MCP Support
            </h2>
            <p className="text-[#9ca5c3] mb-4">
            Verified agents with MCP support include Cline, Cursor, OpenHands, Aider, and more.
          </p>
            <div className="agentGrid">
              {mcpAgents.slice(0, 12).map((agent) => (
                <article key={agent.slug} className="agentCard">
                  <div className="cardTop">
                    <span
                      className={`agentLogo ${agent.tone}`}
                      style={{
                        backgroundColor:
                          agent.tone === "violet"
                            ? "#352563"
                            : agent.tone === "cyan"
                            ? "#15384a"
                            : agent.tone === "green"
                            ? "#163c31"
                            : "#352563",
                      }}
                    >
                      {agent.name.slice(0, 2)}
                    </span>
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
                  <a href={`/agents/${agent.slug}/`} className="profile">
                    View evidence profile <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Frequently Asked Questions: MCP
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the best AI coding agent with MCP support?",
                  a: "Cline and Cursor are top for MCP support. Cline offers direct VS Code integration with MCP stdio transport. Cursor supports Streamable HTTP MCP server configuration.",
                },
                {
                  q: "What is the difference between stdio and Streamable HTTP in MCP?",
                  a: "stdio transport runs MCP servers as local subprocesses for secure local development. Streamable HTTP allows remote MCP servers over HTTP with optional TLS authentication for enterprise.",
                },
                {
                  q: "How to fix MCP stdio connection timeouts on macOS?",
                  a: "This is often a process lifecycle issue. Solutions include increasing timeout limits, checking process initialization, and verifying non-JSON lines don't corrupt transport streams.",
                },
                {
                  q: "Which AI agents support sandboxed code execution via MCP?",
                  a: "Agents with MCP sandboxed execution include Cline, Cursor, and OpenHands. These run code safely within Docker containers with isolated subprocesses.",
                },
                {
                  q: "How does MCP reduce context window token bloat?",
                  a: "MCP uses a 'code-as-a-tool' approach where instead of sending data to the LLM, the agent calls MCP tools that fetch data via API, saving up to 98% of context window.",
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
              Explore our complete catalog of MCP-compatible AI agents and
              frameworks.
            </p>
            <a
              href="/categories/mcp/"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition"
            >
              Browse MCP Category
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
