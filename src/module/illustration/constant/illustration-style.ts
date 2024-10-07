import type { CSSProperties } from 'react'

const GRADIENT_STYLE: CSSProperties = {
	position: 'absolute',
	height: '100vh',
	width: '100vw',
	top: '0',
	left: '0',
	background: 'linear-gradient(to bottom, #5594bc, transparent)',
}

const LIGHT_SKY_STYLE: CSSProperties = {
	position: 'absolute',
	width: 'max(100vw, 200vh)',
	top: '0',
	left: '0',
	opacity: 0.5,
	mixBlendMode: 'color-dodge',
	maskImage: 'linear-gradient(to bottom, black, transparent 20%)',
	WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 20%)',
}

const DARK_SKY_STYLE_1: CSSProperties = {
	position: 'absolute',
	width: 'max(100vw, 200vh)',
	top: '0',
	left: '0',
	zIndex: -1,
	filter: 'brightness(0.5)',
	maskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)',
	WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)',
}

const DARK_SKY_STYLE_2: CSSProperties = {
	position: 'absolute',
	width: 'max(100vw, 200vh)',
	top: 'calc(max(100vw, 200vh) / 7)',
	left: '0',
	zIndex: -1,
	transform: 'scaleY(-1)',
	filter: 'blur(calc(100vw / 1200)) brightness(0.5)',
	maskImage: 'linear-gradient(to bottom, transparent 20%, #00000059 50%, transparent 70%)',
	WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, 00000059 50%, transparent 80%)',
}

export { GRADIENT_STYLE, LIGHT_SKY_STYLE, DARK_SKY_STYLE_1, DARK_SKY_STYLE_2 }
