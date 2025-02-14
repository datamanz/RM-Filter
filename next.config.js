/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/api/character/avatar/**',
      },
    ],
    domains: ['rickandmortyapi.com'],
  },
  experimental: {
    optimizeFonts: false,
  }
}

module.exports = nextConfig 