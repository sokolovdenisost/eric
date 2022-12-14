/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAIL: process.env.MAIL || ''
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false
          }
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;
