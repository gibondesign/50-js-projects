const loadText = document.querySelector('.loading-text')
const loadNumber = document.querySelector('.loading-number')
const loadBg = document.querySelector('.bg-img')

let load = 0
let int = setInterval(blurring, 30)
let blurAmount = 20;
let filterBlur = blurAmount/100;


function blurring() {
    load++
	if (load > 99) {
        clearInterval(int)
	}
	loadNumber.innerText = `${load}`
	loadText.style.opacity = 1 - load/(100);
    blurAmount -= filterBlur ;
    loadBg.style.filter= 'blur('+blurAmount+'px)';
}
