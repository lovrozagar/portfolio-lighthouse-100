import { ArrowRightIcon, CrosshairIcon } from '@/component/icon'
import { SectionTitle } from '@/component/section-title/section-title'
import { ProjectCard } from '@/module/project/component/project.card.component'
import { PROJECT_ITEMS } from '@/module/project/constant/project.item.constants'
import { Button } from '@renderui/button'

const ProjectSection = () => {
	return (
		<section className='grid grid-cols-[auto_1fr] gap-x-8'>
			<div className='relative'>
				<div className='flex aspect-square size-[48px] items-center justify-center rounded-full border-2 border-secondary bg-secondary/[15%] font-bold text-blue-200 shadow-[0px_0px_40px_5px_rgba(57,144,255,0.4)] ring-offset-0'>
					<CrosshairIcon className='size-5' />
					<div className='absolute top-[48px] block h-[calc(100%-48px)] w-[2px] bg-secondary' />
				</div>
			</div>
			<div className='pb-14'>
				<SectionTitle id='projects'>
					<span className='font-semibold'>Featured</span>{' '}
					<span className='font-extrabold text-secondary'>Projects</span>
				</SectionTitle>
				<ul className='mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,350px),1fr))] gap-4'>
					{PROJECT_ITEMS.map((item, index) => (
						<ProjectCard key={index} item={item} />
					))}
				</ul>
				{/* <Separator className='mt-8 mb-7 border-mode-800' /> */}
				<div className='flex items-start justify-between'>
					<div>
						<h2 className='flex gap-x-4 text-4xl'>
							<span className='font-light'>Projects</span>
							<span className='font-light'>&</span>
							<span className='font-extrabold'>Experiments</span>
						</h2>
						<p className='mt-2 text-[#B9B9C6] text-sm'>
							Browse more projects in the dedicated explorer, a centralised hub for all my work and
							experiments.
						</p>
					</div>
					<Button
						color='mode-contrast-accent'
						className='group/button h-[48px] font-semibold text-base shadow-lg [&]:shadow-mode-800'
					>
						Explore more projects
						<ArrowRightIcon className='size-5 transition-transform duration-fast group-hover/button:rotate-[-45deg] group-focus-visible/button:rotate-[-45deg]' />
					</Button>
				</div>
			</div>
		</section>
	)
}

export { ProjectSection }
