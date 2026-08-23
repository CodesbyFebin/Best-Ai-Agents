import { Agent } from "@/data/types";

export function IndiaBadge({ score }: { score: number }) {
  const getStatus = (score: number) => {
    if (score >= 8.5) return { label: "Excellent", color: "bg-green-100 text-green-800" };
    if (score >= 7.5) return { label: "Strong", color: "bg-blue-100 text-blue-800" };
    if (score >= 6.5) return { label: "Moderate", color: "bg-yellow-100 text-yellow-800" };
    return { label: "Limited", color: "bg-red-100 text-red-800" };
  };

  const status = getStatus(score);

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${status.color}`}
      title={`India Fit: ${score}/10`}
    >
      <span aria-hidden="true">
        {score >= 8.5 ? "🇮🇳" : score >= 7.5 ? "✓" : score >= 6.5 ? "⚠" : "✗"}
      </span>
      {status.label} ({score}/10)
    </span>
  );
}
