const button = document.getElementById("toast-btn");
const toasts = document.getElementById("toasts");

const messages = [
	"Hello Folks!",
	"You just clicked that button!",
	"Don't do that again",
	"One more click",
	"Do You like it?",
];

button.addEventListener("click", () => createNotification());

const createNotification = () => {
	const notif = document.createElement("div");
	notif.classList.add("toast");
	notif.innerText = getRandomMessage();
	toasts.appendChild(notif);
	setTimeout(() => {
		notif.remove()
	}, 2000);
};

const getRandomMessage = () => {
	// return messages[Math.floor(Math.random() * messages.lenght)]
	return messages[Math.floor(Math.random() * messages.length)];
};
