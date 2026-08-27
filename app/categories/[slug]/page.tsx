import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories } from "@/data/categories";
import { agents } from "@/data/agents";
import { models } from "@/data/models";
import { frameworks } from "@/data/frameworks";
import { comparisons } from "@/data/comparisons";

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

const toneColors: Record<string, string> = {
  violet: "#8b5cf6",
  cyan: "#22d3ee",
  green: "#38d996",
  blue: "#3b82f6",
  pink: "#ec4899",
  rose: "#f43f5e",
  amber: "#f59e0b",
  orange: "#f97316",
  indigo: "#6366f1",
  teal: "#14b8a3",
  sky: "#06b6d4",
  emerald: "#10b981",
  gray: "#9ca3af",
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryName = category.name.replace(/ &.*/, "");
  const categoryAgents = agents
    .filter((a) => a.category === categoryName)
    .slice(0, 12);

  const categoryModels = models
    .filter((m) => m.category === categoryName)
    .slice(0, 6);

  const categoryFrameworks = frameworks
    .filter((f) => f.category === categoryName)
    .slice(0, 6);

  const categoryComparisons = comparisons.filter(
    (c) =>
      c.agents.some((a) =>
        agents.find((agent) => agent.slug === a)?.category === categoryName
      )
  ).slice(0, 4);

  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Explore the ecosystem</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">{category.name}</h1>
              <p className="text-xl text-[#c5c7d8] mb-4">{category.agentCount} evaluated tools</p>
              <p className="text-lg text-[#9ca5c3] max-w-3xl">{category.longDescription}</p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Key Capabilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {category.keyCapabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2 text-[#c5c7d8]">
                  <span className="text-[#38d996] mt-0.5">✓</span>
                  {cap}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6 mb-2">India Context</h3>
            <p className="text-[#c5c7d8]">{category.indiaContext}</p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6 mb-2">Pricing Range</h3>
            <p className="text-[#c5c7d8]">{category.pricingRange}</p>
          </section>

          <section className="mb-12">
            <div className="sectionHead mb-6">
              <h2 className="text-2xl font-bold text-[#f7f7ff]">
                {category.name}: Evaluation Criteria
              </h2>
            </div>
            <p className="text-[#c5c7d8] mb-6">
              When evaluating tools in the {category.name} category, we apply our
              standard scoring rubric with category-specific weight adjustments.
              This ensures that the features and capabilities that matter most
              for your use case receive appropriate emphasis in our scores.
            </p>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30">
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Category Relevance Weight</h3>
                <p className="text-sm text-[#9ca5c3]">
                  Within the {category.name} category, we adjust the standard rubric to
                  emphasize the dimensions that are most predictive of real-world
                  success. This means that a tool scoring highly in this category
                  has demonstrated capability specifically relevant to
                  {category.name.split(" ")[0]} use cases.
                </p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30">
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Cross-Category Comparison</h3>
                <p className="text-sm text-[#9ca5c3]">
                  We encourage comparing tools within the same category before
                  considering cross-category options. A coding agent that scores
                  9.0/10 here may not perform as well in a voice AI context,
                  and vice versa. Our category pages provide the context needed
                  for meaningful apples-to-apples comparisons.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div className="sectionHead mb-6">
              <h2 className="text-2xl font-bold text-[#f7f7ff]">Agents in this Category</h2>
            </div>
            {categoryAgents.length > 0 ? (
              <div className="agentGrid">
                {categoryAgents.map((agent) => (
                  <article className="agentCard" key={agent.slug}>
                    <div className="cardTop">
                      <span className={`agentLogo ${agent.tone}`}>{agent.name.slice(0, 2)}</span>
                      <span className="rank">#{agents.indexOf(agent) + 1}</span>
                    </div>
                    <span className="badge">{agent.badge}</span>
                    <h3 className="text-[#f7f7ff]">{agent.name}</h3>
                    <small>
                      {agent.company} · {agent.category}
                    </small>
                    <p className="text-[#c5c7d8]">{agent.shortDesc}</p>
                    <div className="scores">
                      <div>
                        <span>Editorial score</span>
                        <strong>
                          {agent.score}
                          <small>/10</small>
                        </strong>
                      </div>
                      <div>
                        <span>India Fit</span>
                        <strong>
                          {agent.indiaFit}
                          <small>/10</small>
                        </strong>
                      </div>
                    </div>
                    <div className="cardMeta">
                      <span>{agent.price}</span>
                      <span>{agent.evidenceItems} evidence items</span>
                    </div>
                    <a
                      href={`/agents/${agent.slug}/`}
                      className="profile"
                    >
                      View evidence profile <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty">
                <p className="text-center text-[#8690ab]">
                  Agents in this category are being evaluated. Check back soon.
                </p>
              </div>
            )}
          </section>

          {categoryModels.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#252b4b]">
              <div className="sectionHead mb-6">
                <h2 className="text-2xl font-bold text-[#f7f7ff]">
                  Related Models in {category.name}
                </h2>
              </div>
              <p className="text-[#c5c7d8] mb-6">
                The following models have capabilities that complement tools in
                the {category.name} category. We evaluate these models on
                performance benchmarks, cost efficiency, and India Fit to help
                you make informed decisions about the foundational AI technology
                powering applications in this space.
              </p>
              <div className="agentGrid">
                {categoryModels.map((model) => (
                  <article className="agentCard" key={model.slug}>
                    <div className="cardTop">
                      <span className={`agentLogo ${model.tone}`}>{model.name.slice(0, 2)}</span>
                      <span className="rank">#{models.indexOf(model) + 1}</span>
                    </div>
                    <span className="badge">{model.badge}</span>
                    <h3 className="text-[#f7f7ff]">{model.name}</h3>
                    <small>
                      {model.company} · {model.category}
                    </small>
                    <p className="text-[#c5c7d8]">
                      {model.shortDesc}
                    </p>
                    <div className="scores">
                      <div>
                        <span>Editorial score</span>
                        <strong>
                          {model.score}
                          <small>/10</small>
                        </strong>
                      </div>
                      <div>
                        <span>India Fit</span>
                        <strong>
                          {model.indiaFit}
                          <small>/10</small>
                        </strong>
                      </div>
                    </div>
                    <div className="cardMeta">
                      <span>{model.price}</span>
                      <span>{model.evidenceItems} evidence items</span>
                    </div>
                    <a
                      href={`/models/${model.slug}/`}
                      className="profile"
                    >
                      View model profile <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}

          {categoryFrameworks.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#252b4b]">
              <div className="sectionHead mb-6">
                <h2 className="text-2xl font-bold text-[#f7f7ff]">
                  Related Frameworks in {category.name}
                </h2>
              </div>
              <p className="text-[#c5c7d8] mb-6">
                These frameworks and builder platforms are commonly used to
                develop and deploy solutions in the {category.name} category. We
                evaluate them on orchestration capabilities, MCP integration,
                deployment flexibility, and India Fit.
              </p>
              <div className="agentGrid">
                {categoryFrameworks.map((fw) => (
                  <article className="agentCard" key={fw.slug}>
                    <div className="cardTop">
                      <span className={`agentLogo ${fw.tone}`}>{fw.name.slice(0, 2)}</span>
                      <span className="rank">#{frameworks.indexOf(fw) + 1}</span>
                    </div>
                    <span className="badge">{fw.badge}</span>
                    <h3 className="text-[#f7f7ff]">{fw.name}</h3>
                    <small>
                      {fw.company} · {fw.category}
                    </small>
                    <p className="text-[#c5c7d8]">
                      {fw.shortDesc}
                    </p>
                    <div className="scores">
                      <div>
                        <span>Editorial score</span>
                        <strong>
                          {fw.score}
                          <small>/10</small>
                        </strong>
                      </div>
                      <div>
                        <span>India Fit</span>
                        <strong>
                          {fw.indiaFit}
                          <small>/10</small>
                        </strong>
                      </div>
                    </div>
                    <div className="cardMeta">
                      <span>{fw.price}</span>
                      <span>{fw.evidenceItems} evidence items</span>
                    </div>
                    <a
                      href={`/frameworks/${fw.slug}/`}
                      className="profile"
                    >
                      View framework profile <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}

          {categoryComparisons.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#252b4b]">
              <div className="sectionHead mb-6">
                <h2 className="text-2xl font-bold text-[#f7f7ff]">
                  Comparisons in {category.name}
                </h2>
              </div>
              <p className="text-[#c5c7d8] mb-6">
                These side-by-side comparisons help you evaluate the top tools
                in the {category.name} category against specific criteria. Each
                comparison includes weighted scoring, evidence breakdowns, and
                India Fit considerations to help you make an informed decision.
              </p>
              <div className="space-y-4">
                {categoryComparisons.map((comp) => (
                  <div
                    key={comp.slug}
                    className="rounded-xl p-6 border border-[#252b4b] hover:border-[#8b5cf6]/30 transition-all"
                    style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
                  >
                    <h3 className="text-xl font-semibold text-[#f7f7ff] mb-2">
                      <a href={`/compare/${comp.slug}/`}>{comp.title}</a>
                    </h3>
                    <p className="text-sm text-[#9ca5c3] mb-3">{comp.summary}</p>
                    <div className="flex gap-4 text-xs text-[#555872]">
                      <span>{comp.evidenceCount} evidence items</span>
                      <span>·</span>
                      <span>
                        Updated:{" "}
                        {new Date(comp.lastUpdated).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

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
              Last updated:{" "}
              {new Date(category.lastUpdated).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
