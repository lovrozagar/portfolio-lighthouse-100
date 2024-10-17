import { ProjectCard } from '@/module/project/component/project.card.component'
import { PROJECT_ITEMS } from '@/module/project/constant/project.item.constants'

const ProjectSection = () => {
	return (
		<section className='mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,350px),1fr))] gap-4'>
			{PROJECT_ITEMS.map((item, index) => (
				<ProjectCard key={index} item={item} />
			))}
		</section>
	)
}

export { ProjectSection }
