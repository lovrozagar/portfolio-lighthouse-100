'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button, cn, useMode } from '@renderui/core'

const DEFAULT_ICON_CLASSNAME = 'absolute opacity-100 transition-[opacity] duration-slow'

const ModeSwitch = () => {
	const { resolvedMode: mode, setMode } = useMode()

	const handleModeToggle = () => {
		if (mode === 'light') return setMode('dark')
		if (mode === 'dark') return setMode('light')
	}

	return (
		<Button
			variant='plain'
			className='gap-2 rounded-full py-1 px-4 data-[focus-visible=true]:ring-offset-[0px]'
			onPress={handleModeToggle}
		>
			Theme
			<div className='size-[24px] relative flex items-center justify-center'>
				<SunIcon
					suppressHydrationWarning
					className={cn(
						DEFAULT_ICON_CLASSNAME,
						'text-white',
						mode === 'light' ? 'opacity-0' : undefined,
					)}
				/>
				<MoonIcon
					suppressHydrationWarning
					className={cn(
						DEFAULT_ICON_CLASSNAME,
						'text-black',
						mode === 'dark' ? 'opacity-0' : undefined,
					)}
				/>
			</div>
		</Button>
	)
}

export { ModeSwitch }
