import type { CareerItem } from '@/module/terminal/type/type'
import { linkClasses } from '@renderui/core'
import Image from 'next/image'
import Link from 'next/link'
import src from '../../../../public/image/recommend.jpg'

type CareerPathProps = {
	careerItems: CareerItem[]
}

const CarrerPath = (props: CareerPathProps) => {
	const { careerItems } = props

	return (
		<ul className='grid gap-y-6'>
			{careerItems.map((experience, index) => (
				<li key={index} className='grid grid-cols-[auto_1fr] gap-x-6'>
					<div className='flex flex-col'>
						<Image
							priority
							className='rounded'
							src={src}
							alt={experience.organizationName}
							height={46}
							width={46}
						/>
						<span className='w-[1px] flex-1 bg-[#43434d] self-center relative top-2.5' />
					</div>
					<div className='grid gap-y-1'>
						<div className='flex items-center gap-x-3'>
							{experience.organizationHref ? (
								<Link href={experience.organizationHref} className={linkClasses()}>
									<h3 className='text-[#EBEBEF]'>{experience.organizationName}</h3>
								</Link>
							) : (
								<h3 className='text-[#EBEBEF]'>{experience.organizationName}</h3>
							)}
							<time className='text-sm text-[#B9B9C6]'>
								{experience.startDate} - {experience.endDate}
							</time>
							<span className='text-sm text-[#8F8FA3]'>(1 month)</span>
						</div>
						<div className='flex items-center gap-x-3'>
							<span className='text-sm font-semibold tracking-wide'> {experience.role}</span>
							<span className='text-sm text-[#B9B9C6]'>{`${experience.commitmentType} - ${experience.location}`}</span>
						</div>
						<ul className='flex flex-wrap gap-x-2 gap-y-2 mt-2'>
							{experience.skills.map((skill, index) => (
								<li
									key={index}
									className='text-xs px-2.5 py-[5px] border border-[#43434d] rounded-full tracking-wide flex items-center justify-center'
								>
									{skill}
								</li>
							))}
						</ul>
						<ul className='flex flex-wrap gap-y-2 mt-2'>
							{experience.description.map((point, index) => (
								<li key={index} className='text-sm text-[#B9B9C6]'>
									- {point}
								</li>
							))}
						</ul>
					</div>
				</li>
			))}
		</ul>
	)
}

export { CarrerPath }
