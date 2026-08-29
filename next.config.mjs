/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/app/o-salario-sumiu', destination: '/app/mapa-do-dinheiro', permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
      {
        source: '/hub-runtime.js',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=60, must-revalidate' }],
      },
    ];
  },
};
export default nextConfig;
