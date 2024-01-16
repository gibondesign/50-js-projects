const tagsBox = document.querySelector('.tags')
const textarea = document.querySelector('.choice-textarea')

textarea.focus()

textarea.addEventListener('keyup', e => {
	createTags(e.target.value)

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = ''
		}, 20)

		randomSelect()
	}
})

const createTags = input => {
	const tags = input
		.split(',')
		.filter(tag => tag.trim() !== '')
		.map(tag => tag.trim())

	tagsBox.innerHTML = ''

	tags.forEach(tag => {
		const tagEl = document.createElement('p')
		tagEl.classList.add('tag')
		tagEl.innerText = tag
		tagsBox.appendChild(tagEl)
	})
}

const randomSelect = () => {
	const times = 30

	const interval = setInterval(() => {
		const randomTag = pickRandomTag()
		highlightTag(randomTag)
		setTimeout(() => {
			unhighlightTag(randomTag)
		}, 100)
	}, 100)

	setTimeout(() => {
		clearInterval(interval)
		setTimeout(() => {
			const randomTag = pickRandomTag()
            highlightTag(randomTag)
		}, 100)
	}, times * 100)
}

const pickRandomTag = () => {
	const tags = document.querySelectorAll('.tag')
	return tags[Math.floor(Math.random() * tags.length)]
}

const highlightTag = tag => {
	tag.classList.add('highlight')
}

const unhighlightTag = tag => {
	tag.classList.remove('highlight')
}
