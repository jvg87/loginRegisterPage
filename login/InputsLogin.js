import { PopupLogin } from "../popupLogin/PopupLogin.js"

const popupLogin = new PopupLogin(
    '.btnLogin',
    '.iconClose', 
    '.container', 
    '.registerLink', 
    '.loginLink'
)
export class InputsLogin{
    constructor(email, labelEmail, password, labelPassword, icon, form, formItems){
        this.email = document.querySelector(email)
        this.labelEmail = document.querySelector(labelEmail)
        this.password = document.querySelector(password)
        this.labelPassword = document.querySelector(labelPassword)
        this.icon = document.querySelector(icon)
        this.form = document.querySelector(form)
        this.formItems = document.querySelectorAll(formItems)
        this.userList = []
        this.users = {name, email, password}
    }

    view(){
        this.icon.addEventListener('click', () => {
            if (this.password.type === 'password'){
                this.password.setAttribute('type', 'text')
                this.icon.className = 'fa-solid fa-eye-slash'
            } else {
                this.password.setAttribute('type', 'password')
                this.icon.className = 'fa-solid fa-eye'
            }
        })
    }

    error(input, message){
        input.parentElement.classList.add('error')
        input.parentElement.querySelector('span').innerText = message
    }

    success(input){
        input.parentElement.classList.remove('error')
        input.parentElement.classList.add('success')
    }

    clean(){
        this.form.reset()
        const items = [...this.formItems]
        items.map((item) => {
            item.classList.remove('success')
        })
    }

    getSessionStorage(){
        this.users = {
            name: '',
            email: '',
            password: ''
        }
        this.userList = JSON.parse(sessionStorage.getItem('userList'))

        if (!Array.isArray(this.userList) && this.userList<= 0){
            this.error(this.email, 'Usuário ou senha não cadastrados!')
            this.error(this.password, 'Usuário ou senha não cadastrados!')
        } else {
            this.userList.map(el => {
                if (this.email.value === el.emailList && this.password.value === el.passwordList){
                    this.users = {
                        name: el.usernameList,
                        email: el.emailList,
                        password: el.passwordList
                    }
                }
            })
        }
    }

    valided(){
        this.getSessionStorage()

        if (this.email.value === this.users.email && this.password.value === this.users.password){
            alert('Conectado!')
            this.success(this.email)
            this.success(this.password)
            setTimeout(() => {
                this.clean()
                popupLogin.closeLogin()
            }, 1000)
        } else if (this.email.value) {
            this.error(this.email, 'Usuário ou senha não encontrados!')
            this.error(this.password, 'Usuário ou senha não encontrados!')
        }
    }

    login(){
        this.form.addEventListener('submit', ev => {
            ev.preventDefault()
            this.valided()
        })
    }
}