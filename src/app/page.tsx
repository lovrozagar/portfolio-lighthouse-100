'use client'

import { Illustration } from '@/module/illustration'
import { ParallaxProvider } from 'react-scroll-parallax'

const Page = () => {
	return (
		<ParallaxProvider>
			<div className='overflow-hidden'>
				<Illustration />
			</div>
		</ParallaxProvider>
	)
}

export default Page
