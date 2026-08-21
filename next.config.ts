import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The multi-lockfile warning is harmless; tried setting turbopack.root but it
  // broke RSC module resolution in Next.js 16.2.6 on Windows. Leaving as default.

  // Section history, kept walkable so any link already shared in an application
  // still lands somewhere real. Approach and Creative Strategy merged into
  // Creative Approach, the philosophy became its closing section, and Strategy
  // Approach was renamed Strategic Approach.
  async redirects() {
    return [
      { source: "/approach", destination: "/creative-approach", permanent: true },
      { source: "/creative-strategy", destination: "/creative-approach", permanent: true },
      { source: "/principles", destination: "/creative-approach", permanent: true },
      { source: "/contact", destination: "/adish-jain/about#contact", permanent: true },
      { source: "/strategy-approach", destination: "/strategic-approach", permanent: true },
    ];
  },
};

export default nextConfig;
