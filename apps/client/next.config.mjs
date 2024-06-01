/** @type {import('next').NextConfig} */
const nextConfig =  {
    distDir: 'build',
    async redirects() {
      return [
        
        {
          source: '/',
          destination: '/dashboard',
          permanent: true,
        },
        
      ]
    },
  }

export default nextConfig;
