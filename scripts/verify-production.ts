#!/usr/bin/env npx tsx
import type { AddressInfo } from "node:net";
import app from "../server/app.js";

const routes = [
  "/", "/agents", "/categories", "/compare", "/research", "/pricing", "/mcp-servers", "/mcp-directory", "/about",
  "/methodology", "/team", "/blog", "/press", "/contact", "/sitemap", "/cursor-pricing", "/github-copilot-pricing", "/best-ai-agent"
];

function suppliedBase(): string | undefined {
  const i = process.argv.indexOf("--base-url");
  if (i < 0 || !process.argv[i + 1]) return undefined;
  const parsed = new URL(process.argv[i + 1]!);
  const allowed = parsed.hostname === "bestaiagent.in" || parsed.hostname.endsWith(".vercel.app") || parsed.hostname === "127.0.0.1" || parsed.hostname === "localhost";
  if (!allowed) throw new Error(`Verification base host is not allowed: ${parsed.hostname}`);
  return parsed.origin;
}

async function verify(base: string): Promise<number> {
  let passed = 0;
  const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  for (const path of routes) {
    const response = await fetch(`${base}${path}`, { redirect: "manual", headers: bypass ? { "x-vercel-protection-bypass": bypass } : undefined });
    const body = await response.text();
    const canonical = `https://bestaiagent.in${path === "/" ? "/" : path}`;
    const checks = [
      [response.status === 200, "status=200"],
      [(response.headers.get("x-content-type-options") ?? "").toLowerCase() === "nosniff", "security-header"],
      [body.includes("<h1>") && body.includes(canonical), "SSR-canonical"]
    ] as const;
    for (const [ok, name] of checks) {
      if (ok) passed++; else console.error(`ERROR: ${path} failed ${name}.`);
    }
  }
  return passed;
}

const remote = suppliedBase();
let localServer: ReturnType<typeof app.listen> | undefined;
let base = remote;
if (!base) {
  localServer = app.listen(0, "127.0.0.1");
  await new Promise<void>((resolve) => localServer!.once("listening", resolve));
  base = `http://127.0.0.1:${(localServer.address() as AddressInfo).port}`;
}
try {
  const passed = await verify(base);
  console.log(`Production smoke verification: ${passed}/54 assertions passed.`);
  if (passed !== 54) process.exitCode = 1;
} finally {
  if (localServer) await new Promise<void>((resolve) => localServer!.close(() => resolve()));
}
