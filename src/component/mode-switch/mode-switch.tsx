'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button, cn, useMode } from '@renderui/core'

const DEFAULT_ICON_CLASSNAME = 'absolute transition-[opacity] duration-slow'

const ModeSwitch = () => {
	const { mode, setMode } = useMode()

	console.log(mode)

	const handleModeToggle = () => {
		if (mode === 'light') return setMode('dark')
		if (mode === 'dark') return setMode('light')
	}

	return (
		<Button
			variant='plain'
			className='gap-2 rounded-full py-1 px-4 font-semibold data-[focus-visible=true]:ring-offset-[0px]'
			onPress={handleModeToggle}
		>
			theme
			<div className='size-[24px] relative flex items-center justify-center'>
				<SunIcon
					suppressHydrationWarning
					className={cn(
						DEFAULT_ICON_CLASSNAME,
						'text-white opacity-100',
						mode === 'dark' ? 'opacity-100' : 'opacity-0',
					)}
				/>
				<MoonIcon
					suppressHydrationWarning
					className={cn(
						DEFAULT_ICON_CLASSNAME,
						'text-black opacity-100',
						mode === 'light' ? 'opacity-100' : 'opacity-0',
					)}
				/>
			</div>
		</Button>
	)
}

export { ModeSwitch }
