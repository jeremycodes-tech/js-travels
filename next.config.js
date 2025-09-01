/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",   // ✅ this replaces "next export"
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
