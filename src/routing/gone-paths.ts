import canonicalData from "../../data/seo/canonical-urls.json";

interface CanonicalEntry {
  path: string;
  classification: string;
}

const gonePaths = new Set(
  (canonicalData.urls as CanonicalEntry[])
    .filter((u) => u.classification === "GONE")
    .map((u) => u.path)
);

export function isGonePath(path: string): boolean {
  return gonePaths.has(path);
}

export const gonePathCount = gonePaths.size;
