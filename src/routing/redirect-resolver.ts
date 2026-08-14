import redirectData from "../../data/redirects/redirect-map.json";
import protectedUrlData from "../../data/migration/protected-urls.json";
import { normalizePath } from "./path-normalization.js";

export interface RedirectResolution {
  destination: string;
  status: 301;
  reason: "legacy" | "comparison-canonical";
}

type RedirectEntry = { from: string; to: string };
type QuarantinedRedirect = RedirectEntry & { reason: string };

export const activeRedirectEntries = redirectData.active as RedirectEntry[];
export const quarantinedRedirectEntries = redirectData.quarantined as QuarantinedRedirect[];
export const protectedPaths = new Set((protectedUrlData as string[]).map(normalizePath));

const staticRedirects = new Map<string, string>();
for (const entry of activeRedirectEntries) {
  const from = normalizePath(entry.from);
  const to = normalizePath(entry.to);
  const existing = staticRedirects.get(from);
  if (existing && existing !== to) throw new Error(`Conflicting redirect destinations for ${from}`);
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

function protectedComparisonCanonical(key: string): string | null {
  for (const path of protectedPaths) {
    if (comparisonKey(path) === key) return path;
  }
  return null;
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

export function reciprocalComparisonPath(pathInput: string): string | null {
  const parts = comparisonParts(pathInput);
  if (!parts) return null;
  return parts.prefix === "compare" ? `/compare/${parts.right}-vs-${parts.left}` : `/${parts.right}-vs-${parts.left}`;
}

export function resolveRedirect(pathInput: string): RedirectResolution | null {
  const path = normalizePath(pathInput);
  if (protectedPaths.has(path)) return null;
  const legacyDestination = staticRedirects.get(path);
  if (legacyDestination) return { destination: legacyDestination, status: 301, reason: "legacy" };
  const canonical = canonicalComparisonPath(path);
  if (canonical && canonical !== path) return { destination: canonical, status: 301, reason: "comparison-canonical" };
  return null;
}
