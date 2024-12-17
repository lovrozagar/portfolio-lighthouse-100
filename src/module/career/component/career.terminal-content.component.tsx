'use client'

import { TypeWriter } from '@/component/type-writer'
import { FIRA_CODE } from '@/font'
import { CarrerPath } from '@/module/career/component/career.path.component'
import { EDUCATION_CAREER_ITEMS } from '@/module/career/constant/career.education.constants'
import { EXPERIENCE_CARRER_ITEMS } from '@/module/career/constant/career.experience.constants'
import type { CareerItemType } from '@/module/career/type/carrer.item.types'
import { ToggleGroupItem, ToggleGroupRoot } from '@renderui/toggle-group'
import { useState } from 'react'

const CareerTerminalContent = () => {
	const [careerItem, setCareerItem] = useState<CareerItemType>('experience')

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
					<span className='ml-3 inline-block'>lovrozagar.exe --</span>
					<TypeWriter>{careerItem}</TypeWriter>
				</p>
				<ToggleGroupRoot
					value={careerItem}
					type='single'
					color='mode-contrast'
					className='mt-4 mb-6'
					onValueChange={handleCareerItemChange}
				>
					<ToggleGroupItem
						className='rounded px-4 py-1.5 text-base'
						value='experience'
						id='experience'
						rippleProps={{ opacity: 0.2 }}
					>
						experience
					</ToggleGroupItem>
					<ToggleGroupItem
						className='rounded px-4 py-1.5 text-base'
						value='education'
						id='education'
						rippleProps={{ opacity: 0.2 }}
					>
						education
					</ToggleGroupItem>
				</ToggleGroupRoot>
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

export { CareerTerminalContent }
