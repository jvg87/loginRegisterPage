import { MobileNavbar } from "./navBar/MobileNavbar.js";
import { PopupLogin } from "./popupLogin/PopupLogin.js";

const mobileNavbar = new MobileNavbar('.mobileMenu', '.navList', '.navList a')
mobileNavbar.init()

const popupLogin = new PopupLogin('.btnLogin', '.iconClose', '.container', '.registerLink', '.loginLink')
popupLogin.clickLogin()
popupLogin.switchLogin()