const categories = document.querySelectorAll('.categories li')
const images = document.querySelectorAll('.items img')

categories.forEach((category) => {
	category.addEventListener('click', () => {
		// Active => current class
		categories.forEach((category) => {
			category.classList = ''
		})
		category.classList.add('current')

		// Filter
		const value = category.textContent
		images.forEach((image) => {
			image.style.display = 'none'

			if (
				image.getAttribute('data-filter') == value.toLowerCase() ||
				value == 'All Categories'
			) {
				image.style.display = 'block'
			}
		})
	})
})
