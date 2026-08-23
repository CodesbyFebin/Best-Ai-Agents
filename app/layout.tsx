import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

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
  "BestAIAgent verifies AI agent identity via SHA-256 source code hashes, primary documentation links, and official repository links. Unknown fields are marked clearly — no speculative checkboxes.",
  "No. BestAIAgent operates a strict no pay-to-rank policy. Rankings are based on verifiable data points and weighted aggregation of auditable facts.",
  "stdio is for secure local development via inter-process communication. Streamable HTTP is for scalable enterprise deployments with TLS authentication and web observability.",
  "The DPDP Act classifies voice data as biometric data, requiring explicit informed consent and robust security. BestAIAgent verifies which agents support sovereign on-premise deployment.",
  "Standard task-agent implementation bands range from ₹4–12 lakh for custom integrated systems. BestAIAgent provides transparent INR pricing, GST invoicing, and UPI merchant fee preparedness.",
  "MCP enables a code-as-a-tool approach where the agent writes executable code to call the MCP server directly as a pure API — bypassing the LLM context window and saving up to 98% of tokens.",
  "BestAIAgent verifies Indic models like Sarvam-30B and Krutrim-2 instruct for homegrown, locally trained Hindi and Hinglish code-switching, outperforming global models in regional cultural context.",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BestAIAgent.in",
  url: "https://bestaiagent.in",
  logo: "https://bestaiagent.in/logo.png",
  description:
    "India's verified, evidence-backed AI agent platform. MCP infrastructure, DPDP compliance, INR pricing. No pay-to-rank.",
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Model Context Protocol",
    "MCP",
    "DPDP Act",
    "AI Agents",
    "Sarvam AI",
    "Krutrim",
    "Evidence-Backed AI",
    "INR Pricing",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://bestaiagent.in",
  name: "BestAIAgent.in",
  publisher: organizationSchema,
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bestaiagent.in/?q={search_term_string}",
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
  title:
    "BestAIAgent.in — Verified MCP Infrastructure, DPDP-Compliant AI Agents & India-First AI Solutions",
  description:
    "India's verified, evidence-backed AI agent platform. Master MCP infrastructure (stdio/Streamable HTTP), DPDP compliance, INR pricing. No pay-to-rank. 296 canonical pages. Made in India.",
  keywords: [
    "BestAIAgent MCP",
    "DPDP compliance AI",
    "INR pricing AI agents",
    "MCP stdio transport",
    "Streamable HTTP MCP",
    "Sarvam AI",
    "Krutrim",
    "evidence-backed AI agents",
    "AI agent development cost India",
    "MCP servers India",
    "Verified AI agents",
    "India first AI solutions",
  ],
  openGraph: {
    title:
      "BestAIAgent.in — Verified AI Agents, MCP Infrastructure & DPDP Compliance",
    description:
      "India's evidence-backed AI agent platform. 296 verified pages. MCP infrastructure. DPDP compliance. No pay-to-rank.",
    type: "website",
    url: "https://bestaiagent.in/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BestAIAgent.in — Verified AI Agents, MCP Infrastructure & DPDP Compliance",
    description:
      "India's evidence-backed AI agent platform. 296 verified pages. MCP infrastructure. DPDP compliance. No pay-to-rank.",
  },
  alternates: { canonical: "https://bestaiagent.in/" },
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="alternate" hrefLang="en-in" href="https://bestaiagent.in/" />
        <link rel="alternate" hrefLang="x-default" href="https://bestaiagent.in/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
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
      <body className={`${inter.variable} ${mono.variable} font-sans`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Mobile menu toggle
              const menuBtn = document.getElementById('menuBtn');
              const mobileNav = document.getElementById('mobileNav');
              if (menuBtn && mobileNav) {
                menuBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
                document.querySelectorAll('#mobileNav a').forEach(a => {
                  a.addEventListener('click', () => mobileNav.classList.remove('open'));
                });
              }

              // Counter animation
              const counters = document.querySelectorAll('.counter[data-target]');
              const animateCounter = (el) => {
                const target = parseInt(el.dataset.target);
                const duration = 1500;
                const start = performance.now();
                const step = (ts) => {
                  const progress = Math.min((ts - start) / duration, 1);
                  el.textContent = Math.floor(progress * target);
                  if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
              };
              const obs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                  if (e.isIntersecting) {
                    animateCounter(e.target);
                    obs.unobserve(e.target);
                  }
                });
              }, { threshold: .5 });
              counters.forEach(c => obs.observe(c));

              // Particles
              const pc = document.getElementById('particles');
              if (pc) {
                for (let i = 0; i < 30; i++) {
                  const p = document.createElement('div');
                  p.className = 'particle';
                  p.style.cssText = 'left:' + Math.random() * 100 + '%;top:' + Math.random() * 100 + '%;background:' + ['rgba(139,92,246,.3)','rgba(6,182,212,.3)','rgba(52,211,153,.2)'][Math.floor(Math.random() * 3)] + ';animation-delay:' + Math.random() * 12 + 's;animation-duration:' + (10 + Math.random() * 15) + 's;width:' + (2 + Math.random() * 3) + 'px;height:' + (2 + Math.random() * 3) + 'px;';
                  pc.appendChild(p);
                }
              }

              // Smooth scroll
              document.querySelectorAll('a[href^="#"]').forEach(a => {
                a.addEventListener('click', e => {
                  e.preventDefault();
                  const t = document.querySelector(a.getAttribute('href'));
                  if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
              });

              // Active nav on scroll
              const sections = document.querySelectorAll('section[id]');
              window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(s => {
                  if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
                });
                document.querySelectorAll('.nav-link').forEach(l => {
                  l.classList.remove('active');
                  if (l.getAttribute('href') === '#' + current) l.classList.add('active');
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
