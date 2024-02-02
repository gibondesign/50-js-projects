const loveMe = document.getElementById("loveMe");
const times = document.getElementById("times");

let clickTime = 0;
let timesClicked = 0;

const dblClick = (e) => {
	if (clickTime === 0) {
		clickTime = new Date().getTime();
	} else if (new Date().getTime() - clickTime < 800) {
		const { x, y } = getClickPosition(e);
		createHeart(x, y);
		countClicks();
	} else {
		clickTime = 0;
	}
};

const getClickPosition = (e) => {
	let x = e.offsetX;
	let y = e.offsetY;
	return { x, y };
};

const createHeart = (x, y) => {
	const heart = document.createElement("i");
	heart.classList.add("fas");
	heart.classList.add("fa-heart");
	heart.style.top = `${y}px`;
	heart.style.left = `${x}px`;
	loveMe.appendChild(heart);
	setTimeout(() => heart.remove(), 600);
};

const countClicks = () => {
	times.innerText = ++timesClicked;
};

loveMe.addEventListener("click", dblClick);
