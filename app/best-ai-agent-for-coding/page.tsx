import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarPage } from "@/src/components/pillars/PillarPage";
import { getPillarManifest } from "@/src/lib/getPillarManifest";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Best AI Coding Agents 2026 | BestAIAgent.in",
  description:
    "Compare Claude Code, Cursor, and GitHub Copilot by repository workflow, editor or terminal fit, cloud execution, and source evidence.",
  alternates: { canonical: "https://bestaiagent.in/best-ai-agent-for-coding" },
  openGraph: {
    title: "Best AI Coding Agents — Evidence-Led Comparison",
    description:
      "Compare coding agents by verified workflow capabilities rather than unsupported universal scores.",
    url: "https://bestaiagent.in/best-ai-agent-for-coding",
    type: "website",
  },
};

export default function BestAiAgentForCodingPage() {
  const manifest = getPillarManifest("best-ai-agent-for-coding");
  if (!manifest) notFound();
  return <PillarPage manifest={manifest} />;
}
