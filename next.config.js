/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // 配置静态文件服务
  async rewrites() {
    return [
      {
        source: '/Steal-a-Brainrot:path*',
        destination: '/Steal-a-Brainrot:path*',
      },
    ]
  },
  // 重定向配置
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 