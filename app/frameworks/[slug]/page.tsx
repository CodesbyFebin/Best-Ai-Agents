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
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 pb-6 border-b border-[#252b4b]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#3b82f6]" />
              <span className="text-sm font-medium text-[#9ca5c3]">
                {fw.category} · {fw.pillar}
              </span>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h1 className="text-4xl font-bold text-[#f7f7ff]">{fw.name}</h1>
              <span className="badge">{fw.badge}</span>
            </div>

            <p className="text-xl text-[#9ca5c3] mb-4">{fw.company}</p>
            <p className="text-lg text-[#c5c7d8] mb-6">{fw.shortDesc}</p>

            <div className="flex items-center gap-6 mb-4 flex-wrap">
              <IndiaBadge score={fw.indiaFit} />
              <div>
                <span className="text-sm text-[#9ca5c3]">Editorial score</span>
                <strong className="text-3xl text-[#38d996] block">
                  {fw.score}/10
                </strong>
              </div>
              <div>
                <span className="text-sm text-[#9ca5c3]">{fw.evidenceItems} evidence items</span>
              </div>
            </div>
          </header>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">About {fw.name}</h2>
              <p className="text-[#c5c7d8] leading-relaxed">{fw.longDesc}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Key Features</h3>
              <ul className="space-y-2">
                {fw.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#c5c7d8]">
                    <span className="text-[#38d996] mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">Known Limitations</h3>
              <ul className="space-y-2">
                {fw.limitations.map((limitation, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#c5c7d8]">
                    <span className="text-[#ef4444] mt-0.5">⚠</span>
                    {limitation}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "rgba(13, 16, 37, 0.8)",
                borderColor: "rgba(139, 92, 246, 0.3)",
              }}
            >
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-2">Editorial Verdict</h3>
              <p className="text-[#c5c7d8] leading-relaxed">{fw.verdict}</p>
            </div>
          </section>

          <EvidenceSection
            evidenceCount={fw.evidenceItems}
            sources={fw.sources}
            lastVerified={fw.lastVerified}
          />
        </div>
      </div>
    </main>
  );
}
