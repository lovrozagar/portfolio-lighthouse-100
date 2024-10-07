function isImageCached(src: string) {
	const image = new Image()

	image.src = src

	if (image.complete) {
		// Image is cached
		return true
	}

	// Cancel the image request
	image.src = ''

	return false
}

export { isImageCached }
