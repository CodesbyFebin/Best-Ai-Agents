import { Agent } from "./types";

export const frameworks: Agent[] = [
  {
    slug: "langchain",
    name: "LangChain",
    company: "LangChain",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.6,
    indiaFit: 8.8,
    price: "Open source + paid",
    badge: "Ecosystem leader",
    tone: "blue",
    shortDesc: "Comprehensive framework for building applications powered by language models with agents, chains, and memory.",
    longDesc: "LangChain is the leading open-source framework for building LLM-powered applications. It provides modular abstractions for prompts, models, chains, agents, and memory. The ecosystem includes LangSmith for observability, LangGraph for agent orchestration, and LangServe for deployment. In India, LangChain has strong adoption among startups and enterprise AI teams due to its open-source nature, active community, and extensive documentation.",
    keyFeatures: [
      "Modular components (prompts, models, chains, agents, memory)",
      "Model-agnostic (supports 50+ LLM providers)",
      "Agent framework with tool use",
      "LangSmith observability platform",
      "LangGraph for stateful agent workflows"
    ],
    evidenceItems: 22,
    lastVerified: "2026-08-22",
    sources: [
      "https://python.langchain.com",
      "https://js.langchain.com",
      "https://github.com/langchain-ai/langchain",
      "https://www.langchain.com"
    ],
    competitors: ["LlamaIndex", "Haystack", "Semantic Kernel", "CrewAI"],
    useCases: [
      "RAG applications",
      "Conversational AI agents",
      "Document processing pipelines",
      "Code intelligence tools"
    ],
    deployment: ["Self-hosted", "Cloud"],
    integrations: ["OpenAI", "Anthropic", "HuggingFace", "Pinecone", "Weaviate", "LangSmith"],
    limitations: [
      "Rapidly changing APIs",
      "Abstraction overhead for simple tasks",
      "Python-first (JS lag behind)",
      "Complex for beginners"
    ],
    verdict: "Best overall LLM framework. Evidence-backed scores show unmatched ecosystem breadth but API changes require attention."
  },
  {
    slug: "langraph",
    name: "LangGraph",
    company: "LangChain",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.4,
    indiaFit: 8.2,
    price: "Open source + paid",
    badge: "Graph orchestration",
    tone: "indigo",
    shortDesc: "LangChain's graph-based agent orchestration framework for building stateful AI workflows.",
    longDesc: "LangGraph is an open-source framework for building stateful, multi-actor applications with LLMs. It models workflows as graphs where nodes are tasks or tools and edges define control flow. This enables cyclic workflows, human-in-the-loop checkpoints, and persistent state across agent interactions. Built on LangChain, it enables production-ready agent systems. In India, LangGraph is adopted by teams already using LangChain for complex agent orchestration.",
    keyFeatures: [
      "Graph-based workflow definition",
      "Persistent checkpointing for long-running agents",
      "Human-in-the-loop approval gates",
      "Built-in state management",
      "Streaming and async support"
    ],
    evidenceItems: 16,
    lastVerified: "2026-08-20",
    sources: [
      "https://langchain-ai.github.io/langgraph/",
      "https://github.com/langchain-ai/langgraph",
      "https://www.langchain.com/langgraph"
    ],
    competitors: ["CrewAI", "AutoGen", "Phidata"],
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
      "Rapidly evolving API"
    ],
    verdict: "Best for production agent systems requiring durability. Evidence-backed scores show superior state management compared to competitors."
  },
  {
    slug: "crewai",
    name: "CrewAI",
    company: "CrewAI Inc",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.7,
    indiaFit: 9.1,
    price: "Open source + paid",
    badge: "Role-based",
    tone: "amber",
    shortDesc: "Python framework for role-based multi-agent teams and enterprise workflows.",
    longDesc: "CrewAI is a leading open-source framework for building multi-agent systems in Python. It enables developers to define agent roles, goals, and tools, then orchestrate them into crews that collaborate on complex tasks. The framework supports both sequential and hierarchical processes, making it suitable for research, content pipelines, and business automation. In India, CrewAI has high adoption due to simple APIs, extensive tutorials, and compatibility with local LLM deployments via Ollama.",
    keyFeatures: [
      "Role-based agent definition (YAML or Python)",
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
    integrations: ["LangChain", "OpenAI", "Anthropic", "Local LLMs", "Ollama", "Zapier"],
    limitations: [
      "Requires Python expertise",
      "Steep learning curve for non-developers",
      "Enterprise features require paid license"
    ],
    verdict: "Top framework choice for Indian engineering teams. Evidence-backed scores show strong adoption velocity and community satisfaction."
  },
  {
    slug: "semantic-kernel",
    name: "Semantic Kernel",
    company: "Microsoft",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.1,
    indiaFit: 7.9,
    price: "Open source",
    badge: "Microsoft-backed",
    tone: "indigo",
    shortDesc: "Microsoft's SDK that integrates conventional programming languages with LLMs using prompt engineering and plugins.",
    longDesc: "Semantic Kernel is Microsoft's open-source SDK that bridges conventional programming languages with Large Language Models. It allows developers to define plugins that can be orchestrated by AI planners, and supports prompt chaining, vectorization, and embedding generation. India fit is good with Microsoft's local presence and Azure integration. Evidence-backed evaluation shows Semantic Kernel excels at enterprise integration but has a smaller community than LangChain.",
    keyFeatures: [
      "C# and Python support",
      "Plugin architecture",
      "Planner for task orchestration",
      "Memory management",
      "Azure integration"
    ],
    evidenceItems: 14,
    lastVerified: "2026-08-18",
    sources: [
      "https://learn.microsoft.com/semantic-kernel/",
      "https://github.com/microsoft/semantic-kernel"
    ],
    competitors: ["LangChain", "LlamaIndex", "CrewAI"],
    useCases: [
      "Enterprise applications",
      "Azure integration",
      "Plugin orchestration",
      ".NET/TypeScript projects"
    ],
    deployment: ["Self-hosted", "Azure"],
    integrations: ["Azure OpenAI", "OpenAI", ".NET", "Python", "TypeScript"],
    limitations: [
      "Less community than LangChain",
      "Microsoft-centric",
      "Steeper learning curve"
    ],
    verdict: "Best for Microsoft ecosystem teams. Evidence-backed scores show strong integration with Azure but smaller community."
  },
  {
    slug: "haystack",
    name: "Haystack",
    company: "deepset",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 7.8,
    indiaFit: 7.6,
    price: "Open source + paid",
    badge: "Search-focused",
    tone: "teal",
    shortDesc: "NLP framework for building search systems and question-answering applications with transformer models.",
    longDesc: "Haystack is an open-source NLP framework by deepset for building search systems and question-answering applications powered by transformer models. It provides production-ready components for document processing, vector search, retrieval-augmented generation, and pipeline orchestration. India fit is good with open-source availability and growing adoption. Evidence-backed evaluation shows Haystack excels at search-centric applications but is less agent-focused than LangChain.",
    keyFeatures: [
      "Search-focused architecture",
      "RAG pipelines",
      "Vector search",
      "Transformer model integration",
      "Production-ready components"
    ],
    evidenceItems: 12,
    lastVerified: "2026-08-17",
    sources: [
      "https://haystack.deepset.ai/",
      "https://github.com/deepset-ai/haystack"
    ],
    competitors: ["LangChain", "LlamaIndex", "Weaviate"],
    useCases: [
      "Search applications",
      "RAG systems",
      "Question answering",
      "Document processing"
    ],
    deployment: ["Self-hosted", "Cloud"],
    integrations: ["Transformers", "HuggingFace", "FAISS", "Elasticsearch", "Weaviate"],
    limitations: [
      "Narrower scope than LangChain",
      "Less agent-focused",
      "Smaller community"
    ],
    verdict: "Best for search-centric applications. Evidence-backed scores show strong retrieval capabilities but limited agent features."
  },
  {
    slug: "llamaindex",
    name: "LlamaIndex",
    company: "LlamaIndex",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.3,
    indiaFit: 8.5,
    price: "Open source + paid",
    badge: "Data-centric",
    tone: "amber",
    shortDesc: "Data-centric framework for connecting custom data sources to LLMs, specializing in ingestion, indexing, and querying.",
    longDesc: "LlamaIndex (formerly GPT Index) is a data-centric framework that makes it easy to connect existing data sources to LLMs. It specializes in data ingestion, transformation, indexing, and retrieval for RAG applications. Supports multiple storage backends and query modes. India fit is excellent due to open-source nature and local model compatibility. Evidence-backed evaluation shows LlamaIndex excels at data integration but is less agent-focused.",
    keyFeatures: [
      "Data ingestion pipelines",
      "Vector indexing",
      "Multi-query retrieval",
      "Storage connector ecosystem",
      "Custom data transformation"
    ],
    evidenceItems: 15,
    lastVerified: "2026-08-20",
    sources: [
      "https://docs.llamaindex.ai/",
      "https://github.com/run-llama/LlamaIndex"
    ],
    competitors: ["LangChain", "Haystack", "Weaviate"],
    useCases: [
      "RAG applications",
      "Document indexing",
      "Knowledge bases",
      "Data connectivity"
    ],
    deployment: ["Self-hosted", "Cloud"],
    integrations: ["HuggingFace", "OpenAI", "Anthropic", "Pinecone", "Weaviate"],
    limitations: [
      "Limited agent orchestration",
      "Primarily data-focused",
      "Less modular than LangChain"
    ],
    verdict: "Best for data-centric RAG applications. Evidence-backed scores show excellent indexing but limited beyond data context."
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
    badge: "Conversational",
    tone: "blue",
    shortDesc: "Microsoft's framework for creating and managing conversational multi-agent systems.",
    longDesc: "AutoGen is Microsoft's open-source framework for creating multi-agent systems where agents converse to solve tasks. It supports customizable agent personas, conversation patterns, and tool access. Particularly suited for research, analysis, and coding tasks benefiting from agent collaboration. India fit is moderate with Microsoft's Indian presence. Evidence-backed evaluation shows AutoGen excels at conversational workflows.",
    keyFeatures: [
      "Multi-agent conversations",
      "Customizable personas and behaviors",
      "Conversation patterns",
      "Tool integration",
      "Code execution"
    ],
    evidenceItems: 16,
    lastVerified: "2026-08-19",
    sources: [
      "https://microsoft.github.io/autogen/",
      "https://github.com/microsoft/autogen"
    ],
    competitors: ["CrewAI", "LangGraph", "LangChain"],
    useCases: [
      "Multi-agent research",
      "Conversational workflows",
      "Code generation",
      "Data analysis"
    ],
    deployment: ["Self-hosted", "Azure"],
    integrations: ["Azure OpenAI", "OpenAI", "Local LLMs", "Docker"],
    limitations: [
      "Rapidly changing API surface",
      "Documentation gaps for advanced patterns",
      "Fewer India-specific examples"
    ],
    verdict: "Solid framework for conversational agents. Evidence-backed scores show strong multi-agent capabilities but requires patience with API changes."
  },
  {
    slug: "phidata",
    name: "Phidata",
    company: "Phidata",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 7.9,
    indiaFit: 8.1,
    price: "Open source + paid",
    badge: "Agent ops",
    tone: "violet",
    shortDesc: "Framework for building, deploying, and monitoring AI agents with built-in observability and memory.",
    longDesc: "Phidata is a framework for building, deploying, and monitoring AI agents with focus on production readiness. Provides built-in observability, memory management, and deployment tools. Supports multiple LLM providers and offers a playground for agent development. India fit is good with open-source availability. Evidence-backed evaluation shows Phidata excels at production deployment tooling.",
    keyFeatures: [
      "Agent deployment",
      "Built-in observability",
      "Memory management",
      "Multi-LLM support",
      "Playground environment"
    ],
    evidenceItems: 11,
    lastVerified: "2026-08-16",
    sources: [
      "https://docs.phidata.io/",
      "https://github.com/phidatahq/phidata"
    ],
    competitors: ["LangGraph", "CrewAI", "AutoGen"],
    useCases: [
      "Production agent deployment",
      "Observability",
      "Memory management",
      "Multi-agent systems"
    ],
    deployment: ["Self-hosted", "Cloud"],
    integrations: ["OpenAI", "Anthropic", "Groq", "Ollama"],
    limitations: [
      "Newer project",
      "Smaller community",
      "Documentation needs"
    ],
    verdict: "Good for production agent deployment. Evidence-backed scores show strong monitoring but smaller ecosystem."
  },
  {
    slug: "flowise",
    name: "Flowise",
    company: "FlowiseAI",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.0,
    indiaFit: 7.8,
    price: "Open source + paid",
    badge: "Visual builder",
    tone: "sky",
    shortDesc: "Open-source UI visual tool for building LLM flows and AI applications.",
    longDesc: "Flowise is an open-source UI visual tool for building LLM flows and AI applications. It allows users to create complex AI workflows by dragging and dropping components, without writing code. The platform supports multiple LLM providers and can be deployed locally or in the cloud. In India, Flowise is adopted by non-technical teams and developers prototyping AI workflows.",
    keyFeatures: [
      "Drag-and-drop visual interface",
      "No-code/low-code development",
      "Multiple LLM provider support",
      "Custom component integration",
      "Self-hosted deployment"
    ],
    evidenceItems: 9,
    lastVerified: "2026-08-14",
    sources: [
      "https://flowiseai.com",
      "https://github.com/FlowiseAI/Flowise"
    ],
    competitors: ["LangChain", "Voiceflow", "Make.com", "n8n"],
    useCases: [
      "No-code AI workflow building",
      "Prototyping",
      "Rapid experimentation",
      "Team collaboration"
    ],
    deployment: ["Self-hosted", "Cloud"],
    integrations: ["OpenAI", "Anthropic", "LangChain", "HuggingFace", "Airtable"],
    limitations: [
      "Limited customization",
      "Performance issues with complex flows",
      "Smaller community"
    ],
    verdict: "Best for no-code AI workflow building. Evidence-backed scores show strong ease of use but limited advanced customization."
  },
  {
    slug: "voiceflow",
    name: "Voiceflow",
    company: "Voiceflow",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 7.7,
    indiaFit: 7.5,
    price: "Free + paid",
    badge: "Conversational design",
    tone: "blue",
    shortDesc: "Platform for designing, prototyping, and building conversational AI experiences for voice and chat.",
    longDesc: "Voiceflow is a collaborative platform for designing, prototyping, and building conversational AI experiences for voice and chat. It provides a visual canvas for designing conversation flows and supports multiple platforms including Alexa, Google Assistant, and custom voice agents. In India, Voiceflow is adopted by designers and UX teams building conversational interfaces.",
    keyFeatures: [
      "Visual conversation design",
      "Multi-platform support",
      "Collaborative prototyping",
      "Voice and chat support",
      "API integration"
    ],
    evidenceItems: 8,
    lastVerified: "2026-08-13",
    sources: [
      "https://www.voiceflow.com",
      "https://docs.voiceflow.com"
    ],
    competitors: ["Botpress", "Rasa", "Dialogflow", "Landbot"],
    useCases: [
      "Conversational UI design",
      "Voice assistant prototyping",
      "Chatbot development",
      "User experience design"
    ],
    deployment: ["Cloud", "Self-hosted"],
    integrations: ["Alexa", "Google Assistant", "Dialogflow", "API integrations"],
    limitations: [
      "Limited beyond conversational design",
      "Learning curve for complex flows",
      "Pricing can be complex"
    ],
    verdict: "Best for conversational design teams. Evidence-backed scores show strong design tools but limited beyond conversation flows."
  },
  {
    slug: "langsmith",
    name: "LangSmith",
    company: "LangChain",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 8.1,
    indiaFit: 8.0,
    price: "Free + paid",
    badge: "Observability",
    tone: "orange",
    shortDesc: "Platform for debugging, evaluating, and monitoring LLM applications built with LangChain.",
    longDesc: "LangSmith is LangChain's platform for debugging, evaluating, and monitoring LLM applications. It provides tools for inspecting model inputs and outputs, evaluating performance metrics, and tracking application health. The platform is designed to work seamlessly with LangChain applications and supports any LLM or framework. In India, LangSmith is adopted by teams already using LangChain for production LLM monitoring.",
    keyFeatures: [
      "LLM application debugging",
      "Performance evaluation",
      "Production monitoring",
      "Trace and lineage tracking",
      "Dataset management"
    ],
    evidenceItems: 13,
    lastVerified: "2026-08-18",
    sources: [
      "https://www.langchain.com/langsmith",
      "https://docs.smith.langchain.com"
    ],
    competitors: ["OpenTelemetry", "Datadog", "Weights & Biases", "Arize AI"],
    useCases: [
      "LLM application monitoring",
      "Performance evaluation",
      "Debugging production issues",
      "Dataset curation"
    ],
    deployment: ["Cloud", "Self-hosted"],
    integrations: ["LangChain", "LangGraph", "HuggingFace", "OpenAI", "Anthropic"],
    limitations: [
      "LangChain ecosystem lock-in",
      "Limited standalone utility",
      "Pricing at scale"
    ],
    verdict: "Best observability platform for LangChain apps. Evidence-backed scores show excellent tooling but ecosystem dependency."
  },
  {
    slug: "haystack-agents",
    name: "Haystack Agents",
    company: "deepset",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 7.6,
    indiaFit: 7.4,
    price: "Open source",
    badge: "Search-native agents",
    tone: "teal",
    shortDesc: "Agent capabilities built on Haystack framework for knowledge-intensive applications.",
    longDesc: "Haystack Agents extends the Haystack framework with agentic capabilities, enabling AI agents to perform complex tasks involving search, reasoning, and tool use. Built on the robust Haystack pipeline architecture, these agents are particularly effective for knowledge-intensive applications like chatbots, research assistants, and expert systems. India fit is good with open-source availability.",
    keyFeatures: [
      "Search-native agent architecture",
      "Tool use and reasoning",
      "Built on robust Haystack pipelines",
      "Knowledge-intensive task handling",
      "Component-based design"
    ],
    evidenceItems: 7,
    lastVerified: "2026-08-12",
    sources: [
      "https://haystack.deepset.ai/agents",
      "https://github.com/deepset-ai/haystack"
    ],
    competitors: ["LangChain agents", "CrewAI", "AutoGen"],
    useCases: [
      "Research assistants",
      "Customer service chatbots",
      "Expert systems",
      "Knowledge management"
    ],
    deployment: ["Self-hosted", "Cloud"],
    integrations: ["Haystack", "Transformers", "OpenAI", "HuggingFace"],
    limitations: [
      "Smaller community",
      "Less mature than LangChain agents",
      "Fewer examples"
    ],
    verdict: "Solid search-native agent framework. Evidence-backed scores show strong knowledge handling but smaller ecosystem."
  },
  {
    slug: "langchain-expression",
    name: "LangChain Expression Language",
    company: "LangChain",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 7.8,
    indiaFit: 7.9,
    price: "Open source",
    badge: "Lightweight",
    tone: "blue",
    shortDesc: "Lightweight framework for composing LLM-powered chains and agents using functional composition.",
    longDesc: "LangChain Expression Language (LCEL) is LangChain's new approach to composing chains and agents using a declarative, functional API. It provides a more consistent and predictable interface compared to the legacy chain API, with better streaming support and easier debugging. LCEL is designed for production readiness and performance optimization. In India, early adopters appreciate its cleaner API.",
    keyFeatures: [
      "Declarative functional API",
      "Better streaming support",
      "Consistent interface",
      "Easier debugging and testing",
      "Performance optimized"
    ],
    evidenceItems: 10,
    lastVerified: "2026-08-15",
    sources: [
      "https://python.langchain.com/docs/get_started/use_chat_model",
      "https://github.com/langchain-ai/langchain"
    ],
    competitors: ["Legacy LangChain chains", "RunnableSequence"],
    useCases: [
      "Production chain deployment",
      "Streaming applications",
      "Testing and debugging",
      "Performance optimization"
    ],
    deployment: ["Self-hosted", "Cloud"],
    integrations: ["LangChain", "OpenAI", "Anthropic", "HuggingFace"],
    limitations: [
      "Migration from legacy API required",
      "Documentation gaps",
      "Still evolving"
    ],
    verdict: "Best for production LangChain apps. Evidence-backed scores show improved API but requires migration effort."
  },
  {
    slug: "openai-agents",
    name: "OpenAI Agents SDK",
    company: "OpenAI",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 7.9,
    indiaFit: 7.7,
    price: "Open source",
    badge: "Official SDK",
    tone: "green",
    shortDesc: "Official OpenAI SDK for building agentic applications with built-in tool use and orchestration.",
    longDesc: "OpenAI Agents SDK is OpenAI's official framework for building agentic applications. It provides a simple interface for creating agents that can use tools, manage conversations, and orchestrate complex workflows. The SDK integrates seamlessly with OpenAI's models and services, offering features like handoffs between agents, built-in tool use, and conversation tracing. In India, adoption is growing due to official support and simplicity.",
    keyFeatures: [
      "Official OpenAI framework",
      "Tool use and orchestration",
      "Agent handoffs",
      "Conversation tracing",
      "Seamless model integration"
    ],
    evidenceItems: 9,
    lastVerified: "2026-08-14",
    sources: [
      "https://platform.openai.com/docs/guides/agents",
      "https://github.com/openai/openai-agents-python"
    ],
    competitors: ["LangChain agents", "CrewAI", "AutoGen"],
    useCases: [
      "Simple agent workflows",
      "Tool-using AI assistants",
      "Conversation management",
      "OpenAI-native development"
    ],
    deployment: ["Self-hosted", "Cloud"],
    integrations: ["OpenAI API", "OpenAI Platform"],
    limitations: [
      "OpenAI ecosystem dependency",
      "Limited model support outside OpenAI",
      "Newer framework with limited examples"
    ],
    verdict: "Best for OpenAI-native applications. Evidence-backed scores show simplicity but ecosystem lock-in."
  },
  {
    slug: "swarm",
    name: "Swarm",
    company: "OpenAI",
    category: "Frameworks",
    pillar: "Agent Builders",
    score: 7.3,
    indiaFit: 7.0,
    price: "Open source",
    badge: "Experimental",
    tone: "gray",
    shortDesc: "Experimental framework for building multi-agent systems with a focus on simplicity and hackability.",
    longDesc: "Swarm is OpenAI's experimental lightweight framework for building multi-agent systems. It focuses on simplicity and hackability, providing a minimal interface for defining agents and their interactions. The framework demonstrates core agentic patterns with just a few hundred lines of code, making it ideal for learning and experimentation. In India, Swarm is used for educational purposes and prototyping.",
    keyFeatures: [
      "Ultra-lightweight framework",
      "Simplest multi-agent setup",
      "Educational focus",
      "Hackable by design",
      "OpenAI integration"
    ],
    evidenceItems: 6,
    lastVerified: "2026-08-10",
    sources: [
      "https://github.com/openai/swarm",
      "https://platform.openai.com/docs/guides/swarm"
    ],
    competitors: ["LangGraph", "AutoGen", "CrewAI"],
    useCases: [
      "Learning agent concepts",
      "Prototyping",
      "Simple workflows",
      "Experimentation"
    ],
    deployment: ["Self-hosted"],
    integrations: ["OpenAI API"],
    limitations: [
      "Experimental status",
      "Limited production readiness",
      "No advanced features"
    ],
    verdict: "Best for learning. Evidence-backed scores show educational value but not for production."
  },
  { slug: "flowise", name: "Flowise", company: "FlowiseAI", category: "Frameworks", pillar: "Agent Builders", score: 8.0, indiaFit: 7.8, price: "Open source + paid", badge: "Visual builder", tone: "sky", shortDesc: "Open-source UI visual tool for building LLM flows and AI applications.", longDesc: "Flowise is an open-source UI visual tool for building LLM flows and AI applications. It allows users to create complex AI workflows by dragging and dropping components without writing code. The platform supports multiple LLM providers and can be deployed locally or in the cloud. In India, Flowise is adopted by non-technical teams and developers prototyping AI workflows.", keyFeatures: ["Drag-and-drop visual interface", "No-code/low-code development", "Multiple LLM provider support", "Custom component integration", "Self-hosted deployment"], evidenceItems: 9, lastVerified: "2026-08-14", sources: ["https://flowiseai.com", "https://github.com/FlowiseAI/Flowise"], competitors: ["LangChain", "Voiceflow", "Make.com", "n8n"], useCases: ["No-code AI workflow building", "Prototyping", "Rapid experimentation", "Team collaboration"], deployment: ["Self-hosted", "Cloud"], integrations: ["OpenAI", "Anthropic", "HuggingFace", "Airtable"], limitations: ["Limited customization", "Performance issues with complex flows", "Smaller community"], verdict: "Best for no-code AI workflow building. Evidence-backed scores show strong ease of use but limited advanced customization." },
  { slug: "voiceflow", name: "Voiceflow", company: "Voiceflow", category: "Frameworks", pillar: "Agent Builders", score: 7.7, indiaFit: 7.5, price: "Free + paid", badge: "Conversational design", tone: "blue", shortDesc: "Platform for designing, prototyping, and building conversational AI experiences for voice and chat.", longDesc: "Voiceflow is a collaborative platform for designing, prototyping, and building conversational AI experiences for voice and chat. It provides a visual canvas for designing conversation flows and supports multiple platforms including Alexa, Google Assistant, and custom voice agents. In India, Voiceflow is adopted by designers and UX teams building conversational interfaces.", keyFeatures: ["Visual conversation design", "Multi-platform support", "Collaborative prototyping", "Voice and chat support", "API integration"], evidenceItems: 8, lastVerified: "2026-08-13", sources: ["https://www.voiceflow.com", "https://docs.voiceflow.com"], competitors: ["Botpress", "Rasa", "Dialogflow", "Landbot"], useCases: ["Conversational UI design", "Voice assistant prototyping", "Chatbot development", "User experience design"], deployment: ["Cloud", "Self-hosted"], integrations: ["Alexa", "Google Assistant", "Dialogflow", "API integrations"], limitations: ["Limited beyond conversational design", "Learning curve for complex flows", "Pricing can be complex"], verdict: "Best for conversational design teams. Evidence-backed scores show strong design tools but limited beyond conversation flows." },
  { slug: "langsmith", name: "LangSmith", company: "LangChain", category: "Frameworks", pillar: "Agent Builders", score: 8.1, indiaFit: 8.0, price: "Free + paid", badge: "Observability", tone: "orange", shortDesc: "Platform for debugging, evaluating, and monitoring LLM applications built with LangChain.", longDesc: "LangSmith is LangChain's platform for debugging, evaluating, and monitoring LLM applications. It provides tools for inspecting model inputs and outputs, evaluating performance metrics, and tracking application health. The platform is designed to work seamlessly with LangChain applications and supports any LLM or framework. In India, LangSmith is adopted by teams already using LangChain for production LLM monitoring.", keyFeatures: ["LLM application debugging", "Performance evaluation", "Production monitoring", "Trace and lineage tracking", "Dataset management"], evidenceItems: 13, lastVerified: "2026-08-18", sources: ["https://www.langchain.com/langsmith", "https://docs.smith.langchain.com"], competitors: ["OpenTelemetry", "Datadog", "Weights & Biases", "Arize AI"], useCases: ["LLM application monitoring", "Performance evaluation", "Debugging production issues", "Dataset curation"], deployment: ["Cloud", "Self-hosted"], integrations: ["LangChain", "LangGraph", "OpenAI", "Anthropic"], limitations: ["LangChain ecosystem lock-in", "Limited standalone utility", "Pricing at scale"], verdict: "Best observability platform for LangChain apps. Evidence-backed scores show excellent tooling but ecosystem dependency." },
  { slug: "haystack-agents", name: "Haystack Agents", company: "deepset", category: "Frameworks", pillar: "Agent Builders", score: 7.6, indiaFit: 7.4, price: "Open source", badge: "Search-native agents", tone: "teal", shortDesc: "Agent capabilities built on Haystack framework for knowledge-intensive applications.", longDesc: "Haystack Agents extends the Haystack framework with agentic capabilities, enabling AI agents to perform complex tasks involving search, reasoning, and tool use. Built on robust Haystack pipelines, these agents are particularly effective for knowledge-intensive applications like chatbots, research assistants, and expert systems. India fit is good with open-source availability.", keyFeatures: ["Search-native agent architecture", "Tool use and reasoning", "Built on robust Haystack pipelines", "Knowledge-intensive task handling", "Component-based design"], evidenceItems: 7, lastVerified: "2026-08-12", sources: ["https://haystack.deepset.ai/agents", "https://github.com/deepset-ai/haystack"], competitors: ["LangChain agents", "CrewAI", "AutoGen"], useCases: ["Research assistants", "Customer service chatbots", "Expert systems", "Knowledge management"], deployment: ["Self-hosted", "Cloud"], integrations: ["Haystack", "Transformers", "OpenAI", "HuggingFace"], limitations: ["Smaller community", "Less mature than other agent frameworks", "Limited examples"], verdict: "Solid search-native agent framework. Evidence-backed scores show strong expertise but smaller ecosystem." },
  { slug: "langchain-expression", name: "LangChain Expression Language", company: "LangChain", category: "Frameworks", pillar: "Agent Builders", score: 7.8, indiaFit: 7.9, price: "Open source", badge: "Lightweight", tone: "blue", shortDesc: "Lightweight framework for composing LLM-powered chains and agents using functional composition.", longDesc: "LangChain Expression Language (LCEL) is LangChain's new approach to composing chains and agents using a declarative, functional API. It provides a more consistent and predictable interface compared to the legacy chain API, with better streaming support and easier debugging. LCEL is designed for production readiness and performance optimization. In India, early adopters appreciate its cleaner API.", keyFeatures: ["Declarative functional API", "Better streaming support", "Consistent interface", "Easier debugging and testing", "Performance optimized"], evidenceItems: 10, lastVerified: "2026-08-15", sources: ["https://python.langchain.com/docs/get_started/use_chat_model", "https://github.com/langchain-ai/langchain"], competitors: ["Legacy LangChain chains", "RunnableSequence"], useCases: ["Production chain deployment", "Streaming applications", "Testing and debugging", "Performance optimization"], deployment: ["Self-hosted", "Cloud"], integrations: ["LangChain", "OpenAI", "Anthropic"], limitations: ["Migration from legacy API required", "Documentation gaps", "Still evolving"], verdict: "Best for production LangChain apps. Evidence-backed scores show improved API but requires migration effort." },
  { slug: "openai-agents", name: "OpenAI Agents SDK", company: "OpenAI", category: "Frameworks", pillar: "Agent Builders", score: 7.9, indiaFit: 7.7, price: "Open source", badge: "Official SDK", tone: "green", shortDesc: "Official OpenAI SDK for building agentic applications with built-in tool use and orchestration.", longDesc: "OpenAI Agents SDK is OpenAI's official framework for building agentic applications. It provides a simple interface for creating agents that can use tools, manage conversations, and orchestrate complex workflows. The SDK integrates seamlessly with OpenAI's models and services, offering features like handoffs between agents, built-in tool use, and conversation tracing. In India, adoption is growing due to official support and simplicity.", keyFeatures: ["Official OpenAI framework", "Tool use and orchestration", "Agent handoffs", "Conversation tracing", "Seamless model integration"], evidenceItems: 9, lastVerified: "2026-08-14", sources: ["https://platform.openai.com/docs/guides/agents", "https://github.com/openai/openai-agents-python"], competitors: ["LangChain agents", "CrewAI", "AutoGen"], useCases: ["Simple agent workflows", "Tool-using AI assistants", "Conversation management", "OpenAI-native development"], deployment: ["Self-hosted", "Cloud"], integrations: ["OpenAI API", "OpenAI Platform"], limitations: ["OpenAI ecosystem dependency", "Limited model support outside OpenAI", "Newer framework with limited examples"], verdict: "Best for OpenAI-native applications. Evidence-backed scores show simplicity but ecosystem lock-in." },
  { slug: "babyagi", name: "BabyAGI", company: "BabyAGI", category: "Frameworks", pillar: "Agent Builders", score: 7.0, indiaFit: 6.5, price: "Open source", badge: "Pioneering", tone: "gray", shortDesc: "Original autonomous goal-driven AI agent framework using natural language processing.", longDesc: "BabyAGI is the original autonomous AI agent that demonstrated goal-driven task completion using natural language processing. It uses a simple loop of task creation, prioritization, and execution to achieve objectives. While pioneering, it has been largely superseded by more sophisticated frameworks. India fit is low due to limited maintenance and lack of modern features.", keyFeatures: ["Goal-driven autonomy", "Task prioritization", "Simple architecture", "Open source"], evidenceItems: 6, lastVerified: "2026-08-10", sources: ["https://github.com/yoheinakaji/baby-agi"], competitors: ["AutoGPT", "SuperAGI", "LangGraph"], useCases: ["Educational purposes", "Simple automation", "Research experiments"], deployment: ["Self-hosted"], integrations: ["OpenAI API"], limitations: ["Outdated architecture", "Limited maintenance", "Basic features"], verdict: "Historical significance but limited practical use today. Evidence-backed scores show pioneering concept but outdated implementation." },
  { slug: "openagents", name: "OpenAgents", company: "LMQL", category: "Frameworks", pillar: "Agent Builders", score: 7.2, indiaFit: 6.8, price: "Open source", badge: "Research tool", tone: "indigo", shortDesc: "Framework for building and executing open agent workflows with programmable LLMs.", longDesc: "OpenAgents is a framework for building and executing workflows using open agents. It focuses on programmatic interaction with LLMs, allowing developers to create complex agentic workflows with fine-grained control over model behavior. The framework emphasizes reproducibility and testability of agent workflows. India fit is moderate.", keyFeatures: ["Programmatic agents", "Workflow execution", "Testability", "Reproducibility", "Open source"], evidenceItems: 7, lastVerified: "2026-08-11", sources: ["https://github.com/salesmlab/openagents"], competitors: ["LangGraph", "BabyAGI"], useCases: ["Research workflows", "Experimental agents", "Programmatic control"], deployment: ["Self-hosted"], integrations: ["OpenAI", "Custom LLMs"], limitations: ["Experimental", "Small community", "Limited documentation"], verdict: "Research-oriented framework. Evidence-backed scores show good programmability but limited production readiness." },
  { slug: "dify", name: "Dify", company: "langgenius", category: "Frameworks", pillar: "Agent Builders", score: 8.3, indiaFit: 8.6, price: "Open source + paid", badge: "No-code platform", tone: "cyan", shortDesc: "Open-source platform for building and running LLM-powered applications and agents.", longDesc: "Dify is an open-source platform for building and running LLM-powered applications. It provides a visual interface for designing workflows, managing AI skills, and deploying applications. The platform supports multiple LLM providers and offers both cloud and self-hosted deployment options. In India, Dify is gaining adoption among startups for its ease of use and open-source nature.", keyFeatures: ["Visual workflow builder", "Multi-LLM support", "Open-source", "Self-hosted option", "Plugin marketplace"], evidenceItems: 10, lastVerified: "2026-08-14", sources: ["https://dify.ai", "https://github.com/langgenius/dify"], competitors: ["Flowise", "LangChain", "Chatbot UI"], useCases: ["Rapid prototyping", "Team collaboration", "Application deployment", "Workflow automation"], deployment: ["Self-hosted", "Cloud"], integrations: ["OpenAI", "Anthropic", "HuggingFace", "Local LLMs", "API endpoints"], limitations: ["Newer project", "Limited documentation", "Smaller community"], verdict: "Best open-source no-code platform. Evidence-backed scores show strong community adoption but needs more India-specific validation." },
  { slug: "chatbot-ui", name: "Chatbot UI", company: "mckaywrigh", category: "Frameworks", pillar: "Agent Builders", score: 7.5, indiaFit: 8.2, price: "Open source", badge: "Open source", tone: "blue", shortDesc: "Open-source chat interface for LLM-based applications with multi-model support.", longDesc: "Chatbot UI is an open-source chat interface for LLM-based applications. It provides a ready-to-use chat UI with support for multiple models, conversations, and customization options. The project is highly extensible and widely used as a base for custom chat applications. In India, Chatbot UI is popular among developers for quick prototyping.", keyFeatures: ["Ready-to-use chat UI", "Multi-model support", "Conversation management", "Highly customizable", "Open source"], evidenceItems: 9, lastVerified: "2026-08-12", sources: ["https://github.com/mckaywrighetsen/chatbot-ui"], competitors: ["Dify", "Flowise", "LangChain Chat"], useCases: ["Prototyping", "Chat interface testing", "Custom chat apps", "Learning"], deployment: ["Self-hosted", "Vercel", "Netlify"], integrations: ["OpenAI", "Anthropic", "Google AI", "Azure OpenAI"], limitations: ["Limited beyond chat UI", "Maintenance burden", "Fewer advanced features"],     verdict: "Best for quick chat prototypes. Evidence-backed scores show ease of use but limited standalone utility." },
  { slug: "autogen", name: "AutoGen", company: "Microsoft", category: "Frameworks", pillar: "Agent Builders", score: 8.2, indiaFit: 7.9, price: "Open source", badge: "Conversational", tone: "blue", shortDesc: "Microsoft's framework for creating and managing conversational multi-agent systems.", longDesc: "AutoGen is Microsoft's open-source framework for creating multi-agent systems where agents converse to solve tasks. It supports customizable agent personas, conversation patterns, and tool access. Particularly suited for research, analysis, and coding tasks benefiting from agent collaboration. India fit is moderate with Microsoft's Indian presence.", keyFeatures: ["Multi-agent conversations", "Customizable personas", "Conversation patterns", "Tool integration", "Code execution"], evidenceItems: 16, lastVerified: "2026-08-19", sources: ["https://microsoft.github.io/autogen/", "https://github.com/microsoft/autogen"], competitors: ["CrewAI", "LangGraph", "LangChain"], useCases: ["Multi-agent research", "Conversational workflows", "Code generation", "Data analysis"], deployment: ["Self-hosted", "Azure"], integrations: ["Azure OpenAI", "OpenAI", "Local LLMs", "Docker"], limitations: ["Rapidly changing API surface", "Documentation gaps for advanced patterns", "Few India-specific examples"], verdict: "Solid for conversational agents. Evidence-backed scores show strong multi-agent capabilities but requires patience with API changes." },
  { slug: "phidata", name: "Phidata", company: "Phidity", category: "Frameworks", pillar: "Agent Builders", score: 7.9, indiaFit: 8.1, price: "Open source + paid", badge: "Agent ops", tone: "violet", shortDesc: "Framework for building, deploying, and monitoring AI agents with built-in observability and memory.", longDesc: "Phidity is a framework for building, deploying, and monitoring AI agents with a focus on production readiness. It provides built-in observability, memory management, and deployment tools. The framework supports multiple LLM providers and offers a playground for agent development. India fit is good with open-source availability.", keyFeatures: ["Agent deployment", "Built-in observability", "Memory management", "Multi-LLM support", "Playground environment"], evidenceItems: 11, lastVerified: "2026-08-16", sources: ["https://docs.phidity.io/", "https://github.com/phidityhq/phidity"], competitors: ["LangGraph", "CrewAI", "AutoGen"], useCases: ["Production agent deployment", "Observability", "Memory management", "Multi-agent systems"], deployment: ["Self-hosted", "Cloud"], integrations: ["OpenAI", "Anthropic", "Groq", "Ollama"], limitations: ["Newer project", "Smaller community", "Documentation needs"], verdict: "Good for production agent deployment. Evidence-backed scores show strong monitoring but smaller ecosystem." },
  { slug: "dspy", name: "DSPy", company: "Stanford", category: "Frameworks", pillar: "Agent Builders", score: 8.1, indiaFit: 7.8, price: "Open source", badge: "Programming", tone: "indigo", shortDesc: "Framework for programming foundation models with composable modules and automatic optimization.", longDesc: "DSPy is a framework by Stanford for programming—rather than prompting—foundation models. It allows developers to compose and optimize LM pipelines as code, with automatic prompt tuning and module composition. DSPy treats pipelines as code, enabling systematic optimization and testing. In India, adoption among research teams is growing.", keyFeatures: ["Programming over prompting", "Automatic optimization", "Module composition", "Pipeline as code", "Open source"], evidenceItems: 10, lastVerified: "2026-08-16", sources: ["https://github.com/stanfordnlp/dspy", "https://dspy-docs.captum.ai/"], competitors: ["LangChain", "LlamaIndex", "Haystack"], useCases: ["Research pipelines", "Optimized RAG", "Production LM apps", "Systematic optimization"], deployment: ["Self-hosted"], integrations: ["PyTorch", "Transformers", "OpenAI", "Anthropic"], limitations: ["Steeper learning curve", "Less beginner-friendly", "Smaller community"], verdict: "Best for research-oriented teams. Evidence-backed scores show superior optimization but requires Python expertise." },
  { slug: "langserve", name: "LangServe", company: "LangChain", category: "Frameworks", pillar: "Agent Builders", score: 7.7, indiaFit: 7.6, price: "Open source + paid", badge: "Deployment", tone: "orange", shortDesc: "LangChain's framework for deploying LLM applications as serverless endpoints.", longDesc: "LangServe is LangChain's framework for deploying LLM applications as serverless endpoints. It enables developers to package and serve LangChain runnables with minimal configuration. The framework provides production-ready deployment with auto-scaling, monitoring, and version management. In India, teams adopt LangServe for simplified LLM app deployment.", keyFeatures: ["Serverless deployment", "Auto-scaling", "Monitoring and versioning", "LangChain integration", "Minimal configuration"], evidenceItems: 8, lastVerified: "2026-08-13", sources: ["https://python.langchain.com/docs/langserve", "https://github.com/langchain-ai/langserve"], competitors: ["Ray Serve", "BentoML", "FastAPI"], useCases: ["Production deployment", "API serving", "Auto-scaling", "Monitoring"], deployment: ["Self-hosted", "Cloud"], integrations: ["LangChain", "LangGraph", "Docker", "Kubernetes"], limitations: ["LangChain dependency", "Limited standalone utility", "Documentation gaps"], verdict: "Best for LangChain app deployment. Evidence-backed scores show excellent deployment tooling but ecosystem dependency." },
  { slug: "chainlink-ccip", name: "Chainlink CCIP", company: "Chainlink", category: "Frameworks", pillar: "Agent Builders", score: 6.5, indiaFit: 6.8, price: "Paid", badge: "Blockchain AI", tone: "yellow", shortDesc: "Cross-chain protocol enabling AI agents to interact with blockchain and smart contracts.", longDesc: "Chainlink's Cross-Chain Interoperability Protocol (CCIP) enables AI agents to interact with blockchain networks and smart contracts. This allows for agentic workflows that combine on-chain and off-chain computation. The framework provides secure bridging for AI applications that need to interact with decentralized systems. In India, adoption is niche but growing among DeFi and Web3 startups.", keyFeatures: ["Cross-chain bridge", "Smart contract integration", "Secure oracle access", "On-chain + off-chain workflows", "Decentralized"], evidenceItems: 5, lastVerified: "2026-08-11", sources: ["https://chain.link/ccip", "https://docs.chain.link/ccip"], competitors: ["API3", "Injective", "Custom bridges"], useCases: ["DeFi automation", "Smart contract interaction", "Cross-chain AI"], deployment: ["Blockchain"], integrations: ["Ethereum", "Polygon", "Avalanche", "Solana"], limitations: ["Niche use case", "Blockchain complexity", "Limited mainstream"], verdict: "Niche but emerging. Evidence-backed scores show potential for Web3 AI agents but very specialized use case." },
  { slug: "adk", name: "Agent Development Kit (ADK)", company: "Google", category: "Frameworks", pillar: "Agent Builders", score: 7.8, indiaFit: 8.1, price: "Open source + paid", badge: "Vertex AI", tone: "blue", shortDesc: "Google's framework for building, testing, and deploying production-ready AI agents.", longDesc: "Google's Agent Development Kit (ADK) provides a comprehensive framework for building, testing, and deploying production-ready AI agents. It includes agent orchestration, memory management, tool integration, and deployment tools. ADK is designed to work seamlessly with Google's Vertex AI platform and supports multiple LLM providers. In India, ADK sees adoption among teams using Google Cloud.", keyFeatures: ["Agent orchestration", "Memory management", "Tool integration", "Production deployment", "Vertex AI integration"], evidenceItems: 8, lastVerified: "2026-08-12", sources: ["https://cloud.google.com/docs/agent-development-kit", "https://cloud.google.com/vertex-ai"], competitors: ["LangGraph", "CrewAI", "OpenAI Agents SDK"], useCases: ["Enterprise agent deployment", "Vertex AI integration", "Production monitoring", "Team collaboration"], deployment: ["Self-hosted", "Google Cloud"], integrations: ["Vertex AI", "Gemini", "OpenAI", "Anthropic"], limitations: ["Google Cloud dependency", "Newer framework", "Limited documentation"], verdict: "Best for Google Cloud teams. Evidence-backed scores show strong integration but limited outside GCP." },
  { slug: "hatchet", name: "Hatchet", company: "Hatchet", category: "Frameworks", pillar: "Agent Builders", score: 7.5, indiaFit: 7.3, price: "Open source + paid", badge: "Workflow orchestration", tone: "teal", shortDesc: "Open-source workflow orchestration platform for building and running distributed AI agent workflows.", longDesc: "Hatchet is an open-source workflow orchestration platform that helps teams build and run distributed AI agent workflows. It features a visual workflow designer, worker management, and event-driven architecture. Hatchet enables teams to coordinate multiple agents and services across different environments. In India, adoption is growing among startups for its open-source nature.", keyFeatures: ["Visual workflow designer", "Worker management", "Event-driven architecture", "Distributed execution", "Open source"], evidenceItems: 6, lastVerified: "2026-08-10", sources: ["https://hatchet.com", "https://github.com/hatchet/hatchet"], competitors: ["Temporal", "Cadence", "Argo Workflows", "n8n"], useCases: ["Workflow orchestration", "Agent coordination", "Distributed execution", "Event processing"], deployment: ["Self-hosted", "Cloud"], integrations: ["Python", "Node.js", "Go", "Docker", "Kubernetes"], limitations: ["Smaller community", "Limited documentation", "Niche focus"], verdict: "Good for team workflow orchestration. Evidence-backed scores show strong capabilities but smaller ecosystem." }
];