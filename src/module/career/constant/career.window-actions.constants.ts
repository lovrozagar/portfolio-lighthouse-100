import { CrossIcon, MinusIcon, SquareIcon } from '@/component/icon'

const WINDOW_ACTION_ITEMS = [
	{
		type: 'window-move',
		ariaLabel: 'Minimize window',
		Icon: MinusIcon,
		iconClassName: 'relative top-px',
	},
	{
		type: 'window-move',
		ariaLabel: 'Fullscreen window',
		Icon: SquareIcon,
		iconClassName: 'size-3',
	},
	{
		type: 'window-close',
		ariaLabel: 'Close window',
		Icon: CrossIcon,
		iconClassName: undefined,
	},
] as const

export { WINDOW_ACTION_ITEMS }
