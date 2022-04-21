/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'development',
  poweredByHeader: process.env.NODE_ENV === 'development',
  images: {
    domains: ['un.org', 'bankrate.com'],
  },
  async redirects() {
    return [
      {
        source: '/carmore',
        destination: 'https://carmore.kr/home/index.html',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/army.png',
        destination: '/api/army',
      },
      {
        source: '/army.txt',
        destination: '/api/army/txt',
      },
      {
        source: '/naver',
        destination: 'https://www.naver.com/',
      },
      {
        source: '/api/markets',
        destination: 'https://api.upbit.com/v1/market/all',
      },
      {
        source: '/api/markets/:market',
        destination: 'https://api.upbit.com/v1/candles/days?market=:market',
      },
    ];
  },
};

module.exports = nextConfig;
