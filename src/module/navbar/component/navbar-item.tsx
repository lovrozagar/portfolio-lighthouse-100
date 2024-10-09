'use client'

import { Button, cx } from '@renderui/core'
import Link from 'next/link'
import type { ComponentPropsWithRef } from 'react'

type NavbarItemProps = ComponentPropsWithRef<typeof Link>

const NavbarItem = (props: NavbarItemProps) => {
	const { children, className, ...restProps } = props

	return (
		<li>
			<Button
				asChild
				variant='plain'
				className={cx(
					'rounded-full py-1 px-4 text-neutral-400 font-semibold transition-colors data-[hover=true]:text-mode-contrast data-[focus-visible=true]:ring-offset-[0px]',
					className,
				)}
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
