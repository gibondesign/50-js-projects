const boxes = document.querySelectorAll('.box')
const windowPortion = 0.8
let triggerBottom = window.innerHeight * windowPortion
const checkBoxes = () => {
	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top
		if (boxTop < triggerBottom) {
			box.classList.add('show')
		} else {
			box.classList.remove('show')
		}
	})
}

checkBoxes()
window.addEventListener('scroll', checkBoxes)
