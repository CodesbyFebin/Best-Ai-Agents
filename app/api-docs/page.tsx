import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation — Programmatic Access to BestAIAgent.in Data | BestAIAgent.in",
  description: "API documentation for programmatic access to BestAIAgent.in directory data. Query agent profiles, models, frameworks, and evaluations using our REST API.",
  keywords: ["API documentation", "BestAIAgent API", "AI agent data API", "REST API", "programmatic access", "directory API"],
  alternates: { canonical: "https://bestaiagent.in/api-docs/" },
};

export default function ApiDocsPage() {
  return (
    <main>
      <div className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sectionHead mb-8">
            <div>
              <span className="kicker">API Documentation</span>
              <h1 className="text-4xl font-bold text-[#f7f7ff] mb-4">API Documentation</h1>
              <p className="text-lg text-[#c5c7d8] max-w-3xl">Programmatic access to BestAIAgent.in directory data. Query agent profiles, models, frameworks, and evaluations using our REST API.</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Getting Started</h2>
            <p className="text-[#c5c7d8] mb-4">Our API provides programmatic access to the data behind BestAIAgent.in. Use it to build custom dashboards, integrate evaluations into your procurement workflows, or conduct research on the AI agent landscape. The API is designed to be simple, predictable, and easy to integrate with any programming language or tool that can make HTTP requests.</p>
            <p className="text-[#c5c7d8] mb-4">The API is free to use for non-commercial purposes. For commercial use or high-volume access, please contact us to discuss licensing options. We ask that you attribute BestAIAgent.in as the source of data in any publications or products that use our API.</p>
            <p className="text-[#c5c7d8]">All API responses are provided in JSON format. The API is read-only and does not support data modification. We do not require authentication for read access, making it easy to get started without API keys.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Base URL</h2>
            <div className="rounded-xl p-4 border" style={{ backgroundColor: "rgba(13, 16, 37, 0.8)", borderColor: "rgba(139, 92, 246, 0.3)" }}>
              <code className="text-[#38d996]">https://bestaiagent.in</code>
            </div>
            <p className="text-[#c5c7d8] mt-4">All API endpoints are relative to this base URL. The API is served over HTTPS only for security.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Response Format</h2>
            <p className="text-[#c5c7d8] mb-4">All API responses follow a consistent JSON format with metadata and data fields. This consistent structure makes it easy to parse responses and handle errors in your applications.</p>
            <div className="rounded-xl p-4 border font-mono text-sm" style={{ backgroundColor: "rgba(13, 16, 37, 0.8)", borderColor: "rgba(139, 92, 246, 0.3)" }}>
              <pre className="text-[#c5c7d8] whitespace-pre-wrap">{`{
  "success": true,
  "data": { ... },
  "meta": {
    "total": 69,
    "page": 1,
    "limit": 20,
    "timestamp": "2026-08-28T10:00:00Z"
  }
}`}</pre>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Authentication</h2>
            <p className="text-[#c5c7d8] mb-4">The BestAIAgent.in API does not require authentication for read access. All endpoints are publicly available without API keys. This design choice reflects our commitment to open access and transparency in AI evaluation.</p>
            <p className="text-[#c5c7d8]">For commercial use or high-volume access that exceeds our rate limits, please contact us to discuss licensing options. We offer commercial licenses with higher rate limits and dedicated support for enterprise users.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Endpoints</h2>
            <p className="text-[#c5c7d8] mb-4">The following endpoints are available for programmatic access to our directory data. All endpoints support JSON responses and standard HTTP methods.</p>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-green-500/10 text-green-400">GET</span>
                  <code className="text-sm text-[#38d996]">/api/catalog</code>
                </div>
                <p className="text-sm text-[#9ca5c3]">Retrieve the complete catalog of agents, models, frameworks, and categories.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-green-500/10 text-green-400">GET</span>
                  <code className="text-sm text-[#38d996]">/api/agents</code>
                </div>
                <p className="text-sm text-[#9ca5c3]">Retrieve all agent profiles with filtering and pagination.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-green-500/10 text-green-400">GET</span>
                  <code className="text-sm text-[#38d996]">/api/models</code>
                </div>
                <p className="text-sm text-[#9ca5c3]">Retrieve all model profiles with filtering and pagination.</p>
              </div>
              <div className="rounded-xl p-4 border border-[#252b4b]/30" style={{ backgroundColor: "rgba(13, 16, 37, 0.5)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-green-500/10 text-green-400">GET</span>
                  <code className="text-sm text-[#38d996]">/api/frameworks</code>
                </div>
                <p className="text-sm text-[#9ca5c3]">Retrieve all framework profiles with filtering and pagination.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">Rate Limits</h2>
            <p className="text-[#c5c7d8] mb-4">To ensure fair usage and maintain service availability, we enforce rate limits on API requests. The free tier allows 100 requests per hour per IP address, which is sufficient for most development and research use cases.</p>
            <p className="text-[#c5c7d8]">Responses include rate limit headers (X-RateLimit-Limit, X-RateLimit-Remaining) so you can monitor your usage and implement appropriate backoff strategies. Exceeding rate limits returns HTTP 429 (Too Many Requests).</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#f7f7ff] mb-4">API Changelog</h2>
            <p className="text-[#c5c7d8] mb-4">We version our API to ensure backward compatibility. API changes are documented in our changelog and advance notice is provided for breaking changes. We maintain backward compatibility within a major version.</p>
            <p className="text-[#c5c7d8]">Current API version: v1. Breaking changes are introduced only in new major versions with at least 6 months notice. We also maintain a migration guide for major version upgrades to help you transition smoothly.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
