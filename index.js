import { InputsLogin } from "./login/InputsLogin.js";
import { MobileNavbar } from "./navBar/MobileNavbar.js";
import { PopupLogin } from "./popupLogin/PopupLogin.js";
import { InputsRegister } from "./register/InputsRegister.js";

const mobileNavbar = new MobileNavbar(
    '.mobileMenu',
    '.navList',
    '.navList a'
)
const popupLogin = new PopupLogin(
    '.btnLogin',
    '.iconClose', 
    '.container', 
    '.registerLink', 
    '.loginLink'
    )
const inputsLogin = new InputsLogin(
    '#passwordLogin',
    '#labelPasswordLogin', 
    '#fa-eye-login'
    )
const inputsRegister = new InputsRegister(
    '#usernameRegister', 
    '#labelUsernameRegister', 
    '#emailRegister', 
    '#labelEmailRegister', 
    '#passwordRegister', 
    '#labelPasswordRegister', 
    '#fa-eye-register', 
    '#passwordConfirm', 
    '#labelPasswordConfirm', 
    '#fa-eye-confirm')



mobileNavbar.init()
popupLogin.clickLogin()
popupLogin.switchLogin()
inputsLogin.view()
inputsRegister.viewPass()