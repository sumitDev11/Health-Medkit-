/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = {
        ...config.externals,
        "onnxruntime-node": "commonjs onnxruntime-node",
      };
    }

    config.module.rules.push({
      test: /\.node$/,
      use: "ignore-loader",
    });

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
