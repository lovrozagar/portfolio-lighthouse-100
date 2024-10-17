import type { ReactNode } from 'react'

type ProjectCardBadgeProps = {
	children: ReactNode
}

const ProjectCardBadge = (props: ProjectCardBadgeProps) => {
	const { children } = props

	return (
		<li className='flex items-center justify-center rounded-full border border-[#43434d] px-2.5 py-[5px] text-xs tracking-wide'>
			{children}
		</li>
	)
}

export { ProjectCardBadge }
