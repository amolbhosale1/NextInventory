module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path',
        destination: 'http://localhost:3000/:path?:path' // Proxy to Backend
      }
    ]
  },
}
