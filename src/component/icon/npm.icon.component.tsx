import { Svg, type SvgProps } from '@/component/icon/svg'

const NpmIcon = (props: SvgProps) => {
	return (
		<Svg width='24px' height='24px' viewBox='0 0 24 24' {...props}>
			<path d='M20,4H4V20h8V8h4V20h4V4' />
			<rect width='24' height='24' fill='none' />
		</Svg>
	)
}

export { NpmIcon }
