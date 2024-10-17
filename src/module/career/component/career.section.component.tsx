import { FIRA_CODE } from '@/font'
import { ActionTooltip } from '@/module/career/component/career.action-tooltip.component'
import { CareerTerminalContent } from '@/module/career/component/career.terminal-content.component'
import { getProfileLoadTime } from '@/module/career/util/career.get-profile-load-time.util'
import { ChevronDownIcon, Cross2Icon, MinusIcon, PlusIcon, SquareIcon } from '@radix-ui/react-icons'
import { Separator, cx } from '@renderui/core'

const CareerSection = () => {
	return (
		<article className='max-w-[1350px] flex-1 overflow-hidden rounded border border-[#25252D]'>
			<div className='flex h-[40px] items-end overflow-hidden bg-[#14141A] pl-4'>
				<div
					className={cx(
						'relative flex h-[32px] w-[250px] items-center justify-between rounded-t bg-[#25252D] pr-1 pl-2 font-medium text-sm',
						'before:absolute before:top-1/2 before:left-[-6px] before:z-[1] before:h-1/2 before:w-[6px] before:rounded-br-[6px] before:bg-transparent before:shadow-[0_6px_0_0_#25252D] before:content-[""]',
						'after:absolute after:top-1/2 after:right-[-6px] after:z-[1] after:h-1/2 after:w-[6px] after:rounded-bl-[6px] after:bg-transparent after:shadow-[0_6px_0_0_#25252D] after:content-[""]',
					)}
				>
					$_ bash in lovrozagar
					<ActionTooltip type='tab-close' ariaLabel='Close tab'>
						<Cross2Icon />
					</ActionTooltip>
				</div>
				<div className='mb-1 flex pl-1'>
					<ActionTooltip type='tab-new' ariaLabel='New tab'>
						<PlusIcon />
					</ActionTooltip>
					<Separator orientation='vertical' className='h-[28px] bg-mode-750' />
					<ActionTooltip type='tab-more' ariaLabel='Tab options'>
						<ChevronDownIcon />
					</ActionTooltip>
				</div>
				<div className='ml-auto flex'>
					<ActionTooltip type='window-move' ariaLabel='Minimize window'>
						<MinusIcon className='relative top-px' />
					</ActionTooltip>
					<ActionTooltip type='window-move' ariaLabel='Fullscreen window'>
						<SquareIcon className='size-3' />
					</ActionTooltip>
					<ActionTooltip type='window-close' ariaLabel='Close window'>
						<Cross2Icon />
					</ActionTooltip>
				</div>
			</div>
			<div className='bg-[#202028] p-4'>
				<div className={FIRA_CODE.className}>
					<p>Bash 3.4.1</p>
					<p>{`Loading personal and system profiles took ${getProfileLoadTime()}ms.`}</p>
				</div>
				<CareerTerminalContent />
			</div>
		</article>
	)
}

export { CareerSection }
