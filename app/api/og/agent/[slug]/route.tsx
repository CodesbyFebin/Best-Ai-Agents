import { ImageResponse } from "next/og";
import { agents } from "@/data/agents";

export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);

  if (!agent) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0f172a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "white",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          {agent.name}
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#93c5fd",
            marginBottom: "10px",
          }}
        >
          {agent.company} · {agent.badge}
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#22c55e",
          }}
        >
          {agent.score}/10 · India Fit {agent.indiaFit}/10
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            fontSize: "16px",
            color: "#64748b",
          }}
        >
          BestAIAgent.in
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
