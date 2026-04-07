import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sfylaw-clone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
