const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
	empty.addEventListener('dragover', dragOver)
	empty.addEventListener('dragenter', dragEnter)
	empty.addEventListener('dragleave', dragLeave)
	empty.addEventListener('drop', dragDrop)
}

function dragStart() {
	this.className += ' hold'
	setTimeout(() => {
		this.className = 'invisible'
	}, 1)
}
function dragEnd() {
	this.className = 'fill'
}
function dragOver(e) {
	e.preventDefault()
}
function dragEnter(e) {
	this.className += ' hovered'
	e.preventDefault()
}
function dragLeave() {
	this.className = 'empty'
	console.log('drag leave')
}
function dragDrop() {
	this.className = 'empty'
	this.append(fill)
}
