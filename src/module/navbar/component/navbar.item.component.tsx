'use client'

import { Button } from '@renderui/button'
import { Ripple } from '@renderui/ripple'
import { cx } from '@renderui/utils'
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
					'rounded-full px-4 py-1 font-semibold text-mode-400 transition-colors data-[hover=true]:text-mode-contrast data-[focus-visible=true]:ring-offset-[0px]',
					className,
				)}
			>
				<Link {...restProps} type={undefined}>
					{children}
					<Ripple />
				</Link>
			</Button>
		</li>
	)
}

export { NavbarItem }
