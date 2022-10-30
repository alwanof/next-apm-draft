/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_SERVER: 'https://apm-json-server.vercel.app',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
