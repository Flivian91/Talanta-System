/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false, // ✅ Ensures CSS is included
  },
};

export default nextConfig;
