import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: { globalNotFound: true },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
