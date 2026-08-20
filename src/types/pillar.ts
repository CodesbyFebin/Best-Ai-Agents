export interface AgentEvidence {
  label: string;
  url: string;
  sourceType: "official" | "documentation" | "pricing" | "research" | "other";
  verifiedOn: string;
}

export interface PillarAgent {
  slug: string;
  name: string;
  description: string;
  category: string;
  evidence: AgentEvidence[];
  tags: string[];
  officialUrl: string;
}

export interface PillarFaq {
  question: string;
  answer: string;
}

export interface PillarManifest {
  slug: string;
  eyebrow: string;
  title: string;
  accentTitle?: string;
  description: string;
  directAnswer: string;
  primaryKeyword: string;
  lastReviewed: string;
  evidence: AgentEvidence[];
  agents: PillarAgent[];
  faqs: PillarFaq[];
  internalLinks: Array<{
    label: string;
    href: string;
  }>;
}
