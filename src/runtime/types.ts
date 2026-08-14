import type { SitemapGroup } from "../../packages/sitemap/index.js";

export interface PublishedPage {
  path: string;
  canonicalPath: string;
  title: string;
  description: string;
  text: string;
  type: string;
  indexable: boolean;
  evidenceCount: number;
  protected: boolean;
  internalLinks: string[];
  schema: Record<string, unknown>;
  sitemapGroup: SitemapGroup;
  sourceId: string;
}

export interface PublishedRegistry {
  generatedAt: string | null;
  sourceManifest: string | null;
  pages: PublishedPage[];
}
