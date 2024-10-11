import { Cross2Icon } from '@radix-ui/react-icons'
import {
	ToggleGroup,
	ToggleGroupItem,
	Tooltip,
	TooltipContent,
	TooltipTriggerPrimitive,
} from '@renderui/core'

const Terminal = () => {
	return (
		<article className='rounded overflow-hidden max-w-[1100px] flex-1 border border-[#25252D]'>
			<div className='bg-[#14141A] h-[40px] pl-4 flex items-end'>
				<div className='h-[32px] bg-[#25252D] w-fit flex items-center justify-between text-sm font-bold w-[250px] px-2 rounded-t'>
					bash in lovrozagar
					<Tooltip delayDuration={0} skipDelayDuration={0}>
						<TooltipTriggerPrimitive tabIndex={-1}>
							<Cross2Icon />
						</TooltipTriggerPrimitive>
						<TooltipContent className='font-normal' animationDuration={150}>
							You know I can't do that
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
			<div className='bg-[#202028] p-4'>
				<p>Bash 3.4.1</p>
				<p>Loading personal and system profiles took 157ms.</p>
				<p>
					<span className='text-primary'>root@lovrozagar:~$</span> lovrozagar.exe --experience
				</p>
				<ToggleGroup type='single' color='mode-contrast' className='mt-4'>
					<ToggleGroupItem
						className='font-mono text-base rounded py-1.5 px-4'
						value='experience'
						rippleProps={{ opacity: 0.2 }}
					>
						experience
					</ToggleGroupItem>
					<ToggleGroupItem
						className='font-mono text-base rounded py-1.5 px-4'
						value='education'
						rippleProps={{ opacity: 0.2 }}
					>
						education
					</ToggleGroupItem>
				</ToggleGroup>
			</div>
		</article>
	)
}

export { Terminal }
