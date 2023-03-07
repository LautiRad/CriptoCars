/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
    TOKEN: process.env.TOKEN,
  },
  images: {
    domains: [
      "localhost",
      "firebasestorage.googleapis.com",
      "http2.mlstatic.com",
    ],
  },
};

module.exports = nextConfig;
