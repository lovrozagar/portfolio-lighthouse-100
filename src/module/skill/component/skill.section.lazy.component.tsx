import { lazy } from 'react'

const LazySkillSection = lazy(async () => {
	const module = await import('@/module/skill/component/skill.section.component')
	return { default: module.SkillSection }
})

export { LazySkillSection }
