const API_KEY = '&api_key=c951e344d1907d0e8f2c143e8ad647af'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const API_URL = 'https://api.themoviedb.org/3/'
let discoverUrl = API_URL + 'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' + API_KEY
let searchUrl = API_URL + 'search/movie?' + API_KEY + '&query="'
const form = document.getElementById('form')
const searchInputText = document.getElementById('search')
const main = document.getElementById('main')
const home = document.getElementById('home-icon')
let searchedMovie



getMovies(discoverUrl)

async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()
console.log(data.results);
	showMovies(data.results)
}

function showMovies(movies) {
	main.innerHTML = ''
	movies.forEach(movie => {
		const {title, poster_path, vote_average, overview} = movie

		const movieEl = document.createElement('div')
		movieEl.classList.add('movie')
		movieEl.innerHTML = `<img src="${IMG_PATH + poster_path}"
		alt="${title}">
	<div class="movie-info">
		<h3>${title}</h3>
		<span class="${getClassByRate(vote_average)}">${vote_average}</span>
	</div>
	<div class="overview">
		<h3>Overview</h3>
		<p>${overview}</p>
	</div>`

	main.appendChild(movieEl)
	});
}

function getClassByRate(vote) {
if (vote >= 8) {
	return 'green'
} else if(vote >= 5){
	return 'orange'
} else {
	return 'red'
}
}

form.addEventListener('submit', e => {
	e.preventDefault()

	searchedMovie = searchUrl + search.value + '"'

	if (search.value && search.value !== '') {
		getMovies(searchedMovie)
		search.value = ''
	} else {
		window.location.reload()
	}
})

home.addEventListener('click',() => getMovies(discoverUrl) )