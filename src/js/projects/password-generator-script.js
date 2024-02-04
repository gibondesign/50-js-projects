const bodyElement = document.body;
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dayEl = document.querySelector('.day')
const monthEl = document.querySelector('.month')
const circleEl = document.querySelector('.circle')
const toggleEl = document.querySelector('.theme-toggle')
let i = 0



 // set default dark mode, based on the browser's preferences
 if (
	window.matchMedia('(prefers-color-scheme)').media !== 'not all' &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
	bodyElement.classList.add('dark');
	if (bodyElement.classList.contains('dark')) {
	  toggleEl.innerText = 'Light mode';
	} else {
	  toggleEl.innerText = 'Dark mode';
	}
  }

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursdat', 'Friday', 'Saturday', 'Sunday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

setTime()

const modeSwitch = () => {
	const body = document.querySelector('body')
	if (body.classList.contains('dark')) {
		body.classList.remove('dark')
		toggleEl.innerText = 'Dark mode'
	} else {
		body.classList.add('dark')
		toggleEl.innerText = 'Light mode'
	}
}

function setTime() {
	const time = new Date()
	const month = time.getMonth()
	const day = time.getDay()
	const dayNumber = time.getDate()
	const hours = time.getHours()
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()
	

	if (seconds == 0) {
		i = i + 360
	}


	hourEl.style.transform = `translate(-50%, -100%) rotate(${hours * 30}deg)`
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`
	secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6 + i}deg)`
	timeEl.innerText = `${hours}:${minutes <10 ?`0${minutes}` : minutes}`
	dayEl.innerText = `${days[day]},`
	monthEl.innerText = `${months[month]}`
	circleEl.innerText = dayNumber
}

setInterval(setTime, 1000)

toggleEl.addEventListener('click', modeSwitch)
