import { useLandscapeMode, useMobileMode } from '@/component/responsive'
import { useSearchParams } from 'next/navigation'
import { createRef, useEffect, useState } from 'react'

function useNavbar() {
	const bottom = useMobileMode()
	const landscape = useLandscapeMode()

	const searchParams = useSearchParams()
	const hidden = searchParams.get('overlay') === 'false'

	const [width, setWidth] = useState<number>()
	const [height, setHeight] = useState<number>()

	const navigationRef = createRef<HTMLDivElement>()

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				const [{ inlineSize: newWidth, blockSize: newHeight }] = entry.borderBoxSize
				setWidth(newWidth)
				setHeight(newHeight)
			})
		})

		if (navigationRef.current) {
			resizeObserver.observe(navigationRef.current)
		}

		return () => {
			resizeObserver.disconnect()
		}
	}, [navigationRef])

	useEffect(() => {
		if (typeof window === 'undefined') return

		document.documentElement.style.setProperty(
			'--nav-safe-area-inset-top',
			landscape || bottom || hidden ? '0' : height ? `${height}px` : '3rem',
		)
		document.documentElement.style.setProperty(
			'--nav-safe-area-inset-bottom',
			bottom && !hidden ? (height ? `${height}px` : '4.5rem') : '0',
		)
		document.documentElement.style.setProperty(
			'--nav-safe-area-inset-left',
			landscape && !hidden ? (width ? `${width}px` : '5.5rem') : '0',
		)

		return () => {
			document.documentElement.style.removeProperty('--nav-safe-area-inset-top')
			document.documentElement.style.removeProperty('--nav-safe-area-inset-bottom')
			document.documentElement.style.removeProperty('--nav-safe-area-inset-left')
		}
	}, [landscape, bottom, width, height, hidden])

	return {
		navigationRef,
		hidden,
	}
}

export { useNavbar }
