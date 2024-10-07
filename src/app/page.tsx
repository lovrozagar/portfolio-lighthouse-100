'use client'

import { Illustration } from '@/module/illustration'
import { Stack } from '@mui/joy'
import { ParallaxProvider } from 'react-scroll-parallax'
import NoSSR from 'react-no-ssr'
import { Navbar } from '@/module/navbar'

const Page = () => {
	return (
		<NoSSR>
			<Navbar>
				<div />
			</Navbar>
			<ParallaxProvider>
				<Stack overflow='hidden'>
					<Illustration />
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							position: 'relative',
							marginTop: 'calc(-100vh + 50px)',
							width: '100vw',
							paddingTop: 'var(--nav-safe-area-inset-top)',
							paddingBottom: 'var(--nav-safe-area-inset-bottom)',
							paddingLeft: 'var(--nav-safe-area-inset-left)',
						}}
					>
						<div>aefea</div>
					</div>
				</Stack>
			</ParallaxProvider>
		</NoSSR>
	)
}

export default Page
