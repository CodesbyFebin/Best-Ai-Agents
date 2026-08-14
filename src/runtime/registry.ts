import { normalizePath } from "../routing/path-normalization.js";
import type { PublishedPage } from "./types.js";

/**
 * Build one canonical runtime owner per path.
 * Evidence-gated generated pages intentionally override generic core stubs
 * when both claim the same canonical path (for example /mcp-directory).
 */
export function mergeRuntimePages(corePages: PublishedPage[], generatedPages: PublishedPage[]): PublishedPage[] {
  const owners = new Map<string, PublishedPage>();
  for (const page of corePages) owners.set(normalizePath(page.path), page);
  for (const page of generatedPages) owners.set(normalizePath(page.path), page);
  return [...owners.values()];
}

export function runtimePageMap(pages: PublishedPage[]): Map<string, PublishedPage> {
  return new Map(pages.map((page) => [normalizePath(page.path), page]));
}
