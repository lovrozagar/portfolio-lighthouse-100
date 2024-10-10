import { cn } from '@renderui/core'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import SRC from './sky.webp'

type ProgressiveImageProps = {
	src: string
	alt: string
	placeholder: string
	style: CSSProperties
}

function ProgressiveImage(props: ProgressiveImageProps) {
	const { src, alt, placeholder, style } = props

	return (
		<div
			style={{ ...style, '--transition-duration': '300ms' } as CSSProperties}
			className={cn(
				'select-none relative w-[100vw] h-[100vh] filter blur-[20px] transition-[filter] duration-[var(--transition-duration)]',
			)}
		>
			<Image priority placeholder='blur' src={SRC} alt={alt} className='h-full w-full' fill />
		</div>
	)
}

export { ProgressiveImage }
