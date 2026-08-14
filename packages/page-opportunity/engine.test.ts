import { describe, expect, it } from "vitest";
import { evaluatePageOpportunity } from "./engine";

const strong = {
  slug: "chatgpt-vs-claude",
  entityRelevance: 95,
  relationshipDepth: 90,
  evidenceAvailability: 90,
  uniqueness: 90,
  commercialValue: 80,
  freshness: 90
};

describe("Page Opportunity Engine", () => {
  it("creates a strong evidence-backed opportunity", () => {
    expect(evaluatePageOpportunity(strong).verdict).toBe("CREATE");
  });
  it("rejects numbered path variants", () => {
    expect(evaluatePageOpportunity({ ...strong, slug: "agents/chatgpt/comparison/50" }).verdict).toBe("REJECT");
  });
  it("rejects numbered suffix variants", () => {
    expect(evaluatePageOpportunity({ ...strong, slug: "chatgpt-review_42" }).verdict).toBe("REJECT");
  });
  it("holds when evidence is insufficient", () => {
    expect(evaluatePageOpportunity({ ...strong, evidenceAvailability: 10 }).verdict).toBe("HOLD");
  });
  it("holds when uniqueness is insufficient", () => {
    expect(evaluatePageOpportunity({ ...strong, uniqueness: 20 }).verdict).toBe("HOLD");
  });
  it("holds a medium opportunity instead of publishing it", () => {
    const result = evaluatePageOpportunity({ ...strong, entityRelevance: 55, relationshipDepth: 45, uniqueness: 60, commercialValue: 40, freshness: 50 });
    expect(result.verdict).toBe("HOLD");
  });
  it("rejects a low-value opportunity", () => {
    const result = evaluatePageOpportunity({ ...strong, entityRelevance: 15, relationshipDepth: 10, evidenceAvailability: 50, uniqueness: 55, commercialValue: 10, freshness: 20 });
    expect(result.verdict).toBe("REJECT");
  });
});
