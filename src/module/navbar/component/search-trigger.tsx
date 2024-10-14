'use client'

import { useSearchCommandStore } from '@/store/search-command'
import { Button, Kbd } from '@renderui/core'

const SearchTrigger = () => {
	const setOpen = useSearchCommandStore((store) => store.setOpen)

	return (
		<Button
			color='mode-accent'
			className='h-[32px] w-[200px] text-neutral-400 bg-mode-accent/50 text-xs justify-between px-3 py-0.5 [&]:data-[focus-visible=true]:ring-offset-[0px]'
			hasDefaultInnerRing={false}
			onPress={() => setOpen(true)}
		>
			<span className='relative top-px'>Search...</span>
			<Kbd className='text-[8px] shadow-none py-[1px] px-1 rounded-sm'>⌘ K</Kbd>
		</Button>
	)
}

export { SearchTrigger }
