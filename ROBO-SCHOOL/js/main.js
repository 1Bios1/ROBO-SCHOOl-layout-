import '../sass/style.scss'

const dropdownBtn = document.getElementById('dropdown-btn')
const dropdownMenu = document.getElementById('dropdown-menu')

const schoolBtn = document.getElementById('school-btn')

const couchers = document.getElementById('couchers-btn')
const price = document.getElementById('price-btn')

dropdownBtn.addEventListener('click', function(elm) {
    this.classList.toggle('clicked')
    dropdownMenu.classList.toggle('opened')
})

schoolBtn.addEventListener('click', function(elm) {
    dropdownMenu.classList.remove('opened')
    dropdownBtn.classList.toggle("clicked")
})

couchers.addEventListener('click', function(elm) {
    dropdownMenu.classList.remove('opened')
    dropdownBtn.classList.toggle("clicked")
})

price.addEventListener('click', function(elm) {
    dropdownMenu.classList.remove('opened')
    dropdownBtn.classList.toggle("clicked")
})
