const stylexPlugin = require("@stylexjs/nextjs-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? "/vishantt2002" : "",
  assetPrefix: process.env.NODE_ENV === 'production' ? "/vishantt2002/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);