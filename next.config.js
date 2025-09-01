/** @type {import('next').NextConfig} */
const repoName = "js-travels"; // must match repo name exactly
const isProd = process.env.NODE_ENV === "production";
const isVercel = !!process.env.VERCEL;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Use basePath & assetPrefix only for GitHub Pages
  assetPrefix: !isVercel && isProd ? `/${repoName}/` : "",
  basePath: !isVercel && isProd ? `/${repoName}` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: !isVercel && isProd ? `/${repoName}` : "",
  },
};

module.exports = nextConfig;
