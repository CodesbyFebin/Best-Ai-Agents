export type OpportunityVerdict = "CREATE" | "HOLD" | "REJECT";

export interface PageCandidate {
  slug: string;
  entityRelevance: number;
  relationshipDepth: number;
  evidenceAvailability: number;
  uniqueness: number;
  commercialValue: number;
  freshness: number;
}

export interface OpportunityResult {
  score: number;
  verdict: OpportunityVerdict;
  reasons: string[];
}

const clamp = (n: number) => Math.max(0, Math.min(100, n));

export function evaluatePageOpportunity(candidate: PageCandidate): OpportunityResult {
  if (/(?:^|\/)\d+(?:\/|$)/.test(candidate.slug) || /(?:-|_)\d+$/.test(candidate.slug)) {
    return { score: 0, verdict: "REJECT", reasons: ["NUMBERED_OR_TEMPLATED_VARIANT"] };
  }

  const score = Math.round(
    clamp(candidate.entityRelevance) * 0.25 +
    clamp(candidate.relationshipDepth) * 0.20 +
    clamp(candidate.evidenceAvailability) * 0.20 +
    clamp(candidate.uniqueness) * 0.15 +
    clamp(candidate.commercialValue) * 0.10 +
    clamp(candidate.freshness) * 0.10
  );

  if (candidate.evidenceAvailability < 40) {
    return { score, verdict: score >= 40 ? "HOLD" : "REJECT", reasons: ["INSUFFICIENT_EVIDENCE"] };
  }
  if (candidate.uniqueness < 50) {
    return { score, verdict: "HOLD", reasons: ["INSUFFICIENT_UNIQUENESS"] };
  }
  if (score >= 75) return { score, verdict: "CREATE", reasons: [] };
  if (score >= 45) return { score, verdict: "HOLD", reasons: ["OPPORTUNITY_NOT_YET_STRONG_ENOUGH"] };
  return { score, verdict: "REJECT", reasons: ["LOW_OPPORTUNITY_SCORE"] };
}
