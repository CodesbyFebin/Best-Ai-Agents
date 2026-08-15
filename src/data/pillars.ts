import type { AgentEvidence, PillarAgent, PillarManifest } from "@/src/types/pillar";

const verifiedOn = "2026-08-15";

const evidence = {
  claudeCode: {
    label: "Anthropic Claude Code documentation",
    url: "https://docs.anthropic.com/en/docs/claude-code/getting-started",
    sourceType: "documentation",
    verifiedOn,
  },
  cursor: {
    label: "Cursor pricing and product capabilities",
    url: "https://cursor.com/pricing",
    sourceType: "official",
    verifiedOn,
  },
  cursorIndia: {
    label: "Cursor Start for India",
    url: "https://cursor.com/start",
    sourceType: "pricing",
    verifiedOn,
  },
  githubCopilot: {
    label: "GitHub Copilot agents documentation",
    url: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents",
    sourceType: "documentation",
    verifiedOn,
  },
  lindy: {
    label: "Lindy pricing and product documentation",
    url: "https://docs.lindy.ai/pricing",
    sourceType: "documentation",
    verifiedOn,
  },
  n8n: {
    label: "n8n AI agents product documentation",
    url: "https://n8n.io/ai-agents/",
    sourceType: "official",
    verifiedOn,
  },
  zapier: {
    label: "Zapier Agents to AI by Zapier migration documentation",
    url: "https://help.zapier.com/hc/en-us/articles/47402591569805-Migrating-from-Agents-to-AI-by-Zapier",
    sourceType: "documentation",
    verifiedOn,
  },
} satisfies Record<string, AgentEvidence>;

const agents = {
  claudeCode: {
    slug: "claude-code",
    name: "Claude Code",
    description:
      "Anthropic's coding agent for terminal and repository workflows, with CLI operation and MCP support documented by Anthropic.",
    category: "Coding",
    evidence: [evidence.claudeCode],
    tags: ["CLI", "Repository workflows", "MCP"],
    officialUrl: "https://www.anthropic.com/claude-code",
  },
  cursor: {
    slug: "cursor",
    name: "Cursor",
    description:
      "AI-native coding environment with Agent capabilities, cloud agents, model access, and workflow extensions documented by Cursor.",
    category: "Coding",
    evidence: [evidence.cursor, evidence.cursorIndia],
    tags: ["IDE", "Cloud agents", "India pricing"],
    officialUrl: "https://cursor.com/",
  },
  githubCopilot: {
    slug: "github-copilot",
    name: "GitHub Copilot",
    description:
      "GitHub's coding-agent surface can research a repository, plan changes, make code changes, and create pull requests for review.",
    category: "Coding",
    evidence: [evidence.githubCopilot],
    tags: ["GitHub", "Pull requests", "Repository workflows"],
    officialUrl: "https://github.com/features/copilot",
  },
  lindy: {
    slug: "lindy",
    name: "Lindy",
    description:
      "AI work assistant focused on inbox, meetings, calendar, follow-ups, and connected business workflows.",
    category: "Business",
    evidence: [evidence.lindy],
    tags: ["Inbox", "Meetings", "Business workflows"],
    officialUrl: "https://www.lindy.ai/",
  },
  n8n: {
    slug: "n8n",
    name: "n8n",
    description:
      "Workflow automation platform for building AI agents with explicit logic, integrations, human approvals, and self-hosting options.",
    category: "Automation",
    evidence: [evidence.n8n],
    tags: ["Automation", "Human in the loop", "Self-hosting"],
    officialUrl: "https://n8n.io/",
  },
  zapier: {
    slug: "zapier-ai",
    name: "AI by Zapier",
    description:
      "Zapier's agentic AI capability inside the Zap editor, combining autonomous tool use with deterministic workflow steps.",
    category: "Automation",
    evidence: [evidence.zapier],
    tags: ["Automation", "App integrations", "Agentic steps"],
    officialUrl: "https://zapier.com/ai",
  },
} satisfies Record<string, PillarAgent>;

const commonLinks = [
  { label: "Best AI Agent for Business", href: "/best-ai-agent-for-business" },
  { label: "Best AI Agent for Coding", href: "/best-ai-agent-for-coding" },
  { label: "AI Agent Alternatives", href: "/best-ai-agent-alternatives" },
  { label: "AI Agents for Automation", href: "/best-ai-agents-for-automation" },
  { label: "Categories", href: "/categories" },
  { label: "India Fit", href: "/built-in-india" },
];

export const pillarManifests: Record<string, PillarManifest> = {
  "best-ai-agent": {
    slug: "best-ai-agent",
    eyebrow: "Evidence-led discovery",
    title: "Best AI Agents",
    accentTitle: "2026",
    description:
      "Compare AI agents by workflow fit, product evidence, integrations, deployment model, and regional context instead of relying on a universal winner.",
    directAnswer:
      "There is no single evidence-backed AI agent that is best for every workflow. For coding, compare Claude Code, Cursor, and GitHub Copilot; for business delegation, evaluate Lindy; for repeatable automation, compare n8n and AI by Zapier. The right choice depends on task fit, integrations, deployment, pricing, privacy, and the quality of available evidence.",
    primaryKeyword: "best AI agent",
    lastReviewed: verifiedOn,
    evidence: Object.values(evidence),
    agents: [agents.claudeCode, agents.cursor, agents.githubCopilot, agents.lindy, agents.n8n, agents.zapier],
    internalLinks: commonLinks,
  },
  "best-ai-agent-for-business": {
    slug: "best-ai-agent-for-business",
    eyebrow: "Business workflows",
    title: "Best AI Agents for Business",
    description:
      "Evaluate AI agents for inbox, meetings, operations, customer workflows, and cross-app automation with evidence visible beside each product.",
    directAnswer:
      "For business workflows, shortlist products by the work they can reliably perform rather than by a single headline score. Lindy is oriented around inbox, meetings, calendar, and follow-ups; n8n combines AI agents with explicit workflow logic and human approvals; AI by Zapier brings agentic steps into Zapier's automation editor. Verify integrations, controls, and commercial terms before deployment.",
    primaryKeyword: "best AI agent for business",
    lastReviewed: verifiedOn,
    evidence: [evidence.lindy, evidence.n8n, evidence.zapier],
    agents: [agents.lindy, agents.n8n, agents.zapier],
    internalLinks: commonLinks,
  },
  "best-ai-agent-for-coding": {
    slug: "best-ai-agent-for-coding",
    eyebrow: "Developer workflows",
    title: "Best AI Coding Agents",
    description:
      "Compare coding agents for repository work, editor and terminal workflows, pull requests, cloud execution, extensions, and India-specific availability.",
    directAnswer:
      "For coding, Claude Code, Cursor, and GitHub Copilot serve different workflows. Claude Code is centered on terminal and repository work; Cursor combines an AI-native editor with Agent and cloud-agent capabilities; GitHub Copilot includes repository-connected agent workflows that can plan changes and create pull requests. Choose based on where your team works, required controls, and verified product capabilities.",
    primaryKeyword: "best AI agent for coding",
    lastReviewed: verifiedOn,
    evidence: [evidence.claudeCode, evidence.cursor, evidence.cursorIndia, evidence.githubCopilot],
    agents: [agents.claudeCode, agents.cursor, agents.githubCopilot],
    internalLinks: commonLinks,
  },
  "best-ai-agent-alternatives": {
    slug: "best-ai-agent-alternatives",
    eyebrow: "Alternative finder",
    title: "Best AI Agent Alternatives",
    description:
      "Find credible alternatives by matching the workflow you need to replace: coding, business delegation, or automation.",
    directAnswer:
      "The strongest alternative depends on what you are replacing. For coding-agent alternatives, compare Claude Code, Cursor, and GitHub Copilot. For business assistants, Lindy targets inbox and meeting work. For automation, n8n and AI by Zapier combine AI with workflow systems. Compare capabilities and source evidence directly instead of treating products from different categories as interchangeable.",
    primaryKeyword: "best AI agent alternatives",
    lastReviewed: verifiedOn,
    evidence: Object.values(evidence),
    agents: [agents.claudeCode, agents.cursor, agents.githubCopilot, agents.lindy, agents.n8n, agents.zapier],
    internalLinks: commonLinks,
  },
  "best-ai-agents-for-automation": {
    slug: "best-ai-agents-for-automation",
    eyebrow: "Agentic automation",
    title: "Best AI Agents for Automation",
    description:
      "Compare agentic automation platforms by integrations, deterministic controls, human approval paths, and deployment flexibility.",
    directAnswer:
      "For agentic automation, n8n and AI by Zapier are strong comparison candidates because both combine AI actions with broader workflow systems, while Lindy targets delegated business work such as inbox, meetings, and follow-ups. The correct choice depends on integration coverage, human approval requirements, deployment preferences, and how much deterministic workflow control you need around AI actions.",
    primaryKeyword: "best AI agents for automation",
    lastReviewed: verifiedOn,
    evidence: [evidence.n8n, evidence.zapier, evidence.lindy],
    agents: [agents.n8n, agents.zapier, agents.lindy],
    internalLinks: commonLinks,
  },
};
