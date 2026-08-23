import { agents } from "@/data/agents";
import { models } from "@/data/models";
import { frameworks } from "@/data/frameworks";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { research } from "@/data/research";

const BASE_URL = "https://bestaiagent.in";

export default async function sitemap(): Promise<
  Array<{ url: string; lastModified?: string; changeFrequency?: string; priority?: number }>
> {
  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/methodology`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.6, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/api/catalog`, priority: 0.4, changeFrequency: "daily" as const },
  ];

  const agentPages = agents.map((a) => ({
    url: `${BASE_URL}/agents/${a.slug}/`,
    lastModified: a.lastVerified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const modelPages = models.map((m) => ({
    url: `${BASE_URL}/models/${m.slug}/`,
    lastModified: m.lastVerified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const frameworkPages = frameworks.map((f) => ({
    url: `${BASE_URL}/frameworks/${f.slug}/`,
    lastModified: f.lastVerified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryPages = categories.map((c) => ({
    url: `${BASE_URL}/categories/${c.slug}/`,
    lastModified: c.lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const comparisonPages = comparisons.map((comp) => ({
    url: `${BASE_URL}/compare/${comp.slug}/`,
    lastModified: comp.lastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const researchPages = research.map((r) => ({
    url: `${BASE_URL}/research/${r.slug}/`,
    lastModified: r.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...agentPages, ...modelPages, ...frameworkPages, ...categoryPages, ...comparisonPages, ...researchPages];
}
