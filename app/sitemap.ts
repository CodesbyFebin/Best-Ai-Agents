import type { MetadataRoute } from "next";

const base = "https://bestaiagent.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = ["#discover", "#compare", "#india-fit", "#methodology", "#learn"];
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sections.map((section) => ({
      url: `${base}/${section}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
