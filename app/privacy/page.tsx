import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — BestAIAgent.in",
  description:
    "Privacy policy for BestAIAgent.in. We do not collect personal data, use cookies, or track users. Our static website respects your privacy with no analytics scripts or tracking pixels.",
  keywords: [
    "BestAIAgent privacy policy",
    "AI agent directory privacy",
    "no cookies policy",
    "no tracking website",
    "static website privacy",
    "data protection AI directory",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Legal</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                <strong>Last updated:</strong> August 23, 2026
              </p>
            </div>
          </div>

          <div className="prose lg:prose-xl max-w-4xl text-[#c5c7d8]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Information We Collect
            </h2>
            <p>
              We do not collect personal data from our visitors. BestAIAgent.in
              is a static website that does not use cookies, tracking pixels, or
              analytics scripts. We do not log IP addresses, user agents, or any
              personally identifiable information. Our website is hosted on
              Vercel, which may collect basic access logs for operational
              purposes, but we do not have access to or control over those logs.
            </p>
            <p>
              When you visit BestAIAgent.in, you will not be asked to create an
              account, provide an email address, or submit any personal
              information. We do not use newsletter signup forms, contact forms,
              or any other mechanism that would collect your data. Our GitHub
              repository is public, and any issues or discussions you participate
              in there are governed by GitHub&apos;s privacy policy.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              External Links
            </h2>
            <p>
              Our site contains links to external websites and services. We are
              not responsible for the privacy practices of those sites. We
              recommend reviewing the privacy policies of any service you use.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Services We Link To
            </h3>
            <ul>
              <li>GitHub — for source code and issue tracking</li>
              <li>
                Official provider websites — for pricing and documentation
              </li>
              <li>
                Third-party services — as noted in individual agent profiles
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Data We Display
            </h2>
            <p>
              All scoring, pricing, and capability data on BestAIAgent.in is
              sourced from public documentation, official APIs, and our own
              testing. We do not display any user-submitted content.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy. Changes will be posted on this
              page with an updated effective date.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">Contact</h2>
            <p>
              For privacy-related questions, contact{" "}
              <a
                href="mailto:privacy@bestaiagent.in"
                className="text-[#8b5cf6] hover:underline"
              >
                privacy@bestaiagent.in
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
