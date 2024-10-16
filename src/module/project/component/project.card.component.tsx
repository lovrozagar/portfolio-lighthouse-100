import { GithubIcon, GlobeIcon, NpmIcon } from '@/component/icon'
import { ProjectCardAnchor } from '@/module/project/component/project.card-anchor.component'
import { ProjectCardBadge } from '@/module/project/component/project.card-badge.component'
import type { ProjectItem } from '@/module/project/type/project.item.types'
import { linkClasses } from '@renderui/core'
import Link from 'next/link'

type ProjectCardProps = {
	item: ProjectItem
}

const ProjectCard = (props: ProjectCardProps) => {
	const { item } = props

	return (
		<li className='flex flex-col bg-mode-950 rounded overflow-hidden border border-mode-accent'>
			<video
				loop
				muted
				autoPlay
				playsInline
				preload='none'
				className='pointer-events-none mx-auto h-40 w-full object-cover object-top'
				src={'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'}
			/>
			<div className='flex-1 flex flex-col p-4'>
				<Link
					href={item.websiteHref ?? item.packageHref ?? item.sourceCodeHref}
					className={linkClasses({ underline: 'none', className: 'grid w-fit' })}
				>
					<h3 className='w-fit text-base font-semibold text-[#EBEBEF] hover:underline'>
						{item.name}
					</h3>
				</Link>
				<time className='text-sm text-[#B9B9C6]'>{`${item.startDate} - ${item.endDate}`}</time>
				<p className='text-sm mt-2 text-[#B9B9C6]'>{item.description}</p>
				<ul className='mt-3 flex flex-wrap gap-2'>
					{item.skills.map((skill, index) => (
						<ProjectCardBadge key={index}>{skill}</ProjectCardBadge>
					))}
				</ul>
				<div className='mt-5 flex flex-1 gap-x-3 items-end'>
					{item.packageHref ? (
						<ProjectCardAnchor href='/'>
							<NpmIcon className='size-4.5' />
							Package
						</ProjectCardAnchor>
					) : null}
					{item.websiteHref ? (
						<ProjectCardAnchor href='/'>
							<GlobeIcon className='size-4' />
							Website
						</ProjectCardAnchor>
					) : null}
					{item.sourceCodeHref ? (
						<ProjectCardAnchor href='/'>
							<GithubIcon className='size-4' />
							Source code
						</ProjectCardAnchor>
					) : null}
				</div>
			</div>
		</li>
	)
}

export { ProjectCard }
