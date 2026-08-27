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
                We'd love to hear from you. Whether you're reporting an error,
                suggesting a new agent, or have questions about our methodology,
                this page tells you how to reach us.
              </p>
            </div>
          </div>

          <div className="prose lg:prose-xl max-w-4xl text-[#c5c7d8]">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              How to Reach Us
            </h2>
            <p>
              We operate entirely through asynchronous, transparent channels.
              This means every interaction is documented and reviewable by the
              entire team. We do not use live chat or phone support because we
              believe written communication creates a better audit trail and
              allows us to provide more thorough, well-researched responses.
            </p>
            <p>
              Our preferred contact methods, in order of response speed and
              quality:
            </p>
            <ol>
              <li>
                <strong>GitHub Issues</strong> (fastest response, most thorough):
                For corrections, new agent suggestions, or technical questions.
                Our entire editorial team monitors GitHub activity and responds
                within 24 hours during business days (Monday through Friday,
                India Standard Time).
              </li>
              <li>
                <strong>Email</strong> (for private or sensitive matters): For
                matters that cannot be discussed publicly, such as security
                vulnerabilities or compliance concerns. We respond within 48
                hours.
              </li>
              <li>
                <strong>Twitter / X</strong> (for announcements and quick questions):
                We check mentions daily but do not provide support through social
                media. Complex questions are redirected to GitHub.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Report an Error
            </h2>
            <p>
              Found a broken link, outdated pricing, or incorrect claim? We rely
              on community feedback to maintain accuracy. Every report is reviewed
              and, if validated, corrected within 48 hours. To report an error,
              please include the URL of the affected page, the incorrect
              information, and a link to the correct source if available.
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
            <p>
              For error reports submitted via GitHub, we ask that you use the
              &quot;Bug Report&quot; issue template. This template asks for:
              the affected URL, the incorrect information, the correct
              information, and a source link. This helps us process your
              report quickly and reduces back-and-forth communication. For
              email reports, please include the same information in the body of
              your message.
            </p>
            <p>
              If your error report identifies a verification methodology issue
              (for example, if our evidence count seems wrong or our
              last-verified date is stale), please file it using the &quot;Methodology
              Concern&quot; template instead. These reports are reviewed by our
              lead editor and may trigger a broader review of the affected
              category.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              What Counts as an Error
            </h3>
            <p>
              We consider the following as reportable errors:
            </p>
            <ul>
              <li>
                Pricing that no longer matches a vendor's publicly published
                rates (within a 30-day grace period for announced changes).
              </li>
              <li>
                Feature claims that the agent no longer supports or has removed
                (for example, an MCP transport option that was deprecated).
              </li>
              <li>
                Broken or inaccessible documentation links, repository links, or
                API endpoint references.
              </li>
              <li>
                DPDP compliance status that has changed (for example, if a
                vendor was previously self-hosted and now sends data to
                third-country servers).
              </li>
              <li>
                Evidence counts or last-verified dates that are stale by more
                than 90 days without a corresponding update.
              </li>
              <li>
                Identity verification errors (for example, if a GitHub
                repository URL redirects to a different project or the domain
                ownership has changed).
              </li>
            </ul>
            <p>
              We do not consider the following as errors:
            </p>
            <ul>
              <li>
                Differences of opinion on scoring (if you disagree with our score,
                please see our methodology page for how to submit a challenge).
              </li>
              <li>
                Minor wording differences in descriptions or summaries.
              </li>
              <li>
                Feature requests or suggestions for new capabilities (these
                should be directed to the vendor).
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Suggest a New Agent
            </h2>
            <p>
              Know an AI agent that should be listed? We welcome suggestions from
              the community. To submit a suggestion, please provide the agent's
              name, official website, GitHub repository (if open-source), and a
              brief description of what it does. We prioritize agents that serve
              the Indian market, offer MCP integration, or provide unique
              capabilities not already covered.
            </p>
            <p>
              All submissions go through our verification process before listing.
              We verify the official website, check GitHub repositories, test
              core functionality, and evaluate India Fit. This process typically
              takes 5-7 business days from submission to listing.
            </p>
            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Submission Requirements
            </h3>
            <p>
              To ensure your submission can be processed efficiently, please
              include the following information:
            </p>
            <ul>
              <li>
                <strong>Agent name and category</strong>: Which category does it
                belong to (coding agents, automation, voice AI, models,
                frameworks, infrastructure, MCP, etc.)?
              </li>
              <li>
                <strong>Official website and documentation URLs</strong>: We need
                at least primary documentation and a pricing page.
              </li>
              <li>
                <strong>GitHub repository (if open-source)</strong>: We verify
                commit history, license, and code quality.
              </li>
              <li>
                <strong>India-specific information</strong>: Does it offer INR
                pricing, UPI support, Indic language support, on-premise
                deployment, or DPDP compliance?
              </li>
              <li>
                <strong>MCP integration status</strong>: If applicable, does it
                support stdio transport, Streamable HTTP, or both?
              </li>
              <li>
                <strong>Your relationship to the agent</strong>: Are you a user,
                developer, or vendor representative? If you are the vendor, we
                ask that you disclose this relationship.
              </li>
            </ul>
            <p>
              You can submit agent suggestions via the &quot;New Agent
              Suggestion&quot; GitHub issue template or by emailing{" "}
              <a
                href="mailto:suggestions@bestaiagent.in"
                className="text-[#8b5cf6] hover:underline"
              >
                suggestions@bestaiagent.in
              </a>
              .
            </p>
            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              What Gets Accepted
            </h3>
            <p>
              We apply the following criteria when evaluating submissions:
            </p>
            <ul>
              <li>
                <strong>Evidence availability</strong>: Can we verify core claims
                through official documentation, public repositories, or hands-on
                testing? Agents without public documentation or repositories may
                be deferred until more evidence is available.
              </li>
              <li>
                <strong>Market relevance</strong>: Does the agent serve a
                meaningful use case for our audience (developers, businesses,
                teams in India and globally)?
              </li>
              <li>
                <strong>Complementarity</strong>: Does the agent offer capabilities
                not already covered by existing listings? We avoid redundant
                entries unless the new agent offers distinct advantages.
              </li>
              <li>
                <strong>Transparency</strong>: Does the vendor provide clear
                pricing, documentation, and deployment options? Opaque or
                sales-gated products are harder to evaluate and may receive
                lower scores.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Partnerships
            </h2>
            <p>
              We do not accept paid placements or sponsored content. However, we
              do partner with organizations that share our commitment to
              evidence-backed evaluation. If you're an AI agent developer and
              would like to collaborate on testing or verification, please reach
              out. For partnership inquiries, email{" "}
              <a
                href="mailto:partners@bestaiagent.in"
                className="text-[#8b5cf6] hover:underline"
              >
                partners@bestaiagent.in
              </a>
              .
            </p>
            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Collaboration Opportunities
            </h3>
            <p>
              We are open to several types of collaborations:
            </p>
            <ul>
              <li>
                <strong>Hands-on testing partnerships</strong>: We collaborate
                with vendors to test new MCP server configurations, verify
                sandboxing claims, and benchmark performance under controlled
                conditions. In exchange, we ask for access to pre-release
                documentation and test environments.
              </li>
              <li>
                <strong>Data contribution</strong>: If you have benchmark data,
                survey results, or testing artifacts that can contribute to our
                evidence base, we welcome contributions. All contributors are
                credited in the relevant agent profiles.
              </li>
              <li>
                <strong>Research co-authorship</strong>: We occasionally
                co-author research reports with academic institutions,
                government bodies, and industry consortiums. If you are
                conducting research on AI agents, MCP infrastructure, or India's
                AI landscape, let us know.
              </li>
              <li>
                <strong>Community speaking</strong>: Our team participates in
                conferences, meetups, and workshops. We are particularly
                interested in events focused on MCP infrastructure, DPDP
                compliance, and Indic language AI.
              </li>
            </ul>
            <p>
              If any of these collaboration models align with your goals,
              please reach out with a brief proposal. We review all partnership
              inquiries within 5 business days and will respond with next steps
              if there is mutual interest.
            </p>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              Vendor Relations Policy
            </h3>
            <p>
              We maintain strict editorial independence. Vendors cannot purchase
              listings, influence scores, or request removal of negative
              findings. If a vendor is dissatisfied with their assessment, they
              may submit evidence via GitHub issues to challenge specific claims.
              We do not engage in private score negotiations or offer "appeal"
              processes outside of our public, evidence-based workflow.
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
              . We can provide data on AI agent adoption in India, trends in MCP
              infrastructure usage, and insights on DPDP compliance for AI
              deployments.
            </p>
            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Press Kit
            </h3>
            <p>
              We provide the following resources for press and media:
            </p>
            <ul>
              <li>
                <strong>Latest data snapshots</strong>: Aggregated statistics on
                agent adoption, India Fit scores, and MCP server popularity.
                These are updated quarterly and available as CSV downloads from
                our GitHub releases page.
              </li>
              <li>
                <strong>Research reports</strong>: We publish in-depth research
                reports on India's AI landscape, MCP ecosystem adoption, and AI
                agent buyer behavior. These are available at /research/.
              </li>
              <li>
                <strong>Executive summaries</strong>: For interview requests or
                conference presentations, we can provide 1-page summaries of
                key findings across our evaluation dimensions.
              </li>
              <li>
                <strong>Background briefings</strong>: Our editorial team is
                available for background briefings with journalists covering the
                AI agent space. We do not provide embargoed information except
                in rare cases for coordinated research releases.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Follow
            </h2>
            <p>
              We post updates on the following platforms:
            </p>
            <ul>
              <li>
                <strong>Twitter / X</strong>: @bestaiagent — for announcements,
                new listings, and quick commentary on AI agent news.
              </li>
              <li>
                <strong>GitHub</strong>: CodesbyFebin/bestaiagent.in — for
                repository updates, issue tracking, and data downloads. The
                entire site is open source.
              </li>
              <li>
                <strong>Newsletter</strong>: Subscribe via our GitHub
                repository README for monthly roundups of new listings, score
                changes, and research report releases.
              </li>
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
            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              Business Hours
            </h3>
            <p>
              We operate on India Standard Time (IST, UTC+5:30). Our team is
              active Monday through Friday, 9:00 AM to 7:00 PM IST. We do not
              provide weekend support except for critical security
              vulnerabilities, which are addressed on a best-effort basis.
            </p>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              What to Expect in Our Response
            </h3>
            <p>
              For error reports, our response will include: acknowledgment of
              receipt, the expected resolution timeline, and a link to the
              tracked issue. For new agent suggestions, our response will
              include: an assessment of whether the agent meets our submission
              criteria, an estimated timeline for review, and any additional
              evidence we may need. For partnership inquiries, our response will
              include a brief assessment of fit and next steps if there is mutual
              interest.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Our Physical Address
            </h2>
            <p>
              BestAIAgent.in is operated by CodesbyFebin, a sole proprietorship
              registered in India. We do not maintain a physical office and all
              team members work remotely. For legal or compliance matters, our
              registered address is available upon request via email to{" "}
              <a
                href="mailto:legal@bestaiagent.in"
                className="text-[#8b5cf6] hover:underline"
              >
                legal@bestaiagent.in
              </a>
              . Please note that this address is for legal service only and is
              not monitored for general inquiries.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
