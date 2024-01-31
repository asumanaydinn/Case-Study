/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  redirects() {
    return [
      {
        source: '/products',
        destination: '/solutions',
        permanent: true,
      },
    ]
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'x-robots-tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
