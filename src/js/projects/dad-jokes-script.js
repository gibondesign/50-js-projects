const jokeEl = document.getElementById('joke')
const jokeBtn = document.querySelector('.joke-btn')
const jokeIcon = document.querySelector('.btn-icon')
const apiConfig = {
	headers: {
		Accept: 'application/json',
	},
}

//  .then method

// const generateJoke = () => {
// 	fetch('https://icanhazdadjoke.com', apiConfig)
// 		.then(res => res.json())
// 		.then(data => {
// 			jokeEl.textContent = data.joke
// 		})
// 		.catch(error => {
// 			console.error('Błąd podczas pobierania żartu:', error)
// 		})
// }

// async/await method

async function generateJoke() {
	const res = await fetch('https://icanhazdadjoke.com', apiConfig)
	const data = await res.json()
jokeEl.textContent = data.joke
}

const startAnimate = () => {
	jokeIcon.classList.add('active')
	generateJoke()
}

const stopAnimate = () => {
	jokeIcon.classList.remove('active')
}

jokeBtn.addEventListener('click', startAnimate)
jokeIcon.addEventListener('animationend', stopAnimate)
