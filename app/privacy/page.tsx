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
              in there are governed by GitHub's privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              What We Do Not Do
            </h3>
            <p>
              To make our privacy practices absolutely clear, here is a
              comprehensive list of things we do not do:
            </p>
            <ul>
              <li>We do not set cookies or local storage for tracking</li>
              <li>We do not use Google Analytics, Plausible, or any analytics service</li>
              <li>We do not use Meta Pixel, TikTok Pixel, or any advertising tracker</li>
              <li>We do not collect IP addresses, browser fingerprints, or device IDs</li>
              <li>We do not log your browsing behavior or page interactions</li>
              <li>We do not sell, rent, or share any data with third parties</li>
              <li>We do not send marketing emails or newsletters</li>
              <li>We do not use third-party fonts or scripts that could track you</li>
              <li>We do not embed social media widgets that track visitors</li>
              <li>We do not use session recording or heatmaps</li>
            </ul>
            <p>
              The only data that exists on our servers are the static files that
              make up this website—HTML, CSS, JavaScript, images, and data
              modules. These files contain no information about you.
            </p>

            <h2 className="text-2xl font-bold text[#2] font-bold text-[#f7f7ff] mt-8">
              Website Hosting and Data Processing
            </h2>
            <p>
              BestAIAgent.in is hosted on Vercel's global edge network. When you
              request a page, Vercel's servers process your HTTP request to
              deliver the static content. This is standard web infrastructure
              operation and does not involve personal data collection by us.
              Vercel may retain basic access logs (IP address, request path,
              response status, and timestamp) for operational security and
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
            <p>
              When you click on a link to an external website, you will be
              leaving BestAIAgent.in. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of
              any third-party sites. We encourage you to be aware of this and to
              read the privacy policy of any external site you visit.
            </p>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              Link Categories
            </h3>
            <p>
              Our external links fall into several categories:
            </p>
            <ul>
              <li>
                <strong>GitHub repositories</strong>: We link to official
                repositories for open-source agents and frameworks. These links
                allow you to inspect source code, verify identities, and check
                commit history. GitHub's privacy policy applies to your
                interaction with their platform.
              </li>
              <li>
                <strong>Official documentation</strong>: We link to vendor
                documentation for setup guides, API references, and feature
                descriptions. These sites may use cookies or analytics; you
                should review their privacy policies before interacting.
              </li>
              <li>
                <strong>Pricing pages</strong>: We link to vendor pricing pages
                so you can verify current rates. These pages often use
                analytics and marketing trackers; we link to them purely for
                information and do not endorse their tracking practices.
              </li>
              <li>
                <strong>Research citations</strong>: Our research reports
                contain links to academic papers, government websites, and
                industry reports. These sources have their own privacy practices.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Data We Display About Third Parties
            </h2>
            <p>
              All scoring, pricing, and capability data on BestAIAgent.in is
              sourced from public documentation, official APIs, and our own
              testing. We do not display any user-submitted content from
              visitors to our site. When we present information about vendors,
              agents, or frameworks, that information is derived from publicly
              available sources or our independent testing.
            </p>
            <h3 className="text-xl font-semibold text-[#f7f7ff] mt-6">
              How We Handle Third-Party Data
            </h3>
            <p>
              When we present information about a third-party product or
              service on BestAIAgent.in, we handle that information in the
              following ways:
            </p>
            <ul>
              <li>
                <strong>Data minimization</strong>: We only collect and display
                information that is necessary for our evaluation and decision
                support mission. We do not collect or store more data than what
                is publicly available.
              </li>
              <li>
                <strong>Public sources only</strong>: All data we display comes
                from official documentation, public APIs, GitHub repositories,
                pricing pages, and our own independent testing. We do not use
                or display data obtained through scraping of private accounts or
                restricted endpoints.
              </li>
              <li>
                <strong>No data sharing</strong>: We do not share, sell, or
                transmit the data we collect with any third parties, except as
                necessary to display it on our site (for example, links to
                external sources).
              </li>
              <li>
                <strong>Data correction requests</strong>: If you are a vendor
                or rights holder and believe we are displaying incorrect
                information about your product, you may submit a correction via
                our GitHub issues page. We will review and act on all valid
                correction requests within 48 hours.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              Source Attribution and Evidence
            </h3>
            <p>
              Every claim on BestAIAgent.in is attributed to a source. We
              maintain an evidence-first approach where each score, feature
              claim, and pricing figure is traceable to a primary source or our
              own testing. Source URLs are displayed prominently on each agent
              profile, allowing users to verify claims independently. We do not
              obscure or hide source links behind paywalls or registration gates.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy. Changes will be posted on this
              page with an updated effective date. We do not notify users of
              privacy policy changes via email or other mechanisms because we
              do not collect contact information. If you wish to stay informed
              about changes, we recommend checking this page periodically or
              watching our GitHub repository for commits.
            </p>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              Policy Change Notification
            </h3>
            <p>
              When we make material changes to this privacy policy, we will:
            </p>
            <ul>
              <li>
                Update the &quot;Last updated&quot; date at the top of this page
              </li>
              <li>
                Commit the change to our public GitHub repository with a
                descriptive commit message
              </li>
              <li>
                Add an entry to our changelog documenting the nature of the
                change
              </li>
            </ul>
            <p>
              We define "material changes" as any modification that affects the
              types of data we collect, how we use data, or your rights under
              applicable privacy laws. Minor corrections (typos, formatting,
              clarifying language) are not considered material changes and will
              not trigger special notification procedures.
            </p>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              Historical Policy Versions
            </h3>
            <p>
              Previous versions of this privacy policy are available in our Git
              history on GitHub. You can browse the commit history of
              app/privacy/page.tsx to see how the policy has evolved over time.
              Each commit message describes the changes made in that version.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Compliance with Indian Data Protection Laws
            </h2>
            <p>
              This privacy policy is designed to comply with India's Digital
              Personal Data Protection Act, 2023 (DPDP Act). Because we do not
              collect, process, or store any personal data from visitors to
              BestAIAgent.in, we are not a "data fiduciary" or "data processor"
              under the Act. However, we still adhere to the Act's principles
              of transparency, purpose limitation, and data minimization by
              ensuring that no personal data enters our systems in the first
              place.
            </p>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt=6">
              DPDP Act Specific Considerations
            </h3>
            <p>
              Under the DPDP Act, "personal data" includes any data about an
              identifiable individual, and "sensitive personal data" includes
              biometric data, financial data, and other categories. Voice data
              is explicitly classified as biometric data under the Act. Because
              we do not collect any data from visitors—whether personal,
              sensitive, or biometric—we have no obligations under the Act
              regarding data processing, consent, or breach notification. We
              note, however, that third parties linked from our site (such as
              voice AI vendors, cloud providers, and analytics services) may
              have their own DPDP compliance obligations if they process
              personal data from users in India.
            </p>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              Data Localization
            </h3>
            <p>
              We do not store any personal data, so data localization requirements
              under the DPDP Act do not apply to us. Any data we do store (static
              website files) is hosted on Vercel's global edge network, which
              includes servers in the Asia-Pacific region. Since this data does
              not contain personal information, no localization requirements are
              triggered.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              International Visitors
            </h2>
            <p>
              This website is accessible globally. If you are accessing
              BestAIIAgent.in from outside India, please note that our privacy
              practices are the same regardless of your location. We do not
              collect any data from any visitor, regardless of jurisdiction.
              If you are subject to privacy laws in your jurisdiction (such as
              the GDPR in the European Union, the CCPA in California, or the
              PIPEDA in Canada), our lack of data collection means that those
              laws have limited applicability to our operations.
            </p>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              GDPR Applicability
            </h3>
            <p>
              Under the EU General Data Protection Regulation (GDPR), we are
              likely not a data controller or processor with respect to visitors
              to BestAIAgent.in because we do not collect, process, or store any
              personal data. If we were to begin collecting personal data in the
              future, we would update this policy to reflect our obligations
              under the GDPR, including providing mechanisms for data access,
              rectification, erasure, and portability upon request.
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Children's Privacy
            </h2>
            <p>
              BestAIAgent.in is not directed at children under the age of 13, and
              we do not knowingly collect personal information from children. If
              you are under 13, please do not attempt to use our site or provide
              any information. If we become aware that we have inadvertently
              collected personal information from a child under 13, we will
              take steps to delete such information. Since we do not collect any
              personal data whatsoever, this provision is included for
              completeness and compliance with applicable laws.
            </p>

            <h2 className="text-2xl font-bold text[#f7f7ff] mt=8">
              Security Measures
            </h2>
            <p>
              Because we do not collect or store personal data, there is no
              personal information at risk of unauthorized access, disclosure,
              or loss. Our website is a static site with no server-side
              processing, no databases, and no user accounts. This architecture
              inherently minimizes the attack surface and eliminates common
              privacy risks such as data breaches, credential leaks, and session
              hijacking.
            </p>
            <h3 className="text-xl font-semibold text[#f7f7ff] mt-6">
              Technical Security Controls
            </h3>
            <p>
              Our static site is served over HTTPS with TLS 1.3 encryption. We
              use Vercel's global edge network, which includes automatic DDoS
              protection, web application firewall, and content delivery. Our
              source code is publicly auditable on GitHub, allowing security
              researchers to verify our implementation. We do not use any third-
              party scripts, widgets, or embedded content that could introduce
              security vulnerabilities.
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
