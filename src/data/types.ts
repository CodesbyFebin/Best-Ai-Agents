export interface Agent {
  slug: string;
  name: string;
  company: string;
  category: string;
  pillar: string;
  score: number;
  indiaFit: number;
  price: string;
  badge: string;
  tone: string;
  shortDesc: string;
  longDesc: string;
  keyFeatures: string[];
  evidenceItems: number;
  lastVerified: string;
  sources: string[];
  competitors: string[];
  useCases: string[];
  deployment: string[];
  integrations: string[];
  limitations: string[];
  verdict: string;
}

export interface Category {
  slug: string;
  name: string;
  pillar: string;
  description: string;
  longDescription: string;
  agentCount: number;
  keyCapabilities: string[];
  indiaContext: string;
  pricingRange: string;
  evidenceSummary: string;
  lastUpdated: string;
}

export interface Comparison {
  slug: string;
  title: string;
  agents: string[];
  summary: string;
  criteria: ComparisonCriterion[];
  verdict: string;
  evidenceCount: number;
  lastUpdated: string;
}

export interface ComparisonCriterion {
  name: string;
  values: Record<string, string | number>;
  weight: number;
}

export interface Research {
  slug: string;
  title: string;
  pillar: string;
  abstract: string;
  methodology: string;
  findings: string[];
  evidenceCount: number;
  authors: string[];
  date: string;
  citations: string[];
}

export interface CanonicalMapEntry {
  observedUrl: string;
  canonicalUrl: string;
  status: "canonical" | "redirect" | "duplicate" | "parameter";
  reason: string;
}

export interface PillarDefinition {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  entityCount: number;
}
