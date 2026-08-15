import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarPage } from "@/src/components/pillars/PillarPage";
import { getPillarManifest } from "@/src/lib/getPillarManifest";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Best AI Agents 2026: Evidence-Led Comparison | BestAIAgent.in",
  description:
    "Compare AI agents by workflow fit, source evidence, integrations, deployment, and India context without a fabricated universal winner.",
  alternates: { canonical: "https://bestaiagent.in/best-ai-agent" },
  openGraph: {
    title: "Best AI Agents 2026 — Evidence-Led Comparison",
    description:
      "Compare coding, business, and automation agents using visible first-party evidence.",
    url: "https://bestaiagent.in/best-ai-agent",
    type: "website",
  },
};

export default function BestAiAgentPage() {
  const manifest = getPillarManifest("best-ai-agent");
  if (!manifest) notFound();
  return <PillarPage manifest={manifest} />;
}
