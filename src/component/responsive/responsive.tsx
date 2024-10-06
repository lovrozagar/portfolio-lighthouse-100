'use client'

import { useMediaQuery } from '@/hook/use-media-query'

type ResponsiveProps = {
	children: JSX.Element
}

type ResponsiveComponent = (props: ResponsiveProps) => JSX.Element | null

const useDesktopMode = () => useMediaQuery('(min-width: 992px)')

const useTabletMode = () => useMediaQuery('(min-width: 768px) and (max-width: 991px)')

const useMobileMode = () => useMediaQuery('(max-width: 767px)')

const useNonMobileMode = () => useMediaQuery('(min-width: 768px)')

const useNonDesktopMode = () => useMediaQuery('(max-width: 991px)')

const useLandscapeMode = () =>
	useMediaQuery('(min-width: calc(75rem + 10rem)) and (min-aspect-ratio: 1/1)')

function Desktop({ children }: ResponsiveProps) {
	return useDesktopMode() ? children : null
}
function Tablet({ children }: ResponsiveProps) {
	return useTabletMode() ? children : null
}
function Mobile({ children }: ResponsiveProps) {
	return useMobileMode() ? children : null
}
function Default({ children }: ResponsiveProps) {
	return useNonMobileMode() ? children : null
}

export {
	useDesktopMode,
	useTabletMode,
	useMobileMode,
	useNonDesktopMode,
	useLandscapeMode,
	Desktop,
	Tablet,
	Mobile,
	Default,
}

export type { ResponsiveProps, ResponsiveComponent }
