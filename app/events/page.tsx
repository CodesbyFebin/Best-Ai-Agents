import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Events India — Conferences, Meetups & Workshops | BestAIAgent.in",
  description: "Discover AI events, conferences, and meetups in India. Stay updated on the latest AI agent developments, MCP workshops, and India AI ecosystem events.",
  keywords: ["AI events India", "AI conferences India", "AI meetups India", "MCP workshops", "AI agent events", "India AI ecosystem", "AI workshops Bengaluru"],
  alternates: { canonical: "https://bestaiagent.in/events/" },
};

export default function EventsPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">Events</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">AI Events India</h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">Discover AI events, conferences, and meetups across India. Stay connected with the AI agent community and learn about the latest developments in MCP, sovereign AI, and Indic language models.</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Why Attend AI Events</h2>
            <p className="text-[#c5c7d8] mb-4">Attending AI events is one of the best ways to stay informed about the latest developments, network with other practitioners, and learn from experts in the field. India has a vibrant AI community with events happening regularly across major cities including Bengaluru, Mumbai, Hyderabad, Chennai, and Delhi NCR. These events provide unique opportunities to learn from industry leaders, discover new tools and technologies, and build connections with fellow practitioners who share your interests and challenges. Whether you are a student, a working professional, or an entrepreneur, attending AI events can accelerate your learning and open up new opportunities for collaboration and career growth.</p>
            <p className="text-[#c5c7d8] mb-4">Our events calendar includes conferences, workshops, meetups, and hackathons focused on AI agents, MCP infrastructure, DPDP compliance, and Indic language models. Whether you are a beginner or an experienced practitioner, there is an event for you. We update this calendar regularly as new events are announced, ensuring you always have access to the latest opportunities for learning and networking in the Indian AI ecosystem. Our goal is to make it easy for you to find and attend events that match your interests and skill level, and to help event organizers reach their target audience.</p>
            <p className="text-[#c5c7d8] mb-4">If you are organizing an AI event in India that you would like us to list, please submit it through our GitHub repository. We prioritize events that are free or offer significant free content, and events that focus on AI agents, MCP, and India-specific topics. Our goal is to make AI knowledge accessible to everyone in the Indian tech community, regardless of their location or budget. We believe that community-driven events are essential for building a strong and inclusive AI ecosystem in India, and we are committed to supporting organizers in making their events successful.</p>
            <p className="text-[#c5c7d8]">We also provide promotional support for listed events through our newsletter and social media channels, helping organizers reach a wider audience. If you are an event organizer and would like to discuss promotional opportunities, please contact us through our GitHub repository. We are always looking for ways to support the Indian AI community and to help events succeed.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Event Types</h2>
            <p className="text-[#c5c7d8] mb-4">We list several types of AI events to serve different learning and networking needs. Conferences are multi-day events with multiple tracks, keynotes, and networking opportunities. They are ideal for staying informed about industry trends and meeting a wide range of practitioners. Major conferences often feature exhibitions where companies showcase their latest AI products and services, providing hands-on experience with new tools. Conferences typically attract hundreds or thousands of attendees and feature talks from leading experts in the field. They are a great way to get a broad overview of the AI landscape and to identify areas where you want to deepen your knowledge.</p>
            <p className="text-[#c5c7d8] mb-4">Workshops are hands-on sessions focused on practical skills. They typically last a day or less and involve building real projects with guidance from experienced practitioners. Workshops are ideal for learning new tools and techniques in a structured environment. Many workshops provide materials and resources that you can take home and continue using after the event, extending the learning experience beyond the event itself. Workshops are typically limited in size to ensure personalized attention and support, making them a great option for learning specific skills in depth.</p>
            <p className="text-[#c5c7d8] mb-4">Meetups are regular local gatherings for networking and knowledge sharing. They are typically free or low-cost and feature short talks, demos, and discussions. Meetups are great for building your professional network and staying connected with the local community. They provide a relaxed environment for asking questions and sharing experiences with peers who understand the local context and challenges. Many meetups also provide food and beverages, creating a social atmosphere that encourages networking and community building.</p>
            <p className="text-[#c5c7d8]">Hackathons are competitive events where teams build AI solutions in a limited time. They are excellent for learning under pressure, showcasing skills, and potentially winning prizes. Many hackathons also provide mentorship and resources to help participants succeed. They are a great way to test your skills and learn from other participants in a collaborative environment that encourages innovation and creative problem-solving. Hackathons often attract sponsors who provide prizes, mentorship, and recruitment opportunities, making them a great way to connect with potential employers and collaborators.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-6">Upcoming Events</h2>
            <div className="space-y-6">
              <div className="rounded-xl p-6 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">Conference</span>
                  <span className="text-sm text-[#9ca5c3]">September 15-17, 2026</span>
                  <span className="text-sm text-[#555872]">Bengaluru, Karnataka</span>
                </div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-2">India AI Summit 2026</h3>
                <p className="text-[#c5c7d8] mb-3">India largest AI conference bringing together researchers, developers, and enterprises. Features tracks on AI agents, MCP infrastructure, and sovereign AI deployment. The summit includes keynotes from industry leaders, technical sessions, panel discussions, and an exhibition showcasing the latest AI products and services. Over 2000 attendees expected from across India and internationally. Early bird registration is now open with discounts for students and startups. The summit also features a startup pitch competition with prizes for the most innovative AI startups.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">AI Agents</span>
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">MCP</span>
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">Sovereign AI</span>
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">Indic Models</span>
                </div>
              </div>
              <div className="rounded-xl p-6 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Workshop</span>
                  <span className="text-sm text-[#9ca5c3]">October 5, 2026</span>
                  <span className="text-sm text-[#555872]">Hyderabad, Telangana</span>
                </div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-2">MCP Developer Workshop</h3>
                <p className="text-[#c5c7d8] mb-3">Hands-on workshop for building and deploying MCP servers. Learn transport configuration, security best practices, and enterprise integration patterns. Participants will build a custom MCP server from scratch and deploy it using Docker. The workshop covers both stdio and Streamable HTTP transports with practical exercises for each transport type. All participants will receive a certificate of completion and access to exclusive resources including code templates, deployment guides, and a private Slack channel for ongoing support.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">MCP Servers</span>
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">Security</span>
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">Enterprise Integration</span>
                </div>
              </div>
              <div className="rounded-xl p-6 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-trust-500/10 text-trust-400 border border-trust-500/20">Seminar</span>
                  <span className="text-sm text-[#9ca5c3]">October 20, 2026</span>
                  <span className="text-sm text-[#555872]">Mumbai, Maharashtra</span>
                </div>
                <h3 className="text-xl font-semibold text-[#f7f7ff] mb-2">DPDP Compliance for AI</h3>
                <p className="text-[#c5c7d8] mb-3">Expert seminar on implementing DPDP Act compliance for AI systems. Covers data residency, consent management, and audit requirements. The seminar includes case studies from Indian enterprises that have successfully implemented DPDP compliance for their AI deployments. Legal experts and compliance officers will share practical guidance based on real-world experience. This seminar is essential for anyone deploying AI systems that process personal data of Indian residents, including data scientists, engineers, product managers, and compliance officers.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">DPDP Act</span>
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">Data Residency</span>
                  <span className="text-xs px-2 py-1 rounded bg-[#1a1a2e] text-[#9ca5c3] border border-[#252b4b]">Consent Management</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Online Events</h2>
            <p className="text-[#c5c7d8] mb-4">Many AI events offer online or hybrid attendance options, making them accessible to participants across India and globally. Online events are particularly valuable for those who cannot travel to event locations due to time or budget constraints. They also provide flexibility for attendees in different time zones who may not be able to attend in-person events at the scheduled time. Online events have become increasingly popular in the post-pandemic era, and many organizers now offer hybrid options that combine the best of both in-person and virtual experiences. We clearly indicate which events offer online attendance in our event listings.</p>
            <p className="text-[#c5c7d8]">Online events often include recorded sessions that can be accessed after the event, providing flexibility for attendees who want to revisit the content or could not attend live. Some events also offer virtual networking opportunities through online platforms, allowing attendees to connect with speakers and other participants remotely. We recommend checking the event details for information about online attendance options and technical requirements. If you are an event organizer considering online or hybrid options, we can provide guidance on best practices and tools to ensure a successful virtual experience.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Submitting an Event</h2>
            <p className="text-[#c5c7d8] mb-4">If you are organizing an AI event in India that would be relevant to our community, please submit it through our GitHub repository. Include the event name, date, location, description, and topics covered. We also appreciate links to registration pages and event websites for easy access by our community members who want to attend. Please provide as much detail as possible to help us create an accurate and compelling listing that will attract attendees. We review all submissions and add relevant events to our calendar, prioritizing events that focus on AI agents, MCP infrastructure, DPDP compliance, and Indic language models.</p>
            <p className="text-[#c5c7d8] mb-4">Events that are free or have significant free content are highlighted in our listings. Please submit events at least 2 weeks in advance to ensure they are included before the event date. This lead time allows us to review the submission and create a quality listing that will be useful for potential attendees. We aim to process all submissions within 48 hours and will notify you once your event is listed. If you have questions about whether your event is suitable for listing, please open a GitHub issue and we will be happy to discuss it with you.</p>
            <p className="text-[#c5c7d8]">For recurring events like monthly meetups, please submit the event once and indicate that it is recurring. We will list the event with a note about the recurrence schedule. If the event details change (time, location, format), please submit an update so we can keep our listings accurate and up to date. We also welcome suggestions for improving our event listings and are always looking for ways to make them more useful for our community. If you have ideas for new event categories or features, please share them with us through GitHub discussions.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
