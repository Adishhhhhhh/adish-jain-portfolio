import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The multi-lockfile warning is harmless; tried setting turbopack.root but it
  // broke RSC module resolution in Next.js 16.2.6 on Windows. Leaving as default.

  // Approach and Creative Strategy merged into Creative Approach, and the
  // philosophy that survived the merge became Operating Principles. These keep
  // any link already shared in an application pointing somewhere real.
  async redirects() {
    return [
      { source: "/approach", destination: "/creative-approach", permanent: true },
      { source: "/creative-strategy", destination: "/principles", permanent: true },
    ];
  },
};

export default nextConfig;
