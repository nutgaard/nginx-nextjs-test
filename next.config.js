/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/boligjakt-frontend',
    output: 'standalone',
    transpilePackages: ['@code-obos/obos-layout'],
}

module.exports = nextConfig
