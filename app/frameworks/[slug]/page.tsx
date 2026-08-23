import { notFound } from "next/navigation";
import { Metadata } from "next";
import { frameworks } from "@/data/frameworks";
import { Agent } from "@/data/types";
import { EvidenceSection } from "@/components/EvidenceSection";
import { IndiaBadge } from "@/components/IndiaBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getFramework(slug: string): Promise<Agent | undefined> {
  return frameworks.find((f) => f.slug === slug);
}

export async function generateStaticParams() {
  return frameworks.map((fw) => ({
    slug: fw.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fw = await getFramework(slug);
  if (!fw) return {};

  return {
    title: `${fw.name} (${fw.company}) — Framework | BestAIAgent.in`,
    description: fw.shortDesc,
    openGraph: {
      title: `${fw.name} (${fw.company}) — Framework Review`,
      description: fw.shortDesc,
      images: [`https://bestaiagent.in/api/og/agent/${slug}`],
      type: "article",
    },
    alternates: {
      canonical: `https://bestaiagent.in/frameworks/${slug}/`,
    },
  };
}

export default async function FrameworkPage({ params }: Props) {
  const { slug } = await params;
  const fw = await getFramework(slug);

  if (!fw) {
    notFound();
  }

  return (
    <article className="prose lg:prose-xl max-w-4xl">
      <header>
        <div className="flex items-center gap-2 mb-4">
          <span className={`w-3 h-3 rounded-full bg-${fw.tone}-500`} />
          <span className="text-sm font-medium text-muted-foreground">
            {fw.category} · {fw.pillar}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{fw.name}</h1>
        <p className="text-xl text-muted-foreground mb-2">{fw.company}</p>

        <div className="flex items-center gap-4 mb-6">
          <IndiaBadge score={fw.indiaFit} />
          <span className="text-3xl font-bold text-green-600">{fw.score}/10</span>
          <span className="text-sm text-muted-foreground">
            {fw.evidenceItems} evidence items
          </span>
        </div>

        <p className="text-lg">{fw.shortDesc}</p>
      </header>

      <section className="prose mt-8">
        <h2>About {fw.name}</h2>
        <p>{fw.longDesc}</p>

        <h3>Key Features</h3>
        <ul>
          {fw.keyFeatures.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <h3>Use Cases</h3>
        <ul>
          {fw.useCases.map((useCase, i) => (
            <li key={i}>{useCase}</li>
          ))}
        </ul>

        <h3>Deployment & Integrations</h3>
        <p>
          <strong>Deployment:</strong> {fw.deployment.join(", ")}
        </p>
        <p>
          <strong>Integrations:</strong> {fw.integrations.join(", ")}
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <strong>Editorial Verdict:</strong> {fw.verdict}
        </div>
      </section>

      <EvidenceSection
        evidenceCount={fw.evidenceItems}
        sources={fw.sources}
        lastVerified={fw.lastVerified}
      />
    </article>
  );
}
