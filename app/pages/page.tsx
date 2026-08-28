import { Metadata } from "next";
import { agents } from "@/data/agents";
import { categories } from "@/data/categories";
import { models } from "@/data/models";
import { frameworks } from "@/data/frameworks";
import { comparisons } from "@/data/comparisons";
import { research } from "@/data/research";

export const metadata: Metadata = {
  title:
    "Sitemap — All Pages | BestAIAgent.in",
  description:
    "Complete sitemap of BestAIAgent.in. Browse all agent profiles, categories, models, frameworks, comparisons, research reports, and resources.",
  keywords: [
    "sitemap",
    "AI agent directory",
    "all pages",
    "site navigation",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/pages/",
  },
};

export default function PagesSitemap() {
  const staticPages = [
    { name: "Home", url: "/", description: "Main landing page with overview of BestAIAgent.in services and evidence-backed AI agent evaluation" },
    { name: "About", url: "/about/", description: "Our mission, standards, and commitment to evidence-first AI evaluation" },
    { name: "Contact", url: "/contact/", description: "Get in touch with our editorial team for questions, corrections, and partnerships" },
    { name: "Privacy Policy", url: "/privacy/", description: "Our zero-data architecture and commitment to user privacy" },
    { name: "Terms of Service", url: "/terms/", description: "Legal terms governing the use of BestAIAgent.in" },
    { name: "Methodology", url: "/methodology/", description: "Our evidence-backed scoring rubric and evaluation methodology" },
    { name: "Verify", url: "/verify/", description: "How to challenge a score and verify our evidence trail" },
    { name: "Indian AI", url: "/indian-ai/", description: "Comprehensive guide to AI in India, DPDP compliance, and Indic language models" },
    { name: "India Hub", url: "/india/", description: "India-specific AI deployment guide, sovereign AI, and government initiatives" },
    { name: "MCP Directory", url: "/mcp/", description: "Complete Model Context Protocol directory with 50 topic clusters and verified servers" },
    { name: "Glossary", url: "/glossary/", description: "AI & ML terminology definitions with India-specific context" },
    { name: "Tools Directory", url: "/tools/", description: "Curated AI tools organized by category with evidence-backed scores" },
    { name: "Integration Guides", url: "/integrations/", description: "Step-by-step guides for connecting AI agents to databases, APIs, and enterprise tools" },
    { name: "Blog", url: "/blog/", description: "Research articles, comparison reports, and deep-dive analyses" },
    { name: "Pages Sitemap", url: "/pages/", description: "Complete listing of all pages on BestAIAgent.in" },
  ];

  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Navigation</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                Sitemap
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                Complete listing of all pages on BestAIAgent.in. Use this page to
                navigate our directory of AI agents, models, frameworks,
                comparisons, and research reports.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Static Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {staticPages.map((page) => (
                <a
                  key={page.url}
                  href={page.url}
                  className="rounded-xl p-4 border border-[#252b4b]/30 hover:border-[#8b5cf6]/30 transition-all"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                >
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">
                    {page.name}
                  </h3>
                  <p className="text-sm text-[#9ca5c3]">{page.description}</p>
                  <span className="text-xs text-[#8b5cf6] mt-2 block">
                    {page.url}
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Agent Profiles ({agents.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {agents.map((agent) => (
                <a
                  key={agent.slug}
                  href={`/agents/${agent.slug}/`}
                  className="rounded-lg p-3 border border-[#252b4b]/30 hover:border-[#8b5cf6]/30 transition-all flex items-center justify-between"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}
                >
                  <div>
                    <span className="text-sm text-[#f7f7ff]">{agent.name}</span>
                    <span className="text-xs text-[#555872] ml-2">
                      {agent.company}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#38d996]">
                    {agent.score}/10
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Categories ({categories.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <a
                  key={cat.slug}
                  href={`/categories/${cat.slug}/`}
                  className="rounded-xl p-4 border border-[#252b4b]/30 hover:border-[#8b5cf6]/30 transition-all"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                >
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#9ca5c3]">
                    {cat.agentCount} tools evaluated
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Model Profiles ({models.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {models.map((model) => (
                <a
                  key={model.slug}
                  href={`/models/${model.slug}/`}
                  className="rounded-lg p-3 border border-[#252b4b]/30 hover:border-[#8b5cf6]/30 transition-all flex items-center justify-between"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}
                >
                  <div>
                    <span className="text-sm text-[#f7f7ff]">{model.name}</span>
                    <span className="text-xs text-[#555872] ml-2">
                      {model.company}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#38d996]">
                    {model.score}/10
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Framework Profiles ({frameworks.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {frameworks.map((fw) => (
                <a
                  key={fw.slug}
                  href={`/frameworks/${fw.slug}/`}
                  className="rounded-lg p-3 border border-[#252b4b]/30 hover:border-[#8b5cf6]/30 transition-all flex items-center justify-between"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}
                >
                  <div>
                    <span className="text-sm text-[#f7f7ff]">{fw.name}</span>
                    <span className="text-xs text-[#555872] ml-2">
                      {fw.company}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#38d996]">
                    {fw.score}/10
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Comparisons ({comparisons.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comparisons.map((comp) => (
                <a
                  key={comp.slug}
                  href={`/compare/${comp.slug}/`}
                  className="rounded-xl p-4 border border-[#252b4b]/30 hover:border-[#8b5cf6]/30 transition-all"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                >
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-[#9ca5c3]">
                    {comp.evidenceCount} evidence items
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Research Reports ({research.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {research.map((report) => (
                <a
                  key={report.slug}
                  href={`/research/${report.slug}/`}
                  className="rounded-xl p-4 border border-[#252b4b]/30 hover:border-[#8b5cf6]/30 transition-all"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                >
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">
                    {report.title}
                  </h3>
                  <p className="text-xs text-[#9ca5c3]">
                    Published: {report.date} · {report.evidenceCount} evidence
                    items
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              How to Use This Sitemap
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              This sitemap is organized into sections to help you find what you
              need quickly. Static pages are listed first, followed by dynamic
              content sections. Each section includes a brief description of the
              content type and links to individual pages.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              For agent profiles, we display the agent name, company, and
              editorial score. For categories, we show the category name and
              the number of tools evaluated. For models and frameworks, we
              display the name, company, and score. For comparisons and
              research, we show the title and evidence count.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Click on any link to navigate to the corresponding page. You can
              also use your browser's find function (Ctrl+F or Cmd+F) to search
              for specific terms within this page.
            </p>
            <p className="text-[#c5c7d8]">
              If you are looking for a specific agent or tool, we recommend
              using the search functionality on our homepage for faster results.
              This sitemap is best for browsing and discovering content that you
              might not have known existed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Content Organization
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Our content is organized into several categories to help you find
              what you need quickly:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Agent Profiles</h3>
                <p className="text-sm text-[#9ca5c3]">Detailed evaluations of individual AI tools with evidence-backed scoring and India Fit assessment.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Categories</h3>
                <p className="text-sm text-[#9ca5c3]">Grouped views of agents by use case, with category-specific evaluation criteria and India context.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Models & Frameworks</h3>
                <p className="text-sm text-[#9ca5c3]">Evaluations of foundational AI technologies that power agents, including language models and agent frameworks.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Comparisons & Research</h3>
                <p className="text-sm text-[#9ca5c3]">Side-by-side comparisons of similar tools and in-depth research reports on industry trends.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Recently Added Pages
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              We are continuously adding new content to BestAIAgent.in. Recent
              additions include the Glossary, Tools Directory, Integration Guides,
              and Changelog pages. These new sections provide additional
              resources for developers, enterprises, and researchers evaluating
              AI agents for the Indian market.
            </p>
            <p className="text-[#c5c7d8]">
              For the latest additions, check our blog or follow us on social
              media. We announce new content through these channels to keep our
              community informed about the latest resources available.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Content Update Frequency
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              We update our content on different schedules depending on the type
              of content. Agent profiles are reviewed quarterly and updated when
              significant changes occur. Pricing information is verified every 90
              days. MCP infrastructure is re-verified monthly due to the rapid
              pace of development in this space.
            </p>
            <p className="text-[#c5c7d8]">
              Compliance-related content, including DPDP Act analyses and data
              residency assessments, is monitored continuously and updated when
              regulatory changes occur. Research reports are published as
              significant findings emerge and are updated annually to reflect the
              latest data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              XML Sitemap
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              For search engine optimization, we also provide an XML sitemap at
              /sitemap.xml. This XML sitemap follows the standard sitemap
              protocol and includes all public pages on our site. Search engines
              use this file to discover and index our content.
            </p>
            <p className="text-[#c5c7d8]">
              We update the XML sitemap automatically whenever new pages are
              added or existing pages are modified. This ensures that search
              engines always have an accurate view of our site structure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How many pages does BestAIAgent.in have?</h3>
                <p className="text-sm text-[#9ca5c3]">We have over 150 pages including agent profiles, categories, models, frameworks, comparisons, and research reports.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How often is new content added?</h3>
                <p className="text-sm text-[#9ca5c3]">We add new content regularly as new agents are evaluated and new research is published. Check our blog for announcements.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How can I find a specific agent?</h3>
                <p className="text-sm text-[#9ca5c3]">Use the search functionality on our homepage or browse by category. You can also use your browser's find function on this page.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I report a broken link?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with the broken link and the correct URL if known. We fix broken links within 24 hours.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I suggest new content?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with your suggestion and why it would be valuable. We prioritize suggestions that serve the Indian AI community.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Is there an API for programmatic access?</h3>
                <p className="text-sm text-[#9ca5c3]">We are developing a REST API for programmatic access to our directory data. Contact us to join the beta program.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I provide feedback?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with your feedback. We review all submissions and incorporate valid suggestions into our roadmap.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I report outdated information?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with the outdated information and the correct data if known. We verify and update within 48 hours.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I request a new comparison?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with the two tools you want compared and why. We evaluate all requests and add popular comparisons.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I request a new research report?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with your research topic suggestion and why it would be valuable for the Indian AI community.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I report a security vulnerability?</h3>
                <p className="text-sm text-[#9ca5c3]">Email us directly at security@bestaiagent.in for security-related issues. We respond within 24 hours.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              About This Sitemap
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              This sitemap provides a complete listing of all pages on
              BestAIAgent.in. It is designed to help you navigate our directory
              and discover content that may be relevant to your needs. Unlike the
              XML sitemap (which is designed for search engines), this page is
              optimized for human navigation.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Our directory includes {agents.length} agent profiles, {categories.length} categories,{" "}
              {models.length} model profiles, {frameworks.length} framework profiles,{" "}
              {comparisons.length} comparison pages, and {research.length} research reports.
              In total, we have over 150 pages of evidence-backed content about AI
              agents and their deployment in India.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              We organize our content into several categories to help you find
              what you need quickly. Agent profiles provide detailed evaluations
              of individual AI tools. Categories group agents by use case.
              Models and frameworks cover the foundational technologies that
              power AI agents. Comparisons help you evaluate similar tools
              side-by-side. Research reports provide in-depth analysis of
              industry trends and India-specific developments.
            </p>
            <p className="text-[#c5c7d8]">
              If you cannot find what you are looking for, try using our search
              functionality or browse by category. You can also contact us
              through our GitHub repository if you have suggestions for new
              content or if you encounter any issues with the site. We are
              continuously adding new pages and updating existing content to
              provide the most comprehensive AI agent directory available.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
