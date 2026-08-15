import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./authority.css";

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bestaiagent.in"),
  title: "BestAIAgent.in — Find and Compare AI Agents with Evidence",
  description:
    "Discover and compare AI agents with transparent scoring, source-backed claims, pricing context, deployment options, and India Fit analysis.",
  keywords: [
    "best AI agents",
    "AI agent directory",
    "compare AI agents",
    "AI agents India",
    "AI agent marketplace",
  ],
  openGraph: {
    title: "BestAIAgent.in — Evidence-led AI Agent Discovery",
    description:
      "Find the right AI agent with transparent evidence and India-specific context.",
    type: "website",
    locale: "en_IN",
    url: "https://bestaiagent.in/",
    siteName: "BestAIAgent.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestAIAgent.in",
    description: "Evidence-led AI agent discovery for India and the world.",
  },
  alternates: { canonical: "https://bestaiagent.in/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const featuredAgents = [
  { name: "Claude Code", url: "https://bestaiagent.in/#discover", category: "DeveloperApplication" },
  { name: "Cursor", url: "https://bestaiagent.in/#discover", category: "DeveloperApplication" },
  { name: "Lindy", url: "https://bestaiagent.in/#discover", category: "BusinessApplication" },
  { name: "CrewAI", url: "https://bestaiagent.in/#discover", category: "DeveloperApplication" },
  { name: "n8n", url: "https://bestaiagent.in/#discover", category: "BusinessApplication" },
  { name: "Vapi", url: "https://bestaiagent.in/#discover", category: "CommunicationApplication" },
];

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bestaiagent.in/#organization",
      name: "BestAIAgent.in",
      url: "https://bestaiagent.in/",
      description: "Independent AI agent discovery and evaluation platform.",
    },
    {
      "@type": "WebSite",
      "@id": "https://bestaiagent.in/#website",
      url: "https://bestaiagent.in/",
      name: "BestAIAgent.in",
      publisher: { "@id": "https://bestaiagent.in/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://bestaiagent.in/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://bestaiagent.in/#featured-agents",
      name: "Featured AI agents",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: featuredAgents.length,
      itemListElement: featuredAgents.map((agent, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: agent.name,
          url: agent.url,
          applicationCategory: agent.category,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className={`${sans.variable} ${mono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
        {children}
      </body>
    </html>
  );
}
