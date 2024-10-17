import { Button, Ripple } from '@renderui/core'
import Link from 'next/link'
import type { ReactNode } from 'react'

type ProjectCardAnchorProps = {
	href: string
	children: ReactNode
}

const ProjectCardAnchor = (props: ProjectCardAnchorProps) => {
	const { href, children } = props

	return (
		<Button
			asChild
			variant='solid'
			color='mode-contrast-accent'
			className='gap-2 px-2.5 py-2 font-semibold text-xs'
		>
			<Link href={href} type={undefined}>
				{children}
				<Ripple />
			</Link>
		</Button>
	)
}

export { ProjectCardAnchor }
