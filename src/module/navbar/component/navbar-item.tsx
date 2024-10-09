'use client'

import { Button } from '@renderui/core'
import Link from 'next/link'
import type { ComponentPropsWithRef } from 'react'

type NavbarItemProps = ComponentPropsWithRef<typeof Link>

const NavbarItem = (props: NavbarItemProps) => {
	const { children, ...restProps } = props

	return (
		<li>
			<Button
				asChild
				variant='plain'
				className='rounded-full py-1 px-4 data-[focus-visible=true]:ring-offset-[0px]'
			>
				{({ Ripple }) => (
					<Link {...restProps}>
						{children}
						<Ripple />
					</Link>
				)}
			</Button>
		</li>
	)
}

export { NavbarItem }
