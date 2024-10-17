import { Tooltip, TooltipContent, TooltipTrigger, cx } from '@renderui/core'
import type { ReactNode } from 'react'

type ActionTooltipProps = {
	children: ReactNode
	ariaLabel: string
	type: 'tab-close' | 'tab-new' | 'tab-more' | 'window-move' | 'window-close'
}

const ActionTooltip = (props: ActionTooltipProps) => {
	const { children, ariaLabel, type } = props

	return (
		<Tooltip delayDuration={0} skipDelayDuration={0}>
			<TooltipTrigger
				hasRipple
				aria-label={ariaLabel}
				className={cx(
					type === 'tab-close' ? 'p-1' : undefined,
					type === 'tab-new' || type === 'tab-more'
						? 'h-[28px] w-[32px] bg-[#25252D] p-0 before:hidden data-[hover=true]:bg-[#2A2A33]'
						: undefined,
					type === 'tab-new' ? 'rounded-r-none rounded-l-[4px]' : undefined,
					type === 'tab-more' ? 'rounded-r-[4px] rounded-l-none' : undefined,
					type === 'window-move' || type === 'window-close' ? 'h-[40px] rounded-none' : undefined,
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
