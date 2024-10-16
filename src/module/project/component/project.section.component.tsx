import { ProjectCard } from '@/module/project/component/project.card.component'
import { PROJECT_ITEMS } from '@/module/project/constant/project.item.constants'

const ProjectSection = () => {
	return (
		<section className='mt-8 grid gap-4 grid-cols-[repeat(auto-fill,minmax(min(100%,350px),1fr))]'>
			{PROJECT_ITEMS.map((item, index) => (
				<ProjectCard key={index} item={item} />
			))}
		</section>
	)
}

export { ProjectSection }
