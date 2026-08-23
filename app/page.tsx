"use client";
import { useMemo, useState } from "react";
import { agents } from "@/data/agents";
import { categories } from "@/data/categories";

export default function Home() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () =>
      agents.filter(
        (a) =>
          (active === "All" || a.category === active) &&
          `${a.name} ${a.company} ${a.category} ${a.shortDesc}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [active, query]
  );

  const categoryMap = {
    "Coding": "Coding",
    "Automation": "Automation",
    "Voice": "Voice",
    "Frameworks": "Frameworks",
  };

  const visibleCategories = categories.slice(0, 6);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brandMark">B</span>
          <span>
            BestAI<span>Agent</span>
            <b>.in</b>
          </span>
        </a>
        <nav>
          {["Discover", "Compare", "India Fit", "Methodology", "Learn"].map(
            (x) => (
              <button key={x} onClick={() => {
                const element = document.getElementById(
                  x.toLowerCase().replace(" ", "-")
                );
                element?.scrollIntoView({ behavior: "smooth" });
              }}>
                {x}
              </button>
            )
          )}
        </nav>
        <div className="headerActions">
          <button
            className="ghost"
            onClick={() => {
              const element = document.getElementById("methodology");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            How we score
          </button>
          <button
            className="primary small"
            onClick={() => {
              const element = document.getElementById("discover");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Find an agent
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="aurora one" />
        <div className="aurora two" />
        <div className="eyebrow">
          <span /> Independent AI agent intelligence for India
        </div>
        <h1>
          Find the right AI agent.
          <br />
          <em>Evidence, not hype.</em>
        </h1>
        <p className="heroCopy">
          Discover, compare, and evaluate AI agents with transparent scoring,
          source-backed claims, INR context, deployment options, and India Fit
          analysis.
        </p>
        <div className="searchShell">
          <span className="searchIcon">⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              const element = document.getElementById("discover");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            placeholder="Search agents by task, product, or category…"
            aria-label="Search AI agents"
          />
          <button
            onClick={() => {
              const element = document.getElementById("discover");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore agents →
          </button>
        </div>
        <div className="heroNotes">
          <span>✓ No pay-to-rank</span>
          <span>✓ Sources shown</span>
          <span>✓ India-specific context</span>
        </div>
        <div className="heroShowcase">
          <img
            src="/bestaiagent-business-solutions.webp"
            alt="BestAIAgent.in business AI solutions for automation, productivity, customer experience, insights, innovation, and growth"
            width="1400"
            height="699"
            fetchPriority="high"
          />
          <div className="showcaseGlow" />
          <span className="showcaseLabel">
            Explore AI solutions across every industry
          </span>
        </div>
        <div className="heroStats">
          <div>
            <strong>{agents.length}+</strong>
            <span>Curated agents</span>
          </div>
          <div>
            <strong>30+</strong>
            <span>Evaluation fields</span>
          </div>
          <div>
            <strong>₹ + $</strong>
            <span>Pricing context</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Evidence-backed</span>
          </div>
        </div>
      </section>

      <section className="section categories" id="categories">
        <div className="sectionHead">
          <div>
            <span className="kicker">Explore the ecosystem</span>
            <h2>Start with what you need to accomplish</h2>
          </div>
        </div>
        <div className="categoryGrid">
          {visibleCategories.map((cat, i) => (
            <button
              key={cat.slug}
              className="categoryCard"
              onClick={() => {
                const element = document.getElementById("discover");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="catIcon">{["⌘", "↗", "◎", "◉", "◇", "✦"][i]}</span>
              <strong>{cat.name}</strong>
              <p>{cat.description}</p>
              <small>
                {cat.agentCount} evaluated tools <b>→</b>
              </small>
            </button>
          ))}
        </div>
      </section>

      <section className="section directory" id="discover">
        <div className="sectionHead">
          <div>
            <span className="kicker">Evidence-led directory</span>
            <h2>Leading AI agents, clearly compared</h2>
            <p>
              Scores are editorial assessments—not vendor claims. Inspect evidence,
              limitations, and update dates.
            </p>
          </div>
          <div className="updated">
            <i /> Research updated Aug 2026
          </div>
        </div>
        <div className="filters">
          {["All", "Coding", "Automation", "Frameworks", "Voice"].map((x) => (
            <button
              key={x}
              className={active === x ? "active" : ""}
              onClick={() => setActive(x)}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="agentGrid">
          {filtered.map((a, i) => (
            <article className="agentCard" key={a.slug}>
              <div className="cardTop">
                <span className={`agentLogo ${a.tone}`}>{a.name.slice(0, 2)}</span>
                <span className="rank">#{i + 1}</span>
              </div>
              <span className="badge">{a.badge}</span>
              <h3>{a.name}</h3>
              <small>
                {a.company} · {a.category}
              </small>
              <p>{a.shortDesc}</p>
              <div className="scores">
                <div>
                  <span>Editorial score</span>
                  <strong>
                    {a.score}
                    <small>/10</small>
                  </strong>
                </div>
                <div>
                  <span>India Fit</span>
                  <strong>
                    {a.indiaFit}
                    <small>/10</small>
                  </strong>
                </div>
              </div>
              <div className="cardMeta">
                <span>{a.price}</span>
                <span>{a.evidenceItems} evidence items</span>
              </div>
              <a
                href={`/agents/${a.slug}/`}
                className="profile"
              >
                View evidence profile <span>→</span>
              </a>
            </article>
          ))}
          {!filtered.length && (
            <div className="empty">
              No matching agents yet. Try a broader task or category.
            </div>
          )}
        </div>
      </section>

      <section className="compareBand" id="compare">
        <div>
          <span className="kicker">Decision workspace</span>
          <h2>Compare agents without opening twelve tabs.</h2>
          <p>
            Build a side-by-side matrix for capabilities, pricing, privacy,
            deployment, integrations, evidence quality, and India Fit.
          </p>
        </div>
      </section>

      <section className="section india" id="india-fit">
        <div className="indiaVisual">
          <div className="mapOrb">
            ₹<span>
              INDIA<br />
              FIT
            </span>
          </div>
        </div>
        <div className="indiaCopy">
          <span className="kicker">Built for Indian decisions</span>
          <h2>
            Global tools. Local buying reality.
          </h2>
          <p>
            BestAIAgent.in separates global marketing from practical India
            readiness. Every India Fit score is built from observable signals—not
            a flag icon.
          </p>
          <div className="indiaGrid">
            {[
              ["₹", "Pricing", "INR context, taxes, payment support"],
              ["अ", "Language", "Indic language and speech capability"],
              ["⌂", "Deployment", "Cloud, regional, or self-hosted options"],
              ["◈", "Compliance", "Privacy terms and DPDP-relevant signals"],
            ].map(([ic, t, c]) => (
              <div key={t as string}>
                <span>{ic}</span>
                <div>
                  <strong>{t}</strong>
                  <p>{c as string}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="secondary"
            onClick={() => {
              const element = document.getElementById("methodology");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See India Fit methodology →
          </button>
        </div>
      </section>

      <section className="method" id="methodology">
        <div className="methodIntro">
          <span className="kicker">Trust layer</span>
          <h2>Every score should be explainable.</h2>
          <p>
            We show what was tested, what came from a primary source, what remains
            uncertain, and when each claim was last checked.
          </p>
        </div>
        <div className="methodSteps">
          {[
            [
              "01",
              "Collect",
              "Official documentation, releases, policies, pricing, and hands-on observations.",
            ],
            [
              "02",
              "Verify",
              "Claims receive a source, retrieval date, region, confidence, and review status.",
            ],
            [
              "03",
              "Evaluate",
              "Products are assessed against a published rubric with known limitations.",
            ],
            [
              "04",
              "Refresh",
              "Material changes trigger review; stale commercial claims are clearly marked.",
            ],
          ].map(([n, t, c]) => (
            <div key={n as string}>
              <span>{n}</span>
              <strong>{t as string}</strong>
              <p>{c as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section learn" id="learn">
        <div className="sectionHead">
          <div>
            <span className="kicker">Learn before you buy</span>
            <h2>Practical AI agent field guides</h2>
          </div>
        </div>
        <div className="learnGrid">
          {[
            ["Primer", "GenAI 101 for India", "Models, tokens, context, privacy, cost, and safe adoption."],
            ["Reasoning", "CoT, ToT & tool use", "Reasoning patterns without confusing fluency for proof."],
            ["Retrieval", "Vector search & RAG", "Semantic search with provenance, permissions, and evaluation."],
            ["Ecosystem", "India AI landscape", "IndiaAI, BHASHINI, DPDP, and multilingual reality."],
          ].map(([tag, title, copy], i) => (
            <article key={title as string}>
              <div className="learnArt">
                <span>{["AI", "∴", "↗", "IN"][i]}</span>
              </div>
              <small>{tag as string}</small>
              <h3>{title as string}</h3>
              <p>{copy as string}</p>
              <button>Read field guide →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <span className="kicker">Make a confident choice</span>
        <h2>Your next AI agent should earn its place.</h2>
        <p>
          Search the directory, inspect the evidence, and compare the trade-offs
          that matter to your team.
        </p>
        <div>
          <button
            className="primary"
            onClick={() => {
              const element = document.getElementById("discover");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Find my AI agent →
          </button>
          <button
            className="secondary"
            onClick={() => {
              const element = document.getElementById("compare");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Open comparison
          </button>
        </div>
      </section>

      <footer>
        <div className="brand">
          <span className="brandMark">B</span>
          <span>
            BestAI<span>Agent</span>
            <b>.in</b>
          </span>
        </div>
        <p>Independent AI-agent discovery, comparisons, and India-first evaluation.</p>
        <div className="footerLinks">
          <a href="#discover">Directory</a>
          <a href="#compare">Compare</a>
          <a href="#india-fit">India Fit</a>
          <a href="#methodology">Methodology</a>
          <a href="#learn">Learn</a>
        </div>
        <small>© 2026 BestAIAgent.in · Scores reflect published methodology and available evidence, not guarantees.</small>
      </footer>
    </main>
  );
}