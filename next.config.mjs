// import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	typescript: { ignoreBuildErrors: true },
	experimental: {
    optimizePackageImports: ['@renderui/core'],
  },
}


export default nextConfig
// export default withBundleAnalyzer(nextConfig)
