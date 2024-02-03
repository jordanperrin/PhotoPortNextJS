/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photo-port.s3.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  compiler: {
    styledComponents: true
  },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/landscape/clr',
          permanent: true,
        },
      ]
    }
  }