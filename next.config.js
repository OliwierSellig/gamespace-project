vid = require("next-videos");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.rawg.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "next-videos",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/ranking",
        destination: "/ranking/trending",
        permanent: true,
      },
      {
        source: "/browse",
        destination: "/browse/developers",
        permanent: true,
      },
    ];
  },
};
const withVideos = vid;

module.exports = withVideos(nextConfig);
