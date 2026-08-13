import { describe, expect, it } from "vitest";
import { buildSitemapIndex, buildUrlSet, SITEMAP_GROUPS } from "./index.js";

describe("sitemap builder", () => {
  it("lists all eight child sitemaps", () => {
    const xml = buildSitemapIndex();
    for (const group of SITEMAP_GROUPS) expect(xml).toContain(`/sitemaps/${group}.xml`);
    expect((xml.match(/<sitemap>/g) ?? []).length).toBe(8);
  });

  it("deduplicates and normalizes URL entries", () => {
    const xml = buildUrlSet(["/agents", "/agents/", "/about"]);
    expect((xml.match(/<url>/g) ?? []).length).toBe(2);
    expect(xml).toContain("https://bestaiagent.in/agents");
    expect(xml).toContain("https://bestaiagent.in/about");
  });
});
