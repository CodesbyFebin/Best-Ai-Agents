export default function Home() {
  return (
    <main>
      {/* Particles */}
      <div id="particles" className="fixed inset-0 pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#top" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 via-cyber-500 to-trust-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-shadow">
                B
              </div>
              <div>
                <span className="font-bold text-white text-base">
                  BestAIAgent<span className="text-brand-500">.in</span>
                </span>
                <span className="hidden sm:inline-flex items-center ml-2 px-1.5 py-0.5 rounded text-[9px] font-bold bg-trust-500/10 text-trust-400 border border-trust-500/20">
                  VERIFIED
                </span>
              </div>
            </a>
            <div className="hidden lg:flex items-center gap-7">
              <a href="#services" className="nav-link text-sm text-slate-300 hover:text-white font-medium">
                Services
              </a>
              <a href="#mcp" className="nav-link text-sm text-slate-300 hover:text-white font-medium">
                MCP Infra
              </a>
              <a href="#directory" className="nav-link text-sm text-slate-300 hover:text-white font-medium">
                Directory
              </a>
              <a href="#india" className="nav-link text-sm text-slate-300 hover:text-white font-medium">
                India / DPDP
              </a>
              <a href="#pricing" className="nav-link text-sm text-slate-300 hover:text-white font-medium">
                Pricing
              </a>
              <a href="#faq" className="nav-link text-sm text-slate-300 hover:text-white font-medium">
                FAQ
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden sm:block btn-s px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white">
                Search
              </button>
              <a
                href="#contact"
                className="btn-p px-5 py-2 rounded-lg text-sm font-semibold text-white"
              >
                Get Started
              </a>
              <button id="menuBtn" className="lg:hidden text-white p-2" aria-label="Menu">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          id="mobileNav"
          className="mobile-nav fixed top-16 right-0 bottom-0 w-72 glass-dark lg:hidden z-50"
        >
          <div className="p-6 space-y-1">
            <a
              href="#services"
              className="block py-3 px-4 text-white hover:text-brand-500 font-medium rounded-lg hover:bg-white/5 transition"
            >
              Services
            </a>
            <a
              href="#mcp"
              className="block py-3 px-4 text-slate-300 hover:text-brand-500 font-medium rounded-lg hover:bg-white/5 transition"
            >
              MCP Infra
            </a>
            <a
              href="#directory"
              className="block py-3 px-4 text-slate-300 hover:text-brand-500 font-medium rounded-lg hover:bg-white/5 transition"
            >
              Directory
            </a>
            <a
              href="#india"
              className="block py-3 px-4 text-slate-300 hover:text-brand-500 font-medium rounded-lg hover:bg-white/5 transition"
            >
              India / DPDP
            </a>
            <a
              href="#pricing"
              className="block py-3 px-4 text-slate-300 hover:text-brand-500 font-medium rounded-lg hover:bg-white/5 transition"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block py-3 px-4 text-slate-300 hover:text-brand-500 font-medium rounded-lg hover:bg-white/5 transition"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="block mt-4 btn-p py-3 px-4 rounded-lg text-center font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 hero-radial grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-fadeUp">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-trust-400 animate-pulse"></span>
                  No Pay-to-Rank · Evidence-Backed · SHA-256 Verified
                </div>
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] mb-5">
                  The Definitive
                  <br />
                  <span className="gradient-text">Engineering Handbook</span>
                  <br />
                  for Verified AI Agents
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                  Master <strong className="text-slate-200">MCP Infrastructure</strong>,
                  navigate <strong className="text-slate-200">India-First DPDP Compliance</strong>,
                  and deploy <strong className="text-slate-200">Sovereign AI</strong>. We reject
                  synthetic hype and provide radical transparency.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 animate-fadeUp d2">
                <a
                  href="#mcp"
                  className="btn-p px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Explore MCP Infrastructure
                </a>
                <a
                  href="#india"
                  className="btn-s px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  View DPDP Compliant Agents
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 animate-fadeUp d3">
                <div>
                  <div className="text-2xl font-black gradient-text counter" data-target="296">
                    0
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Verified Pages</div>
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text counter" data-target="69">
                    0
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Verified Agents</div>
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text counter" data-target="50">
                    0
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Topic Pillars</div>
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text">99.9%</div>
                  <div className="text-xs text-slate-500 mt-1">Uptime SLA</div>
                </div>
              </div>
            </div>
            {/* Right Visual */}
            <div className="hidden lg:block animate-fadeUp d4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-cyber-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative glass rounded-3xl p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-lg">
                      C
                    </div>
                    <div>
                      <div className="font-bold text-white">Cline — Verified Agent</div>
                      <div className="text-xs text-slate-500">Open-Source Coding Agent</div>
                    </div>
                    <span className="ml-auto tag tag-verified">✓ VERIFIED</span>
                  </div>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">Last Verified</span>
                      <span className="font-mono text-slate-300 text-xs">2026-08-20 14:32 UTC</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">Source Hash</span>
                      <span className="font-mono text-cyan-400 text-xs">sha256:8f4e2…a1b9</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">MCP Transport</span>
                      <span className="font-mono text-slate-300 text-xs">stdio + Streamable HTTP</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-500">DPDP Status</span>
                      <span className="text-xs">
                        <span className="tag tag-dpdp">Compliant</span>
                      </span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-500">Speculative Claims</span>
                      <span className="text-xs text-trust-400 font-semibold">0 — All Verified</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="tag tag-mcp">MCP</span>
                    <span className="tag tag-dpdp">DPDP</span>
                    <span className="tag tag-india">🇮🇳 Made in India</span>
                    <span className="tag tag-new">Open Source</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-s">
          <svg
            className="w-5 h-5 text-brand-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-10 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 mb-6 uppercase tracking-widest">
            Trusted by builders across India's AI ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-50">
            <span className="text-lg font-bold text-slate-400">Tata</span>
            <span className="text-lg font-bold text-slate-400">Infosys</span>
            <span className="text-lg font-bold text-slate-400">Wipro</span>
            <span className="text-lg font-bold text-slate-400">Reliance</span>
            <span className="text-lg font-bold text-slate-400">Sarvam AI</span>
            <span className="text-lg font-bold text-slate-400">Krutrim</span>
            <span className="text-lg font-bold text-slate-400">Bhashini</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Our Services
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From concept to deployment — end-to-end AI solutions tailored for Indian
              businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Agents Development</h3>
              <ul className="space-y-2 text-slate-400 text-sm mb-5">
                <li className="flex gap-2">
                  <span className="text-brand-500">•</span>Autonomous AI Agents
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-500">•</span>Multi-agent Systems
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-500">•</span>Domain-specific Agents
                </li>
              </ul>
              <a
                href="#"
                className="text-brand-500 hover:text-brand-400 text-sm font-semibold flex items-center gap-1 group"
              >
                Learn More{" "}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-600 to-cyber-500 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">MCP Servers & Integration</h3>
              <ul className="space-y-2 text-slate-400 text-sm mb-5">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>Model Context Protocol
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>Custom MCP Servers
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>stdio & Streamable HTTP
                </li>
              </ul>
              <a
                href="#mcp"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1 group"
              >
                Learn More{" "}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-cyan-600 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom AI Solutions</h3>
              <ul className="space-y-2 text-slate-400 text-sm mb-5">
                <li className="flex gap-2">
                  <span className="text-brand-500">•</span>Tailored AI Models
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-500">•</span>Industry-Specific AI
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-500">•</span>Bespoke Integrations
                </li>
              </ul>
              <a
                href="#"
                className="text-brand-500 hover:text-brand-400 text-sm font-semibold flex items-center gap-1 group"
              >
                Learn More{" "}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-trust-600 to-trust-500 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Infrastructure & Hosting</h3>
              <ul className="space-y-2 text-slate-400 text-sm mb-5">
                <li className="flex gap-2">
                  <span className="text-trust-400">•</span>Scalable Cloud Hosting
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">•</span>India Data Centers
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">•</span>99.9% Uptime SLA
                </li>
              </ul>
              <a
                href="#"
                className="text-trust-400 hover:text-trust-300 text-sm font-semibold flex items-center gap-1 group"
              >
                Learn More{" "}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DPDP Compliance Consulting</h3>
              <ul className="space-y-2 text-slate-400 text-sm mb-5">
                <li className="flex gap-2">
                  <span className="text-orange-400">•</span>DPDP Act Audit
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400">•</span>Data Residency Strategy
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400">•</span>Consent Management
                </li>
              </ul>
              <a
                href="#india"
                className="text-orange-400 hover:text-orange-300 text-sm font-semibold flex items-center gap-1 group"
              >
                Learn More{" "}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-brand-500 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Consulting & Strategy</h3>
              <ul className="space-y-2 text-slate-400 text-sm mb-5">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>AI Readiness Assessment
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>Agent Architecture Design
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>ROI & TCO Analysis
                </li>
              </ul>
              <a
                href="#contact"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1 group"
              >
                Talk to Expert{" "}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MCP INFRASTRUCTURE */}
      <section
        id="mcp"
        className="py-24 relative bg-gradient-to-b from-transparent via-cyan-500/[.03] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
              MCP Infrastructure
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Model Context Protocol
              <br />
              <span className="gradient-text">Deep Dive</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Evaluate MCP servers, transport options, and sandboxed execution for
              enterprise and local dev setups
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass rounded-2xl p-7 card-hover border-l-4 border-l-cyan-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-cyan-400">
                  stdio Transport
                </h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Secure local MCP process lifecycle management. Ideal for inner-loop
                development and rapid iteration via inter-process communication.
              </p>
              <div className="text-xs font-mono text-slate-500 bg-slate-900/60 p-3 rounded-lg space-y-1">
                <div>
                  <span className="text-trust-400">✓</span> Cline verified MCP stdio local dev
                </div>
                <div>
                  <span className="text-trust-400">✓</span> Aider stdio transport local docs
                </div>
                <div>
                  <span className="text-trust-400">✓</span> SWE-agent terminal sandboxed
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-7 card-hover border-l-4 border-l-brand-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-500 text-lg">
                  🌐
                </div>
                <h3 className="text-xl font-bold text-brand-500">
                  Streamable HTTP
                </h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Scalable enterprise deployments with TLS authentication and web
                observability. Fully-managed remote MCP endpoints.
              </p>
              <div className="text-xs font-mono text-slate-500 bg-slate-900/60 p-3 rounded-lg space-y-1">
                <div>
                  <span className="text-trust-400">✓</span> Cursor MCP Streamable HTTP config
                </div>
                <div>
                  <span className="text-trust-400">✓</span> Enterprise MCP verified secure
                </div>
                <div>
                  <span className="text-trust-400">✓</span> Google Cloud managed endpoints
                </div>
              </div>
            </div>
          </div>
          {/* Code-as-a-Tool */}
          <div className="glass rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              The "Code-as-a-Tool" Approach
            </h3>
            <p className="text-slate-400 mb-8 max-w-3xl">
              How does MCP reduce context window token bloat? The agent writes
              executable code (TypeScript/Python) that calls the MCP server
              directly as a pure API — bypassing the LLM context window for data
              transfer.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 rounded-xl p-5 text-center border border-white/5">
                <div className="text-3xl font-black text-trust-400">98%</div>
                <div className="text-xs text-slate-500 mt-1">
                  Context Window Saved
                </div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 text-center border border-white/5">
                <div className="text-3xl font-black text-cyan-400">Docker</div>
                <div className="text-xs text-slate-500 mt-1">
                  Sandboxed Execution
                </div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 text-center border border-white/5">
                <div className="text-3xl font-black text-brand-500">Zero</div>
                <div className="text-xs text-slate-500 mt-1">
                  Custom API Wrappers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY SHOWCASE */}
      <section id="directory" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Agent Directory
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Verified AI Agent <span className="gradient-text">Directory</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              50 topic pillars · 296 canonical pages · Every claim verified with
              source evidence
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold">
                  Cl
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Cline</div>
                  <div className="text-[10px] text-slate-500">
                    Open-Source Coding
                  </div>
                </div>
                <span className="ml-auto tag tag-verified">✓</span>
              </div>
              <div className="flex gap-1.5 mb-3">
                <span className="tag tag-mcp">MCP</span>
                <span className="tag tag-new">OSS</span>
              </div>
              <div className="text-xs text-slate-400">
                VS Code native coding agent with MCP stdio + Streamable HTTP
                support. Verified source hash.
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white font-bold">
                  Cu
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Cursor</div>
                  <div className="text-[10px] text-slate-500">AI IDE</div>
                </div>
                <span className="ml-auto tag tag-verified">✓</span>
              </div>
              <div className="flex gap-1.5 mb-3">
                <span className="tag tag-mcp">MCP</span>
                <span className="tag tag-dpdp">INR ₹</span>
              </div>
              <div className="text-xs text-slate-400">
                AI-first IDE with MCP server configuration. INR pricing verified.
                Streamable HTTP enterprise.
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-trust-500 to-trust-600 flex items-center justify-center text-white font-bold">
                  Sa
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Sarvam AI</div>
                  <div className="text-[10px] text-slate-500">Indic LLM</div>
                </div>
                <span className="ml-auto tag tag-india">🇮🇳</span>
              </div>
              <div className="flex gap-1.5 mb-3">
                <span className="tag tag-india">Indic</span>
                <span className="tag tag-dpdp">DPDP</span>
              </div>
              <div className="text-xs text-slate-400">
                Homegrown Indic LLM. Hindi/Hinglish code-switching. Outperforms
                global models in regional context.
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-bold">
                  Kr
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Krutrim</div>
                  <div className="text-[10px] text-slate-500">Indian LLM</div>
                </div>
                <span className="ml-auto tag tag-india">🇮🇳</span>
              </div>
              <div className="flex gap-1.5 mb-3">
                <span className="tag tag-india">Indic</span>
                <span className="tag tag-new">Krutrim-2</span>
              </div>
              <div className="text-xs text-slate-400">
                India's first multilingual LLM by Oli Labs. Locally trained for
                Indian languages and use cases.
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-bold">
                  Lg
                </div>
                <div>
                  <div className="font-bold text-white text-sm">LangGraph</div>
                  <div className="text-[10px] text-slate-500">
                    Agent Framework
                  </div>
                </div>
                <span className="ml-auto tag tag-verified">✓</span>
              </div>
              <div className="flex gap-1.5 mb-3">
                <span className="tag tag-mcp">MCP</span>
                <span className="tag tag-new">Graph</span>
              </div>
              <div className="text-xs text-slate-400">
                Graph-based agent orchestration. Verified lifecycle status.
                Multi-agent coordination verified.
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center text-white font-bold">
                  Va
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Vapi</div>
                  <div className="text-[10px] text-slate-500">Voice AI</div>
                </div>
                <span className="ml-auto tag tag-verified">✓</span>
              </div>
              <div className="flex gap-1.5 mb-3">
                <span className="tag tag-dpdp">DPDP</span>
                <span className="tag tag-mcp">MCP</span>
              </div>
              <div className="text-xs text-slate-400">
                Voice AI platform. INR pricing verified. DPDP consent management
                for Indian phone calls.
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">
                  Fl
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Flowise</div>
                  <div className="text-[10px] text-slate-500">
                    No-Code Builder
                  </div>
                </div>
                <span className="ml-auto tag tag-verified">✓</span>
              </div>
              <div className="flex gap-1.5 mb-3">
                <span className="tag tag-mcp">MCP</span>
                <span className="tag tag-new">OSS</span>
              </div>
              <div className="text-xs text-slate-400">
                Open-source no-code agent builder. MCP integration verified.
                Self-hosted or cloud options.
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center text-white font-bold">
                  Bh
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Bhashini</div>
                  <div className="text-[10px] text-slate-500">
                    Govt of India
                  </div>
                </div>
                <span className="ml-auto tag tag-india">🇮🇳</span>
              </div>
              <div className="flex gap-1.5 mb-3">
                <span className="tag tag-india">Govt</span>
                <span className="tag tag-dpdp">DPDP</span>
              </div>
              <div className="text-xs text-slate-400">
                Government language translation platform. Multi-language support
                for all Indian languages.
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href="#"
              className="btn-p px-8 py-3.5 rounded-xl font-semibold text-white text-sm inline-flex items-center gap-2"
            >
              Browse All 296 Verified Pages{" "}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* INDIA / DPDP */}
      <section
        id="india"
        className="py-24 relative bg-gradient-to-b from-transparent via-orange-500/[.03] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 mb-4">
              🇮🇳 India-First
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sovereign AI &{" "}
              <span className="india-gradient">DPDP Compliance</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Navigate the DPDP Act, verify INR pricing transparency, and deploy
              sovereign AI with explicit consent management
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-2xl p-7 card-hover border-t-4 border-t-orange-500">
              <div className="text-3xl mb-4">🇮🇳</div>
              <h3 className="text-lg font-bold text-white mb-2">
                DPDP Act Compliance
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Voice data classified as biometric data under DPDP. We verify
                which agents support explicit informed consent and sovereign
                on-premise deployment.
              </p>
              <a
                href="#"
                className="text-orange-400 hover:text-orange-300 text-sm font-semibold"
              >
                View Compliant Agents →
              </a>
            </div>
            <div className="glass rounded-2xl p-7 card-hover border-t-4 border-t-brand-500">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">
                INR Pricing & UPI
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Transparent localized pricing. Standard task-agent bands
                (₹4–12 lakh), GST invoicing automation, and UPI merchant fee
                preparedness.
              </p>
              <a
                href="#pricing"
                className="text-brand-500 hover:text-brand-400 text-sm font-semibold"
              >
                Verify INR Pricing →
              </a>
            </div>
            <div className="glass rounded-2xl p-7 card-hover border-t-4 border-t-trust-500">
              <div className="text-3xl mb-4">🗣️</div>
              <h3 className="text-lg font-bold text-white mb-2">
                Indic Models & Hinglish
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Verified Sarvam-30B and Krutrim-2 instruct for homegrown Hindi
                and Hinglish code-switching. Outperforms global models in regional
                context.
              </p>
              <a
                href="#"
                className="text-trust-400 hover:text-trust-300 text-sm font-semibold"
              >
                Explore Indic Models →
              </a>
            </div>
          </div>
          {/* Deployment Options */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Sovereign Deployment Options — Verified
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/60 rounded-xl p-5 border border-white/5">
                <div className="font-semibold text-sm text-white mb-1">
                  On-Premise
                </div>
                <p className="text-xs text-slate-500">
                  Data fiduciary security. Air-gapped enterprise agents.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 border border-white/5">
                <div className="font-semibold text-sm text-white mb-1">
                  Private Cloud
                </div>
                <p className="text-xs text-slate-500">
                  India data centers. Sovereign data residency verified.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 border border-white/5">
                <div className="font-semibold text-sm text-white mb-1">
                  Local Machine
                </div>
                <p className="text-xs text-slate-500">
                  Ollama self-hosted. Privacy-first local execution.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 border border-white/5">
                <div className="font-semibold text-sm text-white mb-1">
                  Free Trial Credits
                </div>
                <p className="text-xs text-slate-500">
                  Fireworks, Baseten, Nebius — no credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Platform Overview
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              What Makes <span className="gradient-text">BestAIAgent.in</span> Different
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The AI agent market is saturated with promotional content and
              pay-to-rank directories. We take the opposite approach: every claim
              is verified, sourced, and reproducible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Evidence-First Directory
              </h3>
              <p className="text-slate-400 mb-4">
                Our directory covers 69 verified AI agents, 30 core language
                models, 32 agent frameworks, 12 categories, and 4 comparison
                studies. Every entry is evaluated using the same transparent
                rubric, with the same rigor applied regardless of vendor size or
                marketing budget. We do not accept payments for placement, and
                there is no way to buy a higher score.
              </p>
              <p className="text-slate-400 mb-4">
                Each agent profile includes a composite editorial score (out of
                10), an India Fit score (out of 10), an evidence count, a
                last-verified date, and a confidence indicator. You can inspect
                the underlying evidence, verify source links, and challenge any
                assessment through our public GitHub repository. This radical
                transparency is what separates us from traditional review sites.
              </p>
              <p className="text-slate-400 mb-4">
                We also maintain a public verification log that records every
                evidence-gathering activity, including screenshots of pricing
                pages, benchmark test results, and source document hashes. This
                log is updated monthly and available to any reader who wants to
                validate our findings independently.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                No Synthetic Hype
              </h3>
              <p className="text-slate-400 mb-4">
                We reject synthetic hype and fabricated user counts. Every data
                point on our site is traceable to a primary source or our own
                hands-on testing. If we cannot verify a claim, we mark it as
                unverified rather than presenting it as fact. This disciplined
                approach means our scores reflect genuine capability, not
                marketing narratives.
              </p>
              <p className="text-slate-400">
                For Indian users and enterprises, this matters enormously.
                Procurement decisions worth lakhs of rupees should not rest on
                vendor marketing copy. Our evidence-backed scores give you a
                defensible basis for choosing the right AI agent, model, or
                framework for your specific use case and compliance requirements.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                India-First by Design
              </h3>
              <p className="text-slate-400 mb-4">
                India is not an afterthought for us — it is central to our
                mission. We maintain a distinct India Fit score for every
                listing, evaluating INR pricing, UPI payment support, Indic
                language capabilities, on-premise deployment options, and DPDP
                Act compliance. No other global AI directory provides this level
                of India-specific analysis.
              </p>
              <p className="text-slate-400 mb-4">
                Our India hub consolidates all India-specific content: DPDP Act
                compliance analyses, INR pricing transparency reports, Indic
                language model evaluations, and sovereign AI deployment guides.
                We track which agents offer local deployment in Indian cloud
                regions (AWS Mumbai, GCP Hyderabad, Azure Pune), which support
                Hindi and Hinglish, and which have verified data residency
                controls suitable for the DPDP Act.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                MCP Infrastructure Coverage
              </h3>
              <p className="text-slate-400 mb-4">
                We were among the first platforms to comprehensively cover Model
                Context Protocol (MCP) infrastructure. Our MCP directory spans 50
                topic clusters across 5 search-intent buckets: commercial intent,
                transactional/localized, informational/commercial,
                navigational/use-case, and troubleshooting. Each cluster is
                interlinked and evidence-backed.
              </p>
              <p className="text-slate-400">
                For every MCP server we verify, we check transport configuration
                (stdio vs Streamable HTTP), sandboxing support, authentication
                requirements, and security posture. Our testing covers macOS,
                Windows, Linux, and Docker environments, with results published
                alongside SHA-256 source hashes so you can reproduce our findings.
              </p>
              <div className="mt-6 rounded-xl p-5 border border-brand-500/30 bg-brand-500/5">
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Bottom line:</strong> If you are
                  making an AI procurement decision in India, BestAIAgent.in gives
                  you the evidence, scores, and India-specific context to make it
                  confidently — without vendor influence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Our Process
            </div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-white mb-4">
              How We <span className="gradient-text">Verify & Build</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 card-hover relative">
              <div className="absolute top-4 right-4 text-4xl font-black text-white/5">
                01
              </div>
              <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-500 mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Audit</h3>
              <p className="text-xs text-slate-400">
                Every URL audited for intent, canonical identity, and content
                quality. 303 GSC URLs → 296 canonical targets.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 card-hover relative">
              <div className="absolute top-4 right-4 text-4xl font-black text-white/5">
                02
              </div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Verify</h3>
              <p className="text-xs text-slate-400">
                Claims receive a source, retrieval date, region, confidence, and
                review status.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 card-hover relative">
              <div className="absolute top-4 right-4 text-4xl font-black text-white/5">
                03
              </div>
              <div className="w-10 h-10 rounded-lg bg-trust-500/20 flex items-center justify-center text-trust-400 mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Evaluate</h3>
              <p className="text-xs text-slate-400">
                Products assessed against published rubric with known limitations.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 card-hover relative">
              <div className="absolute top-4 right-4 text-4xl font-black text-white/5">
                04
              </div>
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Deploy</h3>
              <p className="text-xs text-slate-400">
                Push to main. Vercel auto-deploy. 99.9% uptime SLA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="py-24 bg-gradient-to-b from-transparent via-brand-500/[.03] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              INR Pricing
            </div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-white mb-4">
              Transparent <span className="gradient-text">INR Pricing</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Transparent pricing with GST invoicing and UPI support. No hidden
              fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-sm font-semibold text-slate-400 mb-2">
                Starter
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-white">Free</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                For trying out verified agents
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300 mb-6">
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Access to free verified agents
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Basic MCP infrastructure
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Community support
                </li>
                <li className="flex gap-2 text-slate-500">
                  <span>✗</span>Limited usage
                </li>
              </ul>
              <button className="w-full btn-s py-2.5 rounded-lg text-sm font-semibold text-white">
                Get Started Free
              </button>
            </div>
            <div className="relative rounded-2xl p-7 bg-gradient-to-br from-brand-500/10 to-cyan-500/10 border border-brand-500/30 card-hover">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-brand-600 to-cyan-600 text-white text-[10px] font-bold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-sm font-semibold text-brand-500 mb-2">
                Pro
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-white">₹499</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                For professionals & teams · GST included
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300 mb-6">
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Unlimited premium agents
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Full MCP infrastructure
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Priority support
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>UPI & GST invoicing
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>DPDP compliance tools
                </li>
              </ul>
              <button className="w-full btn-p py-2.5 rounded-lg text-sm font-semibold text-white">
                Go Pro — ₹499/mo
              </button>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-sm font-semibold text-slate-400 mb-2">
                Enterprise
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-white">Custom</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                ₹4–12 lakh implementation bands
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300 mb-6">
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Everything in Pro
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>On-premise deployment
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Custom MCP servers
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>Dedicated support
                </li>
                <li className="flex gap-2">
                  <span className="text-trust-400">✓</span>SSO & advanced security
                </li>
              </ul>
              <button className="w-full btn-s py-2.5 rounded-lg text-sm font-semibold text-white">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 bg-gradient-to-b from-transparent via-brand-500/[.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              Who We Serve
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Built for India's <span className="gradient-text">AI Builders</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From indie developers to enterprise procurement teams, our platform
              serves everyone making AI decisions in the Indian market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Developers & Indie Hackers
              </h3>
              <p className="text-sm text-slate-400">
                Compare coding agents like Claude Code, Cursor, and Cline with
                hands-on benchmark data. Find MCP servers that work with your
                local dev setup. Verify INR pricing before you commit. Our
                evidence-backed scores help you pick tools that fit your workflow
                and budget.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Startups & SMBs
              </h3>
              <p className="text-sm text-slate-400">
                Evaluate business automation agents with transparent pricing and
                DPDP compliance checks. Understand which agents support UPI
                payments, GST invoicing, and Indian language customer support.
                Make procurement decisions worth lakhs with confidence.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Enterprises & Government
              </h3>
              <p className="text-sm text-slate-400">
                Verify sovereign AI deployment options, on-premise capabilities,
                and data residency controls. Our DPDP compliance analysis covers
                consent management, audit logging, and localization requirements
                for regulated Indian sectors including BFSI and healthcare.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Researchers & Academics
              </h3>
              <p className="text-sm text-slate-400">
                Access our research reports on India's AI landscape, MCP
                ecosystem adoption, and agent buyer behavior. All methodology,
                test scripts, and raw data are openly published for reproducibility
                and citation in your own work.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Procurement Teams
              </h3>
              <p className="text-sm text-slate-400">
                Build defensible vendor shortlists using our scoring rubric. Export
                comparison matrices, verify evidence trails, and present
                auditable justifications to stakeholders. No more relying on
                sales decks for capability claims.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 card-hover">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Global Teams with India Ops
              </h3>
              <p className="text-sm text-slate-400">
                Multinational teams operating Indian subsidiaries use our India Fit
                scores to navigate local compliance, pricing, and language
                requirements that global directories overlook. One source of truth
                for India-specific AI decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / PAA */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-500 mb-4">
              FAQ
            </div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>How to verify AI agent source code and identity?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                BestAIAgent verifies AI agent identity via SHA-256 source code
                hashes, primary documentation links, and official repository
                links. Unknown fields are marked clearly — no speculative
                checkboxes.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>Is BestAIAgent a pay-to-rank directory?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                No. BestAIAgent operates a strict no pay-to-rank policy. Rankings
                are based on verifiable data points and weighted aggregation of
                auditable facts. We reject fabricated user counts and arbitrary
                scale claims.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>What is the difference between stdio and Streamable HTTP in MCP?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                stdio is for secure local development via inter-process
                communication — ideal for inner-loop iteration. Streamable HTTP
                is for scalable enterprise deployments with TLS authentication
                and web observability tools.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>How does the DPDP Act affect AI voice agent deployments?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                The DPDP Act classifies voice data as biometric data, requiring
                explicit informed consent and robust security. BestAIAgent
                verifies which agents support sovereign on-premise deployment
                and explicit consent management for Indian phone calls.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>What is the AI agent development cost in India?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Standard task-agent implementation bands range from ₹4–12 lakh
                for custom integrated systems. BestAIAgent provides transparent
                INR pricing, GST invoicing, and UPI merchant fee preparedness
                for all verified agents.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>How does MCP reduce context window token bloat?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                MCP enables a code-as-a-tool approach where the agent writes
                executable code to call the MCP server directly as a pure API —
                bypassing the LLM context window for data transfer and saving up
                to 98% of tokens.
              </p>
            </details>
            <details className="glass rounded-xl p-5 group">
              <summary className="flex justify-between items-center font-semibold text-white text-sm">
                <span>Which AI models support Hindi and Hinglish?</span>
                <svg
                  className="w-5 h-5 text-slate-400 chev"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                BestAIAgent verifies Indic models like Sarvam-30B and Krutrim-2
                instruct for homegrown Hindi and Hinglish code-switching,
                outperforming global models in regional cultural context.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-cyan-600/15 to-trust-600/10"></div>
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            <div className="relative p-8 sm:p-14 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Build{" "}
                <span className="gradient-text">Verified AI</span>?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
                Join India's leading evidence-backed AI platform. 296 verified
                pages. MCP infrastructure. DPDP compliance.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="#"
                  className="btn-p px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Get Started Free
                </a>
                <a
                  href="#"
                  className="btn-s px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
                >
                  Talk to Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center font-bold text-white text-xs">
                  B
                </div>
                <span className="font-bold text-white text-sm">
                  BestAIAgent<span className="text-brand-500">.in</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                India's verified, evidence-backed AI agent platform. No
                pay-to-rank. Radical transparency.
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-7 h-7 rounded bg-white/5 hover:bg-brand-500/20 flex items-center justify-center text-gray-500 hover:text-brand-500 transition text-xs"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded bg-white/5 hover:bg-brand-500/20 flex items-center justify-center text-gray-500 hover:text-brand-500 transition text-xs"
                >
                  in
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded bg-white/5 hover:bg-brand-500/20 flex items-center justify-center text-gray-500 hover:text-brand-500 transition text-xs"
                >
                  GH
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">
                Verification
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Evidence-backed comparison
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    SHA-256 source hashes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    No pay-to-rank policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Methodology
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">
                MCP Infra
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cline MCP stdio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cursor Streamable HTTP
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sandboxed Docker
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Code-as-a-Tool
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">
                India / DPDP
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#" className="hover:text-white transition">
                    INR pricing Cursor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    DPDP compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sarvam-30B Hindi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    UPI merchant fees
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Editorial Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    DPDP Notice
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-slate-600">
              © 2026 BestAIAgent.in. Evidence-backed AI agent directory. Made
              with ❤️ in India.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-slate-600">
                296 verified pages · 69 agents · 50 pillars
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
