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
    <article className="prose lg:prose-xl max-w-4xl">
      <h1>Blog</h1>
      <p>
        Evidence-led insights, analysis, and updates on AI agents and their
        adoption—in India and globally.
      </p>

      <section className="mt-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b py-8 last:border-0"
          >
            <h2 className="text-2xl font-bold">
              <a href={`/blog/${post.slug}/`}>{post.title}</a>
            </h2>
            <p className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readTime} read
            </p>
            <p className="mt-2">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}/`}
              className="text-blue-600 hover:underline"
            >
              Read more →
            </a>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <h2>Recently Published Agent Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
          {agents.slice(0, 6).map((agent) => (
            <a
              key={agent.slug}
              href={`/agents/${agent.slug}/`}
              className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold">{agent.name}</h3>
              <p className="text-sm text-muted-foreground">
                {agent.company} · {agent.shortDesc}
              </p>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
