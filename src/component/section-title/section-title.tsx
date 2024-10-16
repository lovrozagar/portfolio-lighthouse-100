import type { ReactNode } from 'react'

type SectionTitleProps = {
	id: string
	children: ReactNode
}

const SectionTitle = (props: SectionTitleProps) => {
	const { id, children } = props

	return (
		<h2 id={id} className='mt-1 text-4xl'>
			{children}
		</h2>
	)
}

export { SectionTitle }
