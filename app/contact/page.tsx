import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BestAIAgent.in",
  description: "Get in touch with the BestAIAgent.in team for questions, corrections, or suggestions.",
  alternates: {
    canonical: "https://bestaiagent.in/contact/",
  },
};

export default function ContactPage() {
  return (
    <article className="prose lg:prose-xl max-w-4xl">
      <h1>Contact</h1>
      <p>We'd love to hear from you.</p>

      <h2>Report an Error</h2>
      <p>
        Found a broken link, outdated pricing, or incorrect claim?{" "}
        <a href="https://github.com/CodesbyFebin/bestaiagent.in/issues">
          Open a GitHub issue
        </a>
        .
      </p>

      <h2>Partnerships</h2>
      <p>
        We do not accept paid placements or sponsored content. For partnership
        inquiries, email <a href="mailto:partners@bestaiagent.in">partners@bestaiagent.in</a>.
      </p>

      <h2>Press</h2>
      <p>
        For press inquiries, email <a href="mailto:press@bestaiagent.in">press@bestaiagent.in</a>.
      </p>

      <h2>Follow</h2>
      <ul>
        <li>Twitter: @bestaiagent</li>
        <li>GitHub: CodesbyFebin/bestaiagent.in</li>
        <li>Newsletter: Subscribe for monthly updates</li>
      </ul>
    </article>
  );
}
