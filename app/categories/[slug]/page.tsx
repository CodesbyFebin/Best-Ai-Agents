import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories } from "@/data/categories";
import { agents } from "@/data/agents";
import { models } from "@/data/models";
import { frameworks } from "@/data/frameworks";

interface Props {
  params: Promise<{ slug: string }>;
}

function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

function getCategoryAgents(categoryName: string) {
  return agents.filter((a) => a.category === categoryName);
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: `${category.name} — AI Agents & Tools | BestAIAgent.in`,
    description: category.description,
    openGraph: {
      title: `${category.name} — AI Agents Directory`,
      description: category.description,
      type: "website",
    },
    alternates: {
      canonical: `https://bestaiagent.in/categories/${slug}/`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryAgents = getCategoryAgents(category.name);

  return (
    <article className="prose lg:prose-xl max-w-4xl">
      <header>
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-xl text-muted-foreground mb-4">
          {category.agentCount} evaluated tools
        </p>
        <p className="text-lg">{category.longDescription}</p>
      </header>

      <section className="mt-8">
        <h2>Key Capabilities</h2>
        <ul>
          {category.keyCapabilities.map((cap, i) => (
            <li key={i}>{cap}</li>
          ))}
        </ul>

        <h3>Pricing Range</h3>
        <p>{category.pricingRange}</p>

        {categoryAgents.length > 0 && (
          <>
            <h3>Agents in this Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              {categoryAgents.map((agent) => (
                <a
                  key={agent.slug}
                  href={`/agents/${agent.slug}/`}
                  className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-lg">{agent.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {agent.company} · {agent.shortDesc}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-medium text-green-600">
                      {agent.score}/10
                    </span>
                    <span className="text-xs text-muted-foreground">
                      India Fit: {agent.indiaFit}/10
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </section>
    </article>
  );
}
