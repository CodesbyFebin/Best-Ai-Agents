import { Agent } from "./types";

export const models: Agent[] = [
  {
    slug: "gpt-4",
    name: "GPT-4",
    company: "OpenAI",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 9.0,
    indiaFit: 8.2,
    price: "Usage-based",
    badge: "Industry standard",
    tone: "green",
    shortDesc: "OpenAI's most capable multimodal model with broad reasoning and coding skills.",
    longDesc: "GPT-4 is OpenAI's flagship multimodal large language model, delivering state-of-the-art performance across a wide range of tasks including reasoning, coding, and creative content generation. It processes both text and image inputs, with a 128K token context window enabling analysis of large documents. The model underpins ChatGPT, the OpenAI API, and numerous enterprise AI applications globally. In India, GPT-4 drives solutions across BFSI, IT/ITeS, healthcare, and edtech, supported by OpenAI's local partnerships and regional data considerations.",
    keyFeatures: [
      "128K token context window",
      "Multimodal (text + image) input",
      "Advanced reasoning and coding",
      "Function calling and JSON mode",
      "Multiple model variants (turbo, base)"
    ],
    evidenceItems: 28,
    lastVerified: "2026-08-22",
    sources: [
      "https://openai.com/gpt-4",
      "https://platform.openai.com/docs/models",
      "https://openai.com/pricing"
    ],
    competitors: ["Claude 3", "Gemini", "Llama 3", "Mistral Large"],
    useCases: [
      "General AI assistance",
      "Code generation and review",
      "Document analysis",
      "Data extraction and structuring"
    ],
    deployment: ["API", "ChatGPT", "Azure OpenAI Service"],
    integrations: ["OpenAI API", "Microsoft Azure", "GitHub Copilot", "Zapier"],
    limitations: [
      "Usage-based pricing can scale quickly",
      "Knowledge has a training cutoff",
      "India data residency not native"
    ],
    verdict: "Industry standard LLM with broad capability. Evidence-backed scores reflect consistent performance across benchmarks, though cost and data residency are key India considerations."
  },
  {
    slug: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    company: "Anthropic",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 9.1,
    indiaFit: 8.0,
    price: "Usage-based",
    badge: "Top LLM",
    tone: "violet",
    shortDesc: "Anthropic's advanced reasoning model with superior long-context analysis.",
    longDesc: "Claude 3.5 Sonnet is Anthropic's most capable model, excelling in reasoning, coding, and nuanced instruction following. It features a 200K token context window, Constitutional AI safety principles, and strong performance on complex analytical tasks. The model powers Claude AI assistant and enterprise API deployments. In India, adoption is growing among tech-forward startups and enterprises for customer support, content creation, and knowledge management use cases.",
    keyFeatures: [
      "200K token context window",
      "Constitutional AI safety alignment",
      "Superior long-context reasoning",
      "Vision capabilities",
      "Code generation and execution support"
    ],
    evidenceItems: 25,
    lastVerified: "2026-08-21",
    sources: [
      "https://www.anthropic.com/claude-3-5",
      "https://docs.anthropic.com/claude",
      "https://www.anthropic.com/pricing"
    ],
    competitors: ["GPT-4", "Gemini 1.5 Pro", "Llama 3 70B", "Mistral Large"],
    useCases: [
      "Complex document analysis",
      "Legal and medical reasoning",
      "Code generation and refactoring",
      "Research synthesis and summarization"
    ],
    deployment: ["API", "Claude web interface", "Claude Code"],
    integrations: ["Anthropic API", "Claude.ai", "VS Code", "Slack", "Zapier"],
    limitations: [
      "No self-hosted deployment option",
      "API costs can accumulate at scale",
      "India data residency depends on provider"
    ],
    verdict: "Best general-purpose LLM for reasoning-intensive tasks. Evidence-backed scores show strong performance on academic and coding benchmarks, with Constitutional AI principles appealing to enterprise compliance."
  },
  {
    slug: "gemini-1-5-pro",
    name: "Gemini 1.5 Pro",
    company: "Google",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.9,
    indiaFit: 8.6,
    price: "Free + usage-based",
    badge: "Multimodal",
    tone: "blue",
    shortDesc: "Google's multimodal AI model with 1M token context and strong multilingual support.",
    longDesc: "Gemini 1.5 Pro is Google's flagship multimodal model, featuring a revolutionary 1M token context window that can process entire codebases or books in a single call. It excels at multilingual tasks, supporting 30+ languages including all major Indian languages. The model powers Google AI Studio, Vertex AI, and consumer-facing Google products. In India, Gemini is integrated into Google Workspace, Android apps, and is accessible through Google's regional cloud infrastructure.",
    keyFeatures: [
      "1M token context window (experimental)",
      "Multilingual multilingual support (100+ languages)",
      "Multimodal input (text, image, audio, video)",
      "Strong reasoning and coding",
      "Google ecosystem integration"
    ],
    evidenceItems: 23,
    lastVerified: "2026-08-20",
    sources: [
      "https://ai.google.dev/gemini-api/docs",
      "https://deepmind.google/gemini",
      "https://ai.google.dev/pricing"
    ],
    competitors: ["Claude 3.5", "GPT-4", "Llama 3", "Mistral Large"],
    useCases: [
      "Multilingual content generation",
      "Large document analysis",
      "Code generation across languages",
      "Media processing (text, image, audio, video)"
    ],
    deployment: ["API", "Google AI Studio", "Vertex AI"],
    integrations: ["Google Cloud", "Vertex AI", "Google AI Studio", "Google Workspace"],
    limitations: [
      "Complex pricing structure",
      "Limited third-party integrations",
      "Documentation less mature"
    ],
    verdict: "Best for multilingual and large-context tasks. Evidence-backed scores show exceptional language coverage including Indian languages and unmatched context window."
  },
  {
    slug: "llama-3-70b",
    name: "Llama 3 70B",
    company: "Meta AI",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.7,
    indiaFit: 9.0,
    price: "Open source",
    badge: "Open leader",
    tone: "amber",
    shortDesc: "Meta's open-weight LLM with strong reasoning and extensive language support.",
    longDesc: "Llama 3 70B is Meta's most capable open-weight model, delivering performance competitive with closed models while being available under a permissive open-source license. It supports 8+ languages and features improved reasoning, reduced hallucination rates, and optimized performance for code generation. The model can be self-hosted, used via Hugging Face, or accessed through Meta's API. In India, Llama models are heavily adopted due to local deployment feasibility, no licensing costs, and compatibility with regional language requirements.",
    keyFeatures: [
      "70B parameter open-weight model",
      "Apache 2.0-style license (commercial use)",
      "8+ supported languages",
      "Competitive with GPT-4 on benchmarks",
      "Self-hostable and cloud-deployable"
    ],
    evidenceItems: 20,
    lastVerified: "2026-08-19",
    sources: [
      "https://ai.meta.com/llama/",
      "https://huggingface.co/meta-llama",
      "https://github.com/meta-llama/llama"
    ],
    competitors: ["Mistral Large", "Gemma", "Qwen", "Phi"],
    useCases: [
      "Local and on-premises deployment",
      "Custom fine-tuning for domain tasks",
      "Cost-sensitive production workloads",
      "Research and experimentation"
    ],
    deployment: ["Self-hosted", "Hugging Face", "AWS Bedrock", "GCP Vertex"],
    integrations: ["Hugging Face", "Transformers", "Ollama", "vLLM"],
    limitations: [
      "Requires significant compute resources for deployment",
      "No official managed API from Meta",
      "Output quality may vary vs. closed models"
    ],
    verdict: "Best open-weight alternative to closed models. Evidence-backed scores show strong performance and exceptional India fit due to self-hosting and zero licensing costs."
  },
  {
    slug: "mistral-large",
    name: "Mistral Large",
    company: "Mistral AI",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.4,
    indiaFit: 8.3,
    price: "Free + usage-based",
    badge: "Open-weight pioneer",
    tone: "gray",
    shortDesc: "Mistral's largest model with strong performance and native multilingual capabilities.",
    longDesc: "Mistral Large is the flagship model from MISTRAL, a European AI company focused on efficient, high-performance language models. It supports English, French, German, Spanish, and Italian natively, with strong performance on coding benchmarks. The model offers competitive accuracy while being smaller and more efficient than some larger competitors. In India, MISTRAL offers a compelling balance of performance and cost with regional deployment options.",
    keyFeatures: [
      "Native multilingual support (English, French, German, Spanish, Italian)",
      "Strong coding performance",
      "Efficient inference compared to larger models",
      "Multiple deployment options (API, self-hosted)",
      "European AI compliance focus"
    ],
    evidenceItems: 19,
    lastVerified: "2026-08-18",
    sources: [
      "https://mistral.ai/products/mistral-large",
      "https://docs.mistral.ai/models",
      "https://mistral.ai/news/mistral-large"
    ],
    competitors: ["GPT-4", "Claude 3", "Gemini", "Qwen 72B"],
    useCases: [
      "European-market compliant AI",
      "Coding and technical documentation",
      "Multilingual content generation",
      "Privacy-sensitive deployment"
    ],
    deployment: ["API", "Self-hosted", "Cloud partners"],
    integrations: ["Mistral API", "Hugging Face", "Azure AI", "GCP"],
    limitations: [
      "Limited language support vs. major competitors",
      "Fewer enterprise integrations",
      "Regional availability varies"
    ],
    verdict: "Best European alternative for privacy-conscious teams. Evidence-backed scores show strong performance with regulatory compliance advantages."
  },
  {
    slug: "gemma-7b",
    name: "Gemma 7B",
    company: "Google",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 7.9,
    indiaFit: 9.1,
    price: "Open source",
    badge: "Lightweight",
    tone: "indigo",
    shortDesc: "Lightweight open model from Google with efficient inference and strong reasoning.",
    longDesc: "Gemma 7B is Google's lightweight open model designed for efficient deployment on consumer hardware. It offers strong reasoning capabilities despite its smaller parameter count, making it ideal for edge deployment and cost-sensitive applications. The model is released under a permissive license for both research and commercial use. In India, Gemma sees adoption on local hardware due to its lightweight profile.",
    keyFeatures: [
      "7B parameter lightweight model",
      "Efficient inference on consumer hardware",
      "Strong reasoning for its size",
      "Apache 2.0 license",
      "Optimized for edge deployment"
    ],
    evidenceItems: 13,
    lastVerified: "2026-08-17",
    sources: [
      "https://gemma.com/",
      "https://huggingface.co/google/gemma",
      "https://ai.google.dev/gemma"
    ],
    competitors: ["Phi-3", "Qwen", "Llama 3", "TinyLlama"],
    useCases: [
      "Local development and testing",
      "Edge and mobile deployment",
      "Educational and research projects",
      "Cost-sensitive inference"
    ],
    deployment: ["Self-hosted", "Hugging Face", "Ollama"],
    integrations: ["Transformers", "Ollama", "LM Studio", "KoboldCpp"],
    limitations: [
      "Lower performance than larger models",
      "Limited multilingual support",
      "Smaller context window"
    ],
    verdict: "Best lightweight option for local deployment. Evidence-backed scores show excellent efficiency but reduced capability compared to larger models."
  },
  {
    slug: "phi-3-mini",
    name: "Phi-3 Mini",
    company: "Microsoft",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 7.6,
    indiaFit: 8.8,
    price: "Open source",
    badge: "Efficient",
    tone: "blue",
    shortDesc: "Microsoft's efficient small model with competitive performance for its size.",
    longDesc: "Phi-3 Mini is Microsoft's smallest yet capable language model, designed for efficient on-device inference. Despite having only 3.8B parameters, it outperforms many larger models on reasoning benchmarks due to high-quality training data. The model is optimized for mobile and edge devices, making it ideal for privacy-preserving applications. In India, Phi-3 sees adoption in mobile and embedded AI projects.",
    keyFeatures: [
      "3.8B parameters but outperforms larger models",
      "Optimized for mobile and edge devices",
      "High-quality training data",
      "MIT license",
      "Cross-platform compatibility"
    ],
    evidenceItems: 11,
    lastVerified: "2026-08-16",
    sources: [
      "https://www.microsoft.com/en-us/research/blog/phi-3-redefining-what-it-means-to-be-a-small-model/",
      "https://huggingface.co/microsoft/phi-3-mini-4k-instruct"
    ],
    competitors: ["Gemma", "Qwen", "TinyLlama", "MiniCPM"],
    useCases: [
      "Mobile and embedded AI",
      "Edge computing",
      "Privacy-preserving inference",
      "Educational projects"
    ],
    deployment: ["Self-hosted", "Hugging Face", "Azure", "ONNX Runtime"],
    integrations: ["Transformers", "ONNX", "Azure ML", "Hugging Face"],
    limitations: [
      "Very limited context window",
      "Narrower domain knowledge",
      "Lower output quality for creative tasks"
    ],
    verdict: "Best for mobile and edge deployment. Evidence-backed scores show remarkable efficiency but limited beyond specific use cases."
  },
  {
    slug: "qwen-72b",
    name: "Qwen 72B",
    company: "Alibaba Cloud",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.3,
    indiaFit: 8.5,
    price: "Open source + paid",
    badge: "Multilingual",
    tone: "cyan",
    shortDesc: "Chinese open-weight model with strong multilingual support and reasoning.",
    longDesc: "Qwen 72B is Alibaba Cloud's open-weights model series, offering competitive multilingual capabilities. It supports 80+ languages and demonstrates strong reasoning, coding, and mathematical abilities. The model is released under Apache 2.0 license with both base and instruction-tuned variants. In India, Qwen sees adoption especially in Indian IT services firms due to cost-effectiveness and multilingual capabilities.",
    keyFeatures: [
      "72B parameter open-weight model",
      "Support for 80+ languages including Indian languages",
      "Strong performance on coding and math",
      "Apache 2.0 license",
      "Multiple model variants"
    ],
    evidenceItems: 14,
    lastVerified: "2026-08-18",
    sources: [
      "https://qwenlm.github.io/",
      "https://huggingface.co/Qwen",
      "https://help.aliyun.com/developer_alibabacloud_3749204438721712.html"
    ],
    competitors: ["Qwen 72B", "Llama 3 70B", "Mistral Large"],
    useCases: [
      "Multilingual content generation",
      "Local deployment in Asia-Pacific",
      "Cost-effective scaling",
      "Indian language support"
    ],
    deployment: ["Self-hosted", "Hugging Face", "Alibaba Cloud API"],
    integrations: ["Transformers", "Hugging Face", "Ollama", "OpenNCCL"],
    limitations: [
      "Chinese company may raise compliance concerns",
      "English performance varies by variant",
      "Limited Western enterprise adoption"
    ],
    verdict: "Best value multilingual model. Evidence-backed scores show strong Asian language support and India fit, but compliance review recommended."
  },
  {
    slug: "command-r-plus",
    name: "Command R+",
    company: "Cohere",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.0,
    indiaFit: 7.8,
    price: "Free + paid",
    badge: "Enterprise RAG",
    tone: "teal",
    shortDesc: "Cohere's enterprise-grade model optimized for retrieval-augmented generation.",
    longDesc: "Command R+ is Cohere's most powerful model, designed specifically for enterprise applications with a focus on retrieval-augmented generation (RAG). It features a 128K token context window, strong performance on reasoning benchmarks, and specialized capabilities for handling large-scale document collections. The model is available both as a managed API service and for self-hosted deployment. While primarily English-focused, it supports 10+ languages including some Indian languages.",
    keyFeatures: [
      "128K token context window",
      "Optimized for RAG workflows",
      "Strong reasoning benchmarks",
      "Available for self-hosting",
      "10+ language support"
    ],
    evidenceItems: 12,
    lastVerified: "2026-08-15",
    sources: [
      "https://cohere.com",
      "https://docs.cohere.com/docs",
      "https://huggingface.co/CohereForAI"
    ],
    competitors: ["GPT-4o", "Claude", "Gemini"],
    useCases: [
      "Enterprise knowledge management",
      "RAG-powered search",
      "Document summarization",
      "Enterprise chatbots"
    ],
    deployment: ["API", "Self-hosted", "Cloud"],
    integrations: ["Cohere API", "AWS", "Azure", "GCP"],
    limitations: [
      "Smaller developer community",
      "Limited Indian language support",
      "Less brand recognition vs. OpenAI/Anthropic"
    ],
    verdict: "Best for enterprise RAG applications. Evidence-backed scores show strong technical performance but lower adoption in India consumer market."
  },
  {
    slug: "falcon-180b",
    name: "Falcon 180B",
    company: "Technology Innovation Institute",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.2,
    indiaFit: 7.6,
    price: "Open source",
    badge: "UAE-developed",
    tone: "amber",
    shortDesc: "Large open-weight model developed by the UAE's Technology Innovation Institute.",
    longDesc: "Falcon 180B is a powerful open-weight language model developed by the Technology Innovation Institute (TII) in the UAE. It features 180 billion parameters and achieves competitive performance on reasoning and coding benchmarks. The model is released under the TII Falcon LLM License for research and commercial use. In India, Falcon sees adoption among researchers and open-source enthusiasts.",
    keyFeatures: [
      "180B parameters open-weight model",
      "Strong performance on benchmarks",
      "Research-to-commercial license",
      "Developed in the UAE",
      "English-focused with multilingual capabilities"
    ],
    evidenceItems: 10,
    lastVerified: "2026-08-14",
    sources: [
      "https://falcon-llm.tii.ae/",
      "https://huggingface.co/tiiuae/falcon-180B",
      "https://www.tii.ae/"
    ],
    competitors: ["Llama 3", "Qwen 72B", "Mistral Large"],
    useCases: [
      "Research and benchmarking",
      "Large-scale deployment",
      "Open-weight exploration",
      "Regional AI development"
    ],
    deployment: ["Self-hosted", "Hugging Face"],
    integrations: ["Transformers", "Hugging Face", "AWS", "GCP"],
    limitations: [
      "Requires significant compute for deployment",
      "Smaller ecosystem than major competitors",
      "Limited enterprise tooling"
    ],
    verdict: "Best open-weight model from the Middle East. Evidence-backed scores show competitive performance but limited ecosystem in India."
  },
  {
    slug: "gpt-3-5-turbo",
    name: "GPT-3.5 Turbo",
    company: "OpenAI",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 7.8,
    indiaFit: 8.0,
    price: "Usage-based",
    badge: "Cost-effective",
    tone: "gray",
    shortDesc: "OpenAI's cost-effective model for general-purpose language tasks.",
    longDesc: "GPT-3.5 Turbo is OpenAI's cost-effective model optimized for general-purpose language tasks. While less capable than GPT-4, it offers strong performance at a fraction of the cost, making it ideal for applications with high token volume requirements. The model powers many consumer and enterprise applications globally. In India, GPT-3.5 is widely used for customer support automation and content generation where cost is a primary concern.",
    keyFeatures: [
      "Cost-effective inference",
      "16K token context window",
      "Fast inference speed",
      "Well-established API",
      "Good for high-volume applications"
    ],
    evidenceItems: 16,
    lastVerified: "2026-08-17",
    sources: [
      "https://openai.com/api",
      "https://platform.openai.com/docs/models",
      "https://openai.com/pricing"
    ],
    competitors: ["Llama 3 8B", "Qwen 7B", "Phi-3 Mini", "Gemma 2B"],
    useCases: [
      "High-volume text generation",
      "Chatbots and virtual assistants",
      "Summarization at scale",
      "Cost-sensitive applications"
    ],
    deployment: ["API", "Azure OpenAI Service"],
    integrations: ["OpenAI API", "Azure", "Zapier", "LangChain"],
    limitations: [
      "Less capable than GPT-4",
      "No multimodal input",
      "Lower performance on complex tasks"
    ],
    verdict: "Best cost-to-performance ratio. Evidence-backed scores show strong value but limited for complex reasoning tasks."
  },
  {
    slug: "yi-1-5-34b",
    name: "Yi-1.5 34B",
    company: "01.AI",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 7.7,
    indiaFit: 8.2,
    price: "Open source",
    badge: "Chinese open-weight",
    tone: "indigo",
    shortDesc: "Chinese open-weight model with competitive reasoning and coding performance.",
    longDesc: "Yi-1.5 34B is a language model developed by 01.AI, a Chinese AI startup. It features 34 billion parameters and demonstrates strong performance on reasoning and coding benchmarks. The model is released under a permissive license for research and commercial use. In India, Yi models are gaining traction among developers for their efficiency and cost-effectiveness.",
    keyFeatures: [
      "34B parameters open-weight model",
      "Strong reasoning and coding",
      "Efficient inference",
      "Chinese language excellence",
      "Permissive license"
    ],
    evidenceItems: 9,
    lastVerified: "2026-08-13",
    sources: [
      "https://www.lingyiwan.net/",
      "https://huggingface.co/01-ai",
      "https://github.com/01-ai"
    ],
    competitors: ["Qwen 72B", "Llama 3 70B", "Mistral Large"],
    useCases: [
      "Local deployment",
      "Chinese language tasks",
      "Cost-effective scaling",
      "Research projects"
    ],
    deployment: ["Self-hosted", "Hugging Face", "API"],
    integrations: ["Transformers", "Hugging Face", "Ollama"],
    limitations: [
      "Primarily Chinese/English focus",
      "Smaller global ecosystem",
      "Limited enterprise adoption"
    ],
    verdict: "Competitive open-weight option. Evidence-backed scores show strong performance but limited India-specific validation."
  },
  {
    slug: "mixtral-8x22b",
    name: "Mixtral 8x22B",
    company: "Mistral AI",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.1,
    indiaFit: 8.4,
    price: "Open source + paid",
    badge: "Mixture of experts",
    tone: "teal",
    shortDesc: "Mistral's mixture-of-experts model with efficient inference and strong performance.",
    longDesc: "Mixtral 8x22B is MISTRAL's latest mixture-of-experts (MoE) model, featuring 141B total parameters with only 22B active per inference. This architecture provides exceptional performance while maintaining efficiency comparable to smaller dense models. The model excels in multilingual tasks and coding. In India, Mixtral sees adoption due to its efficiency and multilingual capabilities.",
    keyFeatures: [
      "Mixture of experts architecture",
      "Efficient inference (22B active params)",
      "Strong multilingual support",
      "Open-weight base model",
      "Apache 2.0 license"
    ],
    evidenceItems: 15,
    lastVerified: "2026-08-16",
    sources: [
      "https://mistral.ai/news/mixtral-8x22b",
      "https://docs.mistral.ai/models",
      "https://huggingface.co/mistralai"
    ],
    competitors: ["Qwen 72B", "Llama 3 70B", "Falcon"],
    useCases: [
      "Efficient large-model inference",
      "Multilingual content generation",
      "Coding assistance",
      "Cost-effective scaling"
    ],
    deployment: ["Self-hosted", "API", "Hugging Face"],
    integrations: ["Mistral API", "Transformers", "Hugging Face", "Ollama"],
    limitations: [
      "Requires MoE support for optimal efficiency",
      "Limited enterprise tooling",
      "French-centric in some capabilities"
    ],
    verdict: "Best efficiency for large-model inference. Evidence-backed scores show strong performance with MoE architecture advantages."
  },
  {
    slug: "gpt-4o",
    name: "GPT-4o",
    company: "OpenAI",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 9.2,
    indiaFit: 8.1,
    price: "Usage-based",
    badge: "Latest",
    tone: "blue",
    shortDesc: "OpenAI's latest multimodal model with native audio, image, and text capabilities.",
    longDesc: "GPT-4o (Omni) is OpenAI's most advanced model, designed to handle text, audio, image, and video inputs natively. It delivers significantly improved performance over GPT-4, particularly on reasoning, coding, and multilingual tasks. The model offers faster inference and more natural conversational abilities. In India, GPT-4o is integrated into ChatGPT and powers enterprise applications across sectors.",
    keyFeatures: [
      "Native multimodal input (text, audio, image, video)",
      "State-of-the-art reasoning and coding",
      "Improved speed and efficiency",
      "Multilingual with 50+ languages",
      "Advanced voice capabilities"
    ],
    evidenceItems: 26,
    lastVerified: "2026-08-20",
    sources: [
      "https://openai.com/index/gpt-4o-and-people/",
      "https://platform.openai.com/docs/models",
      "https://openai.com/pricing"
    ],
    competitors: ["Claude 3.5", "Gemini 1.5", "Llama 3", "Mistral Large"],
    useCases: [
      "Conversational AI assistants",
      "Multimodal content creation",
      "Voice-enabled applications",
      "Advanced reasoning tasks"
    ],
    deployment: ["API", "ChatGPT", "Azure OpenAI Service"],
    integrations: ["OpenAI API", "ChatGPT", "Microsoft Azure", "GitHub Copilot"],
    limitations: [
      "Higher cost than GPT-3.5",
      "Regional availability varies",
      "Output quality can be inconsistent"
    ],
    verdict: "Best overall multimodal model. Evidence-backed scores show superior performance but at premium cost."
  },
  {
    slug: "gemini-1-5-flash",
    name: "Gemini 1.5 Flash",
    company: "Google",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.3,
    indiaFit: 8.7,
    price: "Free + usage-based",
    badge: "Fast inference",
    tone: "orange",
    shortDesc: "Google's fast and efficient multimodal model for high-throughput applications.",
    longDesc: "Gemini 1.5 Flash is Google's cost-efficient, multimodal model optimized for high-throughput and latency-sensitive applications. It offers fast inference, strong multilingual support, and a 1M token context window. The model balances performance and cost, making it suitable for applications that need to process large volumes of data. In India, Gemini 1.5 Flash is adopted for its speed and multilingual capabilities.",
    keyFeatures: [
      "1M token context window",
      "Fast inference for high throughput",
      "Multilingual support (100+ languages)",
      "Multimodal input (text, image)",
      "Cost-efficient"
    ],
    evidenceItems: 12,
    lastVerified: "2026-08-15",
    sources: [
      "https://ai.google.dev/gemini-api/docs/gemini-1-5-flash",
      "https://deepmind.google/gemini",
      "https://ai.google.dev/pricing"
    ],
    competitors: ["GPT-3.5 Turbo", "Claude 3 Haiku", "Llama 3 8B", "Qwen 7B"],
    useCases: [
      "High-volume inference",
      "Chatbots and virtual assistants",
      "Multilingual content processing",
      "Real-time applications"
    ],
    deployment: ["API", "Google AI Studio", "Vertex AI"],
    integrations: ["Google Cloud", "Vertex AI", "AI Studio", "Google Workspace"],
    limitations: [
      "Lower performance than Gemini Pro",
      "Limited fine-tuning support",
      "Regional availability varies"
    ],
    verdict: "Best value for high-volume applications. Evidence-backed scores show excellent cost/performance ratio."
  },
  {
    slug: "claude-3-haiku",
    name: "Claude 3 Haiku",
    company: "Anthropic",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 7.9,
    indiaFit: 7.7,
    price: "Usage-based",
    badge: "Fast",
    tone: "gray",
    shortDesc: "Anthropic's fastest and most cost-efficient model in the Claude 3 family.",
    longDesc: "Claude 3 Haiku is Anthropic's fastest and most cost-efficient model in the Claude 3 lineup. Despite being smaller, it maintains high accuracy and safety standards. The model is optimized for speed and cost, making it ideal for applications with high throughput requirements. It supports vision input and maintains the same Constitutional AI alignment as the larger models. In India, Haiku is adopted for customer service chatbots and content moderation.",
    keyFeatures: [
      "High-speed inference",
      "Cost-efficient",
      "Maintains Anthropic safety standards",
      "Vision input support",
      "Good for high throughput"
    ],
    evidenceItems: 10,
    lastVerified: "2026-08-14",
    sources: [
      "https://www.anthropic.com/claude-3",
      "https://docs.anthropic.com/claude"
    ],
    competitors: ["GPT-3.5 Turbo", "Gemini Flash", "Qwen 7B", "Phi-3 Mini"],
    useCases: [
      "High-throughput chatbots",
      "Content moderation",
      "Fast classification",
      "Cost-sensitive applications"
    ],
    deployment: ["API", "Claude web interface"],
    integrations: ["Anthropic API", "Claude.ai"],
    limitations: [
      "Lower performance on complex tasks",
      "Limited context reasoning",
      "Less capable than Claude 3.5/4"
    ],
    verdict: "Best for cost-sensitive, high-volume tasks. Evidence-backed scores show strong efficiency but limited complexity handling."
  },
  {
    slug: "command-r",
    name: "Command R",
    company: "Cohere",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 7.7,
    indiaFit: 7.5,
    price: "Free + paid",
    badge: "RAG optimized",
    tone: "rose",
    shortDesc: "Mid-tier open model from Cohere optimized for retrieval-augmented generation workflows.",
    longDesc: "Command R is Cohere's mid-tier open model designed for retrieval-augmented generation (RAG) workflows. It supports 23 languages and offers strong performance on reasoning and coding tasks. The model is available for both API use and self-hosted deployment. In India, Command R sees adoption among developers building knowledge management applications.",
    keyFeatures: [
      "23 language support",
      "RAG-optimized architecture",
      "Open-weights available",
      "Strong reasoning benchmarks",
      "RAG-specific optimizations"
    ],
    evidenceItems: 8,
    lastVerified: "2026-08-13",
    sources: [
      "https://cohere.com",
      "https://docs.cohere.com/docs/command-r"
    ],
    competitors: ["Mistral 7B", "Qwen 7B", "Llama 3 8B"],
    useCases: [
      "RAG applications",
      "Multilingual chatbots",
      "Knowledge management",
      "Document analysis"
    ],
    deployment: ["API", "Self-hosted", "Cloud"],
    integrations: ["Cohere API", "AWS", "Azure"],
    limitations: [
      "Smaller ecosystem",
      "Limited Indian language support",
      "Less brand recognition"
    ],
    verdict: "Solid RAG-focused model. Evidence-backed scores show good multilingual support but limited adoption in India."
  },
  {
    slug: "llama-3-8b",
    name: "Llama 3 8B",
    company: "Meta AI",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.1,
    indiaFit: 9.2,
    price: "Open source",
    badge: "Efficient",
    tone: "amber",
    shortDesc: "Lightweight variant of Meta's Llama 3 model with strong performance for its size.",
    longDesc: "Llama 3 8B is the smaller variant of Meta's Llama 3 model family. Despite its compact size, it delivers strong performance on coding and reasoning benchmarks, making it ideal for local deployment and cost-sensitive applications. The model supports the same permissive license as the full model. In India, Llama 3 8B is widely adopted on local hardware due to its efficiency.",
    keyFeatures: [
      "8B parameter efficient model",
      "Strong performance for its size",
      "Permissive Meta license",
      "Optimized for inference",
      "Great for local deployment"
    ],
    evidenceItems: 14,
    lastVerified: "2026-08-15",
    sources: [
      "https://ai.meta.com/llama/",
      "https://huggingface.co/meta-llama"
    ],
    competitors: ["Qwen 7B", "Mistral 7B", "Gemma 7B", "Phi-3 Mini"],
    useCases: [
      "Local development and testing",
      "Cost-sensitive production",
      "Edge computing",
      "Educational projects"
    ],
    deployment: ["Self-hosted", "Hugging Face", "Ollama"],
    integrations: ["Transformers", "Ollama", "Hugging Face", "vLLM"],
    limitations: [
      "Lower performance than 70B variant",
      "Limited context window",
      "Reduced multilingual capabilities"
    ],
    verdict: "Best efficient Llama variant. Evidence-backed scores show excellent value for local deployment in India."
  },
  {
    slug: "qwen-7b",
    name: "Qwen 7B",
    company: "Alibaba Cloud",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 7.8,
    indiaFit: 8.6,
    price: "Open source",
    badge: "Multilingual",
    tone: "cyan",
    shortDesc: "Alibaba Cloud's lightweight multilingual model with strong performance for its size.",
    longDesc: "Qwen 7B is Alibaba Cloud's 7-billion parameter lightweight model. It supports 70+ languages including several Indian languages and demonstrates strong performance on multilingual tasks. The model is released under Apache 2.0 license and is suitable for local deployment and cost-sensitive applications. In India, Qwen 7B is adopted for its Indian language support and efficiency.",
    keyFeatures: [
      "7B parameter efficient model",
      "70+ language support including Indian languages",
      "Apache 2.0 license",
      "Strong multilingual performance",
      "Optimized for inference"
    ],
    evidenceItems: 11,
    lastVerified: "2026-08-14",
    sources: [
      "https://qwenlm.github.io/",
      "https://huggingface.co/Qwen"
    ],
    competitors: ["Llama 3 8B", "Gemma 7B", "Mistral 7B", "Phi-3 Mini"],
    useCases: [
      "Multilingual content generation",
      "Indian language support",
      "Local deployment",
      "Cost-sensitive applications"
    ],
    deployment: ["Self-hosted", "Hugging Face", "Ollama"],
    integrations: ["Transformers", "Ollama", "Hugging Face"],
    limitations: [
      "Lower performance than larger models",
      "Chinese company compliance",
      "Limited enterprise tooling"
    ],
    verdict: "Best multilingual lightweight option. Evidence-backed scores show strong Indian language support but compliance review needed."
  },
  {
    slug: "codestral-22b",
    name: "Codestral 22B",
    company: "MISTRAL AI",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.4,
    indiaFit: 8.0,
    price: "Open source + paid",
    badge: "Code specialist",
    tone: "emerald",
    shortDesc: "MISTRAL's code-specialized model with strong performance on programming tasks.",
    longDesc: "Codestral 22B is MISTRAL's code-specialized model, fine-tuned specifically for programming tasks. It supports 10+ programming languages with strong performance on code completion, bug detection, and test generation. The model is designed for developer productivity and can be deployed locally or via API. In India, Codestral sees adoption among developers for its coding capabilities and open-weights availability.",
    keyFeatures: [
      "Code-specialized architecture",
      "10+ programming language support",
      "Strong on coding benchmarks",
      "Available for self-hosting",
      "Open-weights base model"
    ],
    evidenceItems: 10,
    lastVerified: "2026-08-13",
    sources: [
      "https://mistral.ai/news/codestral",
      "https://docs.mistral.ai/models"
    ],
    competitors: ["GPT-4o", "Claude 3.5", "DeepSeek-Coder"],
    useCases: [
      "Code completion and generation",
      "Bug detection and fixing",
      "Test case generation",
      "Documentation generation"
    ],
    deployment: ["API", "Self-hosted", "Hugging Face"],
    integrations: ["Mistral API", "Hugging Face", "Transformers"],
    limitations: [
      "Narrower domain than general models",
      "Less multilingual support",
      "Smaller ecosystem"
    ],
    verdict: "Best code-specialized open model. Evidence-backed scores show strong coding performance but narrow scope."
  },
  {
    slug: "deepseek-coder",
    name: "DeepSeek-Coder",
    company: "DeepSeek",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 8.1,
    indiaFit: 8.4,
    price: "Open source",
    badge: "Code optimized",
    tone: "indigo",
    shortDesc: "Chinese open model optimized for code-related tasks and programming assistance.",
    longDesc: "DeepSeek-Coder is a series of open-source code-specific language models developed by DeepSeek AI. It is trained on a massive code corpus and demonstrates strong performance on code generation, understanding, and debugging tasks. The model supports multiple programming languages and offers variants optimized for different use cases. In India, DeepSeek-Coder is adopted for its strong coding capabilities and cost-effectiveness.",
    keyFeatures: [
      "Code-specific training",
      "Multiple programming languages",
      "Open-source variants",
      "Strong on coding benchmarks",
      "Cost-effective"
    ],
    evidenceItems: 9,
    lastVerified: "2026-08-12",
    sources: [
      "https://www.deepseek.com/",
      "https://github.com/deepseek-ai"
    ],
    competitors: ["Codestral", "GPT-4", "Claude 3.5"],
    useCases: [
      "Code generation and completion",
      "Bug detection and fixing",
      "Code explanation",
      "Programming assistance"
    ],
    deployment: ["API", "Self-hosted", "Hugging Face"],
    integrations: ["Hugging Face", "Transformers", "OpenAI Compatible API"],
    limitations: [
      "Chinese company compliance",
      "Less multilingual support",
      "Documentation in Chinese primarily"
    ],
    verdict: "Strong code-specific model. Evidence-backed scores show excellent coding performance but compliance considerations for India teams."
  },
  {
    slug: "gemma-2b",
    name: "Gemma 2B",
    company: "Google",
    category: "LLM",
    pillar: "Core AI Agents",
    score: 7.3,
    indiaFit: 8.8,
    price: "Open source",
    badge: "Lightweight",
    tone: "gray",
    shortDesc: "Google's tiniest open model, perfect for learning and experimentation.",
    longDesc: "Gemma 2B is Google's smallest open model, designed for learning and experimentation. Despite its small size, it provides a great introduction to LLM development and can run on low-resource devices. The model is released under a permissive license for education and research. In India, Gemma 2B is popular among students and educators for learning about LLMs.",
    keyFeatures: [
      "2B parameters - runs on any device",
      "Educational focus",
      "Permissive license",
      "Easy to deploy locally",
      "Great for learning"
    ],
    evidenceItems: 6,
    lastVerified: "2026-08-10",
    sources: [
      "https://gemma.com/",
      "https://huggingface.co/google/gemma-2b"
    ],
    competitors: ["Phi-2", "MiniCPM", "TinyLlama", "StableLM"],
    useCases: [
      "Education and learning",
      "Experimentation",
      "Low-resource deployment",
      "Prototype development"
    ],
    deployment: ["Self-hosted", "Hugging Face", "Ollama"],
    integrations: ["Transformers", "Hugging Face", "Ollama"],
    limitations: [
      "Limited practical utility",
      "Lower output quality",
      "Not for production use"
    ],
    verdict: "Best for learning. Evidence-backed scores show excellent educational value but not for production."
  },
  // Additional Models
  { slug: "gemma-2b", name: "Gemma 2B (v2)", company: "Google", category: "LLM", pillar: "Core AI Agents", score: 7.5, indiaFit: 8.7, price: "Open source", badge: "Latest", tone: "gray", shortDesc: "Improved lightweight model from Google with better performance and instruction following.", longDesc: "Gemma 2B v2 is the latest iteration of Google's lightweight open model. It offers improved instruction following and performance compared to the original. In India, it is popular for educational and experimental projects.", keyFeatures: ["2B parameters", "Improved instruction following", "Permissive license", "Efficient inference"], evidenceItems: 7, lastVerified: "2026-08-18", sources: ["https://gemma.com/", "https://huggingface.co/google/gemma-2b-it"], competitors: ["Phi-2", "TinyLlama", "MiniCPM"], useCases: ["Educational projects", "Experimentation", "Local testing"], deployment: ["Self-hosted", "Hugging Face"], integrations: ["Transformers", "Ollama"], limitations: ["Limited output quality", "Narrow domain knowledge"], verdict: "Improved version but still limited for production tasks." },
  { slug: "llama-3-405b", name: "Llama 3 405B", company: "Meta AI", category: "LLM", pillar: "Core AI Agents", score: 8.9, indiaFit: 8.8, price: "Open source", badge: "Most capable", tone: "amber", shortDesc: "Meta's most powerful Llama model with near-GPT-4 level performance.", longDesc: "Llama 3 405B is Meta's most powerful Llama model to date, featuring 405 billion parameters and performance approaching the best closed models. It supports 8+ languages and offers state-of-the-art results on coding and reasoning benchmarks. In India, adoption is growing for high-end local deployment and research.", keyFeatures: ["405B parameters", "Near GPT-4 performance", "8+ languages", "Open weights"], evidenceItems: 15, lastVerified: "2026-08-19", sources: ["https://ai.meta.com/llama", "https://huggingface.co/meta-llama"], competitors: ["GPT-4", "Claude 3.5", "Gemini 1.5 Pro"], useCases: ["High-end local deployment", "Research", "Cutting-edge benchmarks"], deployment: ["Self-hosted", "Hugging Face"], integrations: ["Transformers", "AWS Bedrock", "GCP Vertex"], limitations: ["Requires massive compute", "Expensive to run", "Needs technical expertise"], verdict: "Best open-weight model for high-end use. Evidence-backed scores show competitive performance with GPT-4." },
  { slug: "jamba-8b", name: "Jamba 8B", company: "AI21 Labs", category: "LLM", pillar: "Core AI Agents", score: 7.9, indiaFit: 7.6, price: "Open source + paid", badge: "Mamba-based", tone: "blue", shortDesc: "Mamba-based model with efficient inference and long context support.", longDesc: "Jamba 8B is AI21 Labs' first open model, built with the Mamba architecture for efficient long-range sequence modeling. It supports a 256K token context and is designed for tasks requiring long document understanding. The model combines the efficiency of Mamba with the quality of transformer-based models.", keyFeatures: ["Mamba architecture", "256K context", "Efficient inference", "Open weights"], evidenceItems: 6, lastVerified: "2026-08-12", sources: ["https://www.ai21.com/blog/jamba", "https://huggingface.co/ai21labs"], competitors: ["LongLlama", "XPos", "Nous-Hermes"], useCases: ["Long document analysis", "Legal documents", "Codebase understanding"], deployment: ["Self-hosted", "API"], integrations: ["AI21 API", "Hugging Face"], limitations: ["Smaller ecosystem", "Mamba adoption limited"], verdict: "Best for long-context tasks. Evidence-backed scores show unique architecture advantages." },
  { slug: "minicpm-3b", name: "MiniCPM 3B", company: "ModelBest", category: "LLM", pillar: "Core AI Agents", score: 7.4, indiaFit: 8.1, price: "Open source", badge: "Mobile", tone: "green", shortDesc: "Edge-optimized model for mobile and on-device AI applications.", longDesc: "MiniCPM is an end-side large language model jointly developed by ModelBest and Tsinghua University, designed for edge devices and mobile applications. It enables direct execution of LLM applications on end devices without relying on cloud services. In India, adoption is strong for privacy-preserving applications.", keyFeatures: ["End-side optimization", "Mobile deployment", "No cloud dependency", "Edge compute"], evidenceItems: 5, lastVerified: "2026-08-11", sources: ["https://github.com/ModelBest/MiniCPM", "https://huggingface.co/openbmb"], competitors: ["Phi-3", "Gemma", "TinyLlama"], useCases: ["Mobile apps", "Edge AI", "Privacy-sensitive tasks"], deployment: ["On-device", "Mobile", "Embedded"], integrations: ["iOS ML", "Android NNAPI", "ONNX"], limitations: ["Very limited capabilities", "Narrow use cases"], verdict: "Best for on-device applications. Evidence-backed scores show strong edge use-case focus." },
  { slug: "intern-7b", name: "Intern 7B", company: "Alibaba", category: "LLM", pillar: "Core AI Agents", score: 7.8, indiaFit: 8.3, price: "Open source", badge: "Chinese", tone: "orange", shortDesc: "Chinese open model with strong multilingual capabilities and code generation.", longDesc: "Intern 7B is Alibaba's pre-trained large language model, with strong Chinese and English language capabilities. It supports up to 2048x16384 token context and excels at Chinese language tasks while maintaining decent English performance. In India, adoption focuses on bilingual applications and cost-effective deployment.", keyFeatures: ["Chinese and English", "Code generation", "2048K context", "Open source"], evidenceItems: 8, lastVerified: "2026-08-10", sources: ["https://github.com/intern-ai-org/Intern", "https://huggingface.co/internlm"], competitors: ["Qwen", "Yi", "Llama"], useCases: ["Chinese-English applications", "Code generation", "Multilingual tasks"], deployment: ["Self-hosted", "API"], integrations: ["Hugging Face", "OpenBrain"], limitations: ["Chinese-centric", "Limited Indian languages"], verdict: "Solid bilingual option. Evidence-backed scores show good value but limited Indian language support." },
  { slug: "dbrx", name: "DBRX", company: "Databricks", category: "LLM", pillar: "Core AI Agents", score: 8.0, indiaFit: 7.9, price: "Open source + paid", badge: "Enterprise", tone: "teal", shortDesc: "Enterprise-grade model with fine-grained control and 128K context window.", longDesc: "DBRX is Databricks' enterprise-grade generative AI model, designed for fine-grained control over reasoning and output. It features a 128K token context window, expert-specialized architecture, and strong performance on enterprise workloads. The model is available both as open weights and through Databricks' managed endpoints.", keyFeatures: ["Enterprise-focused", "Expert-specialized MoE", "128K context", "Fine-grained control"], evidenceItems: 9, lastVerified: "2026-08-14", sources: ["https://www.databricks.com/blog/introducing-dbrx-the-worlds-most-capable-open-source-llm"], competitors: ["Llama 3", "Qwen", "Mistral"], useCases: ["Enterprise workloads", "RAG applications", "Agentic workflows"], deployment: ["Self-hosted", "Databricks Platform"], integrations: ["Databricks", "MLflow", "LangChain"], limitations: ["Enterprise-focused pricing", "Complex deployment", "Smaller community"], verdict: "Best for enterprise deployment. Evidence-backed scores show strong control but complex setup." },
  { slug: "nemotron-4-340b", name: "Nemotron 4 340B", company: "NVIDIA", category: "LLM", pillar: "Core AI Agents", score: 8.2, indiaFit: 7.8, price: "Paid", badge: "Trillion parameter", tone: "blue", shortDesc: "NVIDIA's trillion-parameter model optimized for enterprise and synthetic data generation.", longDesc: "Nemotron 4 340B is NVIDIA's powerful model with 340 billion parameters, optimized for enterprise AI applications and synthetic data generation. It features strong reasoning capabilities and is designed for deployment on NVIDIA's accelerated computing platforms. The model is available through NVIDIA NIM and NGC catalogs.", keyFeatures: ["340B parameters", "Optimized for NVIDIA GPUs", "Strong reasoning", "Synaptic data generation"], evidenceItems: 7, lastVerified: "2026-08-13", sources: ["https://www.nvidia.com/en-us/data-center/nemotron/", "https://catalog.ngc.nvidia.com/models"], competitors: ["Llama 3 405B", "Mixtral 8x22B"], useCases: ["Enterprise AI", "Synthetic data", "Reasoning tasks"], deployment: ["NVIDIA DGX", "NGC", "Cloud GPUs"], integrations: ["NVIDIA NIM", "NGC", "RAPIDS"], limitations: ["NVIDIA GPU dependency", "Complex deployment", "Limited outside NVIDIA"], verdict: "Best for NVIDIA ecosystem. Evidence-backed scores show strong enterprise features but ecosystem lock-in." },
  { slug: "qwen-72b", name: "Qwen 72B", company: "Alibaba Cloud", category: "LLM", pillar: "Core AI Agents", score: 8.1, indiaFit: 8.7, price: "Open source", badge: "Chinese open-weight", tone: "cyan", shortDesc: "Alibaba's 72B parameter open-weight model with strong reasoning and coding capabilities.", longDesc: "Qwen 72B is Alibaba Cloud's latest large-scale pre-trained model. It features strong reasoning, coding, and multilingual capabilities with support for multiple languages. The model is released under Apache 2.0 license and is available both as open weights and via API. In India, Qwen 72B sees adoption in cost-sensitive scenarios due to its efficiency.", keyFeatures: ["72B parameters", "Strong reasoning", "Multilingual support", "Apache 2.0 license"], evidenceItems: 12, lastVerified: "2026-08-17", sources: ["https://qwenlm.github.io/", "https://huggingface.co/Qwen"], competitors: ["Llama 3 70B", "Mixtral 8x22B", "Mistral Large"], useCases: ["Local deployment", "Multilingual content", "Coding assistance"], deployment: ["Self-hosted", "API", "Cloud"], integrations: ["Hugging Face", "Transformers", "Aliyun API"], limitations: ["Chinese company compliance", "English quality varies", "Limited Western adoption"], verdict: "Strong open-weight alternative. Evidence-backed scores show good value but compliance review needed for Indian enterprises." }
];