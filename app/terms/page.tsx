import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — BestAIAgent.in",
  description: "Terms of service for BestAIAgent.in.",
  alternates: {
    canonical: "https://bestaiagent.in/terms/",
  },
};

export default function TermsPage() {
  return (
    <article className="prose lg:prose-xl max-w-4xl">
      <h1>Terms of Service</h1>
      <p>
        <strong>Last updated:</strong> August 23, 2026
      </p>

      <h2>1. Use of This Site</h2>
      <p>
        BestAIAgent.in provides independent, evidence-based reviews of AI
        agents and tools. All content is provided "as is" without warranties of
        any kind.
      </p>

      <h2>2. No Professional Advice</h2>
      <p>
        Content on this site is for informational purposes only and does not
        constitute professional, financial, legal, or investment advice. You
        should conduct your own research before making any decisions based on
        information found here.
      </p>

      <h2>3. Third-Party Links</h2>
      <p>
        We may link to third-party websites or services that we do not own or
        control. We have no control over and assume no responsibility for the
        content, privacy policies, or practices of any third-party sites.
      </p>

      <h2>4. Accuracy of Information</h2>
      <p>
        While we strive to keep information accurate and up-to-date, we make no
        warranties about the completeness, reliability, or accuracy of any
        content. Pricing, features, and availability may change without notice.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on BestAIAgent.in is the property of BestAIAgent.in and may
        not be reproduced without permission. Third-party trademarks referenced
        on this site are the property of their respective owners.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, BestAIAgent.in shall not be
        liable for any indirect, incidental, special, or consequential damages
        arising out of or in connection with your use of the site.
      </p>
    </article>
  );
}
