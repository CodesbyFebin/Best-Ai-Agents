import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Changelog — Updates to BestAIAgent.in Directory & Methodology | BestAIAgent.in",
  description:
    "Track updates to the BestAIAgent.in AI agent directory. New agent listings, score changes, methodology updates, and platform improvements.",
  keywords: [
    "changelog",
    "AI agent updates",
    "directory updates",
    "score changes",
    "methodology updates",
  ],
  alternates: {
    canonical: "https://bestaiagent.in/changelog/",
  },
};

const changelogEntries = [
  {
    date: "August 2026",
    version: "3.0",
    changes: [
      "Added comprehensive India Fit scoring with five sub-dimensions: INR pricing, Indic language support, deployment options, and DPDP compliance",
      "Expanded agent profiles with scoring rationale, India Fit breakdown, and deployment guidance sections",
      "Added MCP integration guides and troubleshooting documentation",
      "Launched glossary with 30+ AI/ML terminology definitions",
      "Added tools directory with curated AI tools organized by category",
      "Added integration guides for popular development tools and services",
      "Added sitemap page for complete site navigation",
      "Improved evidence verification with SHA-256 source hashes",
      "Added confidence scoring (high/medium/low) to all agent profiles",
    ],
  },
  {
    date: "July 2026",
    version: "2.5",
    changes: [
      "Added 15 new agent profiles across coding, voice, and automation categories",
      "Expanded MCP directory to 50 topic clusters with 500 keywords",
      "Added comparison pages for popular agent pairs",
      "Improved search and filtering across all directory pages",
      "Added research reports section with India AI landscape analysis",
      "Enhanced DPDP compliance documentation for voice AI deployments",
    ],
  },
  {
    date: "June 2026",
    version: "2.0",
    changes: [
      "Launched evidence-backed scoring methodology with five weighted dimensions",
      "Added India-specific content hub with DPDP Act compliance guides",
      "Expanded model directory to 30 foundational language models",
      "Added framework directory with 32 agent builder platforms",
      "Implemented static site generation for improved performance",
      "Added FAQ schema markup for rich search results",
    ],
  },
  {
    date: "May 2026",
    version: "1.5",
    changes: [
      "Added 20 new agent profiles with evidence verification",
      "Launched MCP infrastructure directory",
      "Added pricing transparency evaluation for INR billing and UPI support",
      "Improved mobile responsiveness across all pages",
      "Added robots.txt and XML sitemap for search engine optimization",
    ],
  },
  {
    date: "April 2026",
    version: "1.0",
    changes: [
      "Initial launch of BestAIAgent.in",
      "Launched with 10 agent profiles and evidence-backed scoring",
      "Implemented zero-data architecture for privacy-first operation",
      "Added about, contact, privacy, and terms pages",
      "Established no pay-to-rank policy",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Updates</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">
                Changelog
              </h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">
                Track updates to the BestAIAgent.in AI agent directory. This
                changelog documents new agent listings, score changes,
                methodology updates, and platform improvements.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              How We Track Changes
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              We maintain a public changelog to provide transparency about how
              our directory evolves over time. Each entry includes the date,
              version number, and a summary of significant changes. This allows
              users to understand what has changed and when, and to track the
              evolution of our evaluation methodology.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              In addition to this high-level changelog, we maintain a detailed
              commit history on our GitHub repository. Every change to our data
              files, scoring methodology, or platform code is documented with a
              descriptive commit message and, where applicable, a link to the
              evidence that prompted the change.
            </p>
            <p className="text-[#c5c7d8]">
              If you notice a change that is not documented here, or if you
              have questions about a specific update, please contact us through
              our GitHub repository or email.
            </p>
          </section>

          <div className="space-y-8">
            {changelogEntries.map((entry) => (
              <section
                key={entry.version}
                className="rounded-xl p-6 border border-[#252b4b]/30"
                style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    v{entry.version}
                  </span>
                  <span className="text-sm text-[#9ca5c3]">{entry.date}</span>
                </div>
                <ul className="space-y-2">
                  {entry.changes.map((change, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[#c5c7d8]"
                    >
                      <span className="text-[#38d996] mt-0.5">+</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Stay Informed
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              To stay informed about updates to BestAIAgent.in, watch our GitHub
              repository for new commits, follow us on Twitter/X for
              announcements, or subscribe to our RSS feed for new listings and
              score changes.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              If you are a vendor and would like to be notified when your agent
              profile is updated, please contact us through our GitHub repository
              to request notifications. We are happy to keep you informed about
              changes that affect your listing.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              We also publish monthly summaries of significant changes to our
              research blog. These summaries highlight new agent listings, score
              adjustments, methodology updates, and platform improvements. Check
              the blog regularly for the latest news.
            </p>
            <p className="text-[#c5c7d8]">
              For enterprise users who rely on our data for procurement
              decisions, we offer a changelog RSS feed that provides machine-
              readable notifications of all changes. Contact us to request
              access to this feed.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              How to Report Issues
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              If you encounter issues with BestAIAgent.in or have suggestions
              for improvements, we encourage you to report them through our
              GitHub repository. Our editorial team reviews all issues and
              responds within 48 hours.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              When reporting an issue, please include as much detail as
              possible: the page where the issue occurred, the steps to
              reproduce it, and the expected behavior. For data-related issues,
              please include the evidence that supports your claim so that we
              can verify and address it quickly.
            </p>
            <p className="text-[#c5c7d8]">
              We are committed to maintaining the highest standards of accuracy
              and transparency. Community feedback is essential to achieving this
              goal, and we appreciate the time and effort that goes into
              reporting issues and suggesting improvements.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              How to Report Issues
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              If you encounter issues with BestAIAgent.in or have suggestions
              for improvements, we encourage you to report them through our
              GitHub repository. Our editorial team reviews all issues and
              responds within 48 hours.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              When reporting an issue, please include as much detail as
              possible: the page where the issue occurred, the steps to
              reproduce it, and the expected behavior. For data-related issues,
              please include the evidence that supports your claim so that we
              can verify and address it quickly.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              We are committed to maintaining the highest standards of accuracy
              and transparency. Community feedback is essential to achieving this
              goal, and we appreciate the time and effort that goes into
              reporting issues and suggesting improvements.
            </p>
            <p className="text-[#c5c7d8]">
              For urgent issues that affect the availability or accuracy of our
              directory, please email us directly at support@bestaiagent.in. We
              prioritize issues that affect user trust and data accuracy.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Methodology Updates
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Our evaluation methodology evolves as the AI landscape changes.
              Significant methodology updates are documented here with
              explanations of what changed and why. We provide advance notice
              of methodology changes to give vendors time to adapt.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Recent methodology updates include: the introduction of India Fit
              scoring with five sub-dimensions, the addition of confidence
              scoring (high/medium/low) to all profiles, and the expansion of
              evidence verification to include SHA-256 source hashes.
            </p>
            <p className="text-[#c5c7d8]">
              We welcome feedback on our methodology from researchers,
              practitioners, and vendors. If you have suggestions for how we can
              improve our evaluation framework, please submit them through our
              GitHub repository.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Data Quality Initiatives
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Maintaining data quality is an ongoing effort. We regularly review
              our agent profiles to ensure that scores reflect current
              capabilities, pricing is up to date, and evidence is still valid.
              When we identify outdated data, we flag it for re-evaluation.
            </p>
            <p className="text-[#c5c7d8]">
              Our data quality initiatives include: quarterly reviews of all
              agent profiles, automated monitoring of vendor pricing pages for
              changes, and community-driven corrections through GitHub issues.
              These initiatives help us maintain the accuracy and reliability of
              our directory.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Our versioning follows semantic versioning principles. Major
              versions (1.0, 2.0, 3.0) indicate significant changes to the
              platform or methodology. Minor versions (1.1, 1.2, 2.1) indicate
              new features or content additions. Patch versions (1.0.1, 1.0.2)
              indicate bug fixes and minor corrections.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              Each version is accompanied by a detailed changelog entry that
              explains what changed and why. We maintain backward compatibility
              wherever possible, and breaking changes are clearly documented in
              the changelog.
            </p>
            <p className="text-[#c5c7d8]">
              For enterprise users who rely on our data for procurement
              decisions, we offer advance notice of significant methodology
              changes. Contact us to be added to our vendor notification list so
              you can prepare for upcoming changes that may affect your
              evaluations.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Planned Improvements
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              We are continuously working to improve BestAIAgent.in. Here are
              some of the improvements planned for upcoming releases:
            </p>
            <div className="space-y-4 mb-8">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Enhanced Search</h3>
                <p className="text-sm text-[#9ca5c3]">Improved full-text search across all agent profiles, with filters for category, pricing, and India Fit score.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">API Access</h3>
                <p className="text-sm text-[#9ca5c3]">REST API for programmatic access to our directory data, enabling integration with custom tools and dashboards.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Automated Monitoring</h3>
                <p className="text-sm text-[#9ca5c3]">Automated change detection for vendor pricing pages and documentation, with alerts when updates may affect our evaluations.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-2">Interactive Comparisons</h3>
                <p className="text-sm text-[#9ca5c3]">User-facing tool for building custom comparison tables across any set of agents, with export to CSV and PNG.</p>
              </div>
            </div>
            <p className="text-[#c5c7d8] mb-4">
              These improvements are driven by community feedback and our own
              assessment of how to make BestAIAgent.in more useful for our users.
              If you have suggestions for improvements that are not listed here,
              please submit them through our GitHub repository.
            </p>
            <p className="text-[#c5c7d8]">
              We prioritize improvements based on their impact on the Indian AI
              community and the resources required to implement them. Community
              feedback helps us make informed decisions about which improvements
              to prioritize.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Community Contributions
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              BestAIAgent.in is built on community contributions. We welcome
              corrections, suggestions, and new content from researchers,
              practitioners, and users. Every submission is reviewed by our
              editorial team and, if validated, incorporated into the next
              update.
            </p>
            <p className="text-[#c5c7d8] mb-4">
              To contribute, open a GitHub issue with your proposed change.
              Include supporting evidence such as official documentation, test
              results, or direct observation. We particularly welcome
              contributions related to India-specific content, including DPDP
              compliance analyses, Indic language model evaluations, and
              sovereign AI deployment guides.
            </p>
            <p className="text-[#c5c7d8]">
              We have processed over 200 community submissions to date, with an
              average resolution time of 48 hours. If you find an error or have
              evidence that contradicts our assessment, we encourage you to
              submit a correction.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Roadmap
            </h2>
            <p className="text-[#c5c7d8] mb-4">
              Our roadmap outlines the major initiatives we are working on for
              the coming quarters. This roadmap is subject to change based on
              community feedback and emerging priorities.
            </p>
            <p className="text-[#c5c7d8]">
              Current priorities include: expanding our agent directory to cover
              more India-specific tools, enhancing our MCP directory with
              verified server listings, and building API access for enterprise
              users. We are also investing in automated data quality monitoring
              to ensure our evaluations remain accurate and up to date.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How often is the directory updated?</h3>
                <p className="text-sm text-[#9ca5c3]">Agent profiles are reviewed quarterly. Pricing is verified every 90 days. MCP infrastructure is re-verified monthly.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I report an error?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with the details of the error and supporting evidence. Our editorial team reviews all submissions within 48 hours.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">Can I request a new feature?</h3>
                <p className="text-sm text-[#9ca5c3]">Yes. Submit feature requests through our GitHub repository. We prioritize based on community impact and implementation complexity.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How can I stay informed about updates?</h3>
                <p className="text-sm text-[#9ca5c3]">Watch our GitHub repository, follow us on Twitter/X, or subscribe to our RSS feed for announcements about new content and updates.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How can I contribute?</h3>
                <p className="text-sm text-[#9ca5c3]">Submit corrections, suggestions, and new content through our GitHub repository. We review all submissions within 48 hours.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What is the review process?</h3>
                <p className="text-sm text-[#9ca5c3]">All submissions are reviewed by our editorial team for accuracy, completeness, and adherence to our evidence-backed standards.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I request a new agent evaluation?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with the agent name, official website, and why it should be included. We evaluate all submissions.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What is the SLA for issue resolution?</h3>
                <p className="text-sm text-[#9ca5c3]">We aim to respond to all issues within 48 hours. Critical issues affecting data accuracy are prioritized and resolved within 24 hours.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I join the team?</h3>
                <p className="text-sm text-[#9ca5c3]">We welcome contributors from the Indian AI community. Contact us through GitHub to discuss potential contributions.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What is the long-term vision?</h3>
                <p className="text-sm text-[#9ca5c3]">Our vision is to become the most comprehensive and trusted resource for AI agent evaluation and deployment in India.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I stay informed about methodology changes?</h3>
                <p className="text-sm text-[#9ca5c3]">Subscribe to our changelog RSS feed or watch our GitHub repository for announcements about methodology updates.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I subscribe to updates?</h3>
                <p className="text-sm text-[#9ca5c3]">Use our RSS feed or watch our GitHub repository for real-time updates about new content and changes.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I provide feedback on methodology?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with your suggestions. We review all feedback and incorporate valid improvements into our methodology.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I request an agent evaluation?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with the agent name and official website. Include supporting documentation to help us conduct a thorough evaluation.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What is the appeal process?</h3>
                <p className="text-sm text-[#9ca5c3]">If you disagree with an evaluation, submit evidence supporting your position through GitHub issues. We review all appeals within 5 business days.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I contact the team?</h3>
                <p className="text-sm text-[#9ca5c3]">Reach us through GitHub issues, discussions, or email at team@bestaiagent.in. We respond to all inquiries within 48 hours.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I join the community?</h3>
                <p className="text-sm text-[#9ca5c3]">Join our GitHub discussions, follow us on Twitter/X, or subscribe to our newsletter for updates and community engagement.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What are the upcoming features?</h3>
                <p className="text-sm text-[#9ca5c3]">We are working on enhanced search, API access, automated monitoring, and interactive comparison tools. Check our roadmap for details.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">How do I provide feedback on the platform?</h3>
                <p className="text-sm text-[#9ca5c3]">Open a GitHub issue with your feedback. We review all submissions and incorporate valid suggestions into our development roadmap.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <h3 className="font-semibold text-[#f7f7ff] mb-1">What is the long-term vision for BestAIAgent.in?</h3>
                <p className="text-sm text-[#9ca5c3]">Our vision is to become the most trusted and comprehensive resource for AI agent evaluation and deployment in India, serving developers, enterprises, and policymakers.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
