import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About — Independent AI Agent Discovery & Evidence-Led Evaluation | BestAIAgent.in",
  description:
    "BestAIAgent.in is an independent platform for discovering, comparing, and evaluating AI agents with transparent scoring and source-backed claims. Learn about our mission, standards, and commitment to evidence-first evaluation.",
  keywords: [
    "BestAIAgent about",
    "independent AI agent platform",
    "evidence-led AI evaluation",
    "AI agent discovery mission",
    "transparent AI scoring",
    "AI agent editorial standards",
    "no pay-to-rank directory",
    "AI agent evaluation team",
    "BestAIAgent.in mission",
    "AI agent transparency",
  ],
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
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                BestAIAgent.in is an independent platform for discovering,
                comparing, and evaluating AI agents with transparent scoring and
                source-backed claims. We exist to cut through the noise in the
                AI agent market.
              </p>
            </div>
          </div>

          <div className="prose lg:prose-xl max-w-4xl text-[#c5c7d8]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Our Mission
            </h2>
            <p>
              We exist to cut through the noise in the AI agent market. Instead
              of marketing copy and inflated demos, we provide evidence-led
              assessments that help developers, businesses, and teams in India
              (and globally) find the right AI tool for their needs. Our mission
              is to be the most trusted, transparent, and evidence-backed
              directory for AI agents worldwide.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              The Problem We Solve
            </h2>
            <p>
              The AI agent market is flooded with hype. Vendor websites make
              bold claims about capability and performance, but rarely provide
              verifiable evidence. Pay-to-rank directories accept money for
              placements, making their rankings meaningless. Users waste hours
              navigating conflicting claims and marketing spin.
            </p>
            <p>
              BestAIAgent.in addresses this by requiring evidence for every
              claim, rejecting paid placements, and maintaining a transparent
              scoring methodology. We don&apos;t just tell you which agents are
              good—we show you exactly how we arrived at that conclusion.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              What We Cover
            </h2>
            <ul>
              <li>
                <strong>Coding Agents</strong>: Claude Code, Cursor, GitHub
                Copilot, Aider, Cline, and more. We evaluate repository-scale
                capability, MCP integration, and India-specific deployment.
              </li>
              <li>
                <strong>Business Automation</strong>: n8n, Zapier, Make, Lindy,
                and enterprise platforms. We assess workflow automation,
                integration quality, and pricing transparency.
              </li>
              <li>
                <strong>Voice AI</strong>: ElevenLabs, Deepgram, Vapi, and voice
                agent platforms. We test transcription accuracy across Indian
                languages and measure latency under real conditions.
              </li>
              <li>
                <strong>Core LLMs</strong>: GPT-4, Claude, Gemini, Llama 3,
                Mistral, and open-weight models. We benchmark performance,
                evaluate cost efficiency, and assess India Fit.
              </li>
              <li>
                <strong>Agent Builders</strong>: LangChain, CrewAI, LangGraph,
                AutoGen, and frameworks. We evaluate multi-agent orchestration,
                tool integration, and development experience.
              </li>
              <li>
                <strong>AI Infrastructure</strong>: Pinecone, Weaviate, Supabase,
                and vector databases. We assess scalability, pricing, and
                regional availability.
              </li>
              <li>
                <strong>Model Context Protocol</strong>: MCP servers, clients,
                and integrations. We verify transport configurations, test
                sandboxing, and evaluate DPDP compliance.
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
