const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const close = document.querySelector('.menu__close')


hamburger.addEventListener('click', () => {
    menu.classList.add('active')
    hamburger.classList.add('hamburger__hidden')
});

close.addEventListener('click', () => {
    menu.classList.remove('active')
    hamburger.classList.remove('hamburger__hidden')
});
