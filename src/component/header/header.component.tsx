import { FIRA_CODE } from '@/font'
import { cx } from '@renderui/core'

const Header = () => {
	return (
		<header className={cx('flex justify-center text-center', FIRA_CODE.className)}>
			<div className='grid gap-y-2'>
				<h1 className='font-bold text-5xl tracking-wider'>Lovro Žagar</h1>
				<p>Senior Full-stack Software Engineer</p>
			</div>
		</header>
	)
}

export { Header }
