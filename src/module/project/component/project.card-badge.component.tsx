import type { ReactNode } from 'react'

type ProjectCardBadgeProps = {
	children: ReactNode
}

const ProjectCardBadge = (props: ProjectCardBadgeProps) => {
	const { children } = props

	return (
		<li className='text-xs px-2.5 py-[5px] border border-[#43434d] rounded-full tracking-wide flex items-center justify-center'>
			{children}
		</li>
	)
}

export { ProjectCardBadge }
