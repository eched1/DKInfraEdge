import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www -> non-www redirect (handles both http and https)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dkinfraedge.com" }],
        destination: "https://dkinfraedge.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
