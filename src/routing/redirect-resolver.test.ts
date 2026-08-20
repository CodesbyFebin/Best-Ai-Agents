import { describe, expect, it } from "vitest";
import {
  canonicalComparisonPath,
  comparisonKey,
  isProtectedSource,
  resolveRedirect,
  reciprocalComparisonPath,
} from "./redirect-resolver";

describe("path normalization", () => {
  it("strips trailing slashes from non-root paths", () => {
    expect(resolveRedirect("/best-ai-agents/")).not.toBeNull();
  });

  it("preserves root path", () => {
    expect(resolveRedirect("/")).toBeNull();
  });
});

describe("redirect resolver", () => {
  it("does not redirect protected source URLs", () => {
    expect(resolveRedirect("/best-ai-agent")).toBeNull();
    expect(resolveRedirect("/best-ai-agents-for-automation")).toBeNull();
    expect(resolveRedirect("/best-ai-agent-for-coding")).toBeNull();
  });

  it("applies a legacy redirect only when its destination is a live page", () => {
    expect(resolveRedirect("/best-ai-agents")).toMatchObject({
      destination: "/best-ai-agent",
      status: 301,
    });
  });

  it("redirects best-ai-agent-india to built-in-india", () => {
    expect(resolveRedirect("/best-ai-agent-india")).toMatchObject({
      destination: "/built-in-india",
      status: 301,
    });
  });

  it("returns null for URLs with no redirect rule", () => {
    expect(resolveRedirect("/about")).toBeNull();
    expect(resolveRedirect("/resources")).toBeNull();
  });

  it("returns null for quarantined redirect sources", () => {
    expect(resolveRedirect("/tools/cursor-ai")).toBeNull();
    expect(resolveRedirect("/tools/flowise")).toBeNull();
  });
});

describe("protected source check", () => {
  it("identifies protected source URLs", () => {
    expect(isProtectedSource("/best-ai-agent")).toBe(true);
    expect(isProtectedSource("/best-ai-agents-for-automation")).toBe(true);
    expect(isProtectedSource("/best-ai-agent-for-coding")).toBe(true);
  });

  it("rejects non-protected URLs", () => {
    expect(isProtectedSource("/about")).toBe(false);
    expect(isProtectedSource("/best-ai-agents")).toBe(false);
  });
});

describe("comparison canonicalization", () => {
  it("keeps the protected comparison orientation", () => {
    expect(canonicalComparisonPath("/codex-vs-cursor")).toBe("/cursor-vs-codex");
    expect(resolveRedirect("/codex-vs-cursor")?.destination).toBe("/cursor-vs-codex");
    expect(resolveRedirect("/cursor-vs-codex")).toBeNull();
  });

  it("uses alphabetical order otherwise", () => {
    expect(canonicalComparisonPath("/compare/zeta-vs-alpha")).toBe("/compare/alpha-vs-zeta");
    expect(resolveRedirect("/compare/zeta-vs-alpha")?.destination).toBe("/compare/alpha-vs-zeta");
    expect(resolveRedirect("/compare/alpha-vs-zeta")).toBeNull();
  });

  it("rejects identical pair", () => {
    expect(comparisonKey("/cursor-vs-cursor")).toBe(null);
    expect(comparisonKey("/compare/a-vs-a")).toBe(null);
  });
});
