'use client'

import { Header } from '@/component/header'
import { SectionTitle } from '@/component/section-title/section-title'
import { Terminal } from '@/module/terminal'
import { PersonIcon } from '@radix-ui/react-icons'
import { Container } from '@renderui/core'

const Page = () => {
	return (
		<Container>
			<main className='pt-[200px]'>
				<Header />
				<div className='grid grid-cols-[auto_1fr] gap-x-8'>
					<div className='relative'>
						<div className='text-blue-200 font-bold bg-mode size-[44px] rounded-full border-2 border-primary aspect-square ring-offset-0 flex items-center justify-center shadow-[0px_0px_40px_5px_rgba(57,144,255,0.4)]'>
							<PersonIcon />
							<div className='top-[44px] absolute block h-[calc(100%-44px)] w-[2px] bg-primary' />
						</div>
					</div>
					<div>
						<SectionTitle>
							<span className='font-semibold'>Career</span>{' '}
							<span className='font-extrabold text-primary'>Overview</span>
						</SectionTitle>
						<section className='flex mt-4'>
							<Terminal />
						</section>
					</div>
				</div>
			</main>
		</Container>
	)
}

export default Page
