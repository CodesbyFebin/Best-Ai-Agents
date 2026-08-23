import type { Metadata } from "next";
import "./globals.css";

const faqQuestions = [
  "How to verify AI agent source code and identity?",
  "Is BestAIAgent a pay-to-rank directory?",
  "What is the difference between stdio and Streamable HTTP in MCP?",
  "How does the DPDP Act affect AI voice agent deployments?",
  "What is the AI agent development cost in India?",
  "How does MCP reduce context window token bloat?",
  "Which AI models support Hindi and Hinglish code-switching?",
];

const faqAnswers = [
  "BestAIAgent verifies AI agent identity by requiring SHA-256 hashes of source code, direct links to primary documentation, and official repository links. We mark unknown fields clearly to avoid speculative checkboxes and synthetic scoring.",
  "No. BestAIAgent is strictly evidence-backed and operates on a no pay-to-rank policy. Our rankings are based on verifiable data points, weighted aggregation of auditable facts, and radical transparency.",
  "In the Model Context Protocol (MCP), stdio is used for secure local development and inner-loop iteration via inter-process communication. Streamable HTTP is designed for scalable, enterprise-ready remote deployments with TLS authentication and web observability.",
  "The DPDP Act classifies voice data as biometric data, requiring explicit informed consent and robust security. BestAIAgent verifies which agents support sovereign on-premise deployment and explicit consent management for Indian phone calls.",
  "Standard task-agent implementation bands in India range from ₹4–12 lakh for custom integrated systems. BestAIAgent provides transparent INR pricing, GST invoicing automation, and UPI merchant fee preparedness for verified agents.",
  "MCP enables a 'code-as-a-tool' approach where the agent writes executable code (TypeScript/Python) to call the MCP server. This bypasses the LLM context window for data transfer, saving up to 98% of context window tokens.",
  "BestAIAgent verifies Indic models like Sarvam-30B and Krutrim-2 instruct for homegrown, locally trained Hindi and Hinglish code-switching, outperforming global models in regional cultural context.",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BestAIAgent.in",
  url: "https://bestaiagent.in",
  logo: "https://bestaiagent.in/logo.png",
  description: "The verified, evidence-backed AI agent directory. Master MCP infrastructure, India-first DPDP compliance, and radical transparency.",
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Model Context Protocol",
    "MCP",
    "DPDP Act Compliance",
    "AI Agents",
    "Sarvam AI",
    "Krutrim",
    "Evidence-Backed AI",
    "INR Pricing AI",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BestAIAgent.in",
  url: "https://bestaiagent.in",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://bestaiagent.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqQuestions.map((q, i) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqAnswers[i],
    },
  })),
};

export const metadata: Metadata = {
  title: "BestAIAgent.in — Discover, Compare, Deploy the Best AI Agents | Built in India",
  description: "India's largest AI agent discovery platform. Find, compare and deploy 10,000+ AI agents across 100+ categories. Built in India, for the world.",
  keywords: [
    "BestAIAgent MCP",
    "BestAIAgent INR pricing",
    "BestAIAgent DPDP compliance",
    "BestAIAgent verified",
    "BestAIAgent Cline MCP",
    "BestAIAgent India",
    "evidence-backed AI agents",
    "no pay-to-rank directory",
    "MCP stdio transport",
    "Streamable HTTP MCP",
    "Sarvam AI",
    "Krutrim",
    "DPDP Act compliance AI",
    "AI agent development cost India",
  ],
  openGraph: {
    title: "BestAIAgent.in — Verified MCP, DPDP Compliant & Evidence-Backed AI Agents",
    description: "The definitive engineering handbook for AI agents. Verified MCP infrastructure, India-first sovereign AI, and radical transparency.",
    type: "website",
    url: "https://bestaiagent.in/",
    siteName: "BestAIAgent.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestAIAgent.in — Verified MCP, DPDP Compliant & Evidence-Backed AI Agents",
    description: "The definitive engineering handbook for AI agents. Verified MCP infrastructure, India-first sovereign AI, and radical transparency.",
  },
  alternates: { canonical: "https://bestaiagent.in/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" dir="ltr">
      <head>
        <link rel="alternate" hrefLang="en-in" href="https://bestaiagent.in/" />
        <link rel="alternate" hrefLang="x-default" href="https://bestaiagent.in/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0f] text-[#e4e4f0] antialiased">
        {children}
      </body>
    </html>
  );
}
