import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — BestAIAgent.in",
  description:
    "Independent AI agent discovery, comparisons, and evidence-led evaluation for India and the world.",
  alternates: {
    canonical: "https://bestaiagent.in/about/",
  },
};

export default function AboutPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Our Story</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                About BestAIAgent.in
              </h1>
            </div>
          </div>

          <div className="prose lg:prose-xl max-w-4xl text-[#c5c7d8]">
            <p className="text-lg">
              BestAIAgent.in is an independent platform for discovering,
              comparing, and evaluating AI agents with transparent scoring and
              source-backed claims.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Our Mission
            </h2>
            <p>
              We exist to cut through the noise in the AI agent market. Instead
              of marketing copy and inflated demos, we provide evidence-led
              assessments that help developers, businesses, and teams in India
              (and globally) find the right AI tool for their needs.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              What We Cover
            </h2>
            <ul>
              <li>
                <strong>Coding Agents</strong>: Claude Code, Cursor, GitHub
                Copilot, Aider, Cline, and more
              </li>
              <li>
                <strong>Business Automation</strong>: n8n, Zapier, Make, Lindy,
                and enterprise platforms
              </li>
              <li>
                <strong>Voice AI</strong>: ElevenLabs, Deepgram, Vapi, and voice
                agent platforms
              </li>
              <li>
                <strong>Core LLMs</strong>: GPT-4, Claude, Gemini, Llama 3,
                Mistral, and open-weight models
              </li>
              <li>
                <strong>Agent Builders</strong>: LangChain, CrewAI, LangGraph,
                AutoGen, and frameworks
              </li>
              <li>
                <strong>AI Infrastructure</strong>: Pinecone, Weaviate, Supabase,
                and vector databases
              </li>
              <li>
                <strong>Model Context Protocol</strong>: MCP servers, clients,
                and integrations
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Our Standards
            </h2>
            <ul>
              <li>No pay-to-rank — every listing is evaluated equally</li>
              <li>Sources are shown — you can verify every claim</li>
              <li>India-specific context — pricing, compliance, and deployment</li>
              <li>Regular refresh — stale data is clearly marked</li>
              <li>Editorial independence — we do not accept vendor payments</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">Contact</h2>
            <p>
              Have questions or found an error?{" "}
              <a
                href="https://github.com/CodesbyFebin/bestaiagent.in/issues"
                className="text-[#8b5cf6] hover:underline"
              >
                Open an issue on GitHub
              </a>{" "}
              or email us at{" "}
              <a
                href="mailto:hello@bestaiagent.in"
                className="text-[#8b5cf6] hover:underline"
              >
                hello@bestaiagent.in
              </a>
              .
            </p>

            <p>
              <small className="text-[#555872]">
                Scores reflect published methodology and available evidence,
                not guarantees.
              </small>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
