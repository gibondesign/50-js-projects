const nav = document.querySelector('.nav')

const fixNav = () => {
	console.log(window.scrollY)

	if (window.scrollY > nav.offsetHeight + 60) {
		nav.classList.add('active')
	} else {
		nav.classList.remove('active')
	}
}

window.addEventListener('scroll', fixNav)
