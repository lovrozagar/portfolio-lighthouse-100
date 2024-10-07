import { isImageCached } from '@/module/illustration/utils/is-image-cached'
import { animated } from '@react-spring/web'
import { Box, cn } from '@renderui/core'
import { type CSSProperties, useEffect, useMemo, useState } from 'react'

type ProgressiveImageProps = {
	src: string
	placeholder: string
	alt: string
}

function ProgressiveImage(props: ProgressiveImageProps) {
	const { src, alt, placeholder } = props

	const start = useMemo(() => Date.now(), [])

	const hasCache = isImageCached(src)

	const [loading, setLoading] = useState(!hasCache)
	const [elapsed, setElapsed] = useState<number | undefined>(hasCache ? 0 : undefined)
	const [currentSrc, setCurrentSrc] = useState(hasCache ? src : placeholder)

	useEffect(() => {
		if (loading) {
			const imageToLoad = new Image()
			imageToLoad.src = src
			imageToLoad.onload = () => {
				setElapsed(Date.now() - start)
				setCurrentSrc(src)
			}
		}
	}, [src, loading, start])

	const handleLoad = () => {
		if (currentSrc === src) {
			setLoading(false)
		}
	}

	return (
		<Box
			component={animated.img}
			src={currentSrc}
			alt={alt}
			style={{ '--transition-duration': Math.round((elapsed || 0) / 4) } as CSSProperties}
			className={cn(
				loading
					? 'filter blur-[20px] transition-[filter] duration-[var(--transition-duration)]'
					: undefined,
			)}
			onLoad={handleLoad}
		/>
	)
}

export { ProgressiveImage }
