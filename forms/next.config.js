/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "forms",
        remotes: {
          mainapp: `mainapp@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./footer": "./components/Footer.jsx",
          "./nav": "./components/Nav.jsx",
          "./formBuilder": "./pages/index.js",
        },
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
