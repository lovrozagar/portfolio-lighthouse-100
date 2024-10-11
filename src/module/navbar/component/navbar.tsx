import { ModeSwitch } from '@/component/mode-switch/mode-switch'
import { NavbarItem } from '@/module/navbar/component/navbar-item'
import {
	Crosshair2Icon,
	FileTextIcon,
	GitHubLogoIcon,
	HomeIcon,
	PersonIcon,
} from '@radix-ui/react-icons'
import { Button, Container } from '@renderui/core'

function Navbar() {
	return (
		<div className='absolute z-50 top-0 left-0 w-full border-b border-mode-accent h-[50px] backdrop-blur dark:supports-[backdrop-filter]:bg-background/50 supports-[backdrop-filter]:bg-background/90'>
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
							experience
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
							<Button
								color='mode-accent'
								className='h-[24px] w-[180px] text-neutral-400 bg-mode-accent/50 text-[11px] justify-between px-3 py-0.5 [&]:data-[focus-visible=true]:ring-offset-[0px]'
							>
								<span className='relative top-px'>Search...</span>
								<span className='flex items-center justify-center text-[8px] font-normal bg-mode-contrast/10 py-[1px] px-1 rounded-sm'>
									⌘ K
								</span>
							</Button>
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
