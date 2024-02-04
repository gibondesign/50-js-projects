const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateBtn = document.getElementById('generateBtn')
const clipboardEl = document.getElementById('clipboard')

const getRandomLower = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getRandomUpper = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getRandomNumber = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
const getRandomSymbol = () => {
	const symbols = '!@#$%&()^'
	return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
}

const getSettings = () => {
	const length = parseInt(lengthEl.value)
	const hasUpper = uppercaseEl.checked
	const hasLower = lowercaseEl.checked
	const hasNumbers = numbersEl.checked
	const hasSymbols = symbolsEl.checked

	resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length)
}

function generatePassword(upper, lower, number, symbol, length) {
	let generatedPassword = ''
	const typesCount = upper + lower + number + symbol
	const typeArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0])

	if (typesCount == 0) {
		generatorError()
		return '';
	}

	for (let i = 0; i < length; i += typesCount) {
		typeArr.forEach(type => {
			const funcName = Object.keys(type)[0]
			generatedPassword += randomFunc[funcName]()
		})
	}
	const finalPassword = generatedPassword.slice(0, length)
	return finalPassword
}

const generatorError = () => {
	console.log('musisz zaznaczyc chociaz 1 opcje')
}

const copyPassword = () => {
	let password = resultEl.innerText
	if (!password) {
console.log('najpierw wygeneruj haslo');	} else {
		navigator.clipboard.writeText(password)
		console.log('haslo skopiowane');
		password =''
	}
}

clipboardEl.addEventListener('click', copyPassword)

generateBtn.addEventListener('click', getSettings)
