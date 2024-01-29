const sliderContainer = document.querySelector('.slider-container')
const leftColumn = document.querySelector('.left-column')
const rightColumn = document.querySelector('.right-column')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const slidesLenght = rightColumn.querySelectorAll('div').length

let activeSlideIndex = 0
leftColumn.style.top = `-${(slidesLenght - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = direction => {
	const sliderHeight = sliderContainer.clientHeight

	if (direction == 'up') {
		activeSlideIndex++

		if (activeSlideIndex > slidesLenght - 1) {
			activeSlideIndex = 0
		}


		} else if (direction == 'down') {
			activeSlideIndex--
			if (activeSlideIndex < 0) {
				activeSlideIndex =  slidesLenght -1
			}
		}
	

	rightColumn.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px) `
	leftColumn.style.transform = `translateY(${activeSlideIndex * sliderHeight}px) `
}
