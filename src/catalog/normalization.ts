import type { AgentRecord, CatalogEntity, ModelRecord } from "./types";

export function normalizeText(value: string): string { return value.trim().toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim(); }
export function entityKey(entity: CatalogEntity): string { return entity.officialModelId ? `${entity.providerId}:${normalizeText(entity.officialModelId)}` : `${entity.providerId}:${normalizeText(entity.name)}`; }
export function aliases(entity: ModelRecord | AgentRecord): string[] { return Array.from(new Set([entity.name, ...(entity as ModelRecord).aliases ?? []].map(normalizeText).filter(Boolean))); }
