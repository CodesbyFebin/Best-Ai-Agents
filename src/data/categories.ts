import { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "coding-agents",
    name: "Coding Agents",
    pillar: "Coding Agents",
    description: "AI agents that write, review, and refactor code across languages.",
    longDescription: "Coding agents range from lightweight IDE plugins that predict the next line to autonomous agents that can build entire features. The field is converging on three models: terminal-first agents (Claude Code, Aider), editor-native agents (Cursor, Cline), and cloud-based agents (Replit).",
    agentCount: 15,
    keyCapabilities: [
      "Code completion and generation",
      "Multi-file refactoring",
      "Bug detection and fixing",
      "Test writing and execution",
      "Code explanation and documentation"
    ],
    indiaContext: "High adoption in India's large developer base. Local factors include GitHub student accounts, VS Code familiarity, and cost-conscious evaluation of token spend.",
    pricingRange: "$0 - $200/month",
    evidenceSummary: "Evaluated 15 coding agents with 15-24 evidence items each. Scores reflect real-world productivity gains measured through developer surveys and benchmark tests.",
    lastUpdated: "2026-08-22"
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    pillar: "Business Automation",
    description: "AI agents that automate workflows across CRM, marketing, support, and operations.",
    longDescription: "Business automation agents help teams automate repetitive tasks across sales, marketing, customer support, and internal operations. No-code platforms dominate, but self-hostable options are growing as enterprises prioritize control and compliance.",
    agentCount: 12,
    keyCapabilities: [
      "No-code workflow building",
      "CRM and sales automation",
      "Email and calendar management",
      "Customer support automation",
      "Data processing and reporting"
    ],
    indiaContext: "Strong SMB market in India drives adoption of no-code tools. Payment method support, regional language handling, and local compliance are key evaluation factors.",
    pricingRange: "$0 - $400/month",
    evidenceSummary: "Evaluated 12 automation platforms with 10-23 evidence items each. India Fit scores account for payment support, regional language handling, and self-hosting options.",
    lastUpdated: "2026-08-21"
  },
  {
    slug: "voice-ai",
    name: "Voice AI",
    pillar: "Voice AI",
    description: "Text-to-speech, speech-to-text, and conversational voice agents.",
    longDescription: "Voice AI encompasses text-to-speech synthesis, speech recognition, and conversational voice agents. Leading platforms support multiple languages and deployment modes, from cloud APIs to fully on-device inference. The technology is rapidly maturing for customer service, accessibility, and interactive applications.",
    agentCount: 8,
    keyCapabilities: [
      "Ultra-realistic text-to-speech",
      "Voice cloning and customization",
      "Speech-to-text transcription",
      "Conversational voice agents",
      "Real-time voice processing"
    ],
    indiaContext: "Indian language support varies significantly. Hindi, Tamil, Telugu, and other regional languages are critical for local adoption. Local payment methods and rupee billing are preferred.",
    pricingRange: "$0 - $1000/month",
    evidenceSummary: "Evaluated 8 voice AI platforms with 8-18 evidence items each. India Fit scores consider language coverage, local data residency options, and regional accent accuracy.",
    lastUpdated: "2026-08-20"
  },
  {
    slug: "core-llms",
    name: "Core LLMs",
    pillar: "Core AI Agents",
    description: "Foundational large language models that power AI applications.",
    longDescription: "Core LLMs are the foundational models behind all AI applications. They vary significantly in licensing (open vs. closed), performance, cost, and language support. Recent developments include open-weight models competing with closed models, multimodal capabilities, and specialized models for coding and reasoning.",
    agentCount: 14,
    keyCapabilities: [
      "Text generation and analysis",
      "Multimodal input processing",
      "Reasoning and problem-solving",
      "Code generation",
      "Multilingual support"
    ],
    indiaContext: "Open-weight models are preferred for local deployment. Indian language support and rupee-denominated pricing are important. Government initiatives like IndiaAI promote domestic model development.",
    pricingRange: "$0 - $300/month",
    evidenceSummary: "Evaluated 14 core LLMs with 5-26 evidence items each. Scores reflect benchmark performance, cost efficiency, and India-specific considerations.",
    lastUpdated: "2026-08-22"
  },
  {
    slug: "agent-builders",
    name: "Agent Builders",
    pillar: "Agent Builders",
    description: "Frameworks and platforms for orchestrating AI agents into complex workflows.",
    longDescription: "Agent builders provide the infrastructure for orchestrating multiple AI agents into complex, stateful workflows. These frameworks handle agent communication, memory management, tool integration, and error recovery. They range from low-code visual builders to advanced developer frameworks with graph-based orchestration.",
    agentCount: 14,
    keyCapabilities: [
      "Multi-agent orchestration",
      "Workflow state management",
      "Tool integration and use",
      "Memory and context management",
      "Human-in-the-loop workflows"
    ],
    indiaContext: "Python-based frameworks dominate among Indian developers. Self-hosting options are valued for compliance. Integration with local cloud providers and Indian language models is emerging.",
    pricingRange: "$0 - $500/month",
    evidenceSummary: "Evaluated 14 agent builder frameworks with 6-22 evidence items each. India Fit considers local deployment, documentation quality, and community support.",
    lastUpdated: "2026-08-21"
  },
  {
    slug: "infrastructure",
    name: "AI Infrastructure",
    pillar: "Core AI Agents",
    description: "Databases, vector stores, and platforms for building AI-powered applications.",
    longDescription: "AI infrastructure includes vector databases, embedding services, deployment platforms, and monitoring tools. These components form the backbone of production AI systems, handling data storage, retrieval, scalability, and observability. The landscape includes both cloud-managed services and open-source self-hosted options.",
    agentCount: 5,
    keyCapabilities: [
      "Vector storage and search",
      "Embedding generation",
      "Data pipeline orchestration",
      "Model serving and deployment",
      "Performance monitoring"
    ],
    indiaContext: "Self-hosted options are preferred for compliance. Local cloud providers (AWS, GCP, Azure with Indian regions) are commonly used. Cost optimization is critical for startups.",
    pricingRange: "$0 - $3000/month",
    evidenceSummary: "Evaluated 5 infrastructure platforms with 9-18 evidence items each. India Fit scores account for regional availability, self-hosting, and compliance considerations.",
    lastUpdated: "2026-08-20"
  },
  {
    slug: "mcp",
    name: "Model Context Protocol",
    pillar: "Agent Builders",
    description: "Servers, clients, and integrations built on the MCP standard for AI agent extensibility.",
    longDescription: "The Model Context Protocol (MCP) is an open standard for connecting AI assistants to external data sources and tools. MCP servers provide a standardized interface for exposing data, APIs, and services to MCP-compatible clients. The ecosystem is rapidly growing with community-maintained servers for popular services.",
    agentCount: 8,
    keyCapabilities: [
      "Standardized tool integration",
      "Data source connectivity",
      "API abstraction",
      "Context management",
      "Multi-assistant support"
    ],
    indiaContext: "MCP is still emerging in India. Early adopters are integrating it with local development workflows. Open-source servers reduce vendor lock-in concerns.",
    pricingRange: "$0 - $500/month",
    evidenceSummary: "Evaluated 8 MCP-related tools with 6-14 evidence items each. Focus on compatibility with Indian development environments and local tool ecosystems.",
    lastUpdated: "2026-08-19"
  },
  {
    slug: "pricing",
    name: "Pricing",
    pillar: "Pricing",
    description: "Transparent pricing analysis for AI agents, models, and frameworks.",
    longDescription: "Pricing pages provide transparent cost analysis for AI tools, converting USD prices to INR and accounting for Indian payment methods, taxes, and billing cycles. Each analysis includes free tier evaluation, usage projections, and cost comparison with alternatives.",
    agentCount: 5,
    keyCapabilities: [
      "Cost comparison",
      "INR pricing conversion",
      "Free tier analysis",
      "Usage projections",
      "India payment support"
    ],
    indiaContext: "All pricing analyses include INR conversion rates, UPI payment support, GST implications, and rupee-denominated usage projections.",
    pricingRange: "Analysis only",
    evidenceSummary: "Evaluated 5 pricing models with 6-10 evidence items each. All prices are current as of 2026-08 and include India-specific considerations.",
    lastUpdated: "2026-08-21"
  },
  {
    slug: "security",
    name: "Security & Privacy",
    pillar: "Security",
    description: "Guides and tools for securing AI agents and ensuring privacy compliance.",
    longDescription: "Security and privacy pages cover the critical aspects of deploying AI agents safely, including data protection, prompt injection prevention, model security, and compliance with regulations like India's DPDP Act. Each guide includes practical recommendations and implementation examples.",
    agentCount: 4,
    keyCapabilities: [
      "Data protection compliance",
      "Prompt injection prevention",
      "Model security auditing",
      "Privacy-preserving techniques",
      "Regulatory compliance"
    ],
    indiaContext: "India-specific focus on DPDP Act compliance, data localization requirements, and regional security considerations. Includes guidance for cross-border data transfers.",
    pricingRange: "Free guides",
    evidenceSummary: "Evaluated 4 security frameworks with 6-12 evidence items each. Content reviewed against Indian legal requirements and industry best practices.",
    lastUpdated: "2026-08-21"
  },
  {
    slug: "india",
    name: "India Focus",
    pillar: "India",
    description: "India-specific AI content covering Indic languages, local regulations, and regional adoption patterns.",
    longDescription: "India-focused content addresses the unique challenges and opportunities of AI adoption in India. This includes Indic language model support, compliance with India's Digital Personal Data Protection Act, local cloud region availability, regional startup ecosystem analysis, and cost optimization strategies.",
    agentCount: 5,
    keyCapabilities: [
      "Indic language AI support",
      "Indian regulatory compliance",
      "Local cloud deployment",
      "Regional startup ecosystem",
      "Cost optimization for India"
    ],
    indiaContext: "India-specific analysis covering DPDP compliance, Indic language support, local cloud infrastructure, and regional payment methods.",
    pricingRange: "Free guides and reports",
    evidenceSummary: "Evaluated 5 India-focused resources with 5-15 evidence items each. Content covers government initiatives, regulatory requirements, and local market dynamics.",
    lastUpdated: "2026-08-22"
  },
  {
    slug: "learning",
    name: "Learning & Research",
    pillar: "Learning",
    description: "Educational resources and research reports on AI agents and frameworks.",
    longDescription: "Learning and research pages provide educational content ranging from AI agent primers to advanced technical guides. Research reports offer in-depth analysis of trends, benchmarks, and market dynamics. All content is evidence-backed with citations to primary sources.",
    agentCount: 4,
    keyCapabilities: [
      "Beginner tutorials",
      "Technical deep-dives",
      "Research reports",
      "Benchmark analysis",
      "Best practices"
    ],
    indiaContext: "Educational content tailored for Indian developers and businesses, with examples relevant to the Indian market and regulatory environment.",
    pricingRange: "Free content",
    evidenceSummary: "Evaluated 4 learning resources with 5-9 evidence items each. Content reviewed for accuracy and relevance to Indian developers.",
    lastUpdated: "2026-08-18"
  }
];