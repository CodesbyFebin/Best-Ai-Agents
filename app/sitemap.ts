import type { MetadataRoute } from "next";

const base = "https://bestaiagent.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/categories", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/built-in-india", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/marketplace", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/resources", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
