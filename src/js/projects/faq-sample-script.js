const toggleBtns = document.querySelectorAll('.faq-toggle')




toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
       
    })
    
});

// const toggles = document.querySelectorAll('.faq-toggle')

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active')
//     })
// })