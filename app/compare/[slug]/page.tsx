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
    <main className="section">
      <div className="container">
        <header className="mb-8 pb-6 border-b border-[#252b4b]">
          <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">{comp.title}</h1>
          <p className="text-xl text-[#9ca5c3] mb-4">{comp.summary}</p>
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
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[#252b4b]">
                  <th className="p-4 text-[#f7f7ff]">Criterion</th>
                  <th className="p-4 text-[#f7f7ff]">{comp.agents[0]}</th>
                  <th className="p-4 text-[#f7f7ff]">{comp.agents[1]}</th>
                </tr>
              </thead>
              <tbody>
                {comp.criteria.map((criterion) => (
                  <tr key={criterion.name} className="border-b border-[#252b4b]/30">
                    <td className="p-4 text-[#c5c7d8] font-medium">
                      {criterion.name}
                    </td>
                    <td className="p-4 text-[#c5c7d8]">
                      {criterion.values[comp.agents[0]]}
                    </td>
                    <td className="p-4 text-[#c5c7d8]">
                      {criterion.values[comp.agents[1]]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div
          className="rounded-xl p-6 border mb-8"
          style={{
            backgroundColor: "rgba(13, 16, 37, 0.8)",
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3 className="text-xl font-semibold text-[#f7f7ff] mb-2">Bottom Line</h3>
          <p className="text-[#c5c7d8] leading-relaxed">{comp.verdict}</p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">Related Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisons
              .filter((c) => c.slug !== comp.slug)
              .map((c) => (
                <a
                  key={c.slug}
                  href={`/compare/${c.slug}/`}
                  className="block p-4 rounded-xl border border-[#252b4b] hover:border-[#8b5cf6]/50 transition-all duration-200"
                  style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                >
                  <h3 className="font-semibold text-[#f7f7ff]">{c.title}</h3>
                  <p className="text-sm text-[#9ca5c3] mt-1">{c.summary}</p>
                </a>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
