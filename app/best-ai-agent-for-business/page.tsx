import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarPage } from "@/src/components/pillars/PillarPage";
import { getPillarManifest } from "@/src/lib/getPillarManifest";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Best AI Agents for Business 2026 | BestAIAgent.in",
  description:
    "Compare business AI agents for inbox, meetings, operations, and cross-app automation with evidence, controls, and deployment context.",
  alternates: { canonical: "https://bestaiagent.in/best-ai-agent-for-business" },
  openGraph: {
    title: "Best AI Agents for Business — Evidence-Led Guide",
    description:
      "Evaluate business AI agents by workflow fit, integrations, controls, and first-party evidence.",
    url: "https://bestaiagent.in/best-ai-agent-for-business",
    type: "website",
  },
};

export default function BestAiAgentForBusinessPage() {
  const manifest = getPillarManifest("best-ai-agent-for-business");
  if (!manifest) notFound();
  return <PillarPage manifest={manifest} />;
}
