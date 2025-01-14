/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      // Disable ESLint during builds
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ["img.youtube.com"], // Allow images from YouTube
    },
  };
  
  module.exports = nextConfig;
  