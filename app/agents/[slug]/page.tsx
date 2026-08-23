import { notFound } from "next/navigation";
import { Metadata } from "next";
import { agents } from "@/data/agents";
import { Agent } from "@/data/types";
import { CategoryList } from "@/components/CategoryList";
import { EvidenceSection } from "@/components/EvidenceSection";
import { IndiaBadge } from "@/components/IndiaBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getAgent(slug: string): Promise<Agent | undefined> {
  return agents.find((a) => a.slug === slug);
}

export async function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = await getAgent(slug);
  if (!agent) return {};

  return {
    title: `${agent.name} (${agent.company}) — AI Agent for ${agent.category} | BestAIAgent.in`,
    description: agent.shortDesc,
    openGraph: {
      title: `${agent.name} (${agent.company}) — AI Agent Review`,
      description: agent.shortDesc,
      images: [`https://bestaiagent.in/api/og/agent/${slug}`],
      type: "article",
      publishedTime: "2026-08-01T00:00:00.000Z",
      modifiedTime: agent.lastVerified,
    },
    alternates: {
      canonical: `https://bestaiagent.in/agents/${slug}/`,
    },
    other: {
      "article:author": "BestAIAgent.in",
      "twitter:card": "summary_large_image",
    },
  };
}

export default async function AgentPage({ params }: Props) {
  const { slug } = await params;
  const agent = await getAgent(slug);

  if (!agent) {
    notFound();
  }

  const categoryAgents = agents
    .filter((a) => a.category === agent.category && a.slug !== agent.slug)
    .slice(0, 4);

  return (
    <article className="prose lg:prose-xl max-w-4xl">
      <header>
        <div className="flex items-center gap-2 mb-4">
          <span className={`w-3 h-3 rounded-full bg-${agent.tone}-500`} />
          <span className="text-sm font-medium text-muted-foreground">
            {agent.category} · {agent.pillar}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{agent.name}</h1>
        <p className="text-xl text-muted-foreground mb-2">{agent.company}</p>

        <div className="flex items-center gap-4 mb-6">
          <IndiaBadge score={agent.indiaFit} />
          <span className="text-3xl font-bold text-green-600">{agent.score}/10</span>
          <span className="text-sm text-muted-foreground">{agent.evidenceItems} evidence items</span>
        </div>

        <p className="text-lg">{agent.shortDesc}</p>
      </header>

      <section className="prose mt-8">
        <h2>About {agent.name}</h2>
        <p>{agent.longDesc}</p>

        <h3>Key Features</h3>
        <ul>
          {agent.keyFeatures.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <h3>Use Cases</h3>
        <ul>
          {agent.useCases.map((useCase, i) => (
            <li key={i}>{useCase}</li>
          ))}
        </ul>

        <h3>Known Limitations</h3>
        <ul>
          {agent.limitations.map((limitation, i) => (
            <li key={i}>{limitation}</li>
          ))}
        </ul>

        <h3>Deployment & Integrations</h3>
        <p>
          <strong>Deployment:</strong> {agent.deployment.join(", ")}
        </p>
        <p>
          <strong>Integrations:</strong> {agent.integrations.join(", ")}
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <strong>Editorial Verdict:</strong> {agent.verdict}
        </div>
      </section>

      <EvidenceSection
        evidenceCount={agent.evidenceItems}
        sources={agent.sources}
        lastVerified={agent.lastVerified}
      />

      <section className="mt-12">
        <h2>Compare with Similar Agents</h2>
        <CategoryList agents={categoryAgents} />
      </section>
    </article>
  );
}
