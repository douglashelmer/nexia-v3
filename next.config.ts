import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/ws',
        destination: 'https://ws2.douglashelmer.com.br',
        permanent: true,
      },
      {
        source: '/ws/:path*',
        destination: 'https://ws2.douglashelmer.com.br/:path*',
        permanent: true,
      },
      {
        source: '/seedance',
        destination: 'https://seedance.douglashelmer.com.br',
        permanent: true,
      },
      {
        source: '/seedance/:path*',
        destination: 'https://seedance.douglashelmer.com.br/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
