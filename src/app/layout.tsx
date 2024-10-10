import '@/style/globals.css'

import { Navbar } from '@/module/navbar'
import { ModeProvider } from '@renderui/core'

import { SEO } from '@/component/seo'
import { INTER } from '@/font'
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
				<link rel='preload' href='../../public/image/sky.webp' as='image' />
				<link rel='preload' href='../../public/image/sky.min.webp' as='image' />

				<SEO />
			</head>
			<body className='overflow-x-hidden'>
				<ModeProvider
					enableSystem
					disableTransitionOnChange
					defaultTheme='light'
					storageKey='theme'
				>
					<Navbar />
					{children}
				</ModeProvider>
			</body>
		</html>
	)
}

export default RootLayout
