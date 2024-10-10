/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ['@renderui/core'],
		staleTimes: {
			dynamic: 300,
			static: 300,
		},
	},
}

export default nextConfig
