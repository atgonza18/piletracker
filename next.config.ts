import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
  // Configure the server to use environment variables
  server: {
    port: 3001,
  },
  // Enable experimental features
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
