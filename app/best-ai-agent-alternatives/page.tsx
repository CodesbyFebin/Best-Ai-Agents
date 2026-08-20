import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarPage } from "@/src/components/pillars/PillarPage";
import { getPillarManifest } from "@/src/lib/getPillarManifest";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Best AI Agent Alternatives 2026 | BestAIAgent.in",
  description:
    "Find AI agent alternatives by matching the workflow being replaced and comparing first-party evidence across coding, business, and automation tools.",
  alternates: { canonical: "https://bestaiagent.in/best-ai-agent-alternatives" },
  openGraph: {
    title: "Best AI Agent Alternatives — Evidence by Workflow",
    description:
      "Compare alternatives inside the same user job before crossing product categories.",
    url: "https://bestaiagent.in/best-ai-agent-alternatives",
    type: "website",
  },
};

export default function BestAiAgentAlternativesPage() {
  const manifest = getPillarManifest("best-ai-agent-alternatives");
  if (!manifest) notFound();
  return <PillarPage manifest={manifest} />;
}
