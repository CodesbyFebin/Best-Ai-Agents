import { notFound } from "next/navigation";
import { Metadata } from "next";
import { comparisons } from "@/data/comparisons";

interface Props {
  params: Promise<{ slug: string }>;
}

function getComparison(slug: string) {
  return comparisons.find((c) => c.slug === slug);
}

export async function generateStaticParams() {
  return comparisons.map((comp) => ({
    slug: comp.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparison(slug);
  if (!comp) return {};

  return {
    title: comp.title + " | BestAIAgent.in",
    description: comp.summary,
    openGraph: {
      title: comp.title,
      description: comp.summary,
      type: "article",
    },
    alternates: {
      canonical: `https://bestaiagent.in/compare/${slug}/`,
    },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const comp = getComparison(slug);

  if (!comp) {
    notFound();
  }

  return (
    <article className="prose lg:prose-xl max-w-4xl">
      <header>
        <h1 className="text-4xl font-bold mb-4">{comp.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{comp.summary}</p>
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date(comp.lastUpdated).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {comp.evidenceCount} evidence items
        </p>
      </header>

      <section className="mt-8">
        <h2>Comparison Criteria</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Criterion</th>
              <th className="text-left p-3">
                {comp.agents[0]}
              </th>
              <th className="text-left p-3">
                {comp.agents[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {comp.criteria.map((criterion) => (
              <tr key={criterion.name} className="border-b">
                <td className="p-3 font-medium">{criterion.name}</td>
                <td className="p-3">
                  {criterion.values[criterion.name] ||
                    criterion.values[comp.agents[0]]}
                </td>
                <td className="p-3">
                  {criterion.values[comp.agents[1]] ||
                    criterion.values[criterion.name]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8">
        <h2>Bottom Line</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p>{comp.verdict}</p>
        </div>
      </section>
    </article>
  );
}
