import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Learning Resources — Tutorials, Courses & Guides for India | BestAIAgent.in",
  description: "Comprehensive AI learning resources including tutorials, courses, and guides. Learn about AI agents, MCP, DPDP compliance, and India-specific AI development.",
  keywords: ["AI learning resources", "AI tutorials India", "MCP tutorials", "AI agent development", "DPDP compliance training", "Indic AI development", "AI courses India"],
  alternates: { canonical: "https://bestaiagent.in/learning/" },
};

export default function LearningPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Learning</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">AI Learning Resources</h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">Comprehensive tutorials, guides, and courses for AI agent development. From foundational concepts to advanced deployment strategies, with a focus on the Indian AI ecosystem.</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">How to Use These Resources</h2>
            <p className="text-[#c5c7d8] mb-4">These learning resources are organized into structured paths to guide you from beginner to advanced topics. Each path contains multiple modules with hands-on exercises and real-world examples. Follow the paths in order for the best learning experience, or jump to specific modules based on your current skill level. We recommend spending the suggested duration on each module to fully absorb the concepts and complete the practical exercises. Use our glossary to look up unfamiliar terms and our agent directory to see real-world examples of the concepts you are learning.</p>
            <p className="text-[#c5c7d8] mb-4">Each module includes a description, learning objectives, and topics covered. Practice by building your own agents and contributing to open-source projects to reinforce your learning. We encourage you to share your projects and experiences with the community through GitHub discussions and our newsletter. Learning is most effective when it is shared, and we welcome contributions from learners at all levels.</p>
            <p className="text-[#c5c7d8]">All resources are evidence-based and regularly updated to reflect the latest developments in the AI landscape. If you encounter outdated content or have suggestions for new topics, please submit feedback through our GitHub repository. We review all feedback and incorporate valid suggestions into our learning materials, with appropriate attribution to contributors.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Learning Path: Beginner</h2>
            <p className="text-[#c5c7d8] mb-4">Start your journey into AI agent development with foundational concepts and practical introductions. This path is designed for those with basic programming knowledge but no prior AI experience. You will learn what AI agents are, how they work, and how to build and deploy your first agent. The beginner path takes approximately 2-4 weeks to complete, depending on your pace and prior experience.</p>
            <p className="text-[#c5c7d8] mb-4">Module 1: Introduction to AI Agents. Learn what AI agents are, how they differ from traditional software, and what problems they can solve. Understand the key components: perception, reasoning, and action. Explore real-world examples of AI agents in production and understand their capabilities and limitations. This module provides the foundation for all subsequent learning and is essential for understanding the AI agent landscape.</p>
            <p className="text-[#c5c7d8] mb-4">Module 2: Your First AI Agent. Build and deploy your first AI agent using open-source tools. Set up your development environment, connect to an LLM API, and create a simple agent that can answer questions. Learn about prompting, context management, and basic error handling. This hands-on module gives you practical experience with AI agent development and prepares you for more advanced topics.</p>
            <p className="text-[#c5c7d8]">Module 3: Understanding APIs and Tools. Learn how AI agents interact with external systems through APIs and tools. Understand REST APIs, authentication, and how to wrap existing services as agent tools. Practice by integrating your agent with real APIs and handling different response formats. This module is essential for building agents that can interact with the real world and access external data sources.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Learning Path: Intermediate</h2>
            <p className="text-[#c5c7d8] mb-4">Deepen your knowledge with Model Context Protocol and multi-agent orchestration patterns. This path assumes you have completed the beginner path or have equivalent experience. You will learn how to build custom MCP servers, design multi-agent systems, and implement production-ready integrations. The intermediate path takes approximately 4-6 weeks to complete.</p>
            <p className="text-[#c5c7d8] mb-4">Module 1: Model Context Protocol Fundamentals. Master the Model Context Protocol architecture, transport mechanisms (stdio and Streamable HTTP), and security model. Understand how MCP standardizes agent-tool communication and why it matters for building interoperable AI systems. This module provides the foundation for building and deploying MCP servers that can be used with any MCP-compatible client.</p>
            <p className="text-[#c5c7d8] mb-4">Module 2: Building MCP Servers. Create custom MCP servers using the official SDK. Define tools with clear descriptions, implement handlers with proper error handling, and configure transports for different deployment scenarios. Test your servers with popular MCP clients. This hands-on module gives you practical experience with MCP server development and prepares you for production deployments.</p>
            <p className="text-[#c5c7d8]">Module 3: Multi-Agent Orchestration. Design systems where multiple AI agents collaborate to solve complex problems. Learn about task decomposition, agent communication, and result aggregation. Explore frameworks like CrewAI and LangGraph for building multi-agent systems. This module is essential for building complex AI applications that require coordination between multiple specialized agents.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Learning Path: Advanced</h2>
            <p className="text-[#c5c7d8] mb-4">Master production deployment, security, and compliance for enterprise AI agent systems. This path assumes you have completed the intermediate path or have equivalent experience. You will learn how to deploy AI agents at scale, implement security best practices, and ensure compliance with Indian regulations. The advanced path takes approximately 6-8 weeks to complete.</p>
            <p className="text-[#c5c7d8] mb-4">Module 1: Production Deployment. Deploy AI agents at scale with proper monitoring, logging, and fault tolerance. Learn about containerization, orchestration, and CI/CD pipelines for AI systems. Understand how to handle high availability, load balancing, and disaster recovery. This module is essential for anyone responsible for deploying AI agents in production environments.</p>
            <p className="text-[#c5c7d8] mb-4">Module 2: Security and Compliance. Implement security best practices for AI agent deployments. Understand DPDP Act requirements, data residency, consent management, and audit logging. Learn how to conduct security assessments and implement remediation measures. This module is essential for anyone deploying AI systems that process personal data of Indian residents.</p>
            <p className="text-[#c5c7d8]">Module 3: Indic AI Development. Build AI solutions for Indian languages and use cases. Integrate Indic language models, support Hinglish code-switching, and comply with India-specific regulations. Learn about the unique challenges and opportunities of serving the Indian market. This module is essential for anyone building AI applications for Indian users.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">External Learning Resources</h2>
            <p className="text-[#c5c7d8] mb-4">In addition to our own resources, we recommend the following external learning materials for AI agent development. These resources are created and maintained by the respective organizations and provide valuable complementary content to our guides.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Official MCP Documentation</h3>
                <p className="text-sm text-[#9ca5c3]">The official Model Context Protocol documentation with API references, examples, and best practices for server development.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">LangChain Documentation</h3>
                <p className="text-sm text-[#9ca5c3]">Comprehensive guides for building AI agents with the LangChain framework, including chains, agents, and memory management.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">CrewAI Tutorials</h3>
                <p className="text-sm text-[#9ca5c3]">Tutorials for multi-agent orchestration using the CrewAI framework, with examples of role-based agent collaboration.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">IndiaAI Resources</h3>
                <p className="text-sm text-[#9ca5c3]">Government of India AI resources including the IndiaAI Mission portal and BHASHINI language platform documentation.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How long does it take to learn AI agent development?</h3>
                <p className="text-sm text-[#9ca5c3]">With consistent effort, you can learn the basics in 2-4 weeks and become proficient in 3-6 months. Prior programming experience accelerates the learning process significantly.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Do I need a machine learning background?</h3>
                <p className="text-sm text-[#9ca5c3]">No. Many AI agent tools abstract away the ML complexity. Basic programming skills and familiarity with APIs are sufficient to get started.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What programming languages are used?</h3>
                <p className="text-sm text-[#9ca5c3]">Python and JavaScript/TypeScript are the most common languages for AI agent development. Our resources cover both.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Can I build AI agents for Indian languages?</h3>
                <p className="text-sm text-[#9ca5c3]">Yes. Use Indic language models like Sarvam-30B or Krutrim-2, integrate with Bhashini for translation, and follow our guides for Hinglish code-switching support.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
