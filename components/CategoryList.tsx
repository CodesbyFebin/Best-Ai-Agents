import { Agent } from "@/data/types";

interface Props {
  agents: Agent[];
}

export function CategoryList({ agents }: Props) {
  if (!agents || agents.length === 0) {
    return (
      <p className="text-muted-foreground">
        No related agents found. Browse the{" "}
        <a href="/agents" className="text-blue-600 hover:underline">
          full directory
        </a>
        .
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {agents.map((agent) => (
        <a
          key={agent.slug}
          href={`/agents/${agent.slug}/`}
          className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-semibold">{agent.name}</h3>
          <p className="text-sm text-muted-foreground">
            {agent.company} · {agent.shortDesc}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm font-medium text-green-600">
              {agent.score}/10
            </span>
            <span className="text-xs text-muted-foreground">
              India Fit: {agent.indiaFit}/10
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
