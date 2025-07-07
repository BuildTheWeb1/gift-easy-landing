/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable Fast Refresh explicitly
  webpack: (config, { isServer }) => {
    // Add any custom webpack config here
    return config;
  },
};

export default nextConfig;
