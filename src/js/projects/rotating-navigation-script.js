const ul = document.querySelector('ul');
const liElements = ul.querySelectorAll('li');

liElements.forEach((li, index) => {
  li.style.marginLeft = `${index * 15}px`;
});