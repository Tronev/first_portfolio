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


const skillsProgressPct = document.querySelectorAll('.skills__progress-pct'),
      skillsProgressPercent = document.querySelectorAll('.skills__progress-percent')

skillsProgressPct.forEach( (item, i) => {
    skillsProgressPercent[i].style.width = item.innerHTML
})