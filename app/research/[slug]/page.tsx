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
    <article className="prose lg:prose-xl max-w-4xl">
      <header>
        <h1 className="text-4xl font-bold mb-4">{report.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{report.abstract}</p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>Pillar: {report.pillar}</span>
          <span>Date: {report.date}</span>
          <span>Evidence: {report.evidenceCount} items</span>
        </div>
      </header>

      <section className="mt-8">
        <h2>Authors</h2>
        <ul>
          {report.authors.map((author, i) => (
            <li key={i}>{author}</li>
          ))}
        </ul>

        <h3>Methodology</h3>
        <p>{report.methodology}</p>

        <h3>Key Findings</h3>
        <ol>
          {report.findings.map((finding, i) => (
            <li key={i}>{finding}</li>
          ))}
        </ol>

        <h3>Citations</h3>
        <ul>
          {report.citations.map((citation, i) => (
            <li key={i}>
              <a
                href={citation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {citation}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
