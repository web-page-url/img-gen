import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.imagerouter.io',
      },
      {
        protocol: 'https',
        hostname: 'api.imagerouter.io',
      },
      {
        protocol: 'https',
        hostname: '*.imagerouter.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.openai.com',
      },
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
};

export default nextConfig;
