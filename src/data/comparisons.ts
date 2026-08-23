import { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude: Which AI Assistant Is Better?",
    agents: ["chatgpt", "claude"],
    summary: "Comparing OpenAI's ChatGPT (GPT-4) with Anthropic's Claude across reasoning, coding, context length, and India-specific factors.",
    criteria: [
      {
        name: "Reasoning",
        values: { chatgpt: "8.5/10", claude: "9.0/10" },
        weight: 0.2,
      },
      {
        name: "Coding",
        values: { chatgpt: "8.8/10", claude: "9.2/10" },
        weight: 0.2,
      },
      {
        name: "Context Window",
        values: { chatgpt: "128K tokens", claude: "200K tokens" },
        weight: 0.15,
      },
      {
        name: "Multimodal",
        values: { chatgpt: "Yes (vision)", claude: "Yes (vision)" },
        weight: 0.15,
      },
      {
        name: "India Fit",
        values: { chatgpt: "8.2/10", claude: "8.0/10" },
        weight: 0.15,
      },
      {
        name: "Pricing",
        values: { chatgpt: "Free tier, $20/mo Plus", claude: "Free tier, $5/mo Basic" },
        weight: 0.15,
      },
    ],
    verdict: "Claude edges out for long-context reasoning and document analysis, while ChatGPT maintains broader ecosystem integration and more polished conversational UX.",
    evidenceCount: 18,
    lastUpdated: "2026-08-20",
  },
  {
    slug: "cursor-vs-copilot",
    title: "Cursor vs GitHub Copilot: Which Coding Agent Should You Use?",
    agents: ["cursor", "github-copilot"],
    summary: "Comparing Cursor's agent-first IDE with GitHub Copilot's deep GitHub integration for Indian developers.",
    criteria: [
      {
        name: "Agent Features",
        values: { cursor: "Advanced (Agent mode, multi-file edits)", copilot: "Basic (autocomplete, chat)" },
        weight: 0.25,
      },
      {
        name: "IDE Experience",
        values: { cursor: "VS Code fork with AI-native UX", copilot: "VS Code/JetBrains extension" },
        weight: 0.2,
      },
      {
        name: "India Fit",
        values: { cursor: "8.8/10", copilot: "8.5/10" },
        weight: 0.2,
      },
      {
        name: "Pricing",
        values: { cursor: "Free + $20/mo Pro", copilot: "Free student tier, $10/mo Individual" },
        weight: 0.15,
      },
      {
        name: "Model Choice",
        values: { cursor: "Claude 3.5, GPT-4, Gemini", copilot: "Claude 3.5, GPT-4, Gemini (Pro)" },
        weight: 0.2,
      },
    ],
    verdict: "Cursor wins for autonomous coding features and developer experience, while Copilot is better for teams deeply embedded in the GitHub ecosystem.",
    evidenceCount: 14,
    lastUpdated: "2026-08-19",
  },
  {
    slug: "llama-vs-mistral",
    title: "Llama vs Mistral: Open-Weight LLM Showdown",
    agents: ["llama", "mistral"],
    summary: "Comparing Meta's Llama 3 with Mistral's models for local deployment in Indian teams.",
    criteria: [
      {
        name: "Performance",
        values: { llama: "9.0/10", mistral: "8.5/10" },
        weight: 0.3,
      },
      {
        name: "Model Size Options",
        values: { llama: "8B, 70B, 405B", mistral: "7B, 8x7B, 8x22B" },
        weight: 0.2,
      },
      {
        name: "License",
        values: { llama: "Meta license", mistral: "Apache 2.0" },
        weight: 0.2,
      },
      {
        name: "India Fit",
        values: { llama: "9.0/10", mistral: "8.3/10" },
        weight: 0.15,
      },
      {
        name: "Local Deployment",
        values: { llama: "Excellent (community support)", mistral: "Good (smaller community)" },
        weight: 0.15,
      },
    ],
    verdict: "Llama 3 leads in performance and community support, while Mistral offers more permissive licensing and efficient architecture. Both excel for local deployment in India.",
    evidenceCount: 12,
    lastUpdated: "2026-08-18",
  },
  {
    slug: "langchain-vs-crewai",
    title: "LangChain vs CrewAI: Which Agent Framework Is Right for You?",
    agents: ["langchain", "crewai"],
    summary: "Comparing LangChain's comprehensive ecosystem with CrewAI's simpler role-based approach for building multi-agent systems.",
    criteria: [
      {
        name: "Ease of Use",
        values: { langchain: "Moderate (steep learning curve)", crewai: "Easy (intuitive roles)" },
        weight: 0.2,
      },
      {
        name: "Ecosystem",
        values: { langchain: "Extensive (tools, memory, chains)", crewai: "Growing (focused on agents)" },
        weight: 0.2,
      },
      {
        name: "Orchestration",
        values: { langchain: "LangGraph (advanced)", crewai: "Crews and processes (simple)" },
        weight: 0.25,
      },
      {
        name: "India Fit",
        values: { langchain: "8.8/10", crewai: "9.1/10" },
        weight: 0.15,
      },
      {
        name: "Documentation",
        values: { langchain: "Comprehensive but fragmented", crewai: "Well-structured and beginner-friendly" },
        weight: 0.2,
      },
    ],
    verdict: "Start with CrewAI for quick wins and learning, migrate to LangChain/LangGraph for production complexity. Both are well-suited for Indian development teams.",
    evidenceCount: 16,
    lastUpdated: "2026-08-17",
  },
];