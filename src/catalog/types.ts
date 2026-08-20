export type CatalogEntityType = "model" | "agent" | "framework";
export type VerificationStatus = "verified" | "partially_verified" | "unverified" | "deprecated";
export type PublicationStatus = "published" | "review" | "quarantined" | "archived";
export type EvidenceSourceType = "official" | "documentation" | "pricing" | "api" | "model-card" | "repository" | "registry" | "research";

export interface EvidenceRecord {
  id: string;
  entityId: string;
  field?: string;
  sourceUrl: string;
  sourceType: EvidenceSourceType;
  sourceTitle?: string;
  publisher?: string;
  retrievedAt: string;
  publishedAt?: string;
  contentHash: string;
  parserVersion: string;
  verificationStatus: "verified" | "conflicting" | "stale" | "unverified";
  notes?: string;
}

export interface ProviderRecord {
  id: string;
  slug: string;
  name: string;
  officialUrl: string;
  documentationUrl?: string | null;
  pricingUrl?: string | null;
  apiDocsUrl?: string | null;
  verifiedDomains: string[];
  description?: string | null;
  organizationType?: string | null;
  country?: string | null;
  evidence: EvidenceRecord[];
  verificationStatus: VerificationStatus;
  discoveredAt: string;
  lastChecked: string;
  updatedAt: string;
}

export interface ModelRecord {
  id: string;
  slug: string;
  providerId: string;
  providerName: string;
  name: string;
  officialModelId?: string | null;
  family?: string | null;
  version?: string | null;
  aliases: string[];
  description?: string | null;
  status: "active" | "preview" | "deprecated" | "unknown";
  modelType: string[];
  modalities: { input: string[]; output: string[] };
  capabilities: Record<string, boolean | null>;
  contextWindowTokens?: number | null;
  maxOutputTokens?: number | null;
  knowledgeCutoff?: string | null;
  releaseDate?: string | null;
  deprecationDate?: string | null;
  openWeights?: boolean | null;
  license?: string | null;
  apiAvailable?: boolean | null;
  selfHostable?: boolean | null;
  deploymentOptions: string[];
  pricing: Record<string, unknown> | null;
  officialUrl: string;
  documentationUrl?: string | null;
  pricingUrl?: string | null;
  modelCardUrl?: string | null;
  repositoryUrl?: string | null;
  evidence: EvidenceRecord[];
  publicationStatus: PublicationStatus;
  verificationStatus: VerificationStatus;
  firstSeen: string;
  lastChecked: string;
  lastModified: string;
}

export interface AgentRecord {
  id: string;
  slug: string;
  providerId: string;
  providerName: string;
  name: string;
  entityType: "agent" | "coding-agent" | "research-agent" | "automation-agent" | "business-agent" | "voice-agent" | "computer-use-agent" | "framework" | "multi-agent-framework";
  description?: string | null;
  categories: string[];
  capabilities: string[];
  supportedModels: string[];
  integrations: string[];
  interfaces: { web?: boolean | null; desktop?: boolean | null; cli?: boolean | null; ide?: boolean | null; api?: boolean | null; mobile?: boolean | null };
  deployment: { managedCloud?: boolean | null; selfHosted?: boolean | null; local?: boolean | null; enterprise?: boolean | null; openSource?: boolean | null };
  authMethods: string[];
  mcpSupport?: boolean | null;
  repositoryUrl?: string | null;
  documentationUrl?: string | null;
  pricingUrl?: string | null;
  officialUrl: string;
  pricing?: Record<string, unknown> | null;
  openSource?: boolean | null;
  license?: string | null;
  evidence: EvidenceRecord[];
  publicationStatus: PublicationStatus;
  verificationStatus: VerificationStatus;
  firstSeen: string;
  lastChecked: string;
  lastModified: string;
}

export type CatalogEntity = ModelRecord | AgentRecord;
