import { linkClasses } from '@renderui/core'
import Image from 'next/image'
import Link from 'next/link'
import src from '../../../../public/image/recommend.jpg'
import type { CareerItem } from '@/module/career/type/carrer.item.types'

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
						<span className='relative top-2.5 w-[1px] flex-1 self-center bg-[#43434d]' />
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
							<time className='text-[#B9B9C6] text-sm'>
								{experience.startDate} - {experience.endDate}
							</time>
							<span className='text-[#8F8FA3] text-sm'>(1 month)</span>
						</div>
						<div className='flex items-center gap-x-3'>
							<span className='font-semibold text-sm tracking-wide'> {experience.role}</span>
							<span className='text-[#B9B9C6] text-sm'>{`${experience.commitmentType} - ${experience.location}`}</span>
						</div>
						<ul className='mt-2 flex flex-wrap gap-x-2 gap-y-2'>
							{experience.skills.map((skill, index) => (
								<li
									key={index}
									className='flex items-center justify-center rounded-full border border-[#43434d] px-2.5 py-[5px] text-xs tracking-wide'
								>
									{skill}
								</li>
							))}
						</ul>
						<ul className='mt-2 flex flex-wrap gap-y-2'>
							{experience.description.map((point, index) => (
								<li key={index} className='text-[#B9B9C6] text-sm'>
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
