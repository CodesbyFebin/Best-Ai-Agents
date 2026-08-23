import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BestAIAgent.in",
  description:
    "Get in touch with the BestAIAgent.in team for questions, corrections, or suggestions.",
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
            </div>
          </div>

          <div className="prose lg:prose-xl max-w-4xl text-[#c5c7d8]">
            <p className="text-lg">We'd love to hear from you.</p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Report an Error
            </h2>
            <p>
              Found a broken link, outdated pricing, or incorrect claim?{" "}
              <a
                href="https://github.com/CodesbyFebin/bestaiagent.in/issues"
                className="text-[#8b5cf6] hover:underline"
              >
                Open a GitHub issue
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">
              Partnerships
            </h2>
            <p>
              We do not accept paid placements or sponsored content. For
              partnership inquiries, email{" "}
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
              .
            </p>

            <h2 className="text-2xl font-bold text-[#f7f7ff] mt-8">Follow</h2>
            <ul>
              <li>Twitter: @bestaiagent</li>
              <li>GitHub: CodesbyFebin/bestaiagent.in</li>
              <li>Newsletter: Subscribe for monthly updates</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
