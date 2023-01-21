const btnElem = document.querySelector('.mob-nav-btn')
const headerElem = document.querySelector('header')

btnElem.addEventListener('click', ()=>{
    headerElem.classList.toggle ('active')
})