/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/landscape/clr',
          permanent: true,
        },
      ]
    },
  }