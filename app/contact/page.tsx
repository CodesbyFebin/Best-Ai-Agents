import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact — Get in Touch with the BestAIAgent.in Team | BestAIAgent.in",
  description:
    "Contact the BestAIAgent.in team for questions, corrections, partnerships, or press inquiries. Report errors, suggest new agents, or learn more about our evidence-backed evaluation process.",
  keywords: [
    "BestAIAgent contact",
    "report AI agent error",
    "suggest AI agent listing",
    "AI agent partnership",
    "BestAIAgent press",
    "AI agent correction",
    "BestAIAgent support",
    "AI agent feedback",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/contact/",
  },
};

export default function ContactPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Get in Touch</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                Contact
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                We&apos;d love to hear from you. Whether you&apos;re reporting an
                error, suggesting a new agent, or have questions about our
                methodology, this page tells you how to reach us.
              </p>
            </div>
          </div>

          <div className="prose lg:prose-xl max-w-4xl text-[#c5c7d8]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Report an Error
            </h2>
            <p>
              Found a broken link, outdated pricing, or incorrect claim? We
              rely on community feedback to maintain accuracy. Every report is
              reviewed and, if validated, corrected within 48 hours. To report
              an error, please include the URL of the affected page, the
              incorrect information, and a link to the correct source if
              available.
            </p>
            <p>
              <a
                href="https://github.com/CodesbyFebin/bestaiagent.in/issues"
                className="text-[#8b5cf6] hover:underline"
              >
                Open a GitHub issue
              </a>{" "}
              for the fastest response. You can also email{" "}
              <a
                href="mailto:corrections@bestaiagent.in"
                className="text-[#8b5cf6] hover:underline"
              >
                corrections@bestaiagent.in
              </a>{" "}
              with the subject line &quot;Error Report: [Page URL]&quot;.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Suggest a New Agent
            </h2>
            <p>
              Know an AI agent that should be listed? We welcome suggestions
              from the community. To submit a suggestion, please provide the
              agent&apos;s name, official website, GitHub repository (if
              open-source), and a brief description of what it does. We
              prioritize agents that serve the Indian market, offer MCP
              integration, or provide unique capabilities not already covered.
            </p>
            <p>
              All submissions go through our verification process before
              listing. We verify the official website, check GitHub
              repositories, test core functionality, and evaluate India Fit.
              This process typically takes 5-7 business days from submission to
              listing.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Partnerships
            </h2>
            <p>
              We do not accept paid placements or sponsored content. However, we
              do partner with organizations that share our commitment to
              evidence-backed evaluation. If you&apos;re an AI agent developer
              and would like to collaborate on testing or verification, please
              reach out. For partnership inquiries, email{" "}
              <a
                href="mailto:partners@bestaiagent.in"
                className="text-[#8b5cf6] hover:underline"
              >
                partners@bestaiagent.in
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">Press</h2>
            <p>
              For press inquiries, email{" "}
              <a
                href="mailto:press@bestaiagent.in"
                className="text-[#8b5cf6] hover:underline"
              >
                press@bestaiagent.in
              </a>
              . We can provide data on AI agent adoption in India, trends in
              MCP infrastructure usage, and insights on DPDP compliance for AI
              deployments.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">Follow</h2>
            <ul>
              <li>Twitter: @bestaiagent</li>
              <li>GitHub: CodesbyFebin/bestaiagent.in</li>
              <li>Newsletter: Subscribe for monthly updates</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Response Times
            </h2>
            <p>
              We aim to respond to all inquiries within 48 hours. Error reports
              are prioritized and typically addressed within 24 hours. New agent
              suggestions are processed within 5-7 business days. For urgent
              matters, please use GitHub issues for the fastest response.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
