export class InputsRegister{
    constructor(username, labelUsername, email, labelEmail, password, labelPassword, iconPassword, validPass, labelValidPass, iconValid){
        this.username = document.querySelector(username)
        this.labelUsername = document.querySelector(labelUsername)
        this.email = document.querySelector(email)
        this.labelEmail = document.querySelector(labelEmail)
        this.password = document.querySelector(password)
        this.labelPassword = document.querySelector(labelPassword)
        this.iconPassword = document.querySelector(iconPassword)
        this.validPass = document.querySelector(validPass)
        this.labelValidPass = document.querySelector(labelValidPass)
        this.iconValid = document.querySelector(iconValid)
    }

    viewPass(){
        this.iconPassword.addEventListener('click', () => {
            if (this.password.type === 'password'){
                this.password.setAttribute('type', 'text')
                this.iconPassword.className = 'fa-solid fa-eye-slash'
            } else {
                this.password.setAttribute('type', 'password')
                this.iconPassword.className = 'fa-solid fa-eye'
            }
        })

        this.iconValid.addEventListener('click', () => {
            if (this.validPass.type === 'password'){
                this.validPass.setAttribute('type', 'text')
                this.iconValid.className = 'fa-solid fa-eye-slash'
            } else {
                this.validPass.setAttribute('type', 'password')
                this.iconValid.className = 'fa-solid fa-eye'
            }
        })
    }

    

}