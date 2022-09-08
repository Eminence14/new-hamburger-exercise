const hamburger = document.querySelector('.hamburger')
const body = document.querySelector('body')
const navbar = document.querySelector('.navbar')
const imgHam = document.querySelector('#bars')
const close = document.querySelector('#close')

const all = [hamburger, body, navbar, imgHam, close]

hamburger.addEventListener('click', active)

function active() {
    for (let key of all) 
        key.classList.toggle('active')
}
