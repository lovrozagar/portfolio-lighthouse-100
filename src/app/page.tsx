import { ArrowRightIcon, CheckmarkIcon, CrosshairIcon, PersonIcon } from '@/component/icon'
import { SectionTitle } from '@/component/section-title/section-title'
import { ProjectSection } from '@/module/project'
import { SkillSection } from '@/module/skill'
import { Terminal } from '@/module/terminal'
import { Button, Container, Separator } from '@renderui/core'

const Page = () => {
	return (
		<Container className='pb-[200px]'>
			<main className='pt-[100px]'>
				{/* <Header /> */}
				<div className='grid grid-cols-[auto_1fr] gap-x-8'>
					<div className='relative'>
						<div className='text-blue-200 bg-primary/[15%] font-bold size-[48px] rounded-full border-2 border-primary aspect-square ring-offset-0 flex items-center justify-center shadow-[0px_0px_40px_5px_rgba(57,144,255,0.4)]'>
							<PersonIcon className='size-5' />
							<div className='top-[48px] absolute block h-[calc(100%-48px)] w-[2px] bg-primary' />
						</div>
					</div>
					<div className='pb-14'>
						<SectionTitle id='career'>
							<span className='font-semibold'>Career</span>{' '}
							<span className='font-extrabold text-primary'>Overview</span>
						</SectionTitle>
						<section className='flex mt-8'>
							<Terminal />
						</section>
					</div>
				</div>
				<div className='grid grid-cols-[auto_1fr] gap-x-8'>
					<div className='relative'>
						<div className='text-blue-200 bg-secondary/[15%] font-bold size-[48px] rounded-full border-2 border-secondary aspect-square ring-offset-0 flex items-center justify-center shadow-[0px_0px_40px_5px_rgba(57,144,255,0.4)]'>
							<CrosshairIcon className='size-5' />
							<div className='top-[48px] absolute block h-[calc(100%-48px)] w-[2px] bg-secondary' />
						</div>
					</div>
					<div className='pb-14'>
						<SectionTitle id='projects'>
							<span className='font-semibold'>Featured</span>{' '}
							<span className='font-extrabold text-secondary'>Projects</span>
						</SectionTitle>
						<ProjectSection />
						<Separator className='mt-8 mb-7 border-mode-800' />
						<div className='flex items-start justify-between'>
							<div>
								<h2 className='text-4xl flex gap-x-4'>
									<span className='font-light'>Projects</span>
									<span className='font-light'>&</span>
									<span className='font-extrabold'>Experiments</span>
								</h2>
								<p className='mt-2 text-sm text-[#B9B9C6]'>
									Browse more projects in the dedicated explorer, a centralised hub for all my work
									and experiments.
								</p>
							</div>
							<Button
								color='mode-contrast-accent'
								className='group/button h-[48px] text-base font-semibold shadow-lg [&]:shadow-mode-800'
							>
								Explore more projects
								<ArrowRightIcon className='size-5 transition-transform duration-fast group-focus-visible/button:rotate-[-45deg] group-hover/button:rotate-[-45deg]' />
							</Button>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-[auto_1fr] gap-x-8'>
					<div className='relative'>
						<div className='text-blue-200 bg-warning/[15%] font-bold size-[48px] rounded-full border-2 border-warning aspect-square ring-offset-0 flex items-center justify-center shadow-[0px_0px_40px_5px_rgba(57,144,255,0.4)]'>
							<CheckmarkIcon className='size-5' />
							<div className='top-[48px] absolute block h-[calc(100%-48px)] w-[2px] bg-warning' />
						</div>
					</div>
					<div>
						<SectionTitle id='skills'>
							<span className='font-semibold'>Aquired</span>{' '}
							<span className='font-extrabold text-warning'>Skills</span>
						</SectionTitle>
						<p className='mt-2 text-sm text-[#B9B9C6]'>
							Honed for centuries atop mountain of Wudan
						</p>
						<SkillSection />
					</div>
				</div>
			</main>
		</Container>
	)
}

export default Page
