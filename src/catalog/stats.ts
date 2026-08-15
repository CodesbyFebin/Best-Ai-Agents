import type { AgentRecord, CatalogEntity, ModelRecord, ProviderRecord } from "./types";
import { publicEntities } from "./verification";

export interface CatalogStats { providers: number; models: number; agents: number; evidence: number; updated: number; }
export function getCatalogStats(providers: ProviderRecord[], entities: CatalogEntity[]): CatalogStats {
  const visible = publicEntities(entities);
  return { providers: providers.filter(p => p.verificationStatus === "verified").length, models: visible.filter(e => "modelType" in e).length, agents: visible.filter(e => "entityType" in e).length, evidence: visible.reduce((n, e) => n + e.evidence.length, 0), updated: visible.filter(e => e.lastChecked.slice(0, 10) >= new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10)).length };
}
export function asModels(entities: CatalogEntity[]): ModelRecord[] { return publicEntities(entities).filter((e): e is ModelRecord => "modelType" in e); }
export function asAgents(entities: CatalogEntity[]): AgentRecord[] { return publicEntities(entities).filter((e): e is AgentRecord => "entityType" in e); }
