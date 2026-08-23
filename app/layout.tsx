import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans=Geist({variable:"--font-geist-sans",subsets:["latin"]});
const mono=Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});

const faqQuestions = [
  "How to verify AI agent source code and identity?",
  "Is BestAIAgent a pay-to-rank directory?",
  "How does BestAIAgent verify AI agent claims?",
  "What is the difference between an AI agent and an MCP server?",
  "How to configure Cursor MCP server for local dev?",
  "What is the AI agent development cost in India?",
  "Does Cursor offer INR pricing and India billing?",
  "How does the DPDP Act affect AI voice agent deployments?",
  "Which AI agents support UPI payments and GST invoicing?",
  "What is the best AI coding agent with MCP support?",
  "Which AI agents support sandboxed code execution?",
  "What is the best AI agent for DevOps terminal-based development?",
  "How to choose between Claude Code, Cursor, and Windsurf?",
  "Are Sarvam AI and Krutrim better for Indic languages?",
];

const faqAnswers = [
  "We link directly to official GitHub repositories, verify commit history, and check documentation for every listing.",
  "No. BestAIAgent.in does not accept paid placements, sponsored content, or vendor payments.",
  "We cross-reference official docs, run hands-on tests, verify API endpoints, and audit pricing with confidence scores.",
  "An AI agent is an autonomous system that performs tasks. An MCP server is a standardized interface exposing tools to agents.",
  "Cursor supports MCP servers via mcp.json with stdio transport for local dev and Streamable HTTP for remote servers.",
  "Costs range from free tools (0 INR) to custom integrated systems (4-12 lakh INR) with transparent, verified pricing.",
  "Yes, Cursor supports UPI payments, GST invoicing, and INR billing with verified DPDP compliance.",
  "The DPDP Act requires explicit consent for voice data, biometric classification, and data fiduciary security.",
  "Verified agents with UPI and GST include Cursor, Claude Code, and ChatGPT with confirmed payment support.",
  "Cline and Cursor are top for MCP support, with Cline offering VS Code integration and Cursor supporting Streamable HTTP.",
  "Agents with sandboxed execution include Cline, Cursor, and OpenHands running code safely in Docker containers.",
  "Cline and Claude Code are best for terminal-based development with MCP stdio transport and repository-scale context.",
  "Claude Code excels at autonomous coding, Cursor at IDE workflows, Windsurf balances team collaboration.",
  "Sarvam AI and Krutrim-2 are verified for Hindi and Hinglish, outperforming global models on Indic tasks.",
];

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

export const metadata:Metadata={
  title:"BestAIAgent.in — Find and Compare AI Agents with Evidence",
  description:"Discover and compare AI agents with transparent scoring, source-backed claims, INR pricing context, deployment options, and India Fit analysis.",
  keywords:[
    "BestAIAgent MCP",
    "BestAIAgent Cline",
    "BestAIAgent Cursor",
    "BestAIAgent India",
    "BestAIAgent INR pricing",
    "BestAIAgent DPDP compliance",
    "BestAIAgent verified",
    "BestAIAgent evidence-backed",
    "BestAIAgent no pay-to-rank",
    "BestAIAgent coding agents",
    "BestAIAgent AI agent directory",
    "BestAIAgent compare AI agents",
    "BestAIAgent India Fit",
    "BestAIAgent transparent pricing",
    "AI agent directory India",
    "MCP servers India",
    "Sarvam AI alternatives",
    "Krutrim AI verified",
    "Bhashini translation agents",
    "UPI payment AI agents",
  ],
  openGraph:{
    title:"BestAIAgent.in — Evidence-led AI Agent Discovery",
    description:"Find the right AI agent with transparent scores, evidence, and India-specific context.",
    type:"website",
    locale:"en_IN"
  },
  twitter:{
    card:"summary_large_image",
    title:"BestAIAgent.in",
    description:"Evidence-led AI agent discovery for India and the world."
  },
  alternates:{canonical:"https://bestaiagent.in/"},
  robots:{index:true,follow:true},
  other:{"codex-preview":"development"},
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}
};

const data={"@context":"https://schema.org","@graph":[
  {"@type":"Organization","@id":"https://bestaiagent.in/#organization","name":"BestAIAgent.in","url":"https://bestaiagent.in/","description":"Independent AI agent discovery and evaluation platform."},
  {"@type":"WebSite","@id":"https://bestaiagent.in/#website","url":"https://bestaiagent.in/","name":"BestAIAgent.in","publisher":{"@id":"https://bestaiagent.in/#organization"},"potentialAction":{"@type":"SearchAction","target":"https://bestaiagent.in/?q={search_term_string}","query-input":"required name=search_term_string"}},
  {"@type":"FAQPage","mainEntity":faqSchema.mainEntity}
]};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en-IN">
    <body className={`${sans.variable} ${mono.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
      {children}
    </body>
  </html>
}
