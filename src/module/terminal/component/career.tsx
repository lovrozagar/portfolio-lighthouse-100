import { ToggleGroup, ToggleGroupItem } from '@renderui/core'
import { useState } from 'react'

type CareerItem = 'experience' | 'education'

const Career = () => {
	const [careerItem, setCareerItem] = useState<CareerItem>('experience')

	const handleCareerItemChange = () => {
		if (careerItem === 'experience') return setCareerItem('education')
		if (careerItem === 'education') return setCareerItem('experience')
	}

	return (
		<>
			<p>
				<span className='text-[#3990FF]'>root@lovrozagar:~$</span> lovrozagar.exe --experience
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
