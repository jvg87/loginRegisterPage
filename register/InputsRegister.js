export class InputsRegister{
    constructor(username, labelUsername, email, labelEmail, password, labelPassword, iconPassword, validPass, labelValidPass, iconValid, form, formItems){
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
        this.form = document.querySelector(form)
        this.formItems = document.querySelectorAll(formItems)
    }

    viewPass(input, icon){
        icon.addEventListener('click', () => {
            if (input.type === 'password'){
                input.setAttribute('type', 'text')
                icon.className = 'fa-solid fa-eye-slash'
            } else {
                input.setAttribute('type', 'password')
                icon.className = 'fa-solid fa-eye'
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

    usernameValidation(){
        if (this.username.value.length <= 3){
            this.error(this.username, 'Insira no mínimo 4 caracteres')
        } else{
            this.success(this.username)
        }
    }

    emaiValidation(){
        if (!this.email.value.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
            this.error(this.email, 'Email Inválido!')
        } else {
            this.success(this.email)
        }
    }

    passwordValidation(){
        if (this.password.value.length < 8){
            this.error(this.password, 'Senha deve ter no mínimo 8 caracteres!')
        } else {
            this.success(this.password)
        }
    }

    confirmationPasswordValidation(){
        if (this.validPass.value !== this.password.value){
            this.error(this.validPass, 'As senhas devem ser iguais!')
        } else {
            this.success(this.validPass)
        }
    }

    listSessionStorage(){
        let userList = JSON.parse(sessionStorage.getItem('userList') || '[]')
        userList.push(
            {
            usernameList: this.username.value,
            emailList: this.email.value,
            passwordList: this.password.value
            }
        )
        sessionStorage.setItem('userList', JSON.stringify(userList))
    }

    clean(){
        this.form.reset()
        const items = [...this.formItems]
        items.map((item) => {
            item.classList.remove('success')
        })
    }

    valided(){
        this.usernameValidation()
        this.emaiValidation()
        this.passwordValidation()
        this.confirmationPasswordValidation()

        const isValid = [...this.formItems].every((item) => {
            return item.className === 'input-box success'
        })

        if(isValid){
            alert('Cadastro efetuado com sucesso!')
            this.listSessionStorage()
            setTimeout(() => {
                this.clean()
            }, 1000)
        }
    }

    register(){
        this.form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.valided()
        })
    }
}