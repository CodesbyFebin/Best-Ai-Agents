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
    <article className="prose lg:prose-xl max-w-4xl">
      <h1>About BestAIAgent.in</h1>
      <p>
        BestAIAgent.in is an independent platform for discovering, comparing,
        and evaluating AI agents with transparent scoring and source-backed
        claims.
      </p>

      <h2>Our Mission</h2>
      <p>
        We exist to cut through the noise in the AI agent market. Instead of
        marketing copy and inflated demos, we provide evidence-led assessments
        that help developers, businesses, and teams in India (and globally)
        find the right AI tool for their needs.
      </p>

      <h2>What We Cover</h2>
      <ul>
        <li>
          <strong>Coding Agents</strong>: Claude Code, Cursor, GitHub Copilot,
          Aider, Cline, and more
        </li>
        <li>
          <strong>Business Automation</strong>: n8n, Zapier, Make, Lindy, and
          enterprise platforms
        </li>
        <li>
          <strong>Voice AI</strong>: ElevenLabs, Deepgram, Vapi, and voice
          agent platforms
        </li>
        <li>
          <strong>Core LLMs</strong>: GPT-4, Claude, Gemini, Llama 3, Mistral,
          and open-weight models
        </li>
        <li>
          <strong>Agent Builders</strong>: LangChain, CrewAI, LangGraph,
          AutoGen, and frameworks
        </li>
        <li>
          <strong>AI Infrastructure</strong>: Pinecone, Weaviate, Supabase, and
          vector databases
        </li>
        <li>
          <strong>Model Context Protocol</strong>: MCP servers, clients, and
          integrations
        </li>
      </ul>

      <h2>Our Standards</h2>
      <ul>
        <li>No pay-to-rank — every listing is evaluated equally</li>
        <li>Sources are shown — you can verify every claim</li>
        <li>India-specific context — pricing, compliance, and deployment</li>
        <li>Regular refresh — stale data is clearly marked</li>
        <li>Editorial independence — we do not accept vendor payments</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Have questions or found an error?{" "}
        <a href="https://github.com/CodesbyFebin/bestaiagent.in/issues">
          Open an issue on GitHub
        </a>{" "}
        or email us at <a href="mailto:hello@bestaiagent.in">hello@bestaiagent.in</a>.
      </p>

      <p>
        <small>
          Scores reflect published methodology and available evidence, not
          guarantees.
        </small>
      </p>
    </article>
  );
}
