import { lazy } from 'react'

const LazySearchCommand = lazy(async () => {
	const module = await import('@/module/search-command/component/search-command')
	return { default: module.SearchCommand }
})

export { LazySearchCommand }
