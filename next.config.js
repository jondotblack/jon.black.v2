/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  experimental: { esmExternals: false },
  images: {
    domains: ['www.notion.so', 'notion.so', 'images.unsplash.com', 'pbs.twimg.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/blackhill',
        destination: '/venture/blackhill',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
