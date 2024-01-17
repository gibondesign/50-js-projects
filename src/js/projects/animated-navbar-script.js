const navBtn = document.getElementById('toggle')
const navbar = document.getElementById('nav')
const liItems = document.querySelectorAll('li')

const navbarToggle = () => {
	if (navbar.classList.contains('active')) {
		hideLiItems()
	} else {
		showLiItems()
	}
	navbar.classList.toggle('active')
}



const showLiItems = () => {
	liItems.forEach((item, index) => {
		setTimeout(() => {
			item.classList.add('show')
		}, (1 + index) * 300)
	})
}


const hideLiItems = () => {
	liItems.forEach((item, index) => {
		setTimeout(() => {
			item.classList.remove('show')
		}, (liItems.length - 1 - index) * 200)
	})
}


navBtn.addEventListener('click', navbarToggle)
