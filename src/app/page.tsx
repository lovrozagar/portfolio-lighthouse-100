'use client'

import { Header } from '@/component/header'
import { Terminal } from '@/component/terminal'

const Page = () => {
	return (
		<main className='pt-[200px]'>
			<Header />
			<section className='flex justify-center mt-4'>
				<Terminal />
			</section>
		</main>
	)
}

export default Page
