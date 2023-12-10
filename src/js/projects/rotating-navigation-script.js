const ul = document.querySelector('ul')
const liElements = ul.querySelectorAll('li')

liElements.forEach((li, index) => {
	li.style.transform = `translateX(-${115 + index * 30}%)`
})

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.rotating-navigation--container')

const showNav = () => {
	container.classList.add('show-nav')
	liElements.forEach((li, index) => {
		li.style.marginLeft = `${index * 15}px`
		li.style.transform = `translateX(0)`
	})
}
const hideNav = () => {
	container.classList.remove('show-nav')
	liElements.forEach((li, index) => {
		li.style.marginLeft = `0`
		li.style.transform = `translateX(-${115 + index * 30}%)`
	})
}

hideNav()
open.addEventListener('click', showNav)
close.addEventListener('click', hideNav)
