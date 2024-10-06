import '@/style/globals.css'

import { Head } from '@/component/head'
import { ThemeProvider } from '@/provider/theme/theme-provider'

import { Navbar } from '@/module/navbar'
import { type ReactNode, Suspense } from 'react'

type RootLayoutProps = {
	children: ReactNode
}

function RootLayout(props: RootLayoutProps) {
	const { children } = props

	return (
		<html lang='en'>
			<Head />
			<body>
				<ThemeProvider>
					<Suspense>
						<Navbar>
							<div />
						</Navbar>
					</Suspense>

					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
