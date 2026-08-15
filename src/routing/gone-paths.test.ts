import { describe, expect, it } from "vitest";
import { isGonePath, gonePathCount } from "./gone-paths";

describe("gone path enforcement", () => {
  it("flags historical URLs slated for 410 Gone", () => {
    expect(isGonePath("/cursor-pricing")).toBe(true);
    expect(isGonePath("/claude-code-pricing")).toBe(true);
    expect(isGonePath("/twilio-server")).toBe(true);
    expect(isGonePath("/mcp/servers/google-drive-server")).toBe(true);
  });

  it("does not flag live canonical routes", () => {
    expect(isGonePath("/")).toBe(false);
    expect(isGonePath("/best-ai-agent")).toBe(false);
    expect(isGonePath("/models")).toBe(false);
  });

  it("does not flag active redirect sources (those 301, not 410)", () => {
    expect(isGonePath("/best-ai-agents")).toBe(false);
    expect(isGonePath("/best-ai-agent-india")).toBe(false);
  });

  it("has a non-zero gone set after recovery import", () => {
    expect(gonePathCount).toBeGreaterThan(0);
  });
});
