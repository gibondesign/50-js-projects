const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const textInput = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
let text = "I love pancakes";
let idx = 1;
let speed = 360 / speedEl.value;

const textWrite = () => {
	textEl.innerText = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		idx = 1;
	}

	setTimeout(() => {
		textWrite();
	}, speed);
};

const setSpeed = () => {
	speed = 400 / speedEl.value;
};

const userText = () => {
	if (textInput.value !== "") {
		text = textInput.value;
	}
};

const enterClick = (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		userText();
		textInput.value = "";
	}
};

speedEl.addEventListener("input", setSpeed);
submitBtn.addEventListener("click", userText);
textInput.addEventListener("keydown", enterClick);

textWrite();
