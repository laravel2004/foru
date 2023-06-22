/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/greeting',
        destination: '/greeting/index.html', // Ganti dengan rute Next.js yang sesuai
      },
    ];
  },
};