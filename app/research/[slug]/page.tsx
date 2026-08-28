import { notFound } from "next/navigation";
import { Metadata } from "next";
import { research as researchData } from "@/data/research";
import { Research } from "@/data/types";

interface Props {
  params: Promise<{ slug: string }>;
}

function getResearch(slug: string): Research | undefined {
  return researchData.find((r) => r.slug === slug);
}

export async function generateStaticParams() {
  return researchData.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const report = getResearch(slug);
  if (!report) return {};

  return {
    title: report.title + " | BestAIAgent.in",
    description: report.abstract,
    openGraph: {
      title: report.title,
      description: report.abstract,
      type: "article",
    },
    alternates: {
      canonical: `https://bestaiagent.in/research/${slug}/`,
    },
  };
}

export default async function ResearchPage({ params }: Props) {
  const { slug } = await params;
  const report = getResearch(slug);

  if (!report) {
    notFound();
  }

  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Research Report</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">{report.title}</h1>
              <p className="text-xl text-[#c5c7d8] mb-4">{report.abstract}</p>
              <div className="flex gap-4 text-sm text-[#555872]">
                <span>Pillar: {report.pillar}</span>
                <span>·</span>
                <span>Date: {report.date}</span>
                <span>·</span>
                <span>Evidence: {report.evidenceCount} items</span>
              </div>
            </div>
          </div>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Research Summary</h2>
              <p className="text-[#c5c7d8] leading-relaxed">
                This report is part of BestAIAgent.in's ongoing research program,
                which examines the AI agent landscape through an evidence-first
                lens. Our research methodology involves primary data collection,
                secondary source analysis, and hands-on testing. All findings in
                this report are traceable to verifiable sources and are updated
                on a regular schedule to ensure continued accuracy.
              </p>
              <p className="text-[#c5c7d8] mt-4">
                The findings presented here reflect the state of the AI agent
                ecosystem at the time of publication ({report.date}). The AI
                landscape evolves rapidly, and some findings may not remain
                current over time. We recommend reviewing the last-verified
                dates on individual agent profiles for the most up-to-date
                information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Authors</h2>
              <ul className="list-none p-0">
                {report.authors.map((author, i) => (
                  <li key={i} className="text-[#c5c7d8] mb-1">
                    {author}
                  </li>
                ))}
              </ul>
              <p className="text-[#9ca5c3] text-sm mt-3">
                Our research team comprises domain experts in AI, software
                engineering, data analysis, and India-specific regulatory
                compliance. All research is independently conducted without
                vendor funding or sponsorship. For information about joining our
                research team, see our{" "}
                <a href="/contact/" className="text-[#8b5cf6] hover:underline">
                  contact page
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Research Context</h2>
              <p className="text-[#c5c7d8] leading-relaxed">
                This report sits within the broader research landscape of {report.pillar}
                and contributes to our ongoing effort to provide evidence-backed
                insights for developers, businesses, and policymakers. The
                research questions addressed in this report emerged from direct
                engagement with our community of Indian developers, enterprise
                procurement teams, and academic researchers.
              </p>
              <p className="text-[#c5c7d8] mt-4">
                Related research reports in the {report.pillar} pillar can be
                found on our{" "}
                <a href="/research/" className="text-[#8b5cf6] hover:underline">
                  research page
                </a>
                . We also maintain a living bibliography of academic papers,
                government reports, and industry whitepapers that inform our
                analysis, available on our{" "}
                <a
                  href="https://github.com/CodesbyFebin/bestaiagent.in"
                  className="text-[#8b5cf6] hover:underline"
                >
                  GitHub repository
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Methodology</h2>
              <p className="text-[#c5c7d8] leading-relaxed">{report.methodology}</p>
              <p className="text-[#9ca5c3] text-sm mt-4">
                Our data collection process follows a rigorous protocol designed
                to minimize bias and maximize reproducibility. We use a mixed-
                methods approach that combines quantitative benchmarking with
                qualitative expert interviews. All raw data and analysis scripts
                are available in our public GitHub repository for independent
                verification.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
                Data Collection Process
              </h2>
              <p className="text-[#c5c7d8] leading-relaxed">
                Our data collection involves multiple stages, each designed to
                ensure the reliability and validity of our findings. We begin
                with a scoping phase to identify the most relevant data sources
                and collection methods. We then proceed through systematic data
                gathering, validation, and cross-referencing stages.
              </p>
              <ul className="space-y-2 text-[#c5c7d8]">
                <li>
                  <strong>Primary research</strong>: Direct engagement with
                  vendors, developers, and end users through surveys, interviews,
                  and hands-on testing.
                </li>
                <li>
                  <strong>Secondary sources</strong>: Official documentation,
                  public APIs, GitHub repositories, pricing pages, and industry
                  reports.
                </li>
                <li>
                  <strong>Independent testing</strong>: Hands-on evaluation of
                  agent capabilities, MCP transport configurations, and India
                  Fit characteristics in controlled environments.
                </li>
                <li>
                  <strong>Community validation</strong>: Cross-referencing our
                  findings with community feedback, open-source contributions, and
                  public discussions.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Key Findings</h2>
              <p className="text-[#9ca5c3] text-sm mb-4">
                The following findings represent the most significant insights
                from our research. Each finding has been validated through
                multiple independent sources and, where applicable, hands-on
                testing.
              </p>
              <ol className="space-y-4">
                {report.findings.map((finding, i) => (
                  <li key={i} className="text-[#c5c7d8] leading-relaxed">
                    <div className="flex gap-3">
                      <span className="text-[#8b5cf6] font-bold">{i + 1}.</span>
                      <span>{finding}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
                Regional Analysis: India Focus
              </h2>
              <p className="text-[#c5c7d8] leading-relaxed">
                For this research report, we applied an India-specific lens to
                examine how the findings manifest in the Indian market context.
                This includes analysis of regulatory implications under the
                Digital Personal Data Protection Act, pricing considerations with
                INR conversion and UPI payment support, and adoption patterns
                among Indian developers and enterprises.
              </p>
              <p className="text-[#9ca5c3] text-sm mt-2">
                Regional findings are integrated throughout the Key Findings
                section above. Where a finding has particular relevance to the
                Indian market, it is noted with an <span className="text-[#f97316]">🇮🇳</span>{" "}
                indicator.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
                Implications and Recommendations
              </h2>
              <p className="text-[#c5c7d8] leading-relaxed">
                Based on the findings in this report, we offer the following
                recommendations for different stakeholder groups:
              </p>
              <div className="space-y-4 mt-4">
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    backgroundColor: "rgba(13, 16, 37, 0.5)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">
                    For Developers
                  </h3>
                  <p className="text-sm text-[#9ca5c3]">
                    Focus on frameworks and tools that offer strong MCP
                    integration, local deployment options, and Indic language
                    support. We recommend evaluating agents using our evidence-
                    backed scoring system and verifying claims independently
                    before adoption.
                  </p>
                </div>
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    backgroundColor: "rgba(13, 16, 37, 0.5)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">
                    For Enterprise Procurement
                  </h3>
                  <p className="text-sm text-[#9ca5c3]">
                    Prioritize vendors that offer transparent INR pricing, UPI
                    payment support, and DPDP compliance. Verify data residency
                    options and consent management capabilities before
                    deployment. Use our comparison tools to build side-by-side
                    matrices for decision documentation.
                  </p>
                </div>
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    backgroundColor: "rgba(13, 16, 37, 0.5)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">
                    For Vendors
                  </h3>
                  <p className="text-sm text-[#9ca5c3]">
                    Ensure that your product documentation is publicly accessible,
                    your pricing is transparent, and your compliance posture is
                    clearly communicated. Open-source releases with permissive
                    licenses and active maintenance receive higher scores in our
                    evaluation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
                Limitations and Caveats
              </h2>
              <p className="text-[#c5c7d8] leading-relaxed">
                While we strive for accuracy and completeness, this research has
                several limitations that readers should keep in mind:
              </p>
              <ul className="space-y-2 text-[#c5c7d8]">
                <li>
                  <strong>Sample bias</strong>: Our primary research sample may
                  not be representative of all market segments, particularly
                  smaller organizations and individual independent developers.
                </li>
                <li>
                  <strong>Temporal limitations</strong>: The AI landscape changes
                  rapidly; findings may become outdated. Check individual agent
                  profiles for last-verified dates.
                </li>
                <li>
                  <strong>Geographic focus</strong>: While this report covers
                  global markets, our India-specific analysis is more detailed
                  than coverage for other regions.
                </li>
                <li>
                  <strong>Vendor cooperation</strong>: Some vendors did not
                  respond to our requests for information. Where possible, we
                  supplemented with independent testing.
                </li>
                <li>
                  <strong>Methodology evolution</strong>: Our evaluation
                  methodology and scoring rubric are subject to change. Past
                  scores may not reflect current evaluation criteria.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Citations</h2>
              <p className="text-[#c5c7d8] mb-4">
                All sources used in this research report are listed below. We
                encourage readers to verify our findings by accessing these
                sources directly.
              </p>
              <ul className="list-none p-0 space-y-2">
                {report.citations.map((citation, i) => (
                  <li key={i}>
                    <a
                      href={citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b5cf6] hover:underline text-sm"
                    >
                      {citation}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">
                Reproducibility
              </h2>
              <p className="text-[#c5c7d8] leading-relaxed">
                All raw data, analysis scripts, and testing protocols used in
                this research are available in our{" "}
                <a
                  href="https://github.com/CodesbyFebin/bestaiagent.in"
                  className="text-[#8b5cf6] hover:underline"
                >
                  public GitHub repository
                </a>
                . We encourage independent researchers to reproduce our findings,
                challenge our methodology, and contribute improvements to our
                analysis. Our research is licensed under the Creative Commons
                Attribution-ShareAlike 4.0 International License.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">How often are research reports updated?</h3>
                  <p className="text-sm text-[#c5c7d8]">We review reports annually and update them when significant changes occur in the underlying technology or market. Check the report metadata section for the publication date.</p>
                </div>
                <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">Can I use this research in my own work?</h3>
                  <p className="text-sm text-[#c5c7d8]">Yes. All research is licensed under CC BY-SA 4.0. You can share, adapt, and build upon this work provided you give appropriate credit and distribute derivative works under the same license.</p>
                </div>
                <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">How can I contribute to future research?</h3>
                  <p className="text-sm text-[#c5c7d8]">We welcome collaboration from researchers, practitioners, and community members. Contact us at research@bestaiagent.in or open a GitHub issue to discuss potential contributions.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Staying Updated</h2>
              <p className="text-[#c5c7d8] mb-4">The AI landscape evolves rapidly, and research findings can become outdated quickly. To stay informed about updates to this report and related research, watch our GitHub repository for new publications, follow us on Twitter/X for announcements, or subscribe to our RSS feed for new research releases.</p>
              <p className="text-[#c5c7d8]">If you notice that a finding in this report has changed significantly—new capabilities, market shifts, or regulatory changes—please report it through our GitHub issues. Community feedback helps us keep the research accurate and useful for all readers.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Related Research</h2>
              <p className="text-[#c5c7d8] mb-4">This report is part of a broader research program that examines the AI agent landscape from multiple angles. Related reports in the {report.pillar} pillar provide additional context and depth on specific topics. We recommend reading related reports to gain a comprehensive understanding of the issues addressed here.</p>
              <p className="text-[#c5c7d8]">Our research agenda is shaped by community input. If you have suggestions for future research topics, please submit them through our GitHub issues or contact us at research@bestaiagent.in. We prioritize topics that have the greatest potential to help Indian developers, enterprises, and policymakers make informed decisions about AI adoption.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Acknowledgments</h2>
              <p className="text-[#c5c7d8] mb-4">This research was made possible by the contributions of our community of developers, researchers, and practitioners who provided feedback, shared data, and challenged our findings. We are particularly grateful to the Indian developer community for their insights into the unique challenges and opportunities of the Indian AI market.</p>
              <p className="text-[#c5c7d8]">We also acknowledge the vendors who provided access to their products for evaluation and who responded to our requests for information. Their cooperation enables us to provide accurate and up-to-date assessments that benefit the entire community.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">About the Research Team</h2>
              <p className="text-[#c5c7d8] mb-4">The BestAIAgent.in research team comprises domain experts in AI, software engineering, data analysis, and India-specific regulatory compliance. Our researchers have published extensively on topics including AI agent evaluation, MCP infrastructure, Indic language models, and the impact of the DPDP Act on AI deployments.</p>
              <p className="text-[#c5c7d8]">We are committed to open research practices. All our data, analysis scripts, and testing protocols are publicly available for independent verification. We welcome collaboration from researchers and practitioners who share our commitment to evidence-backed evaluation.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Limitations and Future Work</h2>
              <p className="text-[#c5c7d8] mb-4">This research has several limitations that readers should keep in mind. Our sample may not be representative of all market segments, particularly smaller organizations and individual developers. The AI landscape changes rapidly, and some findings may become outdated. Our India-specific analysis is more detailed than coverage for other regions.</p>
              <p className="text-[#c5c7d8">Future research will address these limitations by expanding our sample, increasing the frequency of updates, and deepening our analysis of other regions. We will also explore emerging topics such as the impact of MCP adoption on agent interoperability and the effectiveness of India-specific language models.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Community and Collaboration</h2>
              <p className="text-[#c5c7d8] mb-4">We believe that research is stronger when it is conducted in the open. Our research agenda is shaped by community input, and we welcome collaboration from researchers, practitioners, and policymakers. If you have data to share, questions to ask, or insights to contribute, please reach out through our GitHub repository or contact us at research@bestaiagent.in.</p>
              <p className="text-[#c5c7d8]">We also welcome partnerships with academic institutions, industry organizations, and government bodies that share our commitment to evidence-backed AI evaluation. Together, we can build a more comprehensive understanding of the AI agent landscape and its impact on Indian society and economy. Thank you for reading this report and for your interest in evidence-backed AI evaluation. We look forward to your feedback and collaboration.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">How often are research reports updated?</h3>
                  <p className="text-sm text-[#c5c7d8]">We review reports annually and update them when significant changes occur in the underlying technology or market. Check the report metadata section for the publication date.</p>
                </div>
                <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">Can I use this research in my own work?</h3>
                  <p className="text-sm text-[#c5c7d8]">Yes. All research is licensed under CC BY-SA 4.0. You can share, adapt, and build upon this work provided you give appropriate credit and distribute derivative works under the same license.</p>
                </div>
                <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.3)" }}>
                  <h3 className="font-semibold text-[#f7f7ff] mb-1">How can I contribute to future research?</h3>
                  <p className="text-sm text-[#c5c7d8]">We welcome collaboration from researchers, practitioners, and community members. Contact us at research@bestaiagent.in or open a GitHub issue to discuss potential contributions. Your insights help us improve the quality and relevance of our research.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">How to Cite This Research</h2>
              <p className="text-[#c5c7d8] mb-4">This research report is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0). You are free to share, adapt, and build upon this work for any purpose, provided you give appropriate credit and distribute derivative works under the same license.</p>
              <p className="text-[#c5c7d8] mb-4">Suggested citation format: BestAIAgent.in Research Team. "{report.title}." BestAIAgent.in, {report.date}. https://bestaiagent.in/research/{report.slug}/.</p>
              <p className="text-[#c5c7d8]">If you reference this work in academic or industry publications, we would appreciate being notified so we can track impact and share your work with our community. Contact us at research@bestaiagent.in or open a GitHub issue with the citation details.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Future Research Directions</h2>
              <p className="text-[#c5c7d8] mb-4">This report represents a snapshot of the current state of the AI agent landscape. As the field evolves, several areas warrant further investigation: the long-term impact of MCP adoption on agent interoperability, the effectiveness of India-specific language models compared to global models, the evolution of DPDP compliance practices across the industry, and the economic impact of AI agent adoption on Indian businesses.</p>
              <p className="text-[#c5c7d8]">We are committed to ongoing research in these areas and will publish updates as new data becomes available. If you are a researcher working in related areas, we welcome collaboration. Contact us through our GitHub repository or email to discuss potential research partnerships.</p>
            </div>
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "rgba(13, 16, 37, 0.8)",
                borderColor: "rgba(139, 92, 246, 0.3)",
              }}
            >
              <h3 className="text-xl font-semibold text-[#f7f7ff] mb-2">
                Report Metadata
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#9ca5c3]">Report ID:</span>{" "}
                  <span className="text-[#c5c7d8] font-mono">{report.slug}</span>
                </div>
                <div>
                  <span className="text-[#9ca5c3]">Pillar:</span>{" "}
                  <span className="text-[#c5c7d8]">{report.pillar}</span>
                </div>
                <div>
                  <span className="text-[#9ca5c3]">Date published:</span>{" "}
                  <span className="text-[#c5c7d8]">{report.date}</span>
                </div>
                <div>
                  <span className="text-[#9ca5c3]">Evidence items:</span>{" "}
                  <span className="text-[#c5c7d8]">{report.evidenceCount}</span>
                </div>
                <div>
                  <span className="text-[#9ca5c3]">Authors:</span>{" "}
                  <span className="text-[#c5c7d8]">{report.authors.join(", ")}</span>
                </div>
                <div>
                  <span className="text-[#9ca5c3]">License:</span>{" "}
                  <span className="text-[#c5c7d8]">CC BY-SA 4.0</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
