import { SkillLinkCarousel } from '@/module/skill/component/skill.link-carousel.component'

const SkillSection = () => {
	return (
		<SkillLinkCarousel
			repeat={4}
			links={[
				{
					href: '/',
					children: 'TypeScript',
				},
				{
					href: '/',
					children: 'JavaScript',
				},
				{
					href: '/',
					children: 'Next.js',
				},
				{
					href: '/',
					children: 'React',
				},
				{
					href: '/',
					children: 'GraphQL',
				},
				{
					href: '/',
					children: 'Redux',
				},
				{
					href: '/',
					children: 'React-query',
				},
				{
					href: '/',
					children: 'Zustand',
				},
			]}
		/>
	)
}

export { SkillSection }
