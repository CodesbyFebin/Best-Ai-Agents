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

export function canonicalUrl(path: string, origin = "https://bestaiagent.in"): string {
  return `${origin.replace(/\/$/, "")}${normalizePath(path)}`;
}
