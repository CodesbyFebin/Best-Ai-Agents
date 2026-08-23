export interface Source {
  url: string;
  title: string;
  retrieved: string;
  region: string;
  confidence: "high" | "medium" | "low";
  reviewStatus: "verified" | "pending" | "stale";
}

export interface Agent {
  slug: string;
  name: string;
  company: string;
  category: string;
  pillar: string;
  shortDesc: string;
  longDesc: string;
  keyFeatures: string[];
  useCases: string[];
  limitations: string[];
  deployment: string[];
  integrations: string[];
  price: string;
  score: number;
  indiaFit: number;
  evidenceItems: number;
  badge: string;
  tone: string;
  sources: string[] | Source[];
  lastVerified: string;
  verdict: string;
  competitors?: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  pillar: string;
  agentCount: number;
  keyCapabilities: string[];
  indiaContext: string;
  pricingRange: string;
  evidenceSummary: string;
  lastUpdated: string;
  indiaFirst?: boolean;
}

export interface ComparisonCriterion {
  name: string;
  values: Record<string, string>;
  weight?: number;
}

export interface Comparison {
  slug: string;
  title: string;
  summary: string;
  agents: string[];
  criteria: ComparisonCriterion[];
  lastUpdated: string;
  evidenceCount: number;
  verdict: string;
  sources?: string[];
}

export interface Research {
  slug: string;
  title: string;
  abstract: string;
  pillar: string;
  date: string;
  authors: string[];
  methodology: string;
  findings: string[];
  citations: string[];
  evidenceCount: number;
}

export interface Model extends Agent {}

export interface Framework extends Agent {}
