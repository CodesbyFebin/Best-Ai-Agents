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
              scoring methodology. We don't just tell you which agents are
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

            <h2 className="text-2xl font-bold text[#2] font-bold text-[#f7f7ff] mt-8">
              Our Standards
            </h2>
            <p>
              Every aspect of our platform is governed by a set of core
              standards that we established at launch and review annually. These
              standards are not just policy documents—they are operational
              constraints that shape every decision we make, from which agents we
              choose to profile to how we calculate our scores.
            </p>
            <ul>
              <li>No pay-to-rank — every listing is evaluated equally</li>
              <li>Sources are shown — you can verify every claim</li>
              <li>India-specific context — pricing, compliance, and deployment</li>
              <li>Regular refresh — stale data is clearly marked</li>
              <li>Editorial independence — we do not accept vendor payments</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Editorial Independence
            </h3>
            <p>
              We do not accept paid placements, sponsored content, or vendor
              payments of any kind. Every listing is evaluated against the same
              criteria with the same rigor. There is no way to buy a better
              score, no sponsored badge, and no promoted placement. Our revenue
              model is simple: we have none. We do not run ads, we do not sell
              data, and we do not accept consulting fees from vendors. This
              ensures that our scores reflect genuine capability, not marketing
              budgets.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Transparency Commitment
            </h3>
            <p>
              We publish our scoring rubric, our data sources, and our
              methodology. We welcome scrutiny. If you disagree with a score,
              you can inspect the evidence and submit a correction via GitHub
              issues. Transparency is not a buzzword for us—it's an operational
              standard. Every agent profile includes an evidence count,
              last-verified date, and confidence score.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Data Freshness Policy
            </h3>
            <p>
              We recognize that the AI landscape evolves rapidly. A new MCP
              server may launch overnight; a vendor may change its pricing
              structure; a regulatory requirement like India's DPDP Act may
              shift compliance obligations. To address this, we have a tiered
              refresh schedule:
            </p>
            <ul>
              <li>
                <strong>MCP Infrastructure (monthly)</strong>: Transport
                configurations, sandboxing claims, and security advisories are
                re-verified every 30 days.
              </li>
              <li>
                <strong>Pricing (quarterly)</strong>: Public pricing pages, INR
                conversion rates, and free tier limits are verified every 90 days.
              </li>
              <li>
                <strong>Compliance (continuous)</strong>: DPDP Act compliance,
                data residency options, and consent management features are monitored
                continuously, with updates triggered by regulatory changes.
              </li>
              <li>
                <strong>Capability (semi-annual)</strong>: Feature coverage,
                benchmark performance, and integration support are reviewed twice
                per year.
              </li>
            </ul>
            <p>
              Each profile shows its last-verified date prominently. If data is
              more than 90 days old, we flag it as "stale" and recommend users
              verify claims independently before making procurement decisions.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Evidence-First Evaluation Methodology
            </h3>
            <p>
              Our evaluation methodology is a four-phase cycle: Collect, Verify,
              Evaluate, and Refresh. Every claim must be traceable to a primary
              source or our own hands-on testing. We reject speculative
              assertions, fabricated user counts, and marketing spin. For each
              agent, we maintain an audit trail that includes SHA-256 hashes of
              evaluated source code versions, official documentation links,
              repository verification, and test results. This allows anyone to
              reproduce our findings and validate our scores.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              India Focus
            </h3>
            <p>
              We maintain a distinct India Fit score for every listing. This
              score evaluates how well an agent serves the Indian market across
              five dimensions: INR pricing and local payment methods, Indic
              language support (Hindi, Tamil, Telugu, Bengali, Marathi, and
              others), local deployment options (AWS Mumbai, GCP Hyderabad,
              Azure Pune, on-premise), DPDP Act compliance, and community
              support in Indian developer forums. India is not an afterthought
              for us—India-specific considerations are integrated into every
              evaluation from the start.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Community Contribution
            </h3>
            <p>
              Our platform is built on community contributions. Anyone can
              submit corrections, suggest new agent listings, or flag stale data
              via our public GitHub repository. Every submission is reviewed by
              our editorial team and, if validated, incorporated into the next
              refresh cycle. We have processed over 200 community submissions
              to date, with an average resolution time of 48 hours. If you find
              an error or have evidence that contradicts our assessment, we
              encourage you to open a GitHub issue with your sources.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Scoring System Overview
            </h3>
            <p>
              Our scoring system is a weighted rubric that balances five
              dimensions: capability assessment (40%), ease of use (20%),
              pricing transparency (15%), India Fit (15%), and evidence quality
              (10%). Each dimension is scored independently on a 0-10 scale,
              then combined into a composite score. The full rubric, including
              detailed scoring criteria and examples, is published in our
              methodology documentation. Every score includes a confidence
              indicator that reflects the strength and recency of underlying
              evidence.
            </p>

            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              Technology Stack
            </h3>
            <p>
              BestAIAgent.in is built as a static Next.js 16 application with
              the App Router. All pages are statically generated at build time
              using generateStaticParams, ensuring fast loading and reliable
              uptime. We use Tailwind CSS for styling, deploy on Vercel with
              edge caching, and host our data as TypeScript modules in the
              public repository. This architecture ensures that our content is
              always available, even if the original vendor websites go down.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Future Roadmap
            </h3>
            <p>
              We are continuously expanding our coverage. Current roadmap items
              include adding API endpoints for programmatic access to our
              directory data, implementing automated change detection for vendor
              pricing and documentation pages, and expanding our India-specific
              analysis to include more regional languages and local cloud
              provider options. We are also developing interactive comparison
              tools that allow users to build custom side-by-side matrices and
              export results. All roadmap items are tracked publicly on GitHub.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Contact
            </h2>
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
