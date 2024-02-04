const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("result");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

const getRandomLower = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
const getRandomSymbol = () => {
	const symbols = "!@#$%&()^";
	return symbols[Math.floor(Math.random() * symbols.length)];
};

const getSettings = () => {
	const length = parseInt(lengthEl.value);
	const hasUpper = uppercaseEl.checked
	const hasLower = lowercaseEl.checked
	const hasNumbers = numbersEl.checked
	const hasSymbols = symbolsEl.checked
};

generateBtn.addEventListener("click", getSettings);
