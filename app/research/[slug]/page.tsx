import { notFound } from "next/navigation";
import { Metadata } from "next";
import { research as researchData } from "@/data/research";
import { Research } from "@/data/types";

interface Props {
  params: Promise<{ slug: string }>;
}

function getResearch(slug: string): Research | undefined {
  return researchData.find((r) => r.slug === slug);
}

export async function generateStaticParams() {
  return researchData.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const report = getResearch(slug);
  if (!report) return {};

  return {
    title: report.title + " | BestAIAgent.in",
    description: report.abstract,
    openGraph: {
      title: report.title,
      description: report.abstract,
      type: "article",
    },
    alternates: {
      canonical: `https://bestaiagent.in/research/${slug}/`,
    },
  };
}

export default async function ResearchPage({ params }: Props) {
  const { slug } = await params;
  const report = getResearch(slug);

  if (!report) {
    notFound();
  }

  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Research Report</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">{report.title}</h1>
              <p className="text-xl text-[#c5c7d8] mb-4">{report.abstract}</p>
              <div className="flex gap-4 text-sm text-[#555872]">
                <span>Pillar: {report.pillar}</span>
                <span>·</span>
                <span>Date: {report.date}</span>
                <span>·</span>
                <span>Evidence: {report.evidenceCount} items</span>
              </div>
            </div>
          </div>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Authors</h2>
              <ul className="list-none p-0">
                {report.authors.map((author, i) => (
                  <li key={i} className="text-[#c5c7d8] mb-1">
                    {author}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Methodology</h2>
              <p className="text-[#c5c7d8] leading-relaxed">{report.methodology}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Key Findings</h2>
              <ol className="space-y-3">
                {report.findings.map((finding, i) => (
                  <li key={i} className="text-[#c5c7d8] leading-relaxed">
                    {finding}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Citations</h2>
              <ul className="list-none p-0 space-y-2">
                {report.citations.map((citation, i) => (
                  <li key={i}>
                    <a
                      href={citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b5cf6] hover:underline text-sm"
                    >
                      {citation}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
