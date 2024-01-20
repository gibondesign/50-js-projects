const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left-arrow')
const righttBtn = document.getElementById('right-arrow')
let activeSlide = 0

setBodyBg()

righttBtn.addEventListener('click', () => {
	 activeSlide++

	 if (activeSlide > slides.length -1) {
		activeSlide = 0
	 } 
	 setActiveSlide()
	 setBodyBg()
} )

leftBtn.addEventListener('click', () => {
	activeSlide--

	if (activeSlide < 0) {
	   activeSlide = slides.length -1
	} 
	setActiveSlide()
	setBodyBg()
} )

function setBodyBg() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage

}

function setActiveSlide() {
	slides.forEach(slide => 
		slide.classList.remove('active')
	);
	slides[activeSlide].classList.add('active')
	}