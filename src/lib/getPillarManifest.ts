import "server-only";

import { pillarManifests } from "@/src/data/pillars";
import type { PillarManifest } from "@/src/types/pillar";

export function getPillarManifest(slug: string): PillarManifest | null {
  return pillarManifests[slug] ?? null;
}

export function getPillarManifests(): PillarManifest[] {
  return Object.values(pillarManifests);
}
