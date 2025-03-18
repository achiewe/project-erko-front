import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/consultation", // Old URL
        destination: "/erko/consulting", // New URL
        permanent: true, // 301 Redirect (SEO-friendly)
      },
    ];
  },
};

export default nextConfig;
