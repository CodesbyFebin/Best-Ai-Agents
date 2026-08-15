import redirectData from "../../data/seo/redirect-map.json";
import protectedUrlData from "../../data/seo/protected-urls.json";
import { normalizePath } from "./path-normalization";

export interface RedirectResolution {
  destination: string;
  status: 301;
  reason: "legacy" | "trailing-slash" | "comparison-canonical";
}

type RedirectEntry = { from: string; to: string };
type QuarantinedRedirect = RedirectEntry & { reason: string };

interface RedirectMapFile {
  source: string;
  policy: string;
  active: RedirectEntry[];
  quarantined: QuarantinedRedirect[];
  sourceUrls: string[];
}

const redirectMap = redirectData as RedirectMapFile;
const protectedPaths = new Set(
  (Array.isArray(protectedUrlData) ? protectedUrlData : []).map((entry) =>
    normalizePath(typeof entry === "string" ? entry : entry?.url ?? "")
  )
);

export const activeRedirectEntries = redirectMap.active as RedirectEntry[];
export const quarantinedRedirectEntries = redirectMap.quarantined as QuarantinedRedirect[];

const staticRedirects = new Map<string, string>();
for (const entry of activeRedirectEntries) {
  const from = normalizePath(entry.from);
  const to = normalizePath(entry.to);
  const existing = staticRedirects.get(from);
  if (existing && existing !== to) {
    throw new Error(`Conflicting redirect destinations for ${from}`);
  }
  staticRedirects.set(from, to);
}

export interface ComparisonParts {
  prefix: "compare" | "root";
  left: string;
  right: string;
  key: string;
}

export function comparisonParts(pathInput: string): ComparisonParts | null {
  const path = normalizePath(pathInput);
  const compareMatch = path.match(/^\/compare\/(.+)-vs-(.+)$/i);
  const rootMatch = path.match(/^\/([^/]+)-vs-([^/]+)$/i);
  const match = compareMatch ?? rootMatch;
  if (!match) return null;
  const left = match[1]!.toLowerCase();
  const right = match[2]!.toLowerCase();
  if (!left || !right || left === right) return null;
  return { prefix: compareMatch ? "compare" : "root", left, right, key: [left, right].sort().join("::") };
}

export function comparisonKey(pathInput: string): string | null {
  return comparisonParts(pathInput)?.key ?? null;
}

export function canonicalComparisonPath(pathInput: string): string | null {
  const path = normalizePath(pathInput);
  const parts = comparisonParts(path);
  if (!parts) return null;
  const protectedCanonical = protectedComparisonCanonical(parts.key);
  if (protectedCanonical) return protectedCanonical;
  const [left, right] = [parts.left, parts.right].sort();
  return parts.prefix === "compare" ? `/compare/${left}-vs-${right}` : `/${left}-vs-${right}`;
}

function protectedComparisonCanonical(key: string): string | null {
  for (const path of protectedPaths) {
    const parts = comparisonParts(path);
    if (parts && parts.key === key) return path;
  }
  return null;
}

export function reciprocalComparisonPath(pathInput: string): string | null {
  const parts = comparisonParts(pathInput);
  if (!parts) return null;
  return parts.prefix === "compare"
    ? `/compare/${parts.right}-vs-${parts.left}`
    : `/${parts.right}-vs-${parts.left}`;
}

export function isProtectedSource(url: string): boolean {
  return protectedPaths.has(normalizePath(url));
}

export function isProtectedPath(pathInput: string): boolean {
  return protectedPaths.has(normalizePath(pathInput));
}

export function resolveRedirect(pathInput: string): RedirectResolution | null {
  const path = normalizePath(pathInput);
  if (protectedPaths.has(path)) return null;
  const legacyDestination = staticRedirects.get(path);
  if (legacyDestination) {
    return { destination: legacyDestination, status: 301, reason: "legacy" };
  }
  const canonical = canonicalComparisonPath(path);
  if (canonical && canonical !== path) {
    return { destination: canonical, status: 301, reason: "comparison-canonical" };
  }
  return null;
}
