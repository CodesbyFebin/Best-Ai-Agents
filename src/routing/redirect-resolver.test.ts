import { describe, expect, it } from "vitest";
import { canonicalComparisonPath, resolveRedirect } from "./redirect-resolver.js";

describe("redirect resolver", () => {
  it("does not redirect preserved source URLs", () => {
    expect(resolveRedirect("/tools/cursor-ai")).toBeNull();
    expect(resolveRedirect("/tools/flowise/")).toBeNull();
  });
  it("applies a legacy redirect only when its destination is live", () => {
    expect(resolveRedirect("/pricing-hub")).toMatchObject({ destination: "/pricing", status: 301 });
    expect(resolveRedirect("/tools/chatgpt")).toBeNull();
  });
  it("keeps the preserved comparison orientation", () => {
    expect(canonicalComparisonPath("/codex-vs-cursor")).toBe("/cursor-vs-codex");
    expect(resolveRedirect("/codex-vs-cursor")?.destination).toBe("/cursor-vs-codex");
    expect(resolveRedirect("/cursor-vs-codex")).toBeNull();
  });
  it("uses alphabetical order otherwise", () => {
    expect(canonicalComparisonPath("/compare/zeta-vs-alpha")).toBe("/compare/alpha-vs-zeta");
    expect(resolveRedirect("/compare/zeta-vs-alpha")?.destination).toBe("/compare/alpha-vs-zeta");
    expect(resolveRedirect("/compare/alpha-vs-zeta")).toBeNull();
  });
});
