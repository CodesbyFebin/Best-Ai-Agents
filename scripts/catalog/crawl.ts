import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { URL } from "node:url";

type Source = { id:string; name:string; officialUrl:string; sources:string[] };
type Registry = { policy:{maxRedirects:number; timeoutMs:number; maxBytes:number; requestsPerSecond:number}; providers:Source[] };

const registry = JSON.parse(await readFile("data/sources/providers.json", "utf8")) as Registry;
const policy = registry.policy;
const outDir = "data/generated/raw-sources";
await mkdir(outDir, { recursive: true });
const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));
const hash = (body:string) => createHash("sha256").update(body).digest("hex");
function allowed(target:string, source:Source) {
  const u = new URL(target), root = new URL(source.officialUrl);
  return u.protocol === "https:" && u.hostname === root.hostname;
}
async function robotsAllows(target:string) {
  const u = new URL(target); const r = await fetch(`${u.origin}/robots.txt`, { redirect:"error", signal:AbortSignal.timeout(policy.timeoutMs) }).catch(() => null);
  if (!r || !r.ok) return true;
  const text = await r.text(); let applies = false;
  for (const line of text.split(/\r?\n/)) {
    const [rawKey, rawValue] = line.split(":",2); const key = rawKey?.trim().toLowerCase(); const value = rawValue?.trim() ?? "";
    if (key === "user-agent") applies = value === "*" || value.toLowerCase().includes("bestaiagentbot");
    if (applies && key === "disallow" && value && new URL(target).pathname.startsWith(value)) return false;
  }
  return true;
}
async function fetchSource(url:string, source:Source) {
  if (!allowed(url, source)) throw new Error(`Source outside allowlist: ${url}`);
  if (!(await robotsAllows(url))) return { url, status:"robots-blocked" as const };
  const response = await fetch(url, { headers:{"user-agent":"BestAIAgentBot/1.0 (+https://bestaiagent.in/about)",accept:"text/html,application/json,text/plain;q=0.9"}, redirect:"follow", signal:AbortSignal.timeout(policy.timeoutMs) });
  if (!allowed(response.url, source)) throw new Error(`Redirect escaped allowlist: ${response.url}`);
  const contentLength = Number(response.headers.get("content-length") ?? 0); if (contentLength > policy.maxBytes) throw new Error(`Response too large: ${url}`);
  const body = await response.text(); if (Buffer.byteLength(body,"utf8") > policy.maxBytes) throw new Error(`Response too large: ${url}`);
  const retrievedAt = new Date().toISOString();
  const record = { url:response.url, status:response.status, contentType:response.headers.get("content-type"), retrievedAt, contentHash:hash(body), body };
  await writeFile(`${outDir}/${hash(response.url)}.json`, JSON.stringify(record));
  return { url, status: response.status, contentHash: record.contentHash };
}
const report = { startedAt:new Date().toISOString(), completedAt:"", providersAttempted:registry.providers.length, providersSucceeded:0, pagesFetched:0, errors:[] as string[], sources:[] as unknown[] };
for (const provider of registry.providers) {
  let ok = true;
  for (const source of provider.sources) {
    try { const result = await fetchSource(source, provider); report.sources.push({provider:provider.id, ...result}); if (typeof result.status === "number" && result.status >= 200 && result.status < 400) report.pagesFetched++; else ok = false; }
    catch (error) { ok = false; report.errors.push(`${provider.id}: ${error instanceof Error ? error.message : String(error)}`); }
    await sleep(Math.ceil(1000 / Math.max(1, policy.requestsPerSecond)));
  }
  if (ok) report.providersSucceeded++;
}
report.completedAt = new Date().toISOString();
await writeFile("data/generated/ingestion-report.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
