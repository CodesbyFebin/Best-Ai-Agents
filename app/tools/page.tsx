import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI Tools Directory — Curated AI Tools for Developers, Business & India | BestAIAgent.in",
  description:
    "Discover curated AI tools for coding, automation, voice, and business. Evidence-backed evaluations, India Fit scores, INR pricing, and DPDP compliance for every tool.",
  keywords: [
    "AI tools directory",
    "AI tools India",
    "coding AI tools",
    "automation AI tools",
    "voice AI tools",
    "business AI tools",
    "AI tools INR pricing",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/tools/",
  },
};

const toolCategories = [
  {
    name: "Coding & Development",
    description:
      "AI tools that assist with code generation, review, debugging, and repository management.",
    tools: [
      { name: "Claude Code", use: "Repository-scale coding with strong MCP integration", score: 9.2 },
      { name: "Cursor", use: "AI-first IDE with Streamable HTTP support", score: 9.0 },
      { name: "GitHub Copilot", use: "Code completion and chat within VS Code", score: 8.8 },
      { name: "Cline", use: "Open-source VS Code agent with MCP support", score: 8.5 },
      { name: "Aider", use: "Terminal-based AI pair programming", score: 8.3 },
    ],
  },
  {
    name: "Voice & Speech",
    description:
      "AI tools for transcription, synthesis, and voice agent development.",
    tools: [
      { name: "ElevenLabs", use: "High-quality voice synthesis with Indic language support", score: 9.1 },
      { name: "Deepgram", use: "Real-time transcription optimized for Indian accents", score: 8.7 },
      { name: "Vapi", use: "Voice agent platform for building conversational AI", score: 8.4 },
      { name: "Play.ht", use: "Text-to-speech with multilingual support", score: 8.2 },
      { name: "Murf AI", use: "AI voice generation for content creation", score: 8.0 },
    ],
  },
  {
    name: "Business Automation",
    description:
      "AI tools for workflow automation, customer support, and business process optimization.",
    tools: [
      { name: "n8n", use: "Open-source workflow automation with AI nodes", score: 8.9 },
      { name: "Zapier", use: "No-code automation connecting 6000+ apps", score: 8.6 },
      { name: "Make", use: "Visual automation platform with AI capabilities", score: 8.4 },
      { name: "Lindy", use: "AI agent for business workflow automation", score: 8.1 },
      { name: "Retell AI", use: "Voice AI platform for call center automation", score: 7.9 },
    ],
  },
  {
    name: "Infrastructure & Databases",
    description:
      "AI infrastructure tools including vector databases, MCP servers, and deployment platforms.",
    tools: [
      { name: "Pinecone", use: "Managed vector database for AI applications", score: 9.0 },
      { name: "Weaviate", use: "Open-source vector database with MCP support", score: 8.8 },
      { name: "Qdrant", use: "High-performance vector search engine", score: 8.6 },
      { name: "Supabase", use: "Open-source Firebase alternative with vector support", score: 8.5 },
      { name: "Chroma", use: "Lightweight embedding database for AI apps", score: 8.3 },
    ],
  },
];

export default function ToolsPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Tools Directory</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                AI Tools Directory
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                A curated collection of AI tools organized by category. Each tool
                has been evaluated using our evidence-backed methodology,
                including India Fit scoring and INR pricing transparency.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              How We Evaluate AI Tools
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Every tool in this directory has been evaluated using our
              standardized scoring rubric. We assess capability (40%), ease of
              use (20%), pricing transparency (15%), India Fit (15%), and
              evidence quality (10%). Each dimension is scored independently on a
              0-10 scale, then combined into a composite editorial score.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Our India Fit evaluation is particularly important for tools
              serving the Indian market. We verify INR pricing availability, UPI
              payment support, Indic language capabilities, and DPDP Act
              compliance. Tools with high India Fit scores are better suited for
              Indian deployments.
            </p>
            <p className="text-[#c5c7d8]">
              We update our evaluations quarterly to reflect new features,
              pricing changes, and compliance updates. If you notice that a
              tool has changed significantly, please report it through our GitHub
              repository.
            </p>
          </section>

          {toolCategories.map((category) => (
            <section key={category.name} className="mb-12">
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-3">
                {category.name}
              </h2>
              <p className="text-[#9ca5c3] mb-6">{category.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-xl p-5 border border-[#252b4b]/30"
                    style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-[#f7f7ff]">
                        {tool.name}
                      </h3>
                      <span className="text-sm font-bold text-[#38d996]">
                        {tool.score}/10
                      </span>
                    </div>
                    <p className="text-sm text-[#9ca5c3]">{tool.use}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Submitting a Tool
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              If you have built an AI tool that you would like to include in
              this directory, please submit it through our GitHub repository.
              Include the tool name, official website, category, and a brief
              description of its capabilities.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Our editorial team evaluates all submissions using our standard
              scoring rubric. If the tool meets our inclusion criteria, it will
              be added to the directory in the next update cycle. We prioritize
              tools that offer India-specific capabilities or serve the Indian
              market.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              When submitting a tool, please provide as much evidence as
              possible: official documentation, pricing information, feature
              lists, and any India-specific capabilities. This helps us conduct
              a thorough evaluation and provide accurate scores.
            </p>
            <p className="text-[#c5c7d8]">
              We also welcome updates to existing listings. If you are a vendor
              and your tool has changed significantly—new features, pricing
              changes, or compliance updates—please submit an update request
              through our GitHub repository.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Evaluating AI Tools for Enterprise Use
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              When evaluating AI tools for enterprise use, consider factors beyond
              raw capability. Total cost of ownership (TCO) includes licensing
              fees, infrastructure costs, training expenses, and ongoing
              maintenance. A tool with a higher sticker price may have lower TCO
              if it requires less infrastructure or training.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Security and compliance are critical for enterprise deployments.
              Evaluate whether the tool meets your industry's regulatory
              requirements, supports your security policies, and integrates with
              your existing identity and access management systems. For Indian
              enterprises, DPDP compliance is essential when processing personal
              data.
            </p>
            <p className="text-[#c5c7d8]">
              Vendor stability and support are also important considerations.
              Evaluate the vendor's financial health, customer support quality,
              and commitment to ongoing development. A tool backed by a stable
              vendor with responsive support is less likely to cause disruption
              if issues arise.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Evaluating AI Tools for Enterprise Use
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              When evaluating AI tools for enterprise use, consider factors beyond
              raw capability. Total cost of ownership (TCO) includes licensing
              fees, infrastructure costs, training expenses, and ongoing
              maintenance. A tool with a higher sticker price may have lower TCO
              if it requires less infrastructure or training.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Security and compliance are critical for enterprise deployments.
              Evaluate whether the tool meets your industry's regulatory
              requirements, supports your security policies, and integrates with
              your existing identity and access management systems. For Indian
              enterprises, DPDP compliance is essential when processing personal
              data.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Vendor stability and support are also important considerations.
              Evaluate the vendor's financial health, customer support quality,
              and commitment to ongoing development. A tool backed by a stable
              vendor with responsive support is less likely to cause disruption
              if issues arise.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Integration capabilities determine how easily the tool fits into
              your existing technology stack. Evaluate whether the tool supports
              standard APIs, webhooks, and integration frameworks. For AI agents,
              MCP support is particularly valuable as it enables standardized
              tool integration.
            </p>
            <p className="text-[#c5c7d8]">
              Finally, consider the tool's roadmap and future direction. A tool
              with a clear vision and active development is more likely to meet
              your future needs. Review the vendor's public roadmap, release
              frequency, and community engagement to assess their commitment to
              ongoing improvement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              AI Tool Selection Framework
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Use this structured framework to select the right AI tools for
              your organization:
            </p>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Step 1: Define Requirements</h3>
                <p className="text-sm text-[#9ca5c3]">Identify the specific problems you need to solve, the capabilities required, and the constraints you must work within (budget, timeline, compliance).</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Step 2: Shortlist Candidates</h3>
                <p className="text-sm text-[#9ca5c3]">Use our directory to identify tools that match your requirements. Filter by category, price range, and India Fit score to narrow your options.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Step 3: Evaluate Evidence</h3>
                <p className="text-sm text-[#9ca5c3]">Review the evidence behind each tool's score. Check the sources, last-verified date, and confidence level to ensure the evaluation is current and reliable.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Step 4: Proof of Concept</h3>
                <p className="text-sm text-[#9ca5c3]">Conduct a proof-of-concept with your top candidates. Test with your actual data, your actual users, and your actual compliance requirements before committing.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Step 5: Deploy and Monitor</h3>
                <p className="text-sm text-[#9ca5c3]">Deploy the chosen tool with appropriate monitoring and governance. Track performance, user satisfaction, and compliance to ensure ongoing value delivery.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              AI Tool Pricing Models
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Understanding AI tool pricing models helps you budget accurately
              and avoid unexpected costs. Common pricing models include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Per-User Pricing</h3>
                <p className="text-sm text-[#9ca5c3]">Fixed monthly fee per user. Predictable costs but can be expensive for large teams.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Usage-Based Pricing</h3>
                <p className="text-sm text-[#9ca5c3]">Pay for what you use (tokens, API calls, compute). Cost-effective for variable workloads.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Freemium</h3>
                <p className="text-sm text-[#9ca5c3]">Free tier with limited features, paid tiers for advanced capabilities. Good for evaluation.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Enterprise License</h3>
                <p className="text-sm text-[#9ca5c3]">Custom pricing for large organizations. Often includes dedicated support and SLAs.</p>
              </div>
            </div>
            <p className="text-[#c5c7d8]">
              For Indian enterprises, we recommend verifying whether vendors
              offer INR-denominated pricing with UPI payment support and GST
              invoicing. This reduces forex conversion costs and simplifies
              procurement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              AI Tool Categories Deep Dive
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Each category of AI tools serves distinct use cases and requires
              different evaluation criteria. Coding tools are evaluated on
              repository-scale capability, language support, and IDE integration.
              Voice tools are assessed on transcription accuracy across Indian
              languages and latency under real network conditions. Business
              automation tools are measured on workflow complexity, integration
              quality, and pricing transparency.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Infrastructure tools, including vector databases and MCP servers,
              are evaluated on scalability, performance, and regional
              availability. For Indian deployments, we verify that tools offer
              local deployment options or Indian cloud regions to comply with
              DPDP Act data residency requirements.
            </p>
            <p className="text-[#c5c7d8]">
              We encourage users to evaluate tools within their specific context
              rather than relying solely on aggregate scores. A tool that scores
              highly overall may not be the best choice for your specific use
              case. Use our category pages to compare tools within the same
              category and make informed decisions based on your requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Getting Started with AI Tools
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              If you are new to AI tools, we recommend starting with a clear
              definition of the problem you need to solve. Identify the specific
              tasks you want to automate or augment, then browse our categories
              to find tools that address those needs.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              For Indian users, pay special attention to the India Fit score.
              This score evaluates how well a tool serves the Indian market
              across INR pricing, UPI payment support, Indic language
              capabilities, and DPDP compliance. A high India Fit score indicates
              the tool is well-suited for Indian deployments.
            </p>
            <p className="text-[#c5c7d8]">
              Start with a free tier or trial to evaluate the tool in your own
              environment before committing to a paid plan. This hands-on
              evaluation is the best way to determine if a tool meets your needs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How often is this directory updated?</h3>
                <p className="text-sm text-[#9ca5c3]">We review agent profiles quarterly and update them when significant changes occur. Pricing information is verified every 90 days.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Can I suggest a tool for inclusion?</h3>
                <p className="text-sm text-[#9ca5c3]">Yes. Open a GitHub issue with the tool name, official website, and category. Our editorial team will evaluate the suggestion.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What is India Fit?</h3>
                <p className="text-sm text-[#9ca5c3]">India Fit is a scoring dimension that evaluates how well a tool serves the Indian market across INR pricing, UPI support, Indic language capabilities, and DPDP compliance.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I compare tools?</h3>
                <p className="text-sm text-[#9ca5c3]">Use our comparison pages for side-by-side evaluations. Filter by category and India Fit to find tools that match your requirements.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What if I disagree with a score?</h3>
                <p className="text-sm text-[#9ca5c3]">We welcome scrutiny. Submit evidence that contradicts our assessment through GitHub issues, and we will review and update if validated.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I get support?</h3>
                <p className="text-sm text-[#9ca5c3]">For platform issues, open a GitHub issue. For vendor-specific support, contact the vendor directly using the links in their profile.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I stay updated?</h3>
                <p className="text-sm text-[#9ca5c3]">Watch our GitHub repository, follow us on Twitter/X, or subscribe to our RSS feed for announcements about new content and updates.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What are the most popular categories?</h3>
                <p className="text-sm text-[#9ca5c3]">Coding agents, voice AI, and business automation are the most popular categories among Indian developers and enterprises.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I compare tools across categories?</h3>
                <p className="text-sm text-[#9ca5c3]">Use our comparison pages for side-by-side evaluations. Focus on the editorial score as a baseline but pay special attention to India Fit for Indian deployments.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What is the editorial independence policy?</h3>
                <p className="text-sm text-[#9ca5c3]">BestAIAgent.in does not accept payments from vendors for placement or scoring. All evaluations are independent and evidence-backed.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I get listed?</h3>
                <p className="text-sm text-[#9ca5c3]">Submit your tool through GitHub issues with official website and documentation. We evaluate all submissions using our standard rubric.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What is the evaluation timeline?</h3>
                <p className="text-sm text-[#9ca5c3]">We aim to evaluate all submissions within 5 business days. Complex tools may require additional time for thorough evaluation.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Can I update my listing?</h3>
                <p className="text-sm text-[#9ca5c3]">Yes. Submit updates through GitHub issues with the new information. We verify and update listings within 48 hours.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What makes a good evaluation?</h3>
                <p className="text-sm text-[#9ca5c3]">Good evaluations are based on verifiable evidence, independent testing, and transparent methodology. We document our sources so you can verify our findings.</p>
              </div>
            </div>
          </section>
            <p className="text-[#c5c7d8] mb-4">
              The Indian AI tool landscape is evolving rapidly, driven by
              government initiatives, startup innovation, and enterprise adoption.
              Key trends shaping the market include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Indic Language Support</h3>
                <p className="text-sm text-[#9ca5c3]">Growing demand for AI tools that support Hindi, Tamil, Telugu, and other Indian languages. Tools with Indic language capabilities receive higher India Fit scores.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Sovereign Deployment</h3>
                <p className="text-sm text-[#9ca5c3]">Increasing preference for tools that can be deployed on Indian cloud regions or on-premise infrastructure to comply with DPDP Act data residency requirements.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">MCP Integration</h3>
                <p className="text-sm text-[#9ca5c3]">Rapid adoption of Model Context Protocol for standardizing tool integration. Agents and tools with MCP support are better positioned for enterprise adoption.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">INR Pricing Transparency</h3>
                <p className="text-sm text-[#9ca5c3]">Growing expectation for transparent INR pricing with UPI payment support and GST invoicing. Tools that offer local pricing reduce friction for Indian customers.</p>
              </div>
            </div>
            <p className="text-[#c5c7d8] mb-4">
              These trends are reflected in our India Fit scoring, which
              evaluates tools on their ability to serve the Indian market. Tools
              that embrace these trends tend to receive higher scores and are
              better positioned for adoption by Indian developers and enterprises.
            </p>
            <p className="text-[#c5c7d8]">
              We continuously monitor these trends and update our evaluations
              accordingly. If you are building AI tools for the Indian market,
              we encourage you to embrace these trends to improve your India Fit
              score and better serve your target audience.
            </p>
          </div>
        </div>
      </main>
    );
}
