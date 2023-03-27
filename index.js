import { MobileNavbar } from "./navBar/MobileNavbar.js";

const mobileNavbar = new MobileNavbar('.mobileMenu', '.navList', '.navList a')
mobileNavbar.init()


const button = document.querySelector('.btnLogin')
const main = document.querySelector('main')

function toggleLogin(){
    button.addEventListener('click', () => {
        main.classList.add('open')
    })
}

toggleLogin()

const iconClose = document.querySelector('.iconClose')

function closeLogin(){
    iconClose.addEventListener('click', () => {
        main.classList.remove('open')
    })
}

closeLogin()