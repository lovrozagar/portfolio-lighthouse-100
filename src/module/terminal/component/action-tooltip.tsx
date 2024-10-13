import { cx, Tooltip, TooltipContent, TooltipTrigger } from '@renderui/core'
import type { ReactNode } from 'react'

type ActionTooltipProps = {
	children: ReactNode
	type: 'tab-close' | 'tab-new' | 'tab-more' | 'window-move' | 'window-close'
}

const ActionTooltip = (props: ActionTooltipProps) => {
	const { children, type } = props

	return (
		<Tooltip delayDuration={0} skipDelayDuration={0}>
			<TooltipTrigger
				hasRipple
				className={cx(
					type === 'tab-close' ? 'p-1' : undefined,
					type === 'tab-new' || type === 'tab-more'
						? 'h-[28px] w-[32px] p-0 bg-[#25252D] before:hidden data-[hover=true]:bg-[#2A2A33]'
						: undefined,
					type === 'tab-new' ? 'rounded-l-[6px] rounded-r-none' : undefined,
					type === 'tab-more' ? 'rounded-r-[6px] rounded-l-none' : undefined,
					type === 'window-move' || type === 'window-close' ? 'rounded-none h-[40px]' : undefined,
					type === 'window-move' ? 'data-[hover=true]:bg-[#2A2A33]' : undefined,
					type === 'window-close' ? 'data-[hover=true]:bg-destructive/60' : undefined,
				)}
			>
				{children}
			</TooltipTrigger>
			<TooltipContent className='font-normal' animationDuration={150}>
				You know I can't do that
			</TooltipContent>
		</Tooltip>
	)
}

export { ActionTooltip }
