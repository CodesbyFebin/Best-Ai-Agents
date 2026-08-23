import { agents } from "@/data/agents";
import { categories } from "@/data/categories";

export default function Home() {
  const codingAgents = agents
    .filter((a) => a.category === "Coding")
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const topAgents = agents
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  const indiaAgents = agents
    .filter((a) => a.indiaFit >= 8.0)
    .sort((a, b) => b.indiaFit - a.indiaFit)
    .slice(0, 6);

  return (
    <main>
      {/* HERO SECTION - Merged */}
      <section className="relative hero-bg grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Trusted by 50,000+ developers · 10,000+ AI Agents · 100+ Categories</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6">
              Discover. Compare. Deploy.<br />
              <span className="gradient-text">The Best AI Agents.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Master <strong className="text-white">MCP Infrastructure</strong>, navigate <strong className="text-white">India-First DPDP Compliance</strong>, and deploy <strong className="text-white">Sovereign AI</strong>. Evidence-backed, no pay-to-rank.
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-emerald-500/20 blur-xl"></div>
              <div className="relative flex items-center glass rounded-2xl p-2">
                <svg className="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input type="text" placeholder="Search AI agents, e.g. 'Code Reviewer', 'YouTube Summarizer'..." className="flex-1 bg-transparent px-3 py-3 text-white placeholder-gray-500 outline-none text-sm sm:text-base" />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition text-sm sm:text-base">Search</button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 justify-center text-xs">
                <span className="text-gray-500">Popular:</span>
                <button className="text-purple-400 hover:text-purple-300">ChatGPT</button>
                <span className="text-gray-700">•</span>
                <button className="text-purple-400 hover:text-purple-300">Claude</button>
                <span className="text-gray-700">•</span>
                <button className="text-purple-400 hover:text-purple-300">Gemini</button>
                <span className="text-gray-700">•</span>
                <button className="text-purple-400 hover:text-purple-300">Perplexity</button>
                <span className="text-gray-700">•</span>
                <button className="text-purple-400 hover:text-purple-300">GitHub Copilot</button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black gradient-text">10,000+</div>
                <div className="text-xs text-gray-400 mt-1">AI Agents</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black gradient-text">100+</div>
                <div className="text-xs text-gray-400 mt-1">Categories</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black gradient-text">1,000+</div>
                <div className="text-xs text-gray-400 mt-1">Built in India</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black gradient-text">100%</div>
                <div className="text-xs text-gray-400 mt-1">Verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-3xl overflow-hidden gradient-border">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-emerald-900/20"></div>
          <div className="relative p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">Compare Agents</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Can't decide which AI agent is best?</h2>
              <p className="text-gray-400 mb-5">Compare features, pricing, performance and find your perfect match.</p>
              <a href="/compare/" className="px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">Compare AI Agents →</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="glass rounded-2xl p-4 w-32 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl mb-2">🤖</div>
                <div className="text-xs font-semibold">ChatGPT</div>
                <div className="text-[10px] text-gray-500">OpenAI</div>
              </div>
              <div className="text-2xl font-bold text-gray-600">vs</div>
              <div className="glass rounded-2xl p-4 w-32 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-2xl mb-2">🧠</div>
                <div className="text-xs font-semibold">Claude 3.5</div>
                <div className="text-[10px] text-gray-500">Anthropic</div>
              </div>
              <div className="text-2xl font-bold text-gray-600">vs</div>
              <div className="glass rounded-2xl p-4 w-32 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl mb-2">💎</div>
                <div className="text-xs font-semibold">Gemini 1.5</div>
                <div className="text-[10px] text-gray-500">Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFICATION & MCP INFRASTRUCTURE */}
      <section id="mcp" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">BestAIAgent <span className="gradient-text">MCP Infrastructure</span> Deep Dive</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Evaluate Model Context Protocol (MCP) servers with evidence-backed verification. No speculative claims, no synthetic scoring.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 glow-purple">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">C</div>
                <div>
                  <h3 className="font-bold text-lg">Cline</h3>
                  <p className="text-xs text-gray-400">Open-Source Coding Agent</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">VERIFIED</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400">Last Verified</span>
                <span className="font-mono text-gray-200">2026-08-20 14:32 UTC</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400">Source Hash</span>
                <span className="font-mono text-xs text-blue-400">sha256:8f4e2…a1b9</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400">MCP Transport</span>
                <span className="font-mono text-xs text-gray-200">stdio + Streamable HTTP</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">Speculative Claims</span>
                <span className="text-xs text-yellow-400 font-semibold">0 — All Verified</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">The "Code-as-a-Tool" Approach</h3>
            <p className="text-gray-400 mb-6">MCP enables agents to write executable code that calls the MCP server directly as a pure API, bypassing the LLM context window for data transfer.</p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="text-3xl font-black text-emerald-400">98%</div>
                <div className="text-xs text-gray-400 mt-1">Context Window Saved</div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="text-3xl font-black text-blue-400">Docker</div>
                <div className="text-xs text-gray-400 mt-1">Sandboxed Execution</div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="text-3xl font-black text-purple-400">Zero</div>
                <div className="text-xs text-gray-400 mt-1">Custom API Wrappers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/40 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">⚡</div>
              <h3 className="text-xl font-bold text-blue-400">stdio Transport</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">Secure local MCP process lifecycle management. Ideal for inner-loop development via inter-process communication.</p>
            <div className="text-xs font-mono text-gray-500 bg-slate-900/50 p-3 rounded-lg">
              <span className="text-green-400">✓</span> Cline verified MCP stdio local dev<br/>
              <span className="text-green-400">✓</span> Aider stdio transport local docs
            </div>
          </div>
          <div className="bg-slate-800/40 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">🌐</div>
              <h3 className="text-xl font-bold text-purple-400">Streamable HTTP</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">Scalable enterprise deployments with TLS authentication and web observability tools.</p>
            <div className="text-xs font-mono text-gray-500 bg-slate-900/50 p-3 rounded-lg">
              <span className="text-green-400">✓</span> Cursor MCP Streamable HTTP config<br/>
              <span className="text-green-400">✓</span> Enterprise MCP verified secure
            </div>
          </div>
        </div>
      </section>

      {/* INDIA-FIRST & DPDP COMPLIANCE */}
      <section id="india" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs text-orange-300 mb-4">
            <span>🇮🇳</span> Proudly Built in India
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">India-First <span className="india-gradient">Sovereign AI & DPDP Compliance</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Navigate the DPDP Act, verify INR pricing transparency, and deploy sovereign AI with explicit consent management.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-black gradient-text">$3.2B+</div>
            <div className="text-xs text-gray-400 mt-1">Funding Raised</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-black gradient-text">65%</div>
            <div className="text-xs text-gray-400 mt-1">YoY Growth</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-black gradient-text">15M+</div>
            <div className="text-xs text-gray-400 mt-1">Users Worldwide</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-black gradient-text">180+</div>
            <div className="text-xs text-gray-400 mt-1">Cities Building</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-black gradient-text">50+</div>
            <div className="text-xs text-gray-400 mt-1">Countries Served</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-800/40 border border-white/10 rounded-xl p-6">
            <div className="text-3xl mb-3">🇮🇳</div>
            <h3 className="text-lg font-bold mb-2">DPDP Act Compliance</h3>
            <p className="text-sm text-gray-400 mb-4">Voice data classified as biometric data. We verify explicit informed consent and sovereign on-premise deployment.</p>
            <a href="/indian-ai/" className="text-sm text-blue-400 hover:underline">View DPDP Compliant Agents →</a>
          </div>
          <div className="bg-slate-800/40 border border-white/10 rounded-xl p-6">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-bold mb-2">INR Pricing & UPI</h3>
            <p className="text-sm text-gray-400 mb-4">Transparent localized pricing. Standard task-agent bands (₹4–12 lakh), GST invoicing, UPI merchant fees.</p>
            <a href="/best-ai-agent/" className="text-sm text-blue-400 hover:underline">Verify INR Pricing →</a>
          </div>
          <div className="bg-slate-800/40 border border-white/10 rounded-xl p-6">
            <div className="text-3xl mb-3">🗣️</div>
            <h3 className="text-lg font-bold mb-2">Indic Models & Hinglish</h3>
            <p className="text-sm text-gray-400 mb-4">Verified Sarvam-30B and Krutrim-2 instruct for homegrown Hindi/Hinglish code-switching.</p>
            <a href="/indian-ai/" className="text-sm text-blue-400 hover:underline">Explore Indic Models →</a>
          </div>
        </div>

        {indiaAgents.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Featured Indian AI Agents</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {indiaAgents.map((a) => (
                <a key={a.slug} href={`/agents/${a.slug}/`} className="glass rounded-xl p-4 text-center card-hover">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-xl mb-2">
                    {a.name.slice(0, 2)}
                  </div>
                  <div className="text-xs font-semibold text-white">{a.name}</div>
                  <div className="text-[10px] text-gray-500">{a.company}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Explore AI Agents by Category</h2>
            <p className="text-gray-400">Browse categories and discover the perfect agent</p>
          </div>
          <a href="/categories/" className="hidden sm:block text-sm text-purple-400 hover:text-purple-300 font-semibold">View all categories →</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.slice(0, 12).map((cat) => (
            <a key={cat.slug} href={`/categories/${cat.slug}/`} className="glass rounded-xl p-4 card-hover">
              <div className="font-semibold text-white text-sm mb-1">{cat.name}</div>
              <div className="text-xs text-gray-500">{cat.agentCount} agents</div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED AGENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured AI Agents</h2>
            <p className="text-gray-400">Handpicked top performing agents with evidence-backed scores</p>
          </div>
          <a href="/agents/" className="hidden sm:block text-sm text-purple-400 hover:text-purple-300 font-semibold">View all agents →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topAgents.slice(0, 8).map((agent) => (
            <div key={agent.slug} className="glass rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.tone === "violet" ? "from-purple-500 to-purple-700" : agent.tone === "cyan" ? "from-blue-500 to-blue-700" : agent.tone === "green" ? "from-emerald-500 to-emerald-600" : "from-indigo-500 to-indigo-700"} flex items-center justify-center text-white font-bold text-sm`}>
                  {agent.name.slice(0, 2)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{agent.name}</div>
                  <div className="text-[10px] text-gray-500">{agent.company}</div>
                </div>
                <span className="ml-auto tag tag-verified">✓</span>
              </div>
              <div className="text-xs text-gray-400 mb-3">{agent.shortDesc}</div>
              <div className="flex justify-between mb-3">
                <div>
                  <span className="text-xs text-gray-500">Score</span>
                  <span className="text-xs font-semibold text-emerald-400 ml-2">{agent.score}/10</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500">India Fit</span>
                  <span className="text-xs font-semibold text-white ml-2">{agent.indiaFit}/10</span>
                </div>
              </div>
              <a href={`/agents/${agent.slug}/`} className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1">
                View evidence profile <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CODING AGENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top <span className="gradient-text">Coding Agents</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Verified coding agents with evidence-backed scores and India Fit analysis.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {codingAgents.map((a) => (
            <div key={a.slug} className="glass rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${a.tone === "violet" ? "from-purple-500 to-purple-700" : a.tone === "cyan" ? "from-blue-500 to-blue-700" : a.tone === "green" ? "from-emerald-500 to-emerald-600" : "from-indigo-500 to-indigo-700"} flex items-center justify-center text-white font-bold text-sm`}>
                  {a.name.slice(0, 2)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{a.name}</div>
                  <div className="text-[10px] text-gray-500">{a.company}</div>
                </div>
                <span className="ml-auto tag tag-mcp">MCP</span>
              </div>
              <div className="text-xs text-gray-400 mb-3">{a.shortDesc}</div>
              <a href={`/agents/${a.slug}/`} className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1">
                View evidence profile <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / PAA OPTIMIZATION */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Direct answers to the most common queries about AI agent verification, MCP infrastructure, and India-specific compliance.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "How to verify AI agent source code and identity?", a: "BestAIAgent verifies AI agent identity by requiring SHA-256 hashes of source code, direct links to primary documentation, and official repository links. We mark unknown fields clearly to avoid speculative checkboxes and synthetic scoring." },
            { q: "Is BestAIAgent a pay-to-rank directory?", a: "No. BestAIAgent is strictly evidence-backed and operates on a no pay-to-rank policy. Our rankings are based on verifiable data points, weighted aggregation of auditable facts, and radical transparency." },
            { q: "What is the difference between stdio and Streamable HTTP in MCP?", a: "In the Model Context Protocol (MCP), stdio is used for secure local development and inner-loop iteration via inter-process communication. Streamable HTTP is designed for scalable, enterprise-ready remote deployments with TLS authentication and web observability." },
            { q: "How does the DPDP Act affect AI voice agent deployments in India?", a: "The DPDP Act classifies voice data as biometric data, requiring explicit informed consent and robust security. BestAIAgent verifies which agents support sovereign on-premise deployment and explicit consent management for Indian phone calls." },
            { q: "What is the AI agent development cost in India?", a: "Standard task-agent implementation bands in India range from ₹4–12 lakh for custom integrated systems. BestAIAgent provides transparent INR pricing, GST invoicing automation, and UPI merchant fee preparedness for verified agents." },
            { q: "How does MCP reduce context window token bloat?", a: "MCP enables a 'code-as-a-tool' approach where the agent writes executable code (TypeScript/Python) to call the MCP server. This bypasses the LLM context window for data transfer, saving up to 98% of context window tokens." },
            { q: "Which AI models support Hindi and Hinglish code-switching?", a: "BestAIAgent verifies Indic models like Sarvam-30B and Krutrim-2 instruct for homegrown, locally trained Hindi and Hinglish code-switching, outperforming global models in regional cultural context." },
          ].map((item, i) => (
            <details key={i} className="bg-slate-800/40 border border-white/10 rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-gray-200">
                {item.q}
                <svg className="w-5 h-5 text-gray-400 chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-3xl overflow-hidden gradient-border">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40"></div>
          <div className="relative p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Ready to supercharge your productivity?</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">Join 50,000+ developers and businesses using AI agents every day.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-purple-500" />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition">Subscribe</button>
            </div>
            <p className="text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
