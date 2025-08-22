import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "sundayhug.com" },
      { protocol: "https", hostname: "www.sleepfoundation.org" },
      { protocol: "https", hostname: "sleeplady.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "yourdomain.com" },
      { protocol: "https", hostname: "norani.com" },
    ],
  },
};

export default nextConfig;
