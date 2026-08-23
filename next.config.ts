import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old category slugs → canonical category slugs
      {
        source: "/categories/business-automation",
        destination: "/categories/automation",
        permanent: true,
      },
      {
        source: "/categories/business-automation/:path*",
        destination: "/categories/automation/:path*",
        permanent: true,
      },
      // GSC migration redirects (legacy URLs → canonical)
      {
        source: "/agent/:slug",
        destination: "/agents/:slug",
        permanent: true,
      },
      {
        source: "/coding-agents",
        destination: "/categories/coding-agents",
        permanent: true,
      },
      {
        source: "/automation-tools",
        destination: "/categories/automation",
        permanent: true,
      },
      {
        source: "/voice-ai",
        destination: "/categories/voice-ai",
        permanent: true,
      },
      {
        source: "/llm-models",
        destination: "/categories/core-llms",
        permanent: true,
      },
      {
        source: "/agent-frameworks",
        destination: "/categories/agent-builders",
        permanent: true,
      },
      {
        source: "/infrastructure",
        destination: "/categories/infrastructure",
        permanent: true,
      },
      {
        source: "/mcp-servers",
        destination: "/mcp",
        permanent: true,
      },
      {
        source: "/india-ai",
        destination: "/indian-ai",
        permanent: true,
      },
      {
        source: "/compare/:slug",
        destination: "/compare/:slug",
        permanent: true,
      },
      {
        source: "/pricing/agents",
        destination: "/categories/pricing",
        permanent: true,
      },
      {
        source: "/security/privacy",
        destination: "/categories/security",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
