import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    AES_KEY: process.env.NEXT_PUBLIC_AES_KEY,
    AES_IV: process.env.NEXT_PUBLIC_AES_IV
  },
  images: {
    domains: ['mnhpvcpanels.com', 'localhost:3000', 'localhost', 'backend.onetouchmediasolution.com', 'onetouchmediasolution.com'],
  },
};

export default nextConfig;
