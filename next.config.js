/** @type {import('next').NextConfig} */
const repoName = "js-travels"; // must match GitHub repo name exactly
const isProd = process.env.NODE_ENV === "production";
const isVercel = !!process.env.VERCEL; // detects if running on Vercel

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: !isVercel && isProd ? `/${repoName}/` : "",
  basePath: !isVercel && isProd ? `/${repoName}` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: !isVercel && isProd ? `/${repoName}` : "",
  },
};

module.exports = nextConfig;
