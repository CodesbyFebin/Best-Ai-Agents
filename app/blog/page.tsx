import { Metadata } from "next";
import { agents } from "@/data/agents";

export const metadata: Metadata = {
  title: "Blog — BestAIAgent.in",
  description: "Latest insights, analysis, and updates from the BestAIAgent.in team.",
  alternates: {
    canonical: "https://bestaiagent.in/blog/",
  },
};

const posts = [
  {
    slug: "august-2026-agent-roundup",
    title: "August 2026 AI Agent Roundup: What's New",
    date: "2026-08-20",
    excerpt:
      "This month brought major updates to Claude Code, Cursor introduced new model integrations, and open-weight models saw significant improvements.",
    readTime: "8 min",
  },
  {
    slug: "india-ai-agents-buyers-guide",
    title: "India AI Agents Buyer's Guide 2026",
    date: "2026-08-15",
    excerpt:
      "A comprehensive guide for Indian businesses evaluating AI agents, covering compliance, pricing, and localization factors.",
    readTime: "12 min",
  },
  {
    slug: "open-weight-vs-closed-models",
    title: "Open Weight vs Closed Models: Which is Right for You?",
    date: "2026-08-10",
    excerpt:
      "We compare open-weight models like Llama 3 with closed models like GPT-4, examining cost, control, and capability trade-offs.",
    readTime: "10 min",
  },
];

export default function BlogPage() {
  return (
    <main className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 pb-6 border-b border-[#252b4b]">
          <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">Blog</h1>
          <p className="text-xl text-[#9ca5c3] max-w-2xl">
            Evidence-led insights, analysis, and updates on AI agents and their
            adoption—in India and globally.
          </p>
        </header>

        <section className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="block p-6 rounded-xl border border-[#252b4b] hover:border-[#8b5cf6]/50 transition-all duration-300"
              style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
            >
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-2">
                <a href={`/blog/${post.slug}/`}>{post.title}</a>
              </h2>
              <p className="text-sm text-[#555872] mb-3">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readTime} read
              </p>
              <p className="text-[#c5c7d8] leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 text-[#8b5cf6] hover:text-[#b999ff] font-medium text-sm">
                Read more →
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 pt-8 border-t border-[#252b4b]">
          <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
            Recently Published Agent Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agents.slice(0, 6).map((agent) => (
              <a
                key={agent.slug}
                href={`/agents/${agent.slug}/`}
                className="block p-4 rounded-xl border border-[#252b4b] hover:border-[#8b5cf6]/50 transition-all duration-300"
                style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-uppercase bg-[#352563] color-[#c4a9ff]">
                    {agent.name.slice(0, 2)}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#f7f7ff]">{agent.name}</h3>
                    <p className="text-sm text-[#9ca5c3]">{agent.company}</p>
                  </div>
                </div>
                <p className="text-sm text-[#c5c7d8] mb-3">{agent.shortDesc}</p>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-xs text-[#9ca5c3]">Score</span>
                    <span className="font-bold text-[#38d996] ml-2">{agent.score}/10</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#9ca5c3]">India Fit</span>
                    <span className="font-bold text-[#f7f7ff] ml-2">{agent.indiaFit}/10</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
