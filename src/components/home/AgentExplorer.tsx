"use client";

import { useMemo, useState } from "react";
import type { PillarAgent } from "@/src/types/pillar";

interface AgentExplorerProps {
  agents: PillarAgent[];
}

export function AgentExplorer({ agents }: AgentExplorerProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [compare, setCompare] = useState<string[]>([]);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(agents.map((agent) => agent.category)))],
    [agents],
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return agents.filter((agent) => {
      const categoryMatch = active === "All" || agent.category === active;
      const queryMatch =
        !normalized ||
        `${agent.name} ${agent.category} ${agent.description} ${agent.tags.join(" ")}`
          .toLowerCase()
          .includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [active, agents, query]);

  const toggleCompare = (slug: string) => {
    setCompare((current) =>
      current.includes(slug)
        ? current.filter((value) => value !== slug)
        : current.length < 3
          ? [...current, slug]
          : current,
    );
  };

  return (
    <>
      <div className="searchShell">
        <span className="searchIcon" aria-hidden="true">
          ⌕
        </span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search evidence-backed agents by task or capability…"
          aria-label="Search evidence-backed AI agents"
        />
        <button type="button" onClick={() => setQuery("")}>
          Clear
        </button>
      </div>

      <div className="filters" aria-label="Filter AI agents by category">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={active === category ? "active" : ""}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="agentGrid">
        {filtered.map((agent, index) => (
          <article className="agentCard" key={agent.slug}>
            <div className="cardTop">
              <span className="agentLogo violet">{agent.name.slice(0, 2)}</span>
              <span className="rank">Evidence shortlist</span>
              <button
                type="button"
                aria-pressed={compare.includes(agent.slug)}
                aria-label={`Add ${agent.name} to comparison shortlist`}
                className={compare.includes(agent.slug) ? "compare active" : "compare"}
                onClick={() => toggleCompare(agent.slug)}
              >
                ⇄
              </button>
            </div>
            <span className="badge">{agent.category}</span>
            <h3>{agent.name}</h3>
            <p>
              {agent.description}
              <sup aria-label={`${agent.name} sources`}>
                {agent.evidence.map((item, sourceIndex) => (
                  <a
                    key={item.url}
                    href={item.url}
                    rel="noreferrer"
                    title={item.label}
                  >
                    [{sourceIndex + 1}]
                  </a>
                ))}
              </sup>
            </p>
            <div className="pillarTags">
              {agent.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="pillarEvidence">
              <strong>Primary / first-party evidence</strong>
              {agent.evidence.map((item) => (
                <a href={item.url} key={item.url} rel="noreferrer">
                  {item.label}
                  <small>Verified {item.verifiedOn}</small>
                </a>
              ))}
            </div>
            <a className="profile" href={agent.officialUrl} rel="noreferrer">
              Official product page <span>→</span>
            </a>
          </article>
        ))}
      </div>

      {!filtered.length ? (
        <div className="empty">No evidence-backed match. Try a broader task or category.</div>
      ) : null}

      {compare.length ? (
        <p aria-live="polite">
          Comparison shortlist: {compare.map((slug) => agents.find((agent) => agent.slug === slug)?.name).filter(Boolean).join(" · ")}
        </p>
      ) : null}
    </>
  );
}
