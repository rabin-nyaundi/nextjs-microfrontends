/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "mainapp",
        remotes: {
          forms: `forms@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./footer": "./components/Footer.jsx",
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
