import { formatDate } from "@/lib/utils";

interface Props {
  evidenceCount: number;
  sources: string[];
  lastVerified: string;
}

export function EvidenceSection({ evidenceCount, sources, lastVerified }: Props) {
  const formattedDate = formatDate(new Date(lastVerified));

  return (
    <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
      <h3 className="text-lg font-semibold mb-3">Evidence & Verification</h3>
      <p className="text-sm text-muted-foreground mb-3">
        Last verified: {formattedDate} · {evidenceCount} evidence items reviewed
      </p>
      <ul className="space-y-1 text-sm">
        {sources.map((source, i) => (
          <li key={i}>
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {source}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
