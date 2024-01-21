const rippleBtns = document.querySelectorAll('.ripple')

const rippleEffect = e => {
	let x = e.clientX
	let y = e.clientY
	let btnTop = e.target.offsetTop
	let btnLeft = e.target.offsetLeft
	let effectX = x - btnLeft
	let effectY = y - btnTop
	let circle = document.createElement('div')
	circle.style.top = effectY + 'px'
	circle.style.left = effectX + 'px'
	circle.classList.add('circle')
	e.target.appendChild(circle)
	setTimeout(() => {
		circle.remove()
	}, 500);
}

rippleBtns.forEach(btn => {
	btn.addEventListener('click', rippleEffect)
})
