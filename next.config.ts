import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // local dev
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },

      // production
      {
        protocol: "https",
        hostname: "dexpertbackend.onrender.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;

