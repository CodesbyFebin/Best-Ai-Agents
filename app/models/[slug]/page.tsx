import { notFound } from "next/navigation";
import { Metadata } from "next";
import { models } from "@/data/models";
import { Agent } from "@/data/types";
import { EvidenceSection } from "@/components/EvidenceSection";
import { IndiaBadge } from "@/components/IndiaBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getModel(slug: string): Promise<Agent | undefined> {
  return models.find((m) => m.slug === slug);
}

export async function generateStaticParams() {
  return models.map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const model = await getModel(slug);
  if (!model) return {};

  return {
    title: `${model.name} (${model.company}) — AI Model | BestAIAgent.in`,
    description: model.shortDesc,
    openGraph: {
      title: `${model.name} (${model.company}) — AI Model Review`,
      description: model.shortDesc,
      images: [`https://bestaiagent.in/api/og/model/${slug}`],
      type: "article",
    },
    alternates: {
      canonical: `https://bestaiagent.in/models/${slug}/`,
    },
  };
}

export default async function ModelPage({ params }: Props) {
  const { slug } = await params;
  const model = await getModel(slug);

  if (!model) {
    notFound();
  }

  return (
    <article className="prose lg:prose-xl max-w-4xl">
      <header>
        <div className="flex items-center gap-2 mb-4">
          <span className={`w-3 h-3 rounded-full bg-${model.tone}-500`} />
          <span className="text-sm font-medium text-muted-foreground">
            {model.category} · {model.pillar}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{model.name}</h1>
        <p className="text-xl text-muted-foreground mb-2">{model.company}</p>

        <div className="flex items-center gap-4 mb-6">
          <IndiaBadge score={model.indiaFit} />
          <span className="text-3xl font-bold text-green-600">{model.score}/10</span>
          <span className="text-sm text-muted-foreground">
            {model.evidenceItems} evidence items
          </span>
        </div>

        <p className="text-lg">{model.shortDesc}</p>
      </header>

      <section className="prose mt-8">
        <h2>About {model.name}</h2>
        <p>{model.longDesc}</p>

        <h3>Key Features</h3>
        <ul>
          {model.keyFeatures.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <h3>Use Cases</h3>
        <ul>
          {model.useCases.map((useCase, i) => (
            <li key={i}>{useCase}</li>
          ))}
        </ul>

        <h3>Deployment & Integrations</h3>
        <p>
          <strong>Deployment:</strong> {model.deployment.join(", ")}
        </p>
        <p>
          <strong>Integrations:</strong> {model.integrations.join(", ")}
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <strong>Editorial Verdict:</strong> {model.verdict}
        </div>
      </section>

      <EvidenceSection
        evidenceCount={model.evidenceItems}
        sources={model.sources}
        lastVerified={model.lastVerified}
      />
    </article>
  );
}
