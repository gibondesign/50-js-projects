const progressBar = document.querySelector('.progress-bar')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
let currentStep = 1
const delay = 400

function increasSteps() {
	if (currentStep < circles.length) {
		currentStep++
	}
	update()
}
function reduceSteps() {
	if (currentStep > 1) {
		currentStep--
	}
	update()
}

const toggleActiveClass = () => {
	circles.forEach((circle, idx) => {
		if (idx < currentStep) {
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})
}

function update() {
	toggleActiveClass()
	const actives = document.querySelectorAll('.active')

	progressBar.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

	if (currentStep === 1) {
		prev.disabled = true
	} else if (currentStep === circles.length) {
		next.disabled = true
	} else {
		prev.disabled = false
		next.disabled = false
	}
}

next.addEventListener('click', increasSteps)
prev.addEventListener('click', reduceSteps)
