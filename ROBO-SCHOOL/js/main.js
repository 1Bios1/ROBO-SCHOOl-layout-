import '../sass/style.scss'

const dropdownBtn = document.getElementById('dropdown-btn')
const dropdownMenu = document.getElementById('dropdown-menu')

const schoolBtn = document.getElementById('school-btn')
const schoolSec = document.getElementById('about-school')

const couchers = document.getElementById('couchers-btn')
const price = document.getElementById('price-btn')

const infoBtn = document.getElementById('info-btn')
const information = document.getElementById('information')

infoBtn.addEventListener('click', function(elm) {
    information.classList.toggle('visible')
})


dropdownBtn.addEventListener('click', function(elm) {
    this.classList.toggle('clicked')
    dropdownMenu.classList.toggle('opened')
})

schoolBtn.addEventListener('click', function(elm) {
    dropdownMenu.classList.remove('opened')
    dropdownBtn.classList.toggle("clicked")
    schoolSec.scrollIntoView({
        block: 'start',
        behavior: "smooth",
    })
})

couchers.addEventListener('click', function(elm) {
    dropdownMenu.classList.remove('opened')
    dropdownBtn.classList.toggle("clicked")
})

price.addEventListener('click', function(elm) {
    dropdownMenu.classList.remove('opened')
    dropdownBtn.classList.toggle("clicked")
})

const btnNext = document.getElementById('btnNext')
const btnPrev = document.getElementById('brnPrv')

const swiper = document.getElementById('swiper')

btnNext.addEventListener('click', function(elm) {
    swiper.scrollBy({
        top: 0,
        left: '250',
        behavior: 'smooth',
    })
})

btnPrv.addEventListener('click', function(elm) {
    swiper.scrollBy({
        top: 0,
        left: '-250',
        behavior: 'smooth',
    })
})