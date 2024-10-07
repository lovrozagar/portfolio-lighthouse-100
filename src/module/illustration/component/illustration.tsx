'use client'

import { useMobileMode } from '@/component/responsive'
import { ProgressiveImage } from '@/module/illustration/component/progressive-image'
import { TRANSITION_CONFIG } from '@/module/illustration/constant/transition-config'
import { Box } from '@mui/joy'
import { animated, useSpringRef, useTransition } from '@react-spring/web'
import { useMode } from '@renderui/core'
import { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'

function Illustration() {
	const skyTransRef = useSpringRef()

	const { resolvedMode } = useMode()
	const mobile = useMobileMode()

	const skyTransition = useTransition(resolvedMode, {
		ref: skyTransRef,
		initial: null,
		keys: null,
		from: { opacity: 0, top: '0rem' },
		enter: { opacity: 1, top: '0vh' },
		leave: { opacity: 0, top: '-100rem' },
		config: TRANSITION_CONFIG,
	})

	useEffect(() => {
		skyTransRef.start()
	}, [skyTransRef])

	useEffect(() => {
		document.body.style.transition = `background-color ease ${
			TRANSITION_CONFIG.duration / 1000
		}s, color ease ${TRANSITION_CONFIG.duration / 1000}s`

		return () => {
			document.body.style.transition = ''
		}
	}, [])

	return (
		<Parallax speed={-20} startScroll={0} disabled={mobile}>
			<Box
				component='div'
				sx={{
					position: 'relative',
					width: '100vw',
					height: '100vh',
					pointerEvents: 'none',
					'*': {
						transition: `background-color ${
							TRANSITION_CONFIG.duration / 1000
						}s ease, color ${TRANSITION_CONFIG.duration / 1000}s ease`,
					},
				}}
			>
				{skyTransition((style, item) => {
					switch (item) {
						case 'light':
							return (
								<animated.div style={{ ...style, zIndex: -1, position: 'relative' }}>
									<div
										id='gradient'
										style={{
											position: 'absolute',
											height: '100vh',
											width: '100vw',
											top: '0',
											left: '0',
											background: 'linear-gradient(to bottom, #5594bc, transparent)',
										}}
									/>
									<ProgressiveImage
										src='/image/sky.webp'
										placeholder='/image/sky.min.webp'
										alt='sky'
										style={{
											position: 'absolute',
											width: 'max(100vw, 200vh)',
											top: '0',
											left: '0',
											opacity: 0.5,
											mixBlendMode: 'color-dodge',
											maskImage: 'linear-gradient(to bottom, black, transparent 20%)',
											WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 20%)',
										}}
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
										style={{
											position: 'absolute',
											width: 'max(100vw, 200vh)',
											top: '0',
											left: '0',
											zIndex: -1,
											filter: 'brightness(0.5)',
											maskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)',
											WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)',
										}}
									/>
									<ProgressiveImage
										src='/image/sky.webp'
										placeholder='/image/sky.min.webp'
										alt='sky'
										style={{
											position: 'absolute',
											width: 'max(100vw, 200vh)',
											top: 'calc(max(100vw, 200vh) / 7)',
											left: '0',
											zIndex: -1,
											transform: 'scaleY(-1)',
											filter: 'blur(calc(100vw / 1200)) brightness(0.5)',
											maskImage:
												'linear-gradient(to bottom, transparent 20%, #00000059 50%, transparent 70%)',
											WebkitMaskImage:
												'linear-gradient(to bottom, transparent 20%, 00000059 50%, transparent 80%)',
										}}
									/>
								</animated.div>
							)
						default:
							return null
					}
				})}
			</Box>
		</Parallax>
	)
}

export { Illustration }
