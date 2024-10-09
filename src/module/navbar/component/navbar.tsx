import { ModeSwitch } from '@/component/mode-switch/mode-switch'
import { NavbarItem } from '@/module/navbar/component/navbar-item'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Container } from '@renderui/core'

function Navbar() {
	return (
		<div className='border-b border-mode-accent'>
			<Container>
				<nav className='h-[50px] backdrop-blur-[10px] flex items-center w-full'>
					<ul className='flex gap-x-3 items-center w-full'>
						<NavbarItem
							href='https://github.com/lovrozagar'
							target='_blank'
							referrerPolicy='no-referrer'
							className='text-mode-contrast'
						>
							<GitHubLogoIcon />
							lovrozagar
						</NavbarItem>
						<NavbarItem href='/'>home</NavbarItem>
						<NavbarItem href='/'>experience</NavbarItem>
						<NavbarItem href='/'>projects</NavbarItem>
						<li className='ml-auto'>
							<ModeSwitch />
						</li>
					</ul>
				</nav>
			</Container>
		</div>
	)
}

export { Navbar }
