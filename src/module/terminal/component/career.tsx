'use client'

import { TypeWriter } from '@/component/type-writer'
import { FIRA_CODE } from '@/font'
import { CarrerPath } from '@/module/terminal/component/career-path'
import { EDUCATION_CAREER_ITEMS } from '@/module/terminal/constant/education'
import { EXPERIENCE_CARRER_ITEMS } from '@/module/terminal/constant/experience'
import { ToggleGroup, ToggleGroupItem } from '@renderui/core'
import { useState } from 'react'

type CareerItem = 'experience' | 'education'

const Career = () => {
	const [careerItem, setCareerItem] = useState<CareerItem>('experience')

	const handleCareerItemChange = (value: unknown) => {
		if (value === 'experience' || value === 'education') {
			setCareerItem(value)
		}
	}

	return (
		<>
			<div className={FIRA_CODE.className}>
				<p>
					<span className='text-[#3990FF]'>root@lovrozagar:~$</span>
					<span className='inline-block ml-3'>lovrozagar.exe --</span>
					<TypeWriter>{careerItem}</TypeWriter>
				</p>
				<ToggleGroup
					value={careerItem}
					type='single'
					color='mode-contrast'
					className='mt-4 mb-6'
					onValueChange={handleCareerItemChange}
				>
					<ToggleGroupItem
						className='text-base rounded py-1.5 px-4'
						value='experience'
						id='experience'
						rippleProps={{ opacity: 0.2 }}
					>
						experience
					</ToggleGroupItem>
					<ToggleGroupItem
						className='text-base rounded py-1.5 px-4'
						value='education'
						id='education'
						rippleProps={{ opacity: 0.2 }}
					>
						education
					</ToggleGroupItem>
				</ToggleGroup>
			</div>
			<article className='pb-4'>
				{careerItem === 'experience' ? (
					<CarrerPath careerItems={EXPERIENCE_CARRER_ITEMS} />
				) : (
					<CarrerPath careerItems={EDUCATION_CAREER_ITEMS} />
				)}
			</article>
		</>
	)
}

export { Career }
