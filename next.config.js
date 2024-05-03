/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
     
    ],
  },
  experimental: {
    serverActions: true,
  },
};
module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
module.exports = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

module.exports = nextConfig;