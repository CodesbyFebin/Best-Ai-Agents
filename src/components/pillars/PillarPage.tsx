import type { PillarManifest } from "@/src/types/pillar";
import { DirectAnswer } from "@/src/components/seo/DirectAnswer";

interface PillarPageProps {
  manifest: PillarManifest;
}

const methodologySteps = [
  {
    name: "Match intent",
    text: "Compare products that solve the same user job before crossing categories.",
  },
  {
    name: "Verify claims",
    text: "Prefer official product, documentation, and pricing sources with retrieval dates.",
  },
  {
    name: "Expose uncertainty",
    text: "Do not convert incomplete evidence into a universal score, badge, or winner.",
  },
  {
    name: "Refresh material facts",
    text: "Recheck pricing, availability, integrations, and product capabilities when they can change.",
  },
];

export function PillarPage({ manifest }: PillarPageProps) {
  const canonical = `https://bestaiagent.in/${manifest.slug}`;
  const evidenceCount = manifest.agents.reduce(
    (count, agent) => count + agent.evidence.length,
    0,
  );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: manifest.title,
        description: manifest.description,
        datePublished: "2026-08-15",
        dateModified: manifest.lastReviewed,
        isPartOf: { "@id": "https://bestaiagent.in/#website" },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".aeoDirectAnswer", ".pillarFaqs"],
        },
        about: manifest.agents.map((agent) => ({
          "@type": "Thing",
          name: agent.name,
          sameAs: agent.officialUrl,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "BestAIAgent.in",
            item: "https://bestaiagent.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: manifest.title,
            item: canonical,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: `${manifest.title} evidence shortlist`,
        numberOfItems: manifest.agents.length,
        itemListElement: manifest.agents.map((agent, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: agent.name,
            applicationCategory: agent.category,
            url: agent.officialUrl,
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: manifest.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "HowTo",
        name: `How to evaluate products for ${manifest.primaryKeyword}`,
        description:
          "A four-step evidence-first process for matching intent, verifying claims, exposing uncertainty, and refreshing material facts.",
        step: methodologySteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
    ],
  };

  return (
    <main className="pillarPage authorityPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <header className="authorityNav pillarNav">
        <a className="brand" href="/">
          BestAI<span>Agent</span><b>.in</b>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/best-ai-agent">Best Agents</a>
          <a href="/categories">Categories</a>
          <a href="/built-in-india">India Fit</a>
          <a href="/resources">Resources</a>
        </nav>
      </header>

      <div style={{ maxWidth: 1192, margin: "0 auto", padding: "24px 24px 0" }}>
        <DirectAnswer
          question={manifest.primaryKeyword}
          answer={manifest.directAnswer}
          sources={manifest.evidence.map((item) => ({
            label: item.label,
            url: item.url,
          }))}
        />
      </div>

      <section className="pillarHero">
        <div className="pillarHeroCopy">
          <span className="kicker">{manifest.eyebrow}</span>
          <h1>
            {manifest.title}
            {manifest.accentTitle ? <em>{manifest.accentTitle}</em> : null}
          </h1>
          <p className="pillarDescription">{manifest.description}</p>
          <div className="pillarMeta" aria-label="Review metadata">
            <span>Published 2026-08-15</span>
            <span>Reviewed {manifest.lastReviewed}</span>
            <span>{evidenceCount} linked evidence items</span>
            <span>No universal score</span>
          </div>
        </div>

        <div className="agentCore" aria-hidden="true">
          <div className="coreRings" />
          <strong>AI</strong>
          {manifest.agents.slice(0, 4).map((agent, index) => (
            <span className={`orbitChip chip${index + 1}`} key={agent.slug}>
              {agent.name}
            </span>
          ))}
        </div>
      </section>

      <section className="pillarSection" id="agents">
        <div className="pillarSectionHead">
          <div>
            <span className="kicker">Evidence shortlist</span>
            <h2>Compare products by workflow fit, not a fabricated leaderboard.</h2>
          </div>
          <p>
            Every product below links to primary or first-party evidence checked on the
            review date. No AggregateRating or unsupported winner claim is generated.
          </p>
        </div>

        <div className="pillarAgentGrid">
          {manifest.agents.map((agent) => (
            <article className="pillarAgentCard" key={agent.slug}>
              <div className="pillarCardTop">
                <span className="pillarAgentMark">{agent.name.slice(0, 2)}</span>
                <span className="pillarCategory">{agent.category}</span>
              </div>
              <h3>{agent.name}</h3>
              <p>
                {agent.description}
                <sup aria-label={`${agent.name} citations`}>
                  {agent.evidence.map((item, index) => (
                    <a href={item.url} key={item.url} rel="noreferrer" title={item.label}>
                      [{index + 1}]
                    </a>
                  ))}
                </sup>
              </p>
              <div className="pillarTags">
                {agent.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="pillarEvidence">
                <strong>Evidence</strong>
                {agent.evidence.map((item) => (
                  <a href={item.url} key={item.url} rel="noreferrer">
                    {item.label}
                    <small>Verified {item.verifiedOn}</small>
                  </a>
                ))}
              </div>
              <a className="pillarOfficial" href={agent.officialUrl} rel="noreferrer">
                Official product page →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="pillarMethod">
        <div>
          <span className="kicker">Methodology</span>
          <h2>Evidence first. Ranking claims last.</h2>
        </div>
        <div className="pillarMethodGrid">
          {methodologySteps.map((step, index) => (
            <article key={step.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.name}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pillarSection pillarFaqSection">
        <div className="pillarSectionHead">
          <div>
            <span className="kicker">Direct answers</span>
            <h2>Frequently asked questions</h2>
          </div>
        </div>
        <div className="pillarFaqs">
          {manifest.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="pillarSection pillarSources">
        <div className="pillarSectionHead">
          <div>
            <span className="kicker">Provenance</span>
            <h2>Sources used for this pillar</h2>
          </div>
          <p>Primary and first-party sources are shown with the date they were checked.</p>
        </div>
        <div className="pillarSourceGrid">
          {manifest.evidence.map((item) => (
            <a href={item.url} key={item.url} rel="noreferrer">
              <strong>{item.label}</strong>
              <span>{item.sourceType}</span>
              <small>Verified {item.verifiedOn}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="authorityBand pillarLinks">
        <span className="kicker">Continue comparing</span>
        <h2>Move across the authority cluster.</h2>
        <div className="chipGrid">
          {manifest.internalLinks
            .filter((link) => link.href !== `/${manifest.slug}`)
            .map((link) => (
              <a href={link.href} key={link.href}>
                {link.label} →
              </a>
            ))}
        </div>
      </section>

      <footer className="authorityFooter">
        <a href="/">BestAIAgent.in</a>
        <span>Evidence-led AI agent discovery · Reviewed {manifest.lastReviewed}</span>
      </footer>
    </main>
  );
}
