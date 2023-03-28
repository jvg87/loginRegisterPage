import { MobileNavbar } from "./navBar/MobileNavbar.js";
import { PopupLogin } from "./popupLogin/PopupLogin.js";

const mobileNavbar = new MobileNavbar('.mobileMenu', '.navList', '.navList a')
mobileNavbar.init()

const popupLogin = new PopupLogin('.btnLogin', '.iconClose', '.container')
popupLogin.clickLogin()


const registerLink = document.querySelector('.registerLink')
const loginLink = document.querySelector('.loginLink')
const container = document.querySelector('.container')


registerLink.addEventListener('click', () => {
    container.classList.add('active')
})

loginLink.addEventListener('click', () => {
    container.classList.remove('active')
})
