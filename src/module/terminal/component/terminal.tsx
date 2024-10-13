import { FIRA_CODE } from '@/font'
import { ActionTooltip } from '@/module/terminal/component/action-tooltip'
import { Career } from '@/module/terminal/component/career'
import { ChevronDownIcon, Cross2Icon, MinusIcon, PlusIcon, SquareIcon } from '@radix-ui/react-icons'
import { Separator, ToggleGroup, ToggleGroupItem, cx } from '@renderui/core'

const Terminal = () => {
	return (
		<article className='rounded overflow-hidden max-w-[1100px] flex-1 border border-[#25252D]'>
			<div className='bg-[#14141A] h-[40px] pl-4 flex items-end overflow-hidden'>
				<div
					className={cx(
						'relative h-[32px] bg-[#25252D] flex items-center justify-between font-medium text-sm w-[250px] pl-2 pr-1 rounded-t',
						'before:z-[1] before:content-[""] before:absolute before:left-[-6px] before:top-1/2 before:h-1/2 before:w-[6px] before:rounded-br-[6px] before:bg-transparent before:shadow-[0_6px_0_0_#25252D]',
						'after:z-[1] after:content-[""] after:absolute after:right-[-6px] after:top-1/2 after:h-1/2 after:w-[6px] after:rounded-bl-[6px] after:bg-transparent after:shadow-[0_6px_0_0_#25252D]',
					)}
				>
					$_ bash in lovrozagar
					<ActionTooltip type='tab-close'>
						<Cross2Icon />
					</ActionTooltip>
				</div>
				<div className='pl-1 mb-1 flex'>
					<ActionTooltip type='tab-new'>
						<PlusIcon />
					</ActionTooltip>
					<Separator orientation='vertical' className='bg-mode-750 h-[28px]' />
					<ActionTooltip type='tab-more'>
						<ChevronDownIcon />
					</ActionTooltip>
				</div>
				<div className='ml-auto flex'>
					<ActionTooltip type='window-move'>
						<MinusIcon className='relative top-px' />
					</ActionTooltip>
					<ActionTooltip type='window-move'>
						<SquareIcon className='size-3' />
					</ActionTooltip>
					<ActionTooltip type='window-close'>
						<Cross2Icon />
					</ActionTooltip>
				</div>
			</div>
			<div className={cx('bg-[#202028] p-4', FIRA_CODE.className)}>
				<p>Bash 3.4.1</p>
				<p>Loading personal and system profiles took 157ms.</p>
				<Career />
			</div>
		</article>
	)
}

export { Terminal }
