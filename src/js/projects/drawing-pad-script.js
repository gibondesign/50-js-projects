const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let size = 10
let color = 'black'
let x
let y
let isPressed = false

canvas.width = 500
canvas.height = 500

canvas.addEventListener('mousedown', e => {
	isPressed = true
	x = e.offsetX
	y = e.offsetY
})

canvas.addEventListener('mouseup', e => {
	isPressed = false
	x = undefined
	y = undefined
})
canvas.addEventListener('mousemove', e => {
	if (isPressed) {
		const x2 = e.offsetX
		const y2 = e.offsetY
		drawCircle(x2, y2)
		DrawLine(x, y, x2, y2)

		x = x2
		y = y2
	}
})

const updateSizeOnScreen = () => {
	sizeEl.innerText = size
}

const drawCircle = (x, y) => {
	ctx.beginPath()
	ctx.arc(x, y, size, 0, Math.PI * 2, true)
	ctx.fillStyle = color
	ctx.fill()
}

const DrawLine = (x1, y1, x2, y2) => {
	ctx.beginPath()
	ctx.moveTo(x1, y1)
	ctx.lineTo(x2, y2)
	ctx.strokeStyle = color
	ctx.lineWidth = size * 2
	ctx.stroke()
}

colorEl.addEventListener('input', e => (color = e.target.value))

increaseBtn.addEventListener('click', () => {
	size += 2
	if (size > 40) {
		size = 40
	}
	updateSizeOnScreen()
})
decreaseBtn.addEventListener('click', () => {
	size -= 2
	if (size < 2) {
		size = 2
	}
	updateSizeOnScreen()
})

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))
