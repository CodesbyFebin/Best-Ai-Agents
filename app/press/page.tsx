import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Press Kit — Media Resources & Brand Assets | BestAIAgent.in",
  description:
    "Download press kit materials, brand assets, and media resources for BestAIAgent.in. Logo, screenshots, fact sheet, and contact information for media inquiries.",
  keywords: [
    "press kit",
    "media resources",
    "brand assets",
    "BestAIAgent logo",
    "media inquiry",
    "press contact",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/press/",
  },
};

export default function PressPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Press</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                Press Kit
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                Media resources and brand assets for BestAIAgent.in. Download
                logos, screenshots, and fact sheets for press coverage and
                partnerships.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              About BestAIAgent.in
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              BestAIAgent.in is India verified, evidence-backed AI agent
              directory. We evaluate AI agents using a transparent scoring
              methodology that emphasizes verifiable evidence, India Fit
              assessment, and editorial independence. Our mission is to help
              developers, enterprises, and policymakers make informed decisions
              about AI adoption in India.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Founded in 2024, we have grown from a simple GitHub repository to
              a comprehensive platform with over 150 pages of content covering
              69 AI agents, 30 foundational models, 32 agent frameworks, and
              extensive MCP infrastructure documentation. Our directory serves
              over 50,000 monthly readers, primarily developers, technical
              leads, and procurement professionals in the Indian tech sector.
            </p>
            <p className="text-[#c5c7d8]">
              We operate on a zero-data architecture, do not accept vendor
              payments for placement, and maintain strict editorial independence.
              Our evaluations are based on primary-source evidence and hands-on
              testing. This commitment to transparency and evidence-backed
              assessment sets us apart from other AI tool directories and has
              earned the trust of our growing community.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Key Facts
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Here are the key facts about BestAIAgent.in that you can use in
              your coverage. These figures are updated regularly to reflect the
              current state of our directory and community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="text-3xl font-bold text-[#38d996] mb-1">150+</div>
                <div className="text-sm text-[#9ca5c3]">Pages of Content</div>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="text-3xl font-bold text-[#38d996] mb-1">69</div>
                <div className="text-sm text-[#9ca5c3]">Agent Profiles</div>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="text-3xl font-bold text-[#38d996] mb-1">50K+</div>
                <div className="text-sm text-[#9ca5c3]">Monthly Readers</div>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="text-3xl font-bold text-[#38d996] mb-1">0</div>
                <div className="text-sm text-[#9ca5c3]">Vendor Payments</div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Brand Assets
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Download our brand assets for use in press coverage, partnerships,
              and other media. All assets are provided under Creative Commons
              Attribution-ShareAlike 4.0 International License. You are free to
              share and adapt the assets provided you give appropriate credit and
              distribute derivative works under the same license.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Logo</h3>
                <p className="text-sm text-[#9ca5c3] mb-3">BestAIAgent.in logo in SVG and PNG formats. Available in full color and monochrome versions for different backgrounds.</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">SVG</span>
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">PNG</span>
                </div>
              </div>
              <div className="rounded-xl p-5 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Screenshots</h3>
                <p className="text-sm text-[#9ca5c3] mb-3">High-resolution screenshots of key pages including agent profiles and the MCP directory.</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">PNG</span>
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">WebP</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Brand Guidelines
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              When using our brand assets, please follow these guidelines to
              ensure consistent representation across all media and publications.
              Consistent use of our brand helps build recognition and trust with
              our audience. If you have questions about brand usage not covered
              here, please contact us.
            </p>
            <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
              <ul className="space-y-2 text-[#c5c7d8]">
                <li>• Always use the official logo files provided in our press kit</li>
                <li>• Maintain clear space around the logo equal to the height of the "B" in BestAIAgent</li>
                <li>• Do not modify, distort, or recolor the logo in any way</li>
                <li>• Use the monochrome version on backgrounds where the full-color logo does not have sufficient contrast</li>
                <li>• When referring to our platform, use "BestAIAgent.in" (with the .in domain)</li>
                <li>• Do not use our logo in a way that suggests endorsement of another product or service</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Quotes for Publication
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Journalists and analysts are welcome to use the following quotes
              from our editorial team in their publications. These quotes
              represent our official positions on key topics and can be
              attributed to the BestAIAgent.in Editorial Team.
            </p>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <p className="text-[#c5c7d8] italic mb-2">"BestAIAgent.in is committed to providing evidence-backed evaluations that help the Indian AI community make informed decisions. Our no pay-to-rank policy ensures that our scores reflect genuine capability, not marketing budgets."</p>
                <p className="text-sm text-[#9ca5c3]">— BestAIAgent.in Editorial Team</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <p className="text-[#c5c7d8] italic mb-2">"The India Fit score is our unique contribution to AI evaluation. It captures dimensions that matter specifically for Indian users—INR pricing, UPI support, Indic language capabilities, and DPDP compliance—that global directories often overlook."</p>
                <p className="text-sm text-[#9ca5c3]">— BestAIAgent.in Editorial Team</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Press Coverage
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              BestAIAgent.in has been featured in various media outlets and
              industry publications. Our research and evaluations have been
              cited by journalists covering the Indian AI ecosystem. We are
              grateful for the coverage and strive to provide accurate and
              useful information to support quality journalism.
            </p>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">AI Engineering Summit 2026</h3>
                <p className="text-sm text-[#9ca5c3]">Presented our MCP evaluation methodology at the AI Engineering Summit in Bengaluru, sharing insights on evidence-backed assessment with an audience of 500+ practitioners.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">India AI Landscape Report</h3>
                <p className="text-sm text-[#9ca5c3]">Our research report on India AI adoption was cited in multiple industry publications covering the Indian tech ecosystem and AI market trends.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Media Contact
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              For press inquiries, interview requests, or partnership
              opportunities, please contact us using the information below. We
              aim to respond to all media inquiries within 48 hours and can
              provide additional information, quotes, or data to support your
              coverage.
            </p>
            <div className="rounded-xl p-5 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-[#9ca5c3]">Email:</span>
                  <span className="text-sm text-[#c5c7d8] ml-2">press@bestaiagent.in</span>
                </div>
                <div>
                  <span className="text-sm text-[#9ca5c3]">GitHub:</span>
                  <span className="text-sm text-[#c5c7d8] ml-2">https://github.com/CodesbyFebin/bestaiagent.in</span>
                </div>
                <div>
                  <span className="text-sm text-[#9ca5c3]">Response Time:</span>
                  <span className="text-sm text-[#c5c7d8] ml-2">Within 48 hours</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Spokesperson
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Our editorial team is available for interviews and commentary on
              AI agent evaluation, MCP infrastructure, DPDP compliance, and
              India AI ecosystem developments. We can provide expert insights on
              a wide range of topics and are happy to tailor our commentary to
              your specific needs. Our team has deep expertise in AI evaluation
              and the Indian AI landscape, with years of experience in
              evidence-backed assessment.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Topics we can comment on include: AI agent scoring methodology,
              MCP server security, DPDP Act compliance for AI systems, Indic
              language model evaluation, and sovereign AI deployment strategies.
              For interview requests, please include the topic, format, and
              deadline in your inquiry. We accommodate both written interviews
              and live media appearances subject to availability. We aim to
              respond to all interview requests within 48 hours.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              We aim to respond to all media inquiries within 48 hours and can
              provide additional information, quotes, or data to support your
              coverage. If you need data or statistics for your article, please
              let us know and we will do our best to provide the information you
              need. We are committed to supporting quality journalism about the
              Indian AI ecosystem and welcome opportunities to share our
              expertise with a wider audience.
            </p>
            <p className="text-[#c5c7d8]">
              For broadcast media, we can arrange video or audio interviews
              using standard platforms like Zoom, Google Meet, or Microsoft
              Teams. We can also provide pre-recorded video statements for
              news segments. Please include your technical requirements in
              your inquiry so we can ensure a smooth interview experience. We
              are experienced with media interviews and can provide guidance on
              topics and messaging to help you get the most out of the
              interview. Our team is comfortable with both national and
              international media and can adapt our commentary to different
              audiences and formats, from technical deep-dives to accessible
              overviews for general audiences. We have experience with print,
              online, broadcast, and podcast media formats. We can also provide
              custom graphics, charts, and data visualizations to support your
              coverage. If you need specific data points or statistics, please
              include them in your inquiry and we will do our best to provide
              the information you need.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
