import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/modelomuestra",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
