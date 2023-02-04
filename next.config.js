/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const path = require("path");

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
