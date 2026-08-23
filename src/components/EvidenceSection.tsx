import { formatDate } from "@/lib/utils";

interface Source {
  url: string;
  title: string;
}

interface Props {
  evidenceCount: number;
  sources: Source[] | string[];
  lastVerified: string;
}

export function EvidenceSection({ evidenceCount, sources, lastVerified }: Props) {
  const formattedDate = formatDate(new Date(lastVerified));

  const sourceList = Array.isArray(sources)
    ? sources.map((s) => (typeof s === "string" ? s : s.url))
    : [];

  return (
    <section
      className="rounded-xl p-6 border mt-8"
      style={{
        backgroundColor: "rgba(13, 16, 37, 0.8)",
        borderColor: "rgba(139, 92, 246, 0.3)",
      }}
    >
      <h3 className="text-xl font-semibold text-[#f7f7ff] mb-3">
        Evidence &amp; Verification
      </h3>
      <p className="text-sm text-[#9ca5c3] mb-3">
        Last verified: {formattedDate} · {evidenceCount} evidence items reviewed
      </p>
      <ul className="space-y-1 text-sm">
        {sourceList.map((source, i) => (
          <li key={i}>
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b5cf6] hover:text-[#b999ff] hover:underline"
            >
              {source}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
