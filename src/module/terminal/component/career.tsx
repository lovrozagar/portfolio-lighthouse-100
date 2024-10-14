import { TypeWriter } from '@/component/type-writer'
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
			<p>
				<span className='text-[#3990FF]'>root@lovrozagar:~$</span>
				<span className='inline-block ml-3'>lovrozagar.exe --</span>
				<TypeWriter>{careerItem}</TypeWriter>
			</p>
			<ToggleGroup
				value={careerItem}
				type='single'
				color='mode-contrast'
				className='mt-4'
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
		</>
	)
}

export { Career }
