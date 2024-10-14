import type { ReactNode } from 'react'
import { Badge } from '@renderui/core'

type SkillBadgeProps = {
	children: ReactNode
}

const SkillBadge = (props: SkillBadgeProps) => {
	const { children } = props

	return <Badge />
}

export { SkillBadge }
