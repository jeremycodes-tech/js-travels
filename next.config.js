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
  // GitHub Pages needs basePath & assetPrefix
  assetPrefix: !isVercel && isProd ? `/${repoName}/` : "",
  basePath: !isVercel && isProd ? `/${repoName}` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: !isVercel && isProd ? `/${repoName}` : "",
  },
};

module.exports = nextConfig;

// Force GH Pages locally
if (process.env.TEST_GHPAGES) {
  module.exports.basePath = "/js-travels";
  module.exports.assetPrefix = "/js-travels/";
  module.exports.env.NEXT_PUBLIC_BASE_PATH = "/js-travels";
}
