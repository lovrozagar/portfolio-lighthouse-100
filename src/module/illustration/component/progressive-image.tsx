import { isImageCached } from '@/module/illustration/utils/is-image-cached'
import { cn } from '@renderui/core'
import NextImage from 'next/image'
import { type CSSProperties, useEffect, useMemo, useState } from 'react'

type ProgressiveImageProps = {
	src: string
	alt: string
	placeholder: string
	style: CSSProperties
}

function ProgressiveImage(props: ProgressiveImageProps) {
	const { src, alt, placeholder, style } = props

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
		<div
			style={{ ...style, '--transition-duration': Math.round((elapsed || 0) / 4) } as CSSProperties}
			className={cn(
				loading
					? 'relative w-[100vw] h-[100vh] filter blur-[20px] transition-[filter] duration-[var(--transition-duration)]'
					: undefined,
			)}
			onLoad={handleLoad}
		>
			<img src={'/image/sky.webp'} alt={alt} className='h-full w-full' />
		</div>
	)
}

export { ProgressiveImage }
