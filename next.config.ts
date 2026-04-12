import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.food.gov.uk",
        pathname: "/sites/default/files/**",
      },
    ],
  },
};

export default nextConfig;
