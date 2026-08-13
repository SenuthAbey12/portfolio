/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep development artifacts separate from production builds so running
  // `next build` cannot invalidate chunks used by an active dev server.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
}

export default nextConfig
