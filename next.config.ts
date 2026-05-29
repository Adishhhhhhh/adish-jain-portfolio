import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The multi-lockfile warning is harmless; tried setting turbopack.root but it
  // broke RSC module resolution in Next.js 16.2.6 on Windows. Leaving as default.
};

export default nextConfig;
