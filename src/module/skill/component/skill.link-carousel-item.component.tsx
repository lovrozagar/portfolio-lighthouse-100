import { Button } from '@renderui/core'
import Link, { type LinkProps } from 'next/link'

const SkillLinkCarouselItem = (props: LinkProps) => {
	return (
		<Button asChild color='mode-accent'>
			<Link {...props} className='mode-accent px-4 py-2' />
		</Button>
	)
}

export { SkillLinkCarouselItem }
