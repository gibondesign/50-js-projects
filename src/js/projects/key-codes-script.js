const key = document.getElementById('key')
const keyCode = document.getElementById('keycode')
const keyEvent = document.getElementById('eventcode')

const keyCheck = e => {
	key.textContent = e.key
	keyCode.textContent = e.keyCode
	keyEvent.textContent = e.code
	if (e.key === ' ') {
		key.textContent = 'space'
	}
}

window.addEventListener('keydown', keyCheck)
