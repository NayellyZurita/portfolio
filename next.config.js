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

module.exports = nextConfig;