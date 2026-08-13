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
  it("rejects numbered variants", () => {
    expect(evaluatePageOpportunity({ ...strong, slug: "agents/chatgpt/comparison/50" }).verdict).toBe("REJECT");
  });
  it("holds when evidence is insufficient", () => {
    expect(evaluatePageOpportunity({ ...strong, evidenceAvailability: 10 }).verdict).toBe("HOLD");
  });
  it("holds when uniqueness is insufficient", () => {
    expect(evaluatePageOpportunity({ ...strong, uniqueness: 20 }).verdict).toBe("HOLD");
  });
});
