import { Head } from '@/component/head'
import { ModeProvider } from '@renderui/core'

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
				<ModeProvider enableSystem>
					<Suspense>{children}</Suspense>
				</ModeProvider>
			</body>
		</html>
	)
}

export default RootLayout
