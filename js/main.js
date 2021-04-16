const nav = document.getElementById('nav')
const menuBtn = document.getElementById('menuBtn')

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('close-nav')
    nav.classList.toggle('open-nav')
})