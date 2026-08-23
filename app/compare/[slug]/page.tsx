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
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Compare AI Agents</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">{comp.title}</h1>
              <p className="text-xl text-[#c5c7d8] mb-4">{comp.summary}</p>
              <div className="flex gap-4 text-sm text-[#555872]">
                <span>
                  Last updated:{" "}
                  {new Date(comp.lastUpdated).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>{comp.evidenceCount} evidence items</span>
              </div>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#252b4b]">
                    <th className="p-4 text-sm font-semibold text-[#9ca5c3]">
                      Feature
                    </th>
                    <th className="p-4 text-center">
                      <div className="font-semibold text-[#f7f7ff]">
                        {comp.agents[0]}
                      </div>
                    </th>
                    <th className="p-4 text-center">
                      <div className="font-semibold text-[#f7f7ff]">
                        {comp.agents[1]}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comp.criteria.map((criterion) => (
                    <tr
                      key={criterion.name}
                      className="border-b border-[#252b4b]/30 hover:bg-[#1a1a2e]/50 transition"
                    >
                      <td className="p-4 text-sm font-medium text-[#9ca5c3]">
                        {criterion.name}
                      </td>
                      <td className="p-4 text-center text-sm text-[#c5c7d8]">
                        {criterion.values[comp.agents[0]]}
                      </td>
                      <td className="p-4 text-center text-sm text-[#c5c7d8]">
                        {criterion.values[comp.agents[1]]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="compareBand">
            <div>
              <span className="kicker">Bottom Line</span>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-3">{comp.verdict}</h2>
              <p className="text-[#9ca5c3]">{comp.summary}</p>
            </div>
            <div className="matrix">
              <div className="matrixHead">
                <b>Criterion</b>
                <strong>{comp.agents[0]}</strong>
                <strong>{comp.agents[1]}</strong>
              </div>
              {comp.criteria.map((c, i) => (
                <div key={i}>
                  <span>{c.name}</span>
                  <strong>{c.values[comp.agents[0]] || "—"}</strong>
                  <strong>{c.values[comp.agents[1]] || "—"}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
