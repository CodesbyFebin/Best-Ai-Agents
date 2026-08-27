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
            <p>
              Our coverage spans the entire AI agent ecosystem, from coding
              agents that help developers write and refactor code to voice AI
              systems that power customer service in Indian languages. We
              evaluate over 69 AI agents, 30 foundational models, and 32
              frameworks, with particular focus on categories that matter most
              to our audience: coding agents, business automation, voice AI,
              core LLMs, agent builders, AI infrastructure, and Model Context
              Protocol (MCP) integrations.
            </p>
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
              Our History
            </h3>
            <p>
              BestAIAgent.in was founded in 2024 by a group of independent
              AI researchers and developers who were frustrated by the lack of
              credible, evidence-backed information about AI agents. The initial
              version was a simple Markdown file on GitHub, listing 10 agents with
              manually verified scores. Within a year, the community contributed
              enough evidence to expand the directory to 69 agents, 30 models,
              and 32 frameworks. Today, our platform serves over 50,000 monthly
              readers, primarily developers, procurement teams, and startups in
              India.
            </p>
            <p>
              In August 2025, we launched our dedicated India hub, which
              consolidates all India-specific content including DPDP Act
              compliance analyses, INR pricing transparency reports, Indic
              language model evaluations, and sovereign AI deployment guides.
              This hub has become our most visited section, reflecting the
              growing importance of the Indian AI market.
            </p>
            <p>
              In early 2026, we expanded to cover MCP (Model Context Protocol)
              infrastructure with 50 topic clusters across 5 buckets: servers,
              clients, security, enterprise deployment, and local/offline
              development. This expansion recognized MCP's growing importance in
              the AI agent ecosystem and the unique needs of Indian development
              teams working with these integrations.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Our Values
            </h3>
            <p>
              Everything we do is guided by five core values:
            </p>
            <ul>
              <li>
                <strong>Evidence Over Opinion</strong>: We do not accept
                marketing claims at face value. Every score is backed by
                traceable, primary-source evidence or our own testing. If we
                cannot verify a claim, we say so explicitly.
              </li>
              <li>
                <strong>Radical Transparency</strong>: Our scoring rubric, data
                sources, and methodology are publicly available. We welcome
                scrutiny and encourage independent verification of our work.
              </li>
              <li>
                <strong>Editorial Independence</strong>: We do not accept paid
                placements, sponsored content, or vendor payments. Our revenue
                model is nonexistent—we have no ads, no data sales, and no
                consulting fees from vendors.
              </li>
              <li>
                <strong>User-First</strong>: We optimize for the needs of
                developers, businesses, and teams in India and globally. Every
                feature we build, every score we calculate, and every word we
                write is designed to help you make better decisions.
              </li>
              <li>
                <strong>Continuous Improvement</strong>: The AI landscape
                evolves rapidly. We commit to regular refreshes, community
                feedback incorporation, and methodology updates based on new
                evidence and changing needs.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              What Sets Us Apart
            </h3>
            <p>
              The AI agent evaluation space is crowded, but most directories and
              review sites share fundamental problems that BestAIAgent.in was
              built to solve:
            </p>
            <div className="space-y-4 mt-4">
              <div
                className="rounded-xl p-4 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.3)",
                  borderColor: "rgba(239, 68, 68, 0.3)",
                }}
              >
                <h4 className="font-semibold text-white mb-1">
                  The "No Pay-to-Rank" Difference
                </h4>
                <p className="text-sm text-slate-400">
                  Unlike generic AI tool directories that accept money for
                  placements, we do not offer any paid features. Every listing
                  is evaluated using the same rubric with the same rigor. A
                  small open-source project with excellent evidence can outscore
                  a well-funded startup with better marketing.
                </p>
              </div>
              <div
                className="rounded-xl p-4 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.3)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <h4 className="font-semibold text-white mb-1">
                  Source-Backed Claims
                </h4>
                <p className="text-sm text-slate-400">
                  Every score, feature claim, and pricing figure on our site
                  links back to its source. We do not make assertions without
                  evidence. If we can't verify something through official
                  documentation, public repositories, or hands-on testing, we
                  either omit the claim or explicitly flag it as unverified.
                </p>
              </div>
              <div
                className="rounded-xl p-4 border"
                style={{
                  backgroundColor: "rgba(13, 16, 37, 0.3)",
                  borderColor: "rgba(16, 185, 129, 0.3)",
                }}
              >
                <h4 className="font-semibold text-white mb-1">
                  India-First Perspective
                </h4>
                <p className="text-sm text-slate-400">
                  We maintain a distinct India Fit score that evaluates how well
                  each agent serves the Indian market. This includes INR pricing,
                  UPI payment support, Indic language support, on-premise
                  deployment options, and DPDP Act compliance—factors that global
                  directories often overlook.
                </p>
              </div>
            </div>

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
                data residency options, and consent management features are
                monitored continuously, with updates triggered by regulatory
                changes.
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
              methodology documentation at /methodology/. Every score includes a
              confidence indicator that reflects the strength and recency of
              underlying evidence.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
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
            <p>
              The complete source code for this website is open source and
              available at{" "}
              <a
                href="https://github.com/CodesbyFebin/bestaiagent.in"
                className="text-[#8b5cf6] hover:underline"
              >
                GitHub
              </a>
              . You can browse, fork, and contribute to any aspect of the site.
              Our data files are plain TypeScript modules, making it easy for
              other projects to build on our work or verify our claims.
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
            <p>
              Near-term roadmap items (next 3 months):
            </p>
            <ul>
              <li>
                <strong>API endpoints</strong>: A REST API at /api/catalog
                providing JSON access to all agent, model, framework, and
                comparison data with filtering and search capabilities.
              </li>
              <li>
                <strong>Change detection</strong>: Automated monitoring of
                vendor pricing pages, documentation updates, and GitHub
                releases to flag potential staleness in our data.
              </li>
              <li>
                <strong>Interactive comparisons</strong>: User-facing tool for
                building custom comparison tables across any set of agents
                with export to CSV and PNG.
              </li>
              <li>
                <strong>Bengali and Marathi support</strong>: Expanded Indic
                language evaluation coverage beyond Hindi and Hinglish.
              </li>
            </ul>

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
