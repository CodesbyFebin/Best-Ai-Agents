import { Agent } from "./types";

export const agents: Agent[] = [
  {
    slug: "claude-code",
    name: "Claude Code",
    company: "Anthropic",
    category: "Coding",
    pillar: "Coding Agents",
    score: 9.2,
    indiaFit: 8.4,
    price: "Usage-based",
    badge: "Editor pick",
    tone: "violet",
    shortDesc: "Terminal-first coding agent for repository-scale implementation and debugging.",
    longDesc: "Claude Code by Anthropic is a terminal-native coding agent that operates directly in your development environment. It understands full repository context, can execute multi-step implementation plans, and provides transparent reasoning for each change. The agent supports both autonomous operation and collaborative pair-programming modes. In India, Claude Code is adopted by mid-to-large engineering teams at technology services firms and SaaS companies. Its primary value is reducing context-switching between IDE, terminal, and documentation.",
    keyFeatures: [
      "Full repository context awareness across monorepos",
      "Autonomous implementation with human-in-the-loop gates",
      "Multi-file refactoring and debugging",
      "Built-in test execution and validation",
      "Transparent chain-of-thought for every action"
    ],
    evidenceItems: 18,
    lastVerified: "2026-08-20",
    sources: [
      "https://docs.anthropic.com/claude/docs/claude-code",
      "https://www.anthropic.com/claude-code",
      "https://github.com/anthropics/claude-code"
    ],
    competitors: ["Cursor", "GitHub Copilot", "Replit Agent", "Codeium"],
    useCases: [
      "Repository-scale code generation",
      "Legacy code refactoring",
      "Bug investigation and patching",
      "Test suite expansion"
    ],
    deployment: ["CLI", "Local"],
    integrations: ["GitHub", "GitLab", "VS Code", "JetBrains"],
    limitations: [
      "Requires local development environment",
      "Token costs scale with repository size",
      "India data residency depends on Anthropic API region"
    ],
    verdict: "Strong choice for engineering teams with existing Anthropic API spend. Evidence-backed scores reflect real-world productivity gains in repository-scale tasks."
  },
  {
    slug: "cursor",
    name: "Cursor",
    company: "Anysphere",
    category: "Coding",
    pillar: "Coding Agents",
    score: 9.0,
    indiaFit: 8.8,
    price: "Free + paid",
    badge: "India popular",
    tone: "cyan",
    shortDesc: "AI-native code editor with agent mode, codebase context, and model choice.",
    longDesc: "Cursor is an AI-first code editor built on VS Code that integrates agentic coding capabilities natively. It offers multi-model support (Claude, GPT-4, Gemini, and proprietary models), deep codebase indexing, and an Agent mode that can plan and execute multi-step edits. Cursor is widely adopted across Indian startup engineering teams due to its freemium pricing and familiarity with VS Code workflows. The India Fit score is elevated by local payment support, community documentation in English and Hindi, and active presence on Indian developer forums.",
    keyFeatures: [
      "Multi-model agent mode with model switching",
      "Deep codebase indexing and semantic search",
      "Tab completion and inline chat",
      "Privacy mode with no-codebase telemetry option",
      "Composer for multi-file edits"
    ],
    evidenceItems: 21,
    lastVerified: "2026-08-22",
    sources: [
      "https://cursor.com",
      "https://docs.cursor.com",
      "https://www.reddit.com/r/ClaudeCode",
      "https://x.com/cursor_ai"
    ],
    competitors: ["Claude Code", "GitHub Copilot", "Windsurf", "Cline"],
    useCases: [
      "Full-stack feature development",
      "Code review and refactoring",
      "Documentation generation",
      "Boilerplate elimination"
    ],
    deployment: ["Desktop app", "Cloud"],
    integrations: ["VS Code extensions", "GitHub", "GitLab", "Bitbucket"],
    limitations: [
      "Freemium tier has usage limits",
      "Agent mode consumes credits rapidly",
      "Privacy mode requires enterprise tier"
    ],
    verdict: "Top recommendation for individual developers and small teams in India. Evidence-backed scores show strong adoption velocity and community satisfaction."
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    company: "GitHub",
    category: "Coding",
    pillar: "Coding Agents",
    score: 8.8,
    indiaFit: 8.5,
    price: "Free + paid",
    badge: "Enterprise standard",
    tone: "blue",
    shortDesc: "AI pair programmer deeply integrated into GitHub and VS Code ecosystems.",
    longDesc: "GitHub Copilot is the most widely deployed AI coding assistant globally, with deep integration into GitHub workflows, VS Code, and JetBrains IDEs. It offers code completion, chat, and CLI interfaces. The India Fit is strong due to GitHub's widespread adoption in Indian tech companies, free tier for students and open-source maintainers, and compliance with local data regulations through GitHub's regional infrastructure. Evidence-backed evaluation shows consistent productivity improvements, though the agentic capabilities lag behind purpose-built agents.",
    keyFeatures: [
      "Real-time code suggestions in IDE",
      "GitHub Copilot Chat for Q&A and debugging",
      "CLI agent for terminal workflows",
      "Enterprise admin controls and audit logs",
      "Free for verified students and maintainers"
    ],
    evidenceItems: 24,
    lastVerified: "2026-08-19",
    sources: [
      "https://github.com/features/copilot",
      "https://docs.github.com/en/copilot",
      "https://resources.github.com/ Copilot-enterprise"
    ],
    competitors: ["Cursor", "Claude Code", "Tabnine", "Codeium"],
    useCases: [
      "IDE-based autocomplete",
      "GitHub-native code review",
      "Documentation and commit message generation",
      "Learning new APIs and frameworks"
    ],
    deployment: ["Cloud", "IDE plugin"],
    integrations: ["VS Code", "JetBrains", "GitHub", "Azure DevOps"],
    limitations: [
      "Agentic mode less capable than dedicated agents",
      "Requires GitHub account",
      "Enterprise pricing not publicly listed for India"
    ],
    verdict: "Best for teams already embedded in GitHub ecosystem. Strong enterprise controls and India availability through GitHub's infrastructure."
  },
  {
    slug: "lindy",
    name: "Lindy AI",
    company: "Lindy.ai",
    category: "Automation",
    pillar: "Business Automation",
    score: 8.6,
    indiaFit: 7.8,
    price: "Free + paid",
    badge: "No-code",
    tone: "pink",
    shortDesc: "Build workflow agents for inbox, meetings, support, and business operations.",
    longDesc: "Lindy AI enables teams to build and deploy AI agents without writing code. Its visual builder connects to email, calendars, CRMs, and support platforms. Agents can triage inbound emails, schedule meetings, qualify leads, and escalate issues. In India, Lindy is used by SMBs and startup operations teams to automate repetitive workflows. Evidence-backed scoring reflects strong ease-of-use but limited India-specific payment gateways and regional language support.",
    keyFeatures: [
      "Visual no-code agent builder",
      "Pre-built templates for common workflows",
      "Email and calendar deep integrations",
      "Conditional logic and human handoff",
      "Multi-step agent chains"
    ],
    evidenceItems: 14,
    lastVerified: "2026-08-18",
    sources: [
      "https://lindy.ai",
      "https://docs.lindy.ai",
      "https://www.producthunt.com/products/lindy"
    ],
    competitors: ["Zapier AI", "Make", "n8n", "Voiceflow"],
    useCases: [
      "Inbound email triage and routing",
      "Meeting scheduling and follow-ups",
      "Lead qualification workflows",
      "Customer support automation"
    ],
    deployment: ["Cloud"],
    integrations: ["Gmail", "Outlook", "HubSpot", "Salesforce", "Slack", "Zendesk"],
    limitations: [
      "Limited India payment support",
      "No self-hosted option",
      "English-only UI currently"
    ],
    verdict: "Strong no-code option for business automation. Evidence-backed scores show rapid deployment but require consideration for India-specific constraints."
  },
  {
    slug: "crewai",
    name: "CrewAI",
    company: "CrewAI Inc",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.7,
    indiaFit: 9.1,
    price: "Open source",
    badge: "Self-hostable",
    tone: "amber",
    shortDesc: "Python framework for role-based multi-agent teams and enterprise workflows.",
    longDesc: "CrewAI is the leading open-source framework for building multi-agent systems in Python. It enables developers to define agent roles, goals, and tools, then orchestrate them into crews that collaborate on complex tasks. The framework supports both sequential and hierarchical processes, making it suitable for research, content pipelines, and business automation. India Fit is exceptionally high due to open-source licensing, strong community presence on Indian developer platforms, and compatibility with local LLM deployments via Ollama and local models.",
    keyFeatures: [
      "Role-based agent definition with YAML or Python",
      "Sequential and hierarchical process orchestration",
      "Tool integration with LangChain and custom APIs",
      "Memory and context management",
      "Open-source with enterprise support available"
    ],
    evidenceItems: 17,
    lastVerified: "2026-08-21",
    sources: [
      "https://docs.crewai.com",
      "https://github.com/joaomdmoura/crewAI",
      "https://www.crewai.com"
    ],
    competitors: ["LangGraph", "AutoGen", "LangChain", "Semantic Kernel"],
    useCases: [
      "Multi-step research workflows",
      "Content generation pipelines",
      "Customer support triage systems",
      "Data analysis and reporting"
    ],
    deployment: ["Self-hosted", "Cloud"],
    integrations: ["LangChain", "OpenAI", "Anthropic", "Local LLMs", "Zapier"],
    limitations: [
      "Requires Python expertise",
      "Steep learning curve for non-developers",
      "Enterprise features require paid license"
    ],
    verdict: "Top framework choice for Indian engineering teams building custom agents. Open-source nature and local LLM compatibility drive high India Fit scores."
  },
  {
    slug: "n8n",
    name: "n8n",
    company: "n8n GmbH",
    category: "Automation",
    pillar: "Business Automation",
    score: 8.9,
    indiaFit: 9.0,
    price: "Open source",
    badge: "Best value",
    tone: "green",
    shortDesc: "Visual workflow automation with AI nodes, integrations, and self-hosting.",
    longDesc: "n8n is a fair-code workflow automation platform that combines visual node-based editing with AI capabilities. It offers hundreds of integrations, self-hosted deployment options, and AI nodes for language processing, embeddings, and agent orchestration. India Fit is excellent due to self-hosted deployment option, fair-code licensing, strong community, and compatibility with Indian payment gateways and local LLMs. Evidence-backed evaluation shows n8n as the most cost-effective automation platform for teams needing full control.",
    keyFeatures: [
      "Visual workflow builder with 400+ integrations",
      "Self-hosted deployment with Docker",
      "AI nodes for LangChain and OpenAI",
      "Fair-code license (desktop use free)",
      "Code node for custom JavaScript/Python"
    ],
    evidenceItems: 23,
    lastVerified: "2026-08-22",
    sources: [
      "https://n8n.io",
      "https://docs.n8n.io",
      "https://github.com/n8n-io/n8n",
      "https://www.n8n.io/pricing"
    ],
    competitors: ["Zapier", "Make", "Lindy AI", "Workato"],
    useCases: [
      "Marketing automation workflows",
      "CRM and sales pipeline automation",
      "Data sync between SaaS tools",
      "AI-powered content processing"
    ],
    deployment: ["Self-hosted", "Cloud", "Desktop"],
    integrations: ["400+ native integrations", "HTTP request", "Webhooks", "AI providers"],
    limitations: [
      "UI less polished than commercial alternatives",
      "Enterprise support requires paid license",
      "Steeper learning curve than Zapier"
    ],
    verdict: "Best value automation platform for India. Evidence-backed scores show superior ROI due to self-hosting option and fair-code model."
  },
  {
    slug: "vapi",
    name: "Vapi",
    company: "Vapi",
    category: "Voice",
    pillar: "Voice AI",
    score: 8.5,
    indiaFit: 8.2,
    price: "Usage-based",
    badge: "Voice stack",
    tone: "blue",
    shortDesc: "Developer platform for low-latency, programmable voice AI agents.",
    longDesc: "Vapi is a developer-first platform for building voice AI agents that can make and receive phone calls with sub-second latency. It provides WebSocket-based APIs, supports multiple LLM and TTS providers, and offers tools for building conversational voice experiences. India Fit is good due to support for Indian phone number formats, English and Hindi TTS options through provider selection, and pay-as-you-go pricing. Evidence-backed evaluation shows Vapi as the leading choice for developers building custom voice agents without managing telephony infrastructure.",
    keyFeatures: [
      "Sub-300ms latency voice pipeline",
      "Multi-provider LLM and TTS orchestration",
      "WebSocket and REST APIs",
      "Function calling and tool use during calls",
      "Call recording and transcription"
    ],
    evidenceItems: 15,
    lastVerified: "2026-08-17",
    sources: [
      "https://vapi.ai",
      "https://docs.vapi.ai",
      "https://github.com/VapiAI/vapi"
    ],
    competitors: ["Retell AI", "Bland AI", "ElevenLabs", "Twilio + LLM"],
    useCases: [
      "AI phone receptionists",
      "Outbound sales calls",
      "Customer support voice bots",
      "Appointment scheduling"
    ],
    deployment: ["Cloud API"],
    integrations: ["Twilio", "OpenAI", "Anthropic", "ElevenLabs", "Deepgram"],
    limitations: [
      "No self-hosted option",
      "India phone number support limited",
      "Requires developer integration"
    ],
    verdict: "Leading developer platform for voice AI. Evidence-backed scores show best-in-class latency and flexibility, though India telephony support is growing."
  },
  {
    slug: "langgraph",
    name: "LangGraph",
    company: "LangChain",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.4,
    indiaFit: 8.0,
    price: "Open source + paid cloud",
    badge: "Production-ready",
    tone: "orange",
    shortDesc: "Graph-based orchestration framework for complex, stateful agent workflows.",
    longDesc: "LangGraph is a LangChain framework for building stateful, multi-actor applications with LLMs. It models workflows as graphs where nodes are tasks or tools and edges define control flow. This enables cyclic workflows, human-in-the-loop checkpoints, and persistent state across agent interactions. India Fit is solid due to open-source availability, compatibility with local LLM deployments, and growing adoption in Indian AI engineering teams. Evidence-backed evaluation shows LangGraph excels at production agent systems requiring durability and auditability.",
    keyFeatures: [
      "Graph-based workflow definition",
      "Persistent checkpointing for long-running agents",
      "Human-in-the-loop approval gates",
      "Built-in state management",
      "Streaming and async support"
    ],
    evidenceItems: 16,
    lastVerified: "2026-08-19",
    sources: [
      "https://langchain-ai.github.io/langgraph/",
      "https://github.com/langchain-ai/langgraph",
      "https://langchain.com"
    ],
    competitors: ["CrewAI", "AutoGen", "Semantic Kernel", "Haystack"],
    useCases: [
      "Multi-step research agents",
      "Customer support with human escalation",
      "Code review workflows",
      "Document processing pipelines"
    ],
    deployment: ["Self-hosted", "LangSmith Cloud"],
    integrations: ["LangChain", "LangSmith", "OpenAI", "Anthropic", "Local LLMs"],
    limitations: [
      "Steeper learning curve than CrewAI",
      "Documentation assumes LangChain familiarity",
      "Enterprise support through LangChain only"
    ],
    verdict: "Excellent for production agent systems requiring durability. Evidence-backed scores show superior state management compared to competitors."
  },
  {
    slug: "autogen",
    name: "AutoGen",
    company: "Microsoft",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.2,
    indiaFit: 7.9,
    price: "Open source",
    badge: "Microsoft-backed",
    tone: "blue",
    shortDesc: "Microsoft's multi-agent conversation framework for collaborative AI systems.",
    longDesc: "AutoGen is an open-source framework from Microsoft Research for building multi-agent systems where agents converse to solve tasks. It supports customizable agents with distinct personas, conversation patterns, and tool access. The framework is particularly suited for research, analysis, and coding tasks that benefit from agent collaboration. India Fit is moderate due to Microsoft's enterprise presence in India and open-source availability, but limited local community compared to CrewAI. Evidence-backed evaluation shows AutoGen as a strong alternative for teams invested in Azure ecosystem.",
    keyFeatures: [
      "Conversational multi-agent orchestration",
      "Customizable agent personas and behaviors",
      "Human proxy agent for oversight",
      "Code execution and tool integration",
      "AgentChat and AssistantChat APIs"
    ],
    evidenceItems: 13,
    lastVerified: "2026-08-16",
    sources: [
      "https://microsoft.github.io/autogen/",
      "https://github.com/microsoft/autogen",
      "https://learn.microsoft.com/en-us/azure/ai-studio/"
    ],
    competitors: ["CrewAI", "LangGraph", "LangChain"],
    useCases: [
      "Multi-perspective research synthesis",
      "Code generation with review agents",
      "Data analysis with specialist agents",
      "Educational tutoring systems"
    ],
    deployment: ["Self-hosted", "Azure"],
    integrations: ["Azure OpenAI", "OpenAI", "Local LLMs", "Docker"],
    limitations: [
      "Rapidly changing API surface",
      "Documentation gaps for advanced patterns",
      "Fewer India-specific examples"
    ],
    verdict: "Solid choice for Azure-integrated teams. Evidence-backed scores show strong research capabilities but higher maintenance burden than CrewAI."
  },
  {
    slug: "make",
    name: "Make",
    company: "Make (formerly Integromat)",
    category: "Automation",
    pillar: "Business Automation",
    score: 8.1,
    indiaFit: 7.5,
    price: "Free + paid",
    badge: "Visual builder",
    tone: "purple",
    shortDesc: "Visual automation platform with advanced scenarios and AI capabilities.",
    longDesc: "Make is a visual automation platform that evolved from Integromat, offering a powerful scenario builder with branching, iterators, and error handling. It supports AI operations through built-in modules for OpenAI, Anthropic, and custom APIs. India Fit is moderate due to limited local payment methods and English-only interface, but strong integration ecosystem. Evidence-backed evaluation shows Make as the most capable no-code automation tool for complex workflows requiring conditional logic and data transformation.",
    keyFeatures: [
      "Visual scenario builder with drag-and-drop",
      "Advanced iterators and array handling",
      "Error handling and retry logic",
      "Built-in AI modules",
      "1000+ app integrations"
    ],
    evidenceItems: 12,
    lastVerified: "2026-08-15",
    sources: [
      "https://www.make.com",
      "https://www.make.com/en/help",
      "https://www.make.com/en/pricing"
    ],
    competitors: ["Zapier", "n8n", "Workato", "Tray.io"],
    useCases: [
      "Complex multi-step business processes",
      "Data pipeline automation",
      "CRM and ERP integrations",
      "Marketing automation"
    ],
    deployment: ["Cloud"],
    integrations: ["1000+ apps", "HTTP", "JSON", "AI providers"],
    limitations: [
      "No self-hosted option",
      "Limited India payment support",
      "Free tier has operation limits"
    ],
    verdict: "Most capable visual automation platform. Evidence-backed scores show superior complexity handling but higher cost than n8n for India teams."
  },
  {
    slug: "zapier",
    name: "Zapier",
    company: "Zapier",
    category: "Automation",
    pillar: "Business Automation",
    score: 8.0,
    indiaFit: 7.2,
    price: "Free + paid",
    badge: "Market leader",
    tone: "orange",
    shortDesc: "No-code automation platform connecting 5000+ apps with AI actions.",
    longDesc: "Zapier is the market-leading no-code automation platform, connecting over 5000 apps through Zaps (automated workflows). It recently added AI capabilities including natural language automation creation and AI-powered data extraction. India Fit is moderate due to widespread recognition but limited local payment options and no self-hosted deployment. Evidence-backed evaluation shows Zapier as the easiest platform for simple automations, but cost scales quickly for high-volume workflows compared to n8n.",
    keyFeatures: [
      "5000+ app integrations",
      "Natural language Zap creation",
      "AI-powered data extraction and formatting",
      "Multi-step Zaps with branching",
      "Extensive template library"
    ],
    evidenceItems: 20,
    lastVerified: "2026-08-20",
    sources: [
      "https://zapier.com",
      "https://help.zapier.com",
      "https://zapier.com/pricing"
    ],
    competitors: ["Make", "n8n", "Workato", "Tray.io"],
    useCases: [
      "Lead capture and CRM sync",
      "Email marketing automation",
      "Form response processing",
      "Simple AI-enhanced workflows"
    ],
    deployment: ["Cloud"],
    integrations: ["5000+ apps", "Webhooks", "Zapier AI"],
    limitations: [
      "No self-hosted option",
      "Expensive at scale",
      "Limited complex logic compared to Make"
    ],
    verdict: "Best for simple, app-to-app automations. Evidence-backed scores show unmatched ease of use but poor ROI at scale compared to n8n."
  },
  {
    slug: "replit-agent",
    name: "Replit Agent",
    company: "Replit",
    category: "Coding",
    pillar: "Coding Agents",
    score: 7.8,
    indiaFit: 8.1,
    price: "Free + paid",
    badge: "Cloud-native",
    tone: "teal",
    shortDesc: "Cloud-based coding agent with instant environment setup and deployment.",
    longDesc: "Replit Agent is an AI-powered development environment that operates entirely in the cloud. It can scaffold projects, write code, debug, and deploy applications with zero local setup. The agent understands natural language prompts and can build full-stack applications. India Fit is strong due to no local hardware requirements, affordable paid tiers, and web-based access compatible with low-spec devices. Evidence-backed evaluation shows Replit as the best option for rapid prototyping and learning, though less suitable for complex enterprise codebases.",
    keyFeatures: [
      "Instant cloud development environment",
      "Natural language to full-stack app",
      "One-click deployment and sharing",
      "Collaborative editing",
      "Free tier with usage limits"
    ],
    evidenceItems: 11,
    lastVerified: "2026-08-14",
    sources: [
      "https://replit.com",
      "https://docs.replit.com",
      "https://blog.replit.com"
    ],
    competitors: ["Cursor", "GitHub Codespaces", "StackBlitz"],
    useCases: [
      "Rapid prototyping",
      "Learning to code with AI assistance",
      "Small app deployment",
      "Collaborative coding sessions"
    ],
    deployment: ["Cloud"],
    integrations: ["Replit Deployments", "GitHub", "NPM", "Docker"],
    limitations: [
      "Not suitable for large monorepos",
      "Free tier has resource limits",
      "Limited offline capability"
    ],
    verdict: "Best for prototyping and education. Evidence-backed scores show excellent onboarding but limited enterprise suitability."
  },
  {
    slug: "codeium",
    name: "Codeium",
    company: "Codeium",
    category: "Coding",
    pillar: "Coding Agents",
    score: 7.9,
    indiaFit: 8.3,
    price: "Free + paid",
    badge: "Free tier",
    tone: "emerald",
    shortDesc: "Free AI coding assistant with multi-model support and privacy-first design.",
    longDesc: "Codeium offers a free AI coding assistant with support for 70+ languages and IDE integrations. It provides code completion, search, and chat features with a privacy-first architecture that allows teams to deploy their own models. India Fit is strong due to generous free tier, self-hosted option, and support for regional developer communities. Evidence-backed evaluation shows Codeium as the best value proposition for teams with budget constraints, though feature depth lags behind premium alternatives.",
    keyFeatures: [
      "Free individual tier",
      "70+ language support",
      "Self-hosted deployment option",
      "Privacy mode with code non-telemetry",
      "IDE integrations for VS Code, JetBrains, Vim"
    ],
    evidenceItems: 9,
    lastVerified: "2026-08-13",
    sources: [
      "https://codeium.com",
      "https://docs.codeium.com",
      "https://github.com/Exafunction/codeium"
    ],
    competitors: ["GitHub Copilot", "Tabnine", "Codium AI"],
    useCases: [
      "IDE autocomplete on budget",
      "Privacy-sensitive development",
      "Language learning and exploration",
      "Open-source project contribution"
    ],
    deployment: ["Cloud", "Self-hosted"],
    integrations: ["VS Code", "JetBrains", "Vim", "Emacs"],
    limitations: [
      "Less capable agentic features",
      "Smaller community than Copilot",
      "Enterprise features limited"
    ],
    verdict: "Best free option for India developers. Evidence-backed scores show strong value but reduced depth compared to paid alternatives."
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    company: "Codeium",
    category: "Coding",
    pillar: "Coding Agents",
    score: 8.0,
    indiaFit: 7.8,
    price: "Free + paid",
    badge: "IDE-native",
    tone: "sky",
    shortDesc: "AI-powered IDE with deep codebase understanding and flow programming.",
    longDesc: "Windsurf (formerly Codeium IDE) is an AI-native development environment that extends VS Code with deep codebase understanding. It features Cascade, a flow-based AI system that maintains context across edits, and supports multi-file operations. India Fit is moderate due to Codeium's existing India presence but limited local payment support. Evidence-backed evaluation shows Windsurf as a compelling alternative to Cursor for teams valuing privacy and free tiers.",
    keyFeatures: [
      "Cascade AI flow for multi-step operations",
      "Deep repository understanding",
      "Free tier available",
      "Privacy-first design",
      "VS Code extension compatibility"
    ],
    evidenceItems: 10,
    lastVerified: "2026-08-12",
    sources: [
      "https://codeium.com/windsurf",
      "https://docs.codeium.com/windsurf",
      "https://github.com/Exafunction/windsurf"
    ],
    competitors: ["Cursor", "GitHub Copilot", "Cline"],
    useCases: [
      "Multi-file refactoring",
      "Codebase exploration",
      "Feature implementation",
      "Bug investigation"
    ],
    deployment: ["Desktop app", "VS Code extension"],
    integrations: ["VS Code", "GitHub", "GitLab"],
    limitations: [
      "Newer product with smaller community",
      "Limited enterprise features",
      "India payment support absent"
    ],
    verdict: "Promising alternative with strong privacy stance. Evidence-backed scores show potential but need more India-specific validation."
  }
];
