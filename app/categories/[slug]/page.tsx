import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories } from "@/data/categories";
import { agents } from "@/data/agents";

interface Props {
  params: Promise<{ slug: string }>;
}

function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
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

  const categoryAgents = agents.filter((a) => a.category === category.pillar.split(" ")[0]);
  const filteredAgents = agents.filter((a) => a.category === category.name.replace(/ &.*/, ""));

  return (
    <main className="section">
      <div className="container">
        <header className="mb-8 pb-6 border-b border-[#252b4b]">
          <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">{category.name}</h1>
          <p className="text-xl text-[#9ca5c3] mb-4">
            {category.agentCount} evaluated tools
          </p>
          <p className="text-lg text-[#c5c7d8] max-w-3xl">{category.longDescription}</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Key Capabilities</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.keyCapabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-2 text-[#c5c7d8]">
                <span className="text-[#38d996]">✓</span>
                {cap}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6 mb-2">India Context</h3>
          <p className="text-[#c5c7d8]">{category.indiaContext}</p>

          <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6 mb-2">Pricing Range</h3>
          <p className="text-[#c5c7d8]">{category.pricingRange}</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">Agents in this Category</h2>
          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAgents.map((agent) => (
                <a
                  key={agent.slug}
                  href={`/agents/${agent.slug}/`}
                  className="block p-4 rounded-xl border border-[#252b4b] hover:border-[#8b5cf6]/50 transition-all duration-200"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`agentLogo ${agent.tone}`}>{agent.name.slice(0, 2)}</span>
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
          ) : (
            <p className="text-[#9ca5c3]">
              Agents in this category are being evaluated. Check back soon.
            </p>
          )}
        </section>

        <div
          className="mt-12 rounded-xl p-6 border"
          style={{
            backgroundColor: "rgba(13, 16, 37, 0.8)",
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3 className="text-lg font-semibold text-[#f7f7ff] mb-2">Evidence Summary</h3>
          <p className="text-[#9ca5c3] text-sm">{category.evidenceSummary}</p>
          <p className="text-xs text-[#555872] mt-2">
            Last updated: {new Date(category.lastUpdated).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </main>
  );
}
