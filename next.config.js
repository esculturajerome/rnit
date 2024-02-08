/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modules: true,
  future: { webpack5: true },
  images: {
    domains: ["https://...", "images.pexels.com", "images.unsplash.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
