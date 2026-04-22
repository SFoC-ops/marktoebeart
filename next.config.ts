import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Sanity CDN — allow any project's asset URLs. Replace the host pattern
    // with the specific project-id subdomain once Sanity is provisioned if
    // a tighter allowlist is preferred.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      // Picsum serves deterministic stub photography before Mark's selects
      // land. Remove once real Sanity assets are in place for launch.
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Reduce bundle size by importing only the icons actually used.
    optimizePackageImports: ["@sanity/icons", "next-sanity"],
  },
};

export default nextConfig;
