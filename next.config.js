/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_SERVER: 'http://localhost:5000',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
