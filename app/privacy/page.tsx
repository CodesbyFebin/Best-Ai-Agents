import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — BestAIAgent.in",
  description: "Privacy policy for BestAIAgent.in - how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://bestaiagent.in/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <article className="prose lg:prose-xl max-w-4xl">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> August 23, 2026
      </p>

      <h2>Information We Collect</h2>
      <p>
        We do not collect personal data from our visitors. BestAIAgent.in is a
        static website that does not use cookies, tracking pixels, or analytics
        scripts. We do not log IP addresses, user agents, or any personally
        identifiable information.
      </p>

      <h2>External Links</h2>
      <p>
        Our site contains links to external websites and services. We are not
        responsible for the privacy practices of those sites. We recommend
        reviewing the privacy policies of any service you use.
      </p>

      <h3>Services We Link To</h3>
      <ul>
        <li>GitHub — for source code and issue tracking</li>
        <li>Official provider websites — for pricing and documentation</li>
        <li>Third-party services — as noted in individual agent profiles</li>
      </ul>

      <h2>Data We Display</h2>
      <p>
        All scoring, pricing, and capability data on BestAIAgent.in is sourced
        from public documentation, official APIs, and our own testing. We do not
        display any user-submitted content.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this privacy policy. Changes will be posted on this page
        with an updated effective date.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy-related questions, contact{" "}
        <a href="mailto:privacy@bestaiagent.in">privacy@bestaiagent.in</a>.
      </p>
    </article>
  );
}
