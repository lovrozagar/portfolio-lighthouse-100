import { Svg, type SvgProps } from '@/component/icon/svg.icon.component'

const SquareIcon = (props: SvgProps) => {
	return (
		<Svg width='15' height='15' viewBox='0 0 15 15' {...props}>
			<path
				d='M1 1H1.5H13.5H14V1.5V13.5V14H13.5H1.5H1V13.5V1.5V1ZM2 2V13H13V2H2Z'
				fill='currentColor'
				fillRule='evenodd'
				clipRule='evenodd'
			/>
		</Svg>
	)
}

export { SquareIcon }
