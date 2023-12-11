const searchContainer = document.querySelector('.search-icon--container')
const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-input')

const toogleActive = () => {
	searchContainer.classList.toggle('active')
	searchInput.focus()
}

searchBtn.addEventListener('click', toogleActive);
console.log('yo yo');
