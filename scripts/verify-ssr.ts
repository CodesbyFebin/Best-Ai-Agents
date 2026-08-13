#!/usr/bin/env npx tsx
import type { AddressInfo } from "node:net";
import app from "../server/app.js";

const paths = ["/", "/agents", "/categories", "/compare", "/research", "/pricing", "/mcp-servers", "/about", "/methodology", "/sitemap.xml", "/sitemaps/core.xml", "/sitemaps/agents.xml", "/sitemaps/comparisons.xml", "/robots.txt", "/llms.txt"];

function suppliedBase(): string | undefined {
  const i = process.argv.indexOf("--base-url");
  if (i < 0 || !process.argv[i + 1]) return undefined;
  const parsed = new URL(process.argv[i + 1]!);
  const allowed = parsed.hostname === "bestaiagent.in" || parsed.hostname.endsWith(".vercel.app") || parsed.hostname === "127.0.0.1" || parsed.hostname === "localhost";
  if (!allowed) throw new Error(`Verification base host is not allowed: ${parsed.hostname}`);
  return parsed.origin;
}

async function verify(base: string): Promise<boolean> {
  let passed = 0;
  for (const path of paths) {
    const response = await fetch(`${base}${path}`, { redirect: "manual" });
    const body = await response.text();
    const expectedCanonical = `https://bestaiagent.in${path === "/" ? "/" : path}`;
    const machine = path.endsWith(".xml") || path.endsWith(".txt");
    const ok = response.status === 200 && (machine ? body.length > 20 : body.includes("<h1>") && body.includes(expectedCanonical));
    if (ok) passed++; else console.error(`ERROR: ${path} failed SSR verification with status ${response.status}.`);
  }
  console.log(`SSR verification: ${passed}/15 representative routes passed.`);
  return passed === 15;
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
  if (!(await verify(base))) process.exitCode = 1;
} finally {
  if (localServer) await new Promise<void>((resolve) => localServer!.close(() => resolve()));
}
