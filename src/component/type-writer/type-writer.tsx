import { useRef, useEffect, useState } from 'react'

type TypeWriterProps = {
	children: string
}

const TypeWriter = (props: TypeWriterProps) => {
	const { children } = props

	const [currentText, setCurrentText] = useState('')
	const cursorRef = useRef<HTMLSpanElement>(null)

	/* Blink the cursor only when the animation is not playing */
	useEffect(() => {
		const typing = currentText !== children
		if (cursorRef.current) {
			cursorRef.current.style.animation = typing ? 'none' : 'blink 1s infinite'
		}
	}, [currentText, children])

	useEffect(() => {
		/* If the text is different, start the animation */
		const interval = setInterval(
			() => {
				/* If the text is the same, stop the animation (should never be reached) */
				if (children === currentText) {
					clearInterval(interval)
					return
				}

				/* if currentText is included in toText, add one more character */
				if (children.startsWith(currentText)) {
					setCurrentText(children.slice(0, currentText.length + 1))
				} else {
					/* if currentText is not included in toText, remove one character */
					setCurrentText(currentText.slice(0, currentText.length - 1))
				}
			},
			Math.random() * 6 * 10,
		)
		return () => {
			clearInterval(interval)
		}
	}, [children, currentText])

	return (
		<span>
			{currentText}
			<span ref={cursorRef} className='font-extralight'>
				|
			</span>
		</span>
	)
}

export { TypeWriter }
