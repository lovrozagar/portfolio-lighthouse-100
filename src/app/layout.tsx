import '@/style/globals.css'

import { Head } from '@/component/head'
import { Navbar } from '@/module/navbar'
import { ModeProvider } from '@renderui/core'

import { INTER } from '@/font'
import { type ReactNode, Suspense } from 'react'

type RootLayoutProps = {
	children: ReactNode
}

function RootLayout(props: RootLayoutProps) {
	const { children } = props

	return (
		<html lang='en' className={INTER.className} suppressHydrationWarning>
			<Head />
			<body className='overflow-x-hidden'>
				<ModeProvider enableSystem>
					<Suspense>
						<Navbar />
						{children}
					</Suspense>
				</ModeProvider>
			</body>
		</html>
	)
}

export default RootLayout
