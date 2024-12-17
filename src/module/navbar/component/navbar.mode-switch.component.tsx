'use client'

import { MoonIcon, SunIcon } from '@/component/icon'
import { DEFAULT_ICON_CLASSNAME } from '@/module/navbar/constant/navbar.icon.constants'
import { Button,  } from '@renderui/qa'

const ModeSwitch = () => {
	// const { mode, setMode } = useMode()

	// const handleModeToggle = () => {
	// 	if (mode === 'light') return setMode('dark')
	// 	if (mode === 'dark') return setMode('light')
	// }

	// return (
	// 	<Button
	// 		variant='plain'
	// 		className='size-[28px] gap-2 rounded-full p-2 font-semibold [&]:data-[focus-visible=true]:ring-offset-[0px]'
	// 		onPress={handleModeToggle}
	// 	>
	// 		<SunIcon className={cn(DEFAULT_ICON_CLASSNAME, 'hidden text-white dark:block')} />
	// 		<MoonIcon className={cn(DEFAULT_ICON_CLASSNAME, 'block text-black dark:hidden')} />
	// 	</Button>
	// )

	return null
}

export { ModeSwitch }
