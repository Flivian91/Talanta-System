/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // ✅ Ensures CSS is included
  },
};

export default nextConfig;
