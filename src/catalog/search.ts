import { catalog } from "./catalog";
import { publicEntities } from "./verification";
import type { AgentRecord, ModelRecord } from "./types";
function searchable(entity: ModelRecord | AgentRecord) {
  const model = "modelType" in entity ? entity : null;
  const agent = "entityType" in entity ? entity : null;
  return [entity.name, entity.providerName, entity.slug, ...(model?.aliases ?? []), ...(model?.modelType ?? []), ...(agent?.categories ?? []), ...(model ? Object.keys(model.capabilities).filter(k => model.capabilities[k]) : []), ...(agent?.capabilities ?? [])].join(" ").toLocaleLowerCase();
}
export function searchCatalog(query: string) { const q=query.trim().toLocaleLowerCase(); const entities=publicEntities(catalog); return q ? entities.filter(e=>searchable(e).includes(q)) : entities; }
