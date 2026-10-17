/** @type {import('next').NextConfig} */

// Use next-pwa safely
let withPWA;
try {
  withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  });
} catch {
  withPWA = (config: any) => config;
}

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = withPWA(nextConfig);
