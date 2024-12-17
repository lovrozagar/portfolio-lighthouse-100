import { ChevronDownIcon, PlusIcon } from '@/component/icon'

const TAB_ACTION_ITEMS = [
	{
		type: 'tab-new',
		ariaLabel: 'New tab',
		Icon: PlusIcon,
	},
	{
		type: 'tab-more',
		ariaLabel: 'Tab options',
		Icon: ChevronDownIcon,
	},
] as const

export { TAB_ACTION_ITEMS }
