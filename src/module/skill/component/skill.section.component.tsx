import { CheckmarkIcon } from '@/component/icon'
import { SectionTitle } from '@/component/section-title/section-title'
import { SkillLinkCarousel } from '@/module/skill/component/skill.link-carousel.component'

const SkillSection = () => {
	return (
		<section className='grid grid-cols-[auto_1fr] gap-x-8'>
			<div className='relative'>
				<div className='flex aspect-square size-[48px] items-center justify-center rounded-full border-2 border-warning bg-warning/[15%] font-bold text-blue-200 shadow-[0px_0px_40px_5px_rgba(57,144,255,0.4)] ring-offset-0'>
					<CheckmarkIcon className='size-5' />
					<div className='absolute top-[48px] block h-[calc(100%-48px)] w-[2px] bg-warning' />
				</div>
			</div>
			<div>
				<SectionTitle id='skills'>
					<span className='font-semibold'>Aquired</span>{' '}
					<span className='font-extrabold text-warning'>Skills</span>
				</SectionTitle>
				<p className='mt-2 text-[#B9B9C6] text-sm'>Honed for centuries atop mountain of Wudan</p>
				<SkillLinkCarousel
					repeat={4}
					links={[
						{
							href: '/',
							children: 'TypeScript',
						},
						{
							href: '/',
							children: 'JavaScript',
						},
						{
							href: '/',
							children: 'Next.js',
						},
						{
							href: '/',
							children: 'React',
						},
						{
							href: '/',
							children: 'GraphQL',
						},
						{
							href: '/',
							children: 'Redux',
						},
						{
							href: '/',
							children: 'React-query',
						},
						{
							href: '/',
							children: 'Zustand',
						},
					]}
				/>
			</div>
		</section>
	)
}

export { SkillSection }
