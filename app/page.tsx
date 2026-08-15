import type { Metadata } from "next";
import Image from "next/image";
import heroImage from "../public/bestaiagent-business-solutions.webp";
import { AgentExplorer } from "@/src/components/home/AgentExplorer";
import { DirectAnswer } from "@/src/components/seo/DirectAnswer";
import { PageJsonLd } from "@/src/components/seo/PageJsonLd";
import { pillarManifests } from "@/src/data/pillars";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "BestAIAgent.in — Evidence-Led AI Agent Discovery",
  description:
    "Compare AI agents by workflow fit, first-party evidence, deployment constraints, and India-specific buying context.",
  alternates: { canonical: "https://bestaiagent.in/" },
};

const reviewedOn = "2026-08-15";
const homepageManifest = pillarManifests["best-ai-agent"];
const agents = homepageManifest.agents;
const evidence = homepageManifest.evidence;
const uniqueEvidenceCount = new Set(evidence.map((item) => item.url)).size;

const directAnswer =
  "BestAIAgent.in helps you compare AI agents by the job you need done, the evidence vendors publish, deployment and integration constraints, and India-specific buying context. Start with coding, business delegation, or automation, then verify capabilities and commercial terms using the source links shown beside each product.";

const categories = [
  ["Coding", "Repository, editor, terminal, and pull-request workflows"],
  ["Automation", "Connected workflows with explicit controls and integrations"],
  ["Business", "Inbox, meetings, delegation, and operational workflows"],
  ["Research", "Search, synthesis, provenance, and evidence workflows"],
  ["Voice", "Conversational phone and speech agent experiences"],
  ["Frameworks", "Custom orchestration, tools, memory, and multi-agent systems"],
];

const methodology = [
  ["01", "Match intent", "Compare products that solve the same user job before crossing categories."],
  ["02", "Verify claims", "Prefer official product, documentation, and pricing sources with review dates."],
  ["03", "Expose uncertainty", "Do not turn incomplete evidence into a universal winner or fabricated score."],
  ["04", "Refresh", "Recheck material product, pricing, availability, and integration facts as they change."],
];

export default function Home() {
  return (
    <main>
      <PageJsonLd
        url="https://bestaiagent.in/"
        title="BestAIAgent.in — Evidence-Led AI Agent Discovery"
        description="Compare AI agents by workflow fit, first-party evidence, deployment constraints, and India-specific buying context."
        datePublished={reviewedOn}
        dateModified={reviewedOn}
        about={["AI agents", "AI coding agents", "Agentic automation", "India AI adoption"]}
      />

      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brandMark">B</span>
          <span>
            BestAI<span>Agent</span><b>.in</b>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#discover">Discover</a>
          <a href="#compare">Compare</a>
          <a href="#india-fit">India Fit</a>
          <a href="#methodology">Methodology</a>
          <a href="/resources">Learn</a>
        </nav>
        <div className="headerActions">
          <a className="ghost" href="#methodology">How we verify</a>
          <a className="primary small" href="#discover">Find an agent</a>
        </div>
      </header>

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "24px 20px 0" }}>
        <DirectAnswer
          question="How do I choose the best AI agent?"
          answer={directAnswer}
          sources={evidence.map((item) => ({ label: item.label, url: item.url }))}
        />
      </div>

      <section className="hero" id="top">
        <div className="aurora one" />
        <div className="aurora two" />
        <div className="eyebrow"><span /> Independent AI agent intelligence for India</div>
        <h1>
          Find the right AI agent.<br />
          <em>Evidence, not hype.</em>
        </h1>
        <p className="heroCopy">
          Discover and compare AI agents with visible source evidence, deployment context,
          practical workflow fit, and India-specific considerations.
        </p>
        <div style={{ marginTop: 32 }}>
          <a className="primary" href="#discover">Explore evidence-backed agents →</a>
        </div>
        <div className="heroNotes">
          <span>✓ No pay-to-rank claim</span>
          <span>✓ Sources shown beside products</span>
          <span>✓ Review dates exposed</span>
        </div>
        <div className="heroShowcase">
          <Image
            src={heroImage}
            alt="BestAIAgent.in visual guide to business AI solutions across automation, productivity, customer experience, insights, innovation, and growth"
            sizes="(max-width: 768px) 100vw, 1180px"
            quality={75}
            preload
            placeholder="blur"
          />
          <div className="showcaseGlow" />
          <span className="showcaseLabel">Explore AI solutions by workflow and evidence</span>
        </div>
        <div className="heroStats" aria-label="Current evidence dataset summary">
          <div><strong>{agents.length}</strong><span>Evidence-backed candidates</span></div>
          <div><strong>{uniqueEvidenceCount}</strong><span>Primary / first-party sources</span></div>
          <div><strong>5</strong><span>Priority evidence pillars</span></div>
          <div><strong>15 Aug</strong><span>Current review date</span></div>
        </div>
      </section>

      <section className="section categories" id="categories">
        <div className="sectionHead">
          <div>
            <span className="kicker">Explore the ecosystem</span>
            <h2>Start with what you need to accomplish</h2>
          </div>
          <a className="textButton" href="/categories">View all categories →</a>
        </div>
        <div className="categoryGrid">
          {categories.map(([name, description], index) => (
            <a className="categoryCard" href="#discover" key={name}>
              <span className="catIcon">{["⌘", "↗", "◎", "◉", "◇", "✦"][index]}</span>
              <strong>{name}</strong>
              <p>{description}</p>
              <small>Inspect evidence <b>→</b></small>
            </a>
          ))}
        </div>
      </section>

      <section className="section directory" id="discover">
        <div className="sectionHead">
          <div>
            <span className="kicker">Evidence-led directory</span>
            <h2>Compare products by fit and provenance</h2>
            <p>
              The shortlist below is rendered from the same evidence-backed pillar data used by
              the canonical comparison pages. Product claims link to their current source.
            </p>
          </div>
          <div className="updated"><i /> Research reviewed 15 Aug 2026</div>
        </div>
        <AgentExplorer agents={agents} />
      </section>

      <section className="compareBand" id="compare">
        <div>
          <span className="kicker">Decision workspace</span>
          <h2>Compare like-for-like workflows before choosing.</h2>
          <p>
            Coding agents, business assistants, and automation systems solve different jobs.
            Use the evidence shortlist to compare products inside the same intent before crossing categories.
          </p>
          <a className="primary" href="/best-ai-agent">Open the evidence comparison →</a>
        </div>
        <div className="matrix" aria-label="Evidence comparison checklist">
          <div className="matrixHead"><span>Evaluation signal</span><b>Verify</b><b>Record</b></div>
          {[
            ["Workflow fit", "Primary docs", "Use case"],
            ["Deployment", "Vendor docs", "Constraints"],
            ["Integrations", "Current docs", "Required tools"],
            ["Commercial terms", "Official pricing", "Region/date"],
            ["Evidence status", "Source URL", "Verified date"],
          ].map((row) => (
            <div key={row[0]}><span>{row[0]}</span><strong>{row[1]}</strong><strong>{row[2]}</strong></div>
          ))}
        </div>
      </section>

      <section className="section india" id="india-fit">
        <div className="indiaVisual">
          <div className="mapOrb">₹<span>INDIA<br />FIT</span></div>
          <div className="orbit o1" />
          <div className="orbit o2" />
        </div>
        <div className="indiaCopy">
          <span className="kicker">Built for Indian decisions</span>
          <h2>Global tools. Local buying reality.</h2>
          <p>
            India Fit is kept separate from global product capability so regional availability,
            pricing, language, deployment, and privacy context can be evaluated without inventing a score.
          </p>
          <div className="indiaGrid">
            {[
              ["₹", "Pricing", "Published India pricing or clearly labelled regional context"],
              ["अ", "Language", "Documented multilingual and speech capabilities"],
              ["⌂", "Deployment", "Managed, regional, API, or self-hosting options"],
              ["◈", "Privacy", "Published privacy, retention, and data-use information"],
            ].map(([icon, title, copy]) => (
              <div key={title}><span>{icon}</span><div><strong>{title}</strong><p>{copy}</p></div></div>
            ))}
          </div>
          <a className="secondary" href="/built-in-india">See India Fit methodology →</a>
        </div>
      </section>

      <section className="method" id="methodology">
        <div className="methodIntro">
          <span className="kicker">Trust layer</span>
          <h2>Every material product claim should be traceable.</h2>
          <p>
            The publishing contract stores source URLs and verification dates beside product evidence,
            and avoids turning missing evidence into a confident rating.
          </p>
        </div>
        <div className="methodSteps">
          {methodology.map(([number, title, copy]) => (
            <div key={number}><span>{number}</span><strong>{title}</strong><p>{copy}</p></div>
          ))}
        </div>
      </section>

      <section className="section learn" id="learn">
        <div className="sectionHead">
          <div><span className="kicker">Learn before you buy</span><h2>Practical AI agent field guides</h2></div>
          <a className="textButton" href="/resources">Explore the knowledge hub →</a>
        </div>
        <div className="learnGrid">
          {[
            ["Primer", "GenAI 101 for India", "Models, context, privacy, cost, and adoption basics."],
            ["Reasoning", "Reasoning & tool use", "How agentic systems combine model output with tools and controls."],
            ["Retrieval", "Vector search & RAG", "Retrieval, provenance, permissions, and evaluation fundamentals."],
            ["Ecosystem", "India AI landscape", "Regional language, policy, deployment, and adoption context."],
          ].map(([tag, title, copy], index) => (
            <article key={title}>
              <div className="learnArt"><span>{["AI", "∴", "↗", "IN"][index]}</span></div>
              <small>{tag}</small><h3>{title}</h3><p>{copy}</p>
              <a href="/resources">Read field guide →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <span className="kicker">Make a defensible choice</span>
        <h2>Your next AI agent should earn its place.</h2>
        <p>Start with the job, inspect the evidence, and document the trade-offs that matter to your team.</p>
        <div><a className="primary" href="#discover">Find an AI agent →</a><a className="secondary" href="/best-ai-agent">Compare evidence</a></div>
      </section>

      <footer>
        <div className="brand"><span className="brandMark">B</span><span>BestAI<span>Agent</span><b>.in</b></span></div>
        <p>Independent AI-agent discovery, comparisons, and India-first evaluation.</p>
        <div className="footerLinks"><a href="#discover">Directory</a><a href="#compare">Compare</a><a href="/built-in-india">India Fit</a><a href="#methodology">Methodology</a><a href="/resources">Learn</a></div>
        <small>© 2026 BestAIAgent.in · Editorial shortlists reflect published methodology and available evidence, not guarantees.</small>
      </footer>
    </main>
  );
}
