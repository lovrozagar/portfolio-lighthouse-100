import '@/style/globals.css'

import { SEO } from '@/component/seo'
import { SkyStars } from '@/component/sky-stars'
import { INTER } from '@/font'
import { Navbar } from '@/module/navbar'
import { LazySearchCommand } from '@/module/search-command'
import type { ReactNode } from 'react'

export const dynamic = 'force-static'

type RootLayoutProps = {
	children: ReactNode
}

function RootLayout(props: RootLayoutProps) {
	const { children } = props

	return (
		<html lang='en' className={INTER.className} suppressHydrationWarning>
			<head>
				<link rel='preload' href='../../public/image/stars.avif' as='image' />

				<SEO />
			</head>
			<body className='overflow-x-hidden'>
				{/* <ModeProvider
					enableSystem
					disableTransitionOnChange
					defaultTheme='light'
					storageKey='theme'
				> */}
				<SkyStars />
				<Navbar />

				{children}

				{/* <LazySearchCommand /> */}
				{/* </ModeProvider> */}
			</body>
		</html>
	)
}

export default RootLayout
