'use client'

import { useSearchCommandStore } from '@/store/search-command'
import { Button } from '@renderui/button'

const SearchTrigger = () => {
	const setOpen = useSearchCommandStore((store) => store.setOpen)

	return (
		<Button
			color='mode-accent'
			className='h-[32px] w-[200px] justify-between bg-mode-accent/50 px-3 py-0.5 text-neutral-400 text-xs [&]:data-[focus-visible=true]:ring-offset-[0px]'
			hasDefaultInnerRing={false}
			onPress={() => setOpen(true)}
		>
			<span className='relative top-px'>Search...</span>
			{/* <Kbd className='rounded-sm px-1 py-[1px] text-[8px] shadow-none'>⌘ K</Kbd> */}
		</Button>
	)
}

export { SearchTrigger }
