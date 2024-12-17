'use client'

import {
	CAREER_ITEMS,
	CONTACT_ITEMS,
} from '@/module/search-command/constant/search-command.item.constants'
import { useSearchCommandStore } from '@/store/search-command'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	Separator,
	// useEventListener,
} from '@renderui/qa'

const SearchCommand = () => {
	const open = useSearchCommandStore((store) => store.open)
	const setOpen = useSearchCommandStore((store) => store.setOpen)

	// useEventListener({
	// 	event: 'keydown',
	// 	handler: (event) => {
	// 		if ((event.key === 'k' || event.key === 'K') && (event.metaKey || event.ctrlKey)) {
	// 			event.preventDefault()
	// 			setOpen(!open)
	// 		}
	// 	},
	// })

	const handleSelect = (value: unknown) => {
		switch (value) {
			case 'experience':
			case 'education': {
				if (typeof window === 'undefined') return

				const experienceButton = document.getElementById(value)

				if (!(experienceButton instanceof HTMLElement)) return

				experienceButton.click()
				experienceButton.scrollIntoView()
			}
		}

		setOpen(false)
	}

	return (
		<CommandDialog
			color='mode-accent'
			dialogProps={{ open: open, onOpenChange: setOpen }}
			onSelect={(value) => handleSelect(value)}
		>
			<CommandInput placeholder='I am searching for...' />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading='Career'>
					{CAREER_ITEMS.map((item) => (
						<CommandItem key={item.value} value={item.value}>
							<item.Icon className='mr-2 h-4 w-4' />
							<span>{item.label}</span>
						</CommandItem>
					))}
				</CommandGroup>
				<Separator />
				<CommandGroup heading='Contact'>
					{CONTACT_ITEMS.map((item) => (
						<CommandItem
							key={item.value}
							value={item.value}
							onSelect={(value) => handleSelect(value)}
						>
							<item.Icon className='mr-2 h-4 w-4' />
							<span>{item.label}</span>
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	)
}

export { SearchCommand }
