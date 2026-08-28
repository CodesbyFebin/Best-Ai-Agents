import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — AI Agent Updates for India | BestAIAgent.in",
  description: "Subscribe to the BestAIAgent.in newsletter for weekly updates on AI agents, MCP developments, DPDP compliance, and India AI ecosystem news.",
  keywords: ["AI newsletter India", "AI agent updates", "MCP newsletter", "India AI news", "AI agent newsletter"],
  alternates: { canonical: "https://bestaiagent.in/newsletter/" },
};

export default function NewsletterPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Newsletter</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">BestAIAgent.in Newsletter</h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">Weekly updates on AI agents, MCP developments, DPDP compliance, and the India AI ecosystem. Stay informed with evidence-backed insights delivered to your inbox.</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Why Subscribe</h2>
            <p className="text-[#c5c7d8] mb-4">Our newsletter delivers curated updates on the topics that matter most to AI developers and enterprises in India. Each issue includes new agent listings, score changes, methodology updates, and analysis of emerging trends in the AI agent landscape. We distill the most important developments into a concise, easy-to-read format that respects your time and helps you stay informed without overwhelming your inbox. Our newsletter is read by over 10,000 AI professionals across India and is a trusted source of information for the Indian AI community.</p>
            <p className="text-[#c5c7d8] mb-4">Unlike generic AI newsletters, we focus specifically on evidence-backed evaluation and India-specific developments. Our content is independently produced without vendor influence, ensuring you get unbiased information. We do not accept sponsored content or paid placements in our newsletter, maintaining the same editorial independence that defines our platform. This commitment to independence has earned us the trust of our readers and the respect of the AI community.</p>
            <p className="text-[#c5c7d8]">We respect your privacy and operate on a zero-data architecture. We do not collect personal data beyond your email address, and we do not use tracking pixels or share subscriber information with third parties. You can unsubscribe at any time with a single click, and your email address will be permanently deleted from our systems. We believe that privacy is a fundamental right and design our systems accordingly.</p>
          </section>

          <section className="mb-12">
            <div className="rounded-xl p-6 border" style={{ backgroundColor: "rgba(13, 16, 37, 0.8)", borderColor: "rgba(139, 92, 246, 0.3)" }}>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-[#c5c7d8] mb-6">Get weekly updates on AI agents, MCP developments, and India AI ecosystem news delivered to your inbox every Monday morning IST. Join over 10,000 AI professionals who trust our newsletter for evidence-backed insights and analysis.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-lg bg-[#1a1a2e] border border-[#252b4b] text-[#f7f7ff] placeholder-[#555872] focus:outline-none focus:border-[#8b5cf6]" />
                <button className="btn-p px-6 py-3 rounded-lg font-semibold text-white text-sm">Subscribe</button>
              </div>
              <p className="text-xs text-[#555872] mt-3">We respect your privacy. Unsubscribe at any time. No spam, ever.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">What You Will Receive</h2>
            <p className="text-[#c5c7d8] mb-4">Each newsletter issue covers a range of topics relevant to AI developers and enterprises in India. We carefully curate each issue to provide maximum value while respecting your time. Here is what you can expect to receive when you subscribe to our weekly updates.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">New Agent Listings</h3>
                <p className="text-sm text-[#9ca5c3]">Be the first to know when new AI agents are added to our directory with evidence-backed evaluations and India Fit scores.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Score Updates</h3>
                <p className="text-sm text-[#9ca5c3]">Get notified when agent scores change based on new evidence or methodology updates that affect our evaluations.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">MCP Developments</h3>
                <p className="text-sm text-[#9ca5c3]">Stay informed about the latest MCP server additions, transport updates, and security advisories.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">India AI News</h3>
                <p className="text-sm text-[#9ca5c3]">Analysis of India-specific AI developments including DPDP compliance and sovereign AI initiatives.</p>
              </div>
            </div>
            <p className="text-[#c5c7d8]">We also include community highlights, upcoming events, and links to relevant resources in each issue. Our newsletter is designed to be a quick read that keeps you informed without overwhelming your inbox. Most issues can be read in under 5 minutes, making it easy to stay current with the latest developments in the AI agent landscape.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Newsletter Topics</h2>
            <p className="text-[#c5c7d8] mb-4">Each newsletter issue covers a range of topics relevant to AI developers and enterprises in India. Our editorial team carefully selects the most important developments to include in each issue. We aim to provide a comprehensive overview of the week key events and developments.</p>
            <p className="text-[#c5c7d8] mb-4">Agent Evaluations: New agent listings, score updates, and methodology changes that affect our evaluations. We explain the reasoning behind score changes and provide links to the evidence that prompted them. This section helps you understand how our evaluations evolve over time.</p>
            <p className="text-[#c5c7d8]">India AI Policy: Updates on DPDP Act implementation, government initiatives, and regulatory changes that affect AI deployments in India. We provide analysis of how these changes impact developers and enterprises, helping you stay compliant and take advantage of new opportunities.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Privacy and Data</h2>
            <p className="text-[#c5c7d8] mb-4">We take your privacy seriously. Our newsletter operates on the same zero-data principles as the rest of BestAIAgent.in. We do not collect personal data beyond your email address, and we do not use tracking pixels or share subscriber information with third parties.</p>
            <p className="text-[#c5c7d8]">You can unsubscribe at any time using the link in every newsletter issue. Upon unsubscription, your email address is permanently deleted from our systems with no retention period.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Newsletter Archive</h2>
            <p className="text-[#c5c7d8] mb-4">All newsletter issues are archived and publicly available. You can browse past issues to catch up on previous developments or search for specific topics. Our archive includes every issue since our launch, with each issue covering the most important developments from that week.</p>
            <p className="text-[#c5c7d8]">Issues are published every Monday morning IST. You can access the archive through our website or subscribe to the RSS feed for programmatic access. The archive is searchable by date, topic, and keyword.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
