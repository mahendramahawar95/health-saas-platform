import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  transpilePackages: ["@repo/ui", "@repo/tailwind-config"],
};

export default nextConfig;
