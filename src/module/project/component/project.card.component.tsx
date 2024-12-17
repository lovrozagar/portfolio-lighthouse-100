import { GithubIcon, GlobeIcon, NpmIcon } from '@/component/icon'
import { ProjectCardAnchor } from '@/module/project/component/project.card-anchor.component'
import { ProjectCardBadge } from '@/module/project/component/project.card-badge.component'
import type { ProjectItem } from '@/module/project/type/project.item.types'
import { linkClasses } from '@renderui/qa'
import Link from 'next/link'

type ProjectCardProps = {
	item: ProjectItem
}

const ProjectCard = (props: ProjectCardProps) => {
	const { item } = props

	return (
		<li className='flex flex-col overflow-hidden rounded border border-mode-accent bg-mode-950'>
			<video
				loop
				muted
				autoPlay
				playsInline
				preload='metadata'
				className='pointer-events-none mx-auto h-40 w-full object-cover object-top'
				src={'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'}
			/>
			<div className='flex flex-1 flex-col p-4'>
				<Link
					href={item.websiteHref ?? item.packageHref ?? item.sourceCodeHref}
					// className={linkClasses({ underline: 'none', className: 'grid w-fit' })}
				>
					<h3 className='w-fit font-semibold text-[#EBEBEF] text-base hover:underline'>
						{item.name}
					</h3>
				</Link>
				<time className='text-[#B9B9C6] text-sm'>{`${item.startDate} - ${item.endDate}`}</time>
				<p className='mt-2 text-[#B9B9C6] text-sm'>{item.description}</p>
				<ul className='mt-3 flex flex-wrap gap-2'>
					{item.skills.map((skill, index) => (
						<ProjectCardBadge key={index}>{skill}</ProjectCardBadge>
					))}
				</ul>
				<div className='mt-5 flex flex-1 items-end gap-x-3'>
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
