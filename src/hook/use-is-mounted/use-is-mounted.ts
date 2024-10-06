import { useEffect, useState } from 'react'

function useIsMounted() {
	const [state, setState] = useState(false)

	useEffect(() => {
		setState(true)
	}, [])

	return state
}

export { useIsMounted }
