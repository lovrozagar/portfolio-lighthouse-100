import type { ReactNode } from 'react'

type SectionTitleProps = {
	children: ReactNode
}

const SectionTitle = (props: SectionTitleProps) => {
	const { children } = props

	return <h2 className='text-4xl'>{children}</h2>
}

export { SectionTitle }
