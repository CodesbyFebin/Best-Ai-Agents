import generatedRegistryJson from "../packages/database/generated/views/index.json";
import preservedUrlData from "../data/migration/protected-urls.json";
import { corePages } from "../src/runtime/core-pages.js";
import { normalizePath } from "../src/routing/path-normalization.js";
import { resolveRedirect } from "../src/routing/redirect-resolver.js";
import type { PublishedPage, PublishedRegistry } from "../src/runtime/types.js";

export const generatedRegistry = generatedRegistryJson as PublishedRegistry;
export const generatedPages = generatedRegistry.pages ?? [];
export const runtimePages: PublishedPage[] = [...corePages, ...generatedPages];
export const indexablePages = runtimePages.filter((page) => page.indexable);
export const directPageMap = new Map(indexablePages.map((page) => [normalizePath(page.path), page]));
export const preservedUrls = (preservedUrlData as string[]).map(normalizePath);

export function isPlaceholderText(text: string): boolean {
  const value = text.toLowerCase();
  return [/lorem ipsum/, /coming soon/, /placeholder/, /todo\b/, /sample content/, /content goes here/].some((pattern) => pattern.test(value));
}

export function resolvesToLivePage(pathInput: string): boolean {
  const path = normalizePath(pathInput);
  if (directPageMap.has(path)) return true;
  const redirect = resolveRedirect(path);
  return Boolean(redirect && directPageMap.has(normalizePath(redirect.destination)) && !resolveRedirect(redirect.destination));
}

export function baseUrlArgument(): string | undefined {
  const index = process.argv.indexOf("--base-url");
  return index >= 0 ? process.argv[index + 1]?.replace(/\/$/, "") : undefined;
}
