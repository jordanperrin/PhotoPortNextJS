/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
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