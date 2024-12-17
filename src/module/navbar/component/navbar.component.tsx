import { CrosshairIcon, GithubIcon, PersonIcon, TextFileIcon } from '@/component/icon'
import { NavbarItem } from '@/module/navbar/component/navbar.item.component'
import { ModeSwitch } from '@/module/navbar/component/navbar.mode-switch.component'
import { SearchTrigger } from '@/module/navbar/component/search-trigger.component'
import { Container } from '@renderui/container'

function Navbar() {
	return (
		<div className='absolute top-0 left-0 z-50 h-[56px] w-full border-mode-accent border-b shadow backdrop-blur supports-[backdrop-filter]:bg-background/90 dark:supports-[backdrop-filter]:bg-background/20'>
			<Container className='h-full'>
				<nav className='flex h-full w-full items-center'>
					<ul className='flex w-full items-center gap-x-2'>
						<NavbarItem
							href='https://github.com/lovrozagar'
							target='_blank'
							referrerPolicy='no-referrer'
							className='mr-2 text-mode-contrast'
						>
							<GithubIcon />
							lovrozagar
						</NavbarItem>
						<NavbarItem href='/'>
							<TextFileIcon />
							career
						</NavbarItem>
						<NavbarItem href='/'>
							<CrosshairIcon />
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
