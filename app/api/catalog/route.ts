import { NextResponse } from "next/server";
import { agents } from "@/data/agents";
import { models } from "@/data/models";
import { frameworks } from "@/data/frameworks";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { research } from "@/data/research";

export async function GET() {
  try {
    const catalog = {
      agents: agents.map((a) => ({
        slug: a.slug,
        name: a.name,
        company: a.company,
        category: a.category,
        score: a.score,
        indiaFit: a.indiaFit,
        price: a.price,
        badge: a.badge,
        shortDesc: a.shortDesc,
        url: `https://bestaiagent.in/agents/${a.slug}/`,
      })),
      models: models.map((m) => ({
        slug: m.slug,
        name: m.name,
        company: m.company,
        score: m.score,
        url: `https://bestaiagent.in/models/${m.slug}/`,
      })),
      frameworks: frameworks.map((f) => ({
        slug: f.slug,
        name: f.name,
        company: f.company,
        score: f.score,
        url: `https://bestaiagent.in/frameworks/${f.slug}/`,
      })),
      categories: categories.map((c) => ({
        slug: c.slug,
        name: c.name,
        description: c.description,
        agentCount: c.agentCount,
      })),
      comparisons: comparisons.map((c) => ({
        slug: c.slug,
        title: c.title,
        url: `https://bestaiagent.in/compare/${c.slug}/`,
      })),
      research: research.map((r) => ({
        slug: r.slug,
        title: r.title,
        url: `https://bestaiagent.in/research/${r.slug}/`,
      })),
      meta: {
        generatedAt: new Date().toISOString(),
        totalAgents: agents.length,
        totalModels: models.length,
        totalFrameworks: frameworks.length,
      },
    };

    return NextResponse.json(catalog, {
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Catalog API error:", error);
    return NextResponse.json(
      { error: "Failed to generate catalog" },
      { status: 500 }
    );
  }
}
