import type { AgentRecord, ModelRecord, ProviderRecord, EvidenceRecord } from "./types";

export const providers: ProviderRecord[] = [
  ["openai","OpenAI","https://openai.com/","https://platform.openai.com/docs/models"],
  ["anthropic","Anthropic","https://www.anthropic.com/","https://docs.anthropic.com/"],
  ["google","Google","https://ai.google.dev/","https://ai.google.dev/gemini-api/docs/models"],
  ["mistral","Mistral AI","https://mistral.ai/","https://docs.mistral.ai/models"],
  ["meta","Meta AI","https://ai.meta.com/llama/","https://huggingface.co/meta-llama"],
  ["xai","xAI","https://x.ai/","https://docs.x.ai/"],
  ["deepseek","DeepSeek","https://www.deepseek.com/","https://api-docs.deepseek.com/"],
  ["qwen","Qwen","https://qwenlm.github.io/","https://huggingface.co/Qwen"],
].map(([id,name,officialUrl,documentationUrl]) => {
  const now = "2026-08-15T00:00:00.000Z";
  const evidence: EvidenceRecord = { id: `ev_provider_${id}`, entityId: `provider_${id}`, sourceUrl: officialUrl, sourceType: "official", sourceTitle: `${name} official site`, retrievedAt: now, contentHash: "", parserVersion: "registry-1", verificationStatus: "unverified" };
  return { id: `provider_${id}`, slug: id, name, officialUrl, documentationUrl, verifiedDomains: [new URL(officialUrl).hostname], evidence: [evidence], verificationStatus: "unverified", discoveredAt: now, lastChecked: now, updatedAt: now };
});

const entities: Array<ModelRecord | AgentRecord> = [];
export const catalog = entities;
