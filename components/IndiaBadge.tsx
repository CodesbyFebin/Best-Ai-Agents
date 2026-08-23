interface Props {
  score: number;
}

export function IndiaBadge({ score }: Props) {
  const getStatus = (score: number) => {
    if (score >= 8.5)
      return {
        label: "Excellent",
        bg: "bg-green-500/20",
        text: "text-green-400",
        border: "border-green-500/50",
      };
    if (score >= 7.5)
      return {
        label: "Strong",
        bg: "bg-blue-500/20",
        text: "text-blue-400",
        border: "border-blue-500/50",
      };
    if (score >= 6.5)
      return {
        label: "Moderate",
        bg: "bg-yellow-500/20",
        text: "text-yellow-400",
        border: "border-yellow-500/50",
      };
    return {
      label: "Limited",
      bg: "bg-red-500/20",
      text: "text-red-400",
      border: "border-red-500/50",
    };
  };

  const status = getStatus(score);
  const icon = score >= 8.5 ? "🇮🇳" : score >= 7.5 ? "✓" : score >= 6.5 ? "⚠" : "✗";

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${status.bg} ${status.text} ${status.border}`}
      title={`India Fit: ${score}/10`}
    >
      <span aria-hidden="true">
        {icon}
      </span>
      {status.label} ({score}/10)
    </span>
  );
}
