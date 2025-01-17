import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,  // Ignores TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true,  // Ignores ESLint errors during build
  },
};

export default nextConfig;
