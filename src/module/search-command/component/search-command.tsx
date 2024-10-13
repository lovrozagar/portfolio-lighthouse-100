'use client'

import { CAREER_ITEMS, CONTACT_ITEMS } from '@/module/search-command/constant/search-command-items'
import { useSearchCommandStore } from '@/store/search-command'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	Dialog,
	DialogContent,
	Separator,
	useEventListener,
} from '@renderui/core'
import { useRef } from 'react'

const SearchCommand = () => {
	const open = useSearchCommandStore((store) => store.open)
	const setOpen = useSearchCommandStore((store) => store.setOpen)

	const inputRef = useRef<HTMLInputElement>(null)

	useEventListener({
		event: 'keydown',
		handler: (event) => {
			if ((event.key === 'k' || event.key === 'K') && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen(!open)
			}
		},
	})

	const handleOpenChange = (value: boolean) => {
		setOpen(value)

		if (open) {
			inputRef.current?.focus()
		}
	}

	const handleSelect = (value: string) => {
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
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent className='p-0' hasCloseButton={false}>
				<Command>
					<CommandInput ref={inputRef} placeholder='I am searching for...' />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading='Career'>
							{CAREER_ITEMS.map((item) => (
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
				</Command>
			</DialogContent>
		</Dialog>
	)
}

export { SearchCommand }
