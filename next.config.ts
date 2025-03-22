import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ['165.227.148.229:3033', '165.227.148.229:8020']
    }
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '165.227.148.229'
      },
      {
        protocol: 'https',
        hostname: 'backendapi.ersys-ci.net'
      }
    ]
  },

  serverRuntimeConfig: {
    logEndpoint: process.env.LOG_ENV || 'http://loki:3100/loki/api/v1/push'
  }
}

export default nextConfig
