import { ModeSwitch } from '@/component/mode-switch/mode-switch'
import { NavbarItem } from '@/module/navbar/component/navbar-item'
import { SearchTrigger } from '@/module/navbar/component/search-trigger'
import { Crosshair2Icon, FileTextIcon, GitHubLogoIcon, PersonIcon } from '@radix-ui/react-icons'
import { Container } from '@renderui/core'

function Navbar() {
	return (
		<div className='absolute z-50 top-0 left-0 w-full border-b border-mode-accent h-[56px] backdrop-blur dark:supports-[backdrop-filter]:bg-background/20 supports-[backdrop-filter]:bg-background/90 shadow'>
			<Container className='h-full'>
				<nav className='h-full flex items-center w-full'>
					<ul className='flex gap-x-2 items-center w-full'>
						<NavbarItem
							href='https://github.com/lovrozagar'
							target='_blank'
							referrerPolicy='no-referrer'
							className='text-mode-contrast mr-2'
						>
							<GitHubLogoIcon />
							lovrozagar
						</NavbarItem>
						<NavbarItem href='/'>
							<FileTextIcon />
							career
						</NavbarItem>
						<NavbarItem href='/'>
							<Crosshair2Icon />
							projects
						</NavbarItem>
						<NavbarItem href='/'>
							<PersonIcon />
							resume
						</NavbarItem>
						<li className='ml-auto flex items-center'>
							<SearchTrigger />
						</li>
						<li className='flex items-center'>
							<ModeSwitch />
						</li>
					</ul>
				</nav>
			</Container>
		</div>
	)
}

export { Navbar }
