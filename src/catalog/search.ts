import { publicEntities } from "./verification";
import { catalog } from "./catalog";

export function searchCatalog(query: string) {
  const q = query.trim().toLocaleLowerCase();
  if (!q) return publicEntities(catalog);
  return publicEntities(catalog).filter(e => [e.name, e.providerName, e.slug, ...(e.aliases ?? []), ...(e.modelType ?? []), ...(e.categories ?? []), ...(e.capabilities ? Object.keys(e.capabilities).filter(k => e.capabilities[k]) : [])].join(" ").toLocaleLowerCase().includes(q));
}
