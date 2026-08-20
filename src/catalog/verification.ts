import type { CatalogEntity, EvidenceRecord } from "./types";

export function isEntityIndexable(entity: CatalogEntity): boolean {
  return entity.publicationStatus === "published" && entity.verificationStatus === "verified" && entity.evidence.some(e => e.verificationStatus === "verified" && ["official", "documentation", "api", "model-card"].includes(e.sourceType));
}

export function verifiedEvidence(entity: CatalogEntity): EvidenceRecord[] {
  return entity.evidence.filter(e => e.verificationStatus === "verified");
}

export function publicEntities<T extends CatalogEntity>(entities: T[]): T[] {
  return entities.filter(isEntityIndexable);
}
