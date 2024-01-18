const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, clickedIdx) => {
	cup.addEventListener('click', () => highlightCups(clickedIdx))
})

function highlightCups(clickedIdx) {
	if (smallCups[clickedIdx].classList.contains('full') && smallCups.length == clickedIdx + 1) {
		clickedIdx--
	} else if (
		smallCups[clickedIdx].classList.contains('full') &&
		!smallCups[clickedIdx + 1].classList.contains('full')
	) {
		clickedIdx--
	}

	smallCups.forEach((cup, idx) => {
		if (idx <= clickedIdx) {
			cup.classList.add('full')
		} else {
			cup.classList.remove('full')
		}
	})
	updateBigCup()
}

function updateBigCup() {
	const fullCups = document.querySelectorAll('.full').length
	const totalCups = smallCups.length
	const percentageFill = `${(fullCups / totalCups) * 100}%`

	if (fullCups == 0) {
		percentage.style.visibility = 'hidden'
	} else {
		percentage.style.visibility = 'visible'
		percentage.style.height = percentageFill
		percentage.innerText = percentageFill
	}

	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden'
		remained.style.height = '0'
		
	} else {
		remained.style.visibility = 'visible'
		remained.style.height = 'auto'
		liters.innerText = `${(totalCups - fullCups) * 0.25}L`
	}
}
