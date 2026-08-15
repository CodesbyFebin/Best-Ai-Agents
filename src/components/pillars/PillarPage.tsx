import type { PillarManifest } from "@/src/types/pillar";

interface PillarPageProps {
  manifest: PillarManifest;
}

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
        dateModified: manifest.lastReviewed,
        isPartOf: { "@id": "https://bestaiagent.in/#website" },
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
    ],
  };

  return (
    <main className="pillarPage authorityPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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

      <section className="pillarHero">
        <div className="pillarHeroCopy">
          <span className="kicker">{manifest.eyebrow}</span>
          <h1>
            {manifest.title}
            {manifest.accentTitle ? <em>{manifest.accentTitle}</em> : null}
          </h1>
          <p className="pillarDescription">{manifest.description}</p>
          <div className="directAnswer" data-direct-answer="true">
            <span>Direct answer</span>
            <p>{manifest.directAnswer}</p>
          </div>
          <div className="pillarMeta" aria-label="Review metadata">
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
              <p>{agent.description}</p>
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
          <article>
            <span>01</span>
            <strong>Match intent</strong>
            <p>Compare products that solve the same user job before crossing categories.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Verify claims</strong>
            <p>Prefer official product, documentation, and pricing sources with retrieval dates.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Expose uncertainty</strong>
            <p>Do not convert incomplete evidence into a universal score, badge, or winner.</p>
          </article>
          <article>
            <span>04</span>
            <strong>Refresh material facts</strong>
            <p>Pricing, availability, integrations, and product capabilities can change.</p>
          </article>
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
