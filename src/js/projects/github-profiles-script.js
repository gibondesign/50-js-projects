const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username);
		createUserCard(data);
        getRepos(username)
	} catch (err) {
		if (err.response.status == 404) {
			createErrorCard('No profile with this username');
            		}
	}
}

async function getRepos(username) {
    try {
		const { data } = await axios(APIURL + username + '/repos?sort=created');
		addReposToCard(data);
	} catch (err) {
		if (err.response.status == 404) {
			createErrorCard('Problem fetching repos');
            		}
	}
}

function createUserCard(user) {
	const cardHtml = `<div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name} profile photo" class="avatar">
    </div>
    <div class="user-info">

        <h2>${user.name === null ? user.login : user.name}</h2>
        <p>${user.bio || 'No user bio'}</p>
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos">     
        </div>
    </div>
</div>`;

	main.innerHTML = cardHtml;
}


function createErrorCard(msg) {
    const cardHtml =`
    <div class="card">
    <p>${msg}</p></div>`
    main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos.slice(0, 8).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    });
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const user = search.value.trim();

	if (user) {
		getUser(user);
		search.value = "";
	}
});
