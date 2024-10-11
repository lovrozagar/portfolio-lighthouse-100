'use client'

import { useMobileMode } from '@/component/responsive'
import { ProgressiveImage } from '@/module/illustration/component/progressive-image'
import {
	DARK_SKY_STYLE_1,
	DARK_SKY_STYLE_2,
	GRADIENT_STYLE,
	LIGHT_SKY_STYLE,
} from '@/module/illustration/constant/illustration-style'
import { TRANSITION_CONFIG } from '@/module/illustration/constant/transition-config'
import { animated, useSpringRef, useTransition } from '@react-spring/web'
import { useMode } from '@renderui/core'
import { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'

function Illustration() {
	const skyTransRef = useSpringRef()

	const { mode } = useMode()
	const mobile = useMobileMode()

	const skyTransition = useTransition(mode, {
		ref: skyTransRef,
		initial: null,
		keys: null,
		from: { opacity: 0, top: '0rem' },
		enter: { opacity: 1, top: '0vh' },
		leave: { opacity: 0, top: '-100rem' },
		config: TRANSITION_CONFIG,
	})

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		skyTransRef.start()
	}, [mode, skyTransRef.start])

	return (
		<Parallax speed={-20} startScroll={0} disabled={mobile}>
			<div className='relative w-[100vw] h-[100vh] pointer-events-none [&_>_*]:transition-[background-color] [&_>_*]:duration-1000 [&_>_*]:ease-in-out'>
				{skyTransition((style, item) => {
					switch (item) {
						case 'light':
							return (
								<animated.div style={{ ...style, zIndex: -1, position: 'relative' }}>
									<div id='gradient' style={GRADIENT_STYLE} />
									<ProgressiveImage
										src='/image/sky.webp'
										placeholder='/image/sky.min.webp'
										alt='sky'
										style={LIGHT_SKY_STYLE}
									/>
								</animated.div>
							)
						case 'dark':
							return (
								<animated.div style={{ ...style, zIndex: -1, position: 'relative' }}>
									<ProgressiveImage
										src='/image/sky.webp'
										placeholder='/image/sky.min.webp'
										alt='sky'
										style={DARK_SKY_STYLE_1}
									/>
									<ProgressiveImage
										src='/image/sky.webp'
										placeholder='/image/sky.min.webp'
										alt='sky'
										style={DARK_SKY_STYLE_2}
									/>
								</animated.div>
							)
						default:
							return null
					}
				})}
			</div>
		</Parallax>
	)
}

export { Illustration }
