import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'ik.imagekit.io' },
			{
				protocol: 'https',
				hostname: 'storage.googleapis.com',
				port: '',
				pathname: '/polebor/site/media/original/**',
			},
			{ protocol: 'https', hostname: 'mp.softly.uz' },
		],
	},
}

export default nextConfig
