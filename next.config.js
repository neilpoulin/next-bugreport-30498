/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    productionBrowserSourceMaps: true,
    reactStrictMode: false,
    swcMinify: true,
    outputFileTracing: false,
    images: {
        domains: ['cdn.bfldr.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        esmExternals: false,
    },
    async redirects() {
        return [
            {
                source: '/test',
                destination: '/about',
                permanent: true,
            },
        ]
    },
    publicRuntimeConfig: {
        apiHost: 'fake_test_value',
    },
}

module.exports = nextConfig