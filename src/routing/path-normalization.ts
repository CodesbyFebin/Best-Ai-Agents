export const CANONICAL_ORIGIN = "https://bestaiagent.in";

export function normalizePath(input: string): string {
  if (!input) return "/";
  let value = input.trim();
  try {
    if (/^https?:\/\//i.test(value)) value = new URL(value).pathname;
  } catch {
    // Keep malformed input deterministic; downstream validators will reject it.
  }
  value = value.split("?")[0]!.split("#")[0]!;
  if (!value.startsWith("/")) value = `/${value}`;
  value = value.replace(/\/{2,}/g, "/");
  if (value.length > 1) value = value.replace(/\/+$/, "");
  return value || "/";
}

export function canonicalUrl(path: string, origin = CANONICAL_ORIGIN): string {
  return `${origin.replace(/\/$/, "")}${normalizePath(path)}`;
}

export function normalizeUrl(url: string, origin = CANONICAL_ORIGIN): string {
  return canonicalUrl(url, origin);
}

export function isCanonical(url: string, origin = CANONICAL_ORIGIN): boolean {
  return normalizeUrl(url, origin) === url;
}

export function stripTrackingParams(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return url;
  }
}
