const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
	counter.innerText = '0'

	const updateCounter = () =>{
		const targetNumber = parseInt(counter.getAttribute('data-target'), 10)
		const countNumber = parseInt(counter.innerText, 10)
		const increment = targetNumber / 200

		if (countNumber < targetNumber) {
			counter.innerText = `${Math.ceil(countNumber + increment)}`
			setTimeout(updateCounter,1)
		} else {
			counter.innerText = targetNumber
			
		}


		
	}
updateCounter()
})