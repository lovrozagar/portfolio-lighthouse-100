'use client'

import { CalendarIcon, Crosshair2Icon, FileTextIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	Separator,
	useEventListener,
} from '@renderui/core'
import { useState } from 'react'

const SearchCommand = () => {
	const [open, setOpen] = useState(false)

	useEventListener({
		event: 'keydown',
		handler: (event) => {
			if ((event.key === 'k' || event.key === 'K') && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen((open) => !open)
			}
		},
	})

	return (
		<CommandDialog open={open} onOpenChange={setOpen}>
			<CommandInput placeholder='Type a command or search...' />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading='Career'>
					<CommandItem value='experience' onClick={() => console.log()}>
						<FileTextIcon className='mr-2 h-4 w-4' />
						<span>Experience</span>
					</CommandItem>
					<CommandItem value='education'>
						<Crosshair2Icon className='mr-2 h-4 w-4' />
						<span>Education</span>
					</CommandItem>
					<CommandItem value='projects'>
						<CalendarIcon className='mr-2 h-4 w-4' />
						<span>Projects</span>
					</CommandItem>
				</CommandGroup>
				<Separator />
				<CommandGroup heading='Contact'>
					<CommandItem value='github'>
						<GitHubLogoIcon className='mr-2 h-4 w-4' />
						<span>Github</span>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	)
}

export { SearchCommand }
