import { ModeSwitch } from '@/component/mode-switch/mode-switch'
import { NavbarItem } from '@/module/navbar/component/navbar-item'
import { Container } from '@renderui/core'

function Navbar() {
	return (
		<div className='border-b border-mode-accent'>
			<Container>
				<nav className='h-[50px] backdrop-blur-[10px] flex items-center w-full'>
					<ul className='flex gap-x-8 items-center w-full'>
						<NavbarItem href='/'>Home</NavbarItem>
						<NavbarItem href='/'>Experience</NavbarItem>
						<NavbarItem href='/'>Projects</NavbarItem>
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
