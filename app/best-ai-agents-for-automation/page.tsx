import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarPage } from "@/src/components/pillars/PillarPage";
import { getPillarManifest } from "@/src/lib/getPillarManifest";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Best AI Agents for Automation 2026 | BestAIAgent.in",
  description:
    "Compare AI agents for automation by integrations, deterministic controls, human approvals, deployment options, and first-party evidence.",
  alternates: { canonical: "https://bestaiagent.in/best-ai-agents-for-automation" },
  openGraph: {
    title: "Best AI Agents for Automation — Evidence-Led Guide",
    description:
      "Compare agentic automation platforms by control, integrations, deployment, and source evidence.",
    url: "https://bestaiagent.in/best-ai-agents-for-automation",
    type: "website",
  },
};

export default function BestAiAgentsForAutomationPage() {
  const manifest = getPillarManifest("best-ai-agents-for-automation");
  if (!manifest) notFound();
  return <PillarPage manifest={manifest} />;
}
