import { CrossIcon, PersonIcon } from '@/component/icon'
import { SectionTitle } from '@/component/section-title/section-title'
import { FIRA_CODE } from '@/font'
import { ActionTooltip } from '@/module/career/component/career.action-tooltip.component'
import { CareerTerminalContent } from '@/module/career/component/career.terminal-content.component'
import { WINDOW_ACTION_ITEMS } from '@/module/career/constant/career.window-actions.constants'
import { TAB_ACTION_ITEMS } from '@/module/career/constant/carrer.tab-actions.constants'
import { getProfileLoadTime } from '@/module/career/util/career.get-profile-load-time.util'
import { cx } from '@renderui/utils'
import { Fragment } from 'react'

const CareerSection = () => {
	return (
		<section className='grid grid-cols-[auto_1fr] gap-x-8'>
			<div className='relative'>
				<div className='flex aspect-square size-[48px] items-center justify-center rounded-full border-2 border-primary bg-primary/[15%] font-bold text-blue-200 shadow-[0px_0px_40px_5px_rgba(57,144,255,0.4)] ring-offset-0'>
					<PersonIcon className='size-5' />
					<div className='absolute top-[48px] block h-[calc(100%-48px)] w-[2px] bg-primary' />
				</div>
			</div>
			<div className='pb-14'>
				<SectionTitle id='career'>
					<span className='font-semibold'>Career</span>{' '}
					<span className='font-extrabold text-primary'>Overview</span>
				</SectionTitle>
				<section className='mt-8 flex'>
					<div className='max-w-[1350px] flex-1 overflow-hidden rounded border border-[#25252D]'>
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
									<CrossIcon />
								</ActionTooltip>
							</div>
							<div className='mb-1 flex pl-1'>
								{TAB_ACTION_ITEMS.map((item, index) => (
									<Fragment key={index}>
										<ActionTooltip type={item.type} ariaLabel={item.ariaLabel}>
											<item.Icon />
										</ActionTooltip>
										{/* {index === 0 ? (
											<Separator orientation='vertical' className='h-[28px] bg-mode-750' />
										) : null} */}
									</Fragment>
								))}
							</div>
							<div className='ml-auto flex'>
								{WINDOW_ACTION_ITEMS.map((item, index) => (
									<ActionTooltip key={index} type={item.type} ariaLabel={item.ariaLabel}>
										<item.Icon className={item.iconClassName} />
									</ActionTooltip>
								))}
							</div>
						</div>
						<div className='bg-[#202028] p-4'>
							<div className={FIRA_CODE.className}>
								<p>Bash 3.4.1</p>
								<p>{`Loading personal and system profiles took ${getProfileLoadTime()}ms.`}</p>
							</div>
							<CareerTerminalContent />
						</div>
					</div>
				</section>
			</div>
		</section>
	)
}

export { CareerSection }
