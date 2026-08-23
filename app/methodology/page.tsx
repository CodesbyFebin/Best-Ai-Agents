import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology — How We Score AI Agents",
  description:
    "Every score on BestAIAgent.in is backed by evidence and a transparent methodology.",
  alternates: {
    canonical: "https://bestaiagent.in/methodology/",
  },
};

export default function MethodologyPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Trust Layer</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                Methodology
              </h1>
            </div>
          </div>

          <div className="prose lg:prose-xl max-w-4xl text-[#c5c7d8]">
            <p className="text-lg">
              Every score on BestAIAgent.in is backed by evidence and a
              transparent methodology. Here's how we evaluate AI agents:
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Scoring Framework
            </h2>
            <ol>
              <li>
                <strong>Capability Assessment (40%)</strong> — Does the agent
                accomplish its stated purpose? Measured through benchmarks,
                real-world testing, and feature coverage.
              </li>
              <li>
                <strong>Ease of Use (20%)</strong> — How easy is it to set up
                and operate? Considers documentation quality, UI/UX, and
                onboarding.
              </li>
              <li>
                <strong>Pricing Transparency (15%)</strong> — Clear, accessible
                pricing with India-specific (INR) context.
              </li>
              <li>
                <strong>India Fit (15%)</strong> — Availability, pricing,
                payment methods, and regulatory compliance for Indian users.
              </li>
              <li>
                <strong>Evidence Quality (10%)</strong> — Number and reliability
                of sources cited.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              India Fit Scoring
            </h2>
            <p>India Fit is calculated based on observable signals:</p>
            <ul>
              <li>
                <strong>₹ Pricing</strong> — INR-denominated pricing and local
                payment methods (UPI, etc.)
              </li>
              <li>
                <strong>अ Language</strong> — Support for Hindi and other Indian
                languages
              </li>
              <li>
                <strong>⌂ Deployment</strong> — Cloud, regional, or self-hosted
                options
              </li>
              <li>
                <strong>◈ Compliance</strong> — Data handling practices and DPDP
                relevance
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Scoring Scale
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#252b4b]">
                  <th className="text-left p-2 text-[#9ca5c3]">
                    India Fit Score
                  </th>
                  <th className="text-left p-2 text-[#9ca5c3]">Label</th>
                  <th className="text-left p-2 text-[#9ca5c3]">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#252b4b]/30">
                  <td className="p-2 text-[#c5c7d8]">9.0-10.0</td>
                  <td className="p-2 text-[#38d996]">Excellent</td>
                  <td className="p-2 text-[#c5c7d8]">
                    Optimized for Indian markets
                  </td>
                </tr>
                <tr className="border-b border-[#252b4b]/30">
                  <td className="p-2 text-[#c5c7d8]">7.5-8.9</td>
                  <td className="p-2 text-[#3b82f6]">Strong</td>
                  <td className="p-2 text-[#c5c7d8]">
                    Good availability with some considerations
                  </td>
                </tr>
                <tr className="border-b border-[#252b4b]/30">
                  <td className="p-2 text-[#c5c7d8]">6.5-7.4</td>
                  <td className="p-2 text-[#f59e0b]">Moderate</td>
                  <td className="p-2 text-[#c5c7d8]">
                    Usable but with notable friction
                  </td>
                </tr>
                <tr className="border-b border-[#252b4b]/30">
                  <td className="p-2 text-[#c5c7d8]">Below 6.5</td>
                  <td className="p-2 text-[#ef4444]">Limited</td>
                  <td className="p-2 text-[#c5c7d8]">
                    Significant barriers for Indian users
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Verification Process
            </h2>
            <ol>
              <li>
                <strong>Collect</strong> — Official documentation, releases,
                policies, pricing, and hands-on observations
              </li>
              <li>
                <strong>Verify</strong> — Claims receive a source, retrieval
                date, region, confidence, and review status
              </li>
              <li>
                <strong>Evaluate</strong> — Products are assessed against a
                published rubric with known limitations
              </li>
              <li>
                <strong>Refresh</strong> — Material changes trigger review;
                stale commercial claims are clearly marked
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Note on Rankings
            </h2>
            <p>
              We do not maintain a single "best of" ranking. Instead, each agent
              has a score within the context of its category and intended use
              case. The "right" agent depends on your specific needs, budget,
              and constraints.
            </p>

            <p>
              <a
                href="/about/"
                className="text-[#8b5cf6] hover:underline"
              >
                Learn more about our editorial standards
              </a>
              {" "} or{" "}
              <a
                href="/contact/"
                className="text-[#8b5cf6] hover:underline"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
