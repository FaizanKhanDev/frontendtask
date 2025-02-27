import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "127.0.0.1", "192.168.0.1", "imgur.com", "i.imgur.com"],
  },
};

export default nextConfig;
