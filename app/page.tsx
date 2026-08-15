import Script from "next/script";
import Image from "next/image";
import businessImg from "@/public/bestaiagent-business-solutions.webp";

interface Agent {
  name: string;
  company: string;
  category: string;
  score: number;
  india: number;
  price: string;
  badge: string;
  tone: string;
  desc: string;
  evidence: number;
}
type Category = [string, string, string];

const agents: Agent[] = [
  { name:"Claude Code", company:"Anthropic", category:"Coding", score:9.2, india:8.4, price:"Usage-based", badge:"Editor pick", tone:"violet", desc:"Terminal-first coding agent for repository-scale implementation and debugging.", evidence:18 },
  { name:"Cursor", company:"Anysphere", category:"Coding", score:9.0, india:8.8, price:"Free + paid", badge:"India popular", tone:"cyan", desc:"AI-native code editor with agent mode, codebase context, and model choice.", evidence:21 },
  { name:"Lindy", company:"Lindy.ai", category:"Automation", score:8.6, india:7.8, price:"Free + paid", badge:"No-code", tone:"pink", desc:"Build workflow agents for inbox, meetings, support, and business operations.", evidence:14 },
  { name:"CrewAI", company:"CrewAI", category:"Frameworks", score:8.7, india:9.1, price:"Open source", badge:"Self-hostable", tone:"amber", desc:"Python framework for role-based multi-agent teams and enterprise workflows.", evidence:17 },
  { name:"n8n", company:"n8n GmbH", category:"Automation", score:8.9, india:9.0, price:"Open source", badge:"Best value", tone:"green", desc:"Visual workflow automation with AI nodes, integrations, and self-hosting.", evidence:23 },
  { name:"Vapi", company:"Vapi", category:"Voice", score:8.5, india:8.2, price:"Usage-based", badge:"Voice stack", tone:"blue", desc:"Developer platform for low-latency, programmable voice AI agents.", evidence:15 },
];
const categories: Category[] = [
  ["Coding","34","Code, test, review, ship"],
  ["Automation","28","Connect work across tools"],
  ["Research","19","Search, synthesise, cite"],
  ["Voice","16","Build phone and speech agents"],
  ["Frameworks","23","Orchestrate custom agents"],
  ["Sales & support","31","Qualify, assist, retain"],
];
const nav = ["Discover","Compare","India Fit","Methodology","Learn"];

export default function Home(){
  const slugify = (s: string) => s.toLowerCase().replace(/ /g, "-");
  return <main>
    <header className="topbar"><a className="brand" href="#top"><span className="brandMark">B</span><span>BestAI<span>Agent</span><b>.in</b></span></a><nav>{nav.map(x=><a key={x} href={`#${slugify(x)}`}>{x}</a>)}</nav><div className="headerActions"><a className="ghost" href="#methodology">How we score</a><a className="primary small" href="#discover">Find an agent</a></div></header>
    <section className="hero" id="top"><div className="aurora one"/><div className="aurora two"/><div className="eyebrow"><span/> Independent AI agent intelligence for India</div><h1>Find the right AI agent.<br/><em>Evidence, not hype.</em></h1><p className="heroCopy">Discover, compare, and evaluate AI agents with transparent scoring, source-backed claims, INR context, deployment options, and India Fit analysis.</p><div className="searchShell"><span className="searchIcon">⌕</span><input id="agent-search" placeholder="Search agents by task, product, or category…" aria-label="Search AI agents" defaultValue=""/><a href="#discover">Explore agents →</a></div><div className="heroNotes"><span>✓ No pay-to-rank</span><span>✓ Sources shown</span><span>✓ India-specific context</span></div><div className="heroShowcase"><Image src={businessImg} alt="BestAIAgent.in business AI solutions for automation, productivity, customer experience, insights, innovation, and growth" priority sizes="(max-width: 720px) 100vw, 1180px"/><div className="showcaseGlow"/><span className="showcaseLabel">Explore AI solutions across every industry</span></div><div className="heroStats"><div><strong>150+</strong><span>Curated agents</span></div><div><strong>30+</strong><span>Evaluation fields</span></div><div><strong>₹ + $</strong><span>Pricing context</span></div><div><strong>100%</strong><span>Methodology visible</span></div></div></section>
    <section className="section categories" id="categories"><div className="sectionHead"><div><span className="kicker">Explore the ecosystem</span><h2>Start with what you need to accomplish</h2></div><a className="textButton" href="#discover">View all categories →</a></div><div className="categoryGrid">{categories.map(([name,count,desc],i)=><a key={name} href="#discover" data-category={["Coding","Automation","Voice","Frameworks"].includes(name)?name:"All"}><span className="catIcon">{["⌘","↗","◎","◉","◇","✦"][i]}</span><strong>{name}</strong><p>{desc}</p><small>{count} evaluated tools <b>→</b></small></a>)}</div></section>
    <section className="section directory" id="discover"><div className="sectionHead"><div><span className="kicker">Evidence-led directory</span><h2>Leading AI agents, clearly compared</h2><p>Scores are editorial assessments—not vendor claims. Inspect evidence, limitations, and update dates.</p></div><div className="updated"><i/> Research updated Aug 2026</div></div><div className="filters">{categories.slice(0,5).map(([name],i)=><button key={name} data-category={i===0?"All":name} className={i===0?"active categoryFilter":"categoryFilter"}>{name}</button>)}</div><div className="agentGrid">{agents.map((a,i)=><article key={a.name} className="agentCard" data-name={a.name} data-category={a.category} data-desc={a.desc}><div className="cardTop"><span className={`agentLogo ${a.tone}`}>{a.name.slice(0,2)}</span><span className="rank">#{i+1}</span><button aria-label={`Compare ${a.name}`} className="compareBtn" data-name={a.name}>⇄</button></div><span className="badge">{a.badge}</span><h3>{a.name}</h3><small>{a.company} · {a.category}</small><p>{a.desc}</p><div className="scores"><div><span>Editorial score</span><strong>{a.score}<small>/10</small></strong></div><div><span>India Fit</span><strong>{a.india}<small>/10</small></strong></div></div><div className="cardMeta"><span>{a.price}</span><span>{a.evidence} evidence items</span></div><a className="profile" href="#methodology">View evidence profile <span>→</span></a></article>)}</div></section>
    <section className="compareBand" id="compare"><div><span className="kicker">Decision workspace</span><h2>Compare agents without opening twelve tabs.</h2><p>Build a side-by-side matrix for capabilities, pricing, privacy, deployment, integrations, evidence quality, and India Fit.</p><a id="comparePrimaryBtn" className="primary" href="#discover">Choose agents to compare</a></div><div className="matrix"><div className="matrixHead"><span>Evaluation signal</span><b>Cursor</b><b>Claude Code</b></div>{[["Repository context","Strong","Strong"],["Editor experience","Native","Terminal"],["Self-host option","No","No"],["India Fit","8.8","8.4"],["Evidence status","Verified","Verified"]].map(r=><div key={r[0]}><span>{r[0]}</span><strong>{r[1]}</strong><strong>{r[2]}</strong></div>)}</div></section>
    <section className="section india" id="india-fit"><div className="indiaVisual"><div className="mapOrb">₹<span>INDIA<br/>FIT</span></div><div className="orbit o1"/><div className="orbit o2"/></div><div className="indiaCopy"><span className="kicker">Built for Indian decisions</span><h2>Global tools. Local buying reality.</h2><p>BestAIAgent.in separates global marketing from practical India readiness. Every India Fit score is built from observable signals—not a flag icon.</p><div className="indiaGrid">{[["₹","Pricing","INR context, taxes, payment support"],["अ","Language","Indic language and speech capability"],["⌂","Deployment","Cloud, regional, or self-hosted options"],["◈","Compliance","Privacy terms and DPDP-relevant signals"]].map(([ic,t,c])=><div key={t}><span>{ic}</span><div><strong>{t}</strong><p>{c}</p></div></div>)}</div><a className="secondary" href="#methodology">See India Fit methodology →</a></div></section>
    <section className="method" id="methodology"><div className="methodIntro"><span className="kicker">Trust layer</span><h2>Every score should be explainable.</h2><p>We show what was tested, what came from a primary source, what remains uncertain, and when each claim was last checked.</p></div><div className="methodSteps">{[["01","Collect","Official documentation, releases, policies, pricing, and hands-on observations."],["02","Verify","Claims receive a source, retrieval date, region, confidence, and review status."],["03","Evaluate","Products are assessed against a published rubric with known limitations."],["04","Refresh","Material changes trigger review; stale commercial claims are clearly marked."]].map(([n,t,c])=><div key={n}><span>{n}</span><strong>{t}</strong><p>{c}</p></div>)}</div></section>
    <section className="section learn" id="learn"><div className="sectionHead"><div><span className="kicker">Learn before you buy</span><h2>Practical AI agent field guides</h2></div><a className="textButton" href="#learn">Explore the knowledge hub →</a></div><div className="learnGrid">{[["Primer","GenAI 101 for India","Models, tokens, context, privacy, cost, and safe adoption."],["Reasoning","CoT, ToT & tool use","Reasoning patterns without confusing fluency for proof."],["Retrieval","Vector search & RAG","Semantic search with provenance, permissions, and evaluation."],["Ecosystem","India AI landscape","IndiaAI, BHASHINI, DPDP, and multilingual reality."]].map(([tag,title,copy],i)=><article key={title}><div className="learnArt"><span>{["AI","∴","↗","IN"][i]}</span></div><small>{tag}</small><h3>{title}</h3><p>{copy}</p><a href="#methodology">Read field guide →</a></article>)}</div></section>
    <section className="cta"><span className="kicker">Make a confident choice</span><h2>Your next AI agent should earn its place.</h2><p>Search the directory, inspect the evidence, and compare the trade-offs that matter to your team.</p><div><a className="primary" href="#discover">Find my AI agent →</a><a className="secondary" href="#compare">Open comparison</a></div></section>
    <footer><div className="brand"><span className="brandMark">B</span><span>BestAI<span>Agent</span><b>.in</b></span></div><p>Independent AI-agent discovery, comparisons, and India-first evaluation.</p><div className="footerLinks">{nav.map(x=><a key={x} href={`#${slugify(x)}`}>{x}</a>)}</div><small>© 2026 BestAIAgent.in · Scores reflect published methodology and available evidence, not guarantees.</small></footer>
    <Script id="agent-interactivity" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:`
(function(){
  var q=document.getElementById('agent-search');
  var cards=document.querySelectorAll('.agentCard');
  var catBtns=document.querySelectorAll('.categoryFilter');
  var catGridLinks=document.querySelectorAll('.categoryGrid a');
  var compare=new Set();

  function setActiveCategory(category){
    catBtns.forEach(function(b){b.classList.toggle('active',b.dataset.category===category);});
    filter();
  }

  function filter(){
    var query=(q&&q.value||'').toLowerCase();
    var active=document.querySelector('.categoryFilter.active');
    var cat=active?active.dataset.category:'All';
    cards.forEach(function(card){
      var name=card.dataset.name||'';
      var c=card.dataset.category||'';
      var desc=card.dataset.desc||'';
      var match=(cat==='All'||c===cat)&&[name,c,desc].some(function(v){return v.toLowerCase().indexOf(query)!==-1;});
      card.style.display=match?'':'none';
    });
  }

  if(q){q.addEventListener('input',filter);}
  catBtns.forEach(function(btn){
    btn.addEventListener('click',function(){
      catBtns.forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      filter();
    });
  });
  catGridLinks.forEach(function(link){
    link.addEventListener('click',function(e){
      e.preventDefault();
      var cat=link.dataset.category;
      setActiveCategory(cat);
      document.getElementById('discover').scrollIntoView({behavior:'smooth'});
    });
  });
  document.querySelectorAll('.compareBtn').forEach(function(btn){
    btn.addEventListener('click',function(){
      var name=btn.dataset.name;
      if(compare.has(name)){compare.delete(name);}else if(compare.size<3){compare.add(name);}
      document.querySelectorAll('.compareBtn').forEach(function(b){b.classList.toggle('active',compare.has(b.dataset.name));});
      var primary=document.getElementById('comparePrimaryBtn');
      if(primary){primary.textContent=compare.size?'Compare '+Array.from(compare).join(' vs '):'Choose agents to compare';}
    });
  });
  filter();
})();
    `}} />
  </main>;
}
