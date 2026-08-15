import { describe, expect, it } from "vitest";
import { evaluatePageOpportunity } from "./engine";

const strong = {
  slug: "chatgpt-vs-claude",
  entityRelevance: 95,
  relationshipDepth: 90,
  evidenceAvailability: 90,
  uniqueness: 90,
  commercialValue: 80,
  freshness: 90,
};

describe("Page Opportunity Engine", () => {
  it("creates a strong evidence-backed opportunity", () => {
    const result = evaluatePageOpportunity(strong);
    expect(result.verdict).toBe("CREATE");
    expect(result.reasons).toEqual([]);
  });

  it("rejects numbered variants in the path", () => {
    expect(evaluatePageOpportunity({ ...strong, slug: "agents/chatgpt/comparison/50" }).verdict).toBe("REJECT");
  });

  it("rejects trailing-number templated slugs", () => {
    expect(evaluatePageOpportunity({ ...strong, slug: "agents-codex-50" }).verdict).toBe("REJECT");
    expect(evaluatePageOpportunity({ ...strong, slug: "review_42" }).verdict).toBe("REJECT");
  });

  it("holds when evidence is insufficient but score is otherwise strong", () => {
    const result = evaluatePageOpportunity({ ...strong, evidenceAvailability: 10 });
    expect(result.verdict).toBe("HOLD");
    expect(result.reasons).toContain("INSUFFICIENT_EVIDENCE");
  });

  it("rejects when evidence is insufficient and the score is low", () => {
    const result = evaluatePageOpportunity({
      slug: "low-evidence-agent",
      entityRelevance: 30,
      relationshipDepth: 20,
      evidenceAvailability: 10,
      uniqueness: 60,
      commercialValue: 10,
      freshness: 10,
    });
    expect(result.verdict).toBe("REJECT");
    expect(result.reasons).toContain("INSUFFICIENT_EVIDENCE");
  });

  it("holds when uniqueness is insufficient", () => {
    const result = evaluatePageOpportunity({ ...strong, uniqueness: 20 });
    expect(result.verdict).toBe("HOLD");
    expect(result.reasons).toContain("INSUFFICIENT_UNIQUENESS");
  });

  it("holds when the opportunity score is not yet strong enough", () => {
    const result = evaluatePageOpportunity({
      slug: "emerging-agent",
      entityRelevance: 60,
      relationshipDepth: 50,
      evidenceAvailability: 80,
      uniqueness: 60,
      commercialValue: 30,
      freshness: 30,
    });
    expect(result.verdict).toBe("HOLD");
    expect(result.reasons).toContain("OPPORTUNITY_NOT_YET_STRONG_ENOUGH");
  });

  it("rejects a low-opportunity score", () => {
    const result = evaluatePageOpportunity({
      slug: "thin-topic",
      entityRelevance: 30,
      relationshipDepth: 20,
      evidenceAvailability: 60,
      uniqueness: 60,
      commercialValue: 10,
      freshness: 10,
    });
    expect(result.verdict).toBe("REJECT");
    expect(result.reasons).toContain("LOW_OPPORTUNITY_SCORE");
  });

  it("clamps out-of-range inputs before scoring", () => {
    const clamped = evaluatePageOpportunity({
      slug: "perfect-agent",
      entityRelevance: 150,
      relationshipDepth: 150,
      evidenceAvailability: 150,
      uniqueness: 150,
      commercialValue: 150,
      freshness: 150,
    });
    expect(clamped.score).toBe(100);
    expect(clamped.verdict).toBe("CREATE");

    const floor = evaluatePageOpportunity({
      slug: "no-signal-agent",
      entityRelevance: -10,
      relationshipDepth: -10,
      evidenceAvailability: 60,
      uniqueness: 60,
      commercialValue: 0,
      freshness: 0,
    });
    expect(floor.score).toBe(21);
  });
});
