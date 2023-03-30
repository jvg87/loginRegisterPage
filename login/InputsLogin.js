export class InputsLogin{
    constructor(email, labelEmail, password, labelPassword, icon, form){
        this.email = document.querySelector(email)
        this.labelEmail = document.querySelector(labelEmail)
        this.password = document.querySelector(password)
        this.labelPassword = document.querySelector(labelPassword)
        this.icon = document.querySelector(icon)
        this.form = document.querySelector(form)
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

    getSessionStorage(){
        this.users = {
            name: '',
            email: '',
            password: ''
        }
        this.userList = JSON.parse(sessionStorage.getItem('userList'))
    }

    userResgistred(){
        this.getSessionStorage()
        this.valided()

        // if (!Array.isArray(this.userList) || this.userList <= 0){
        //     this.error(this.email, 'Usuário ou senha não encontrados!')
        //     this.error(this.password, 'Usuário ou senha não encontrados!')
        //     console.log(this.userList)
            
        // } else {
        //     this.valided()
        // }
    }

    valided(){
        this.userList.map(el => {
            if (this.email.value === el.emailList && this.password.value === el.passwordList){
                this.users = {
                    name: el.usernameList,
                    email: el.emailList,
                    password: el.passwordList
                }
            }
        })

        if (this.email.value !== this.users.email && this.password.value === this.users.password){
            this.error(this.email, 'Usuário não cadastrado!')
            this.success(this.password)
        } else if (this.email.value === this.users.email && this.password.value !== this.users.password) {
            this.success(this.email)
            this.error(this.password, 'Senha incorreta!')
        } else {
            this.success(this.email)
            this.success(this.password)
            console.log('conectado')
        }
    }

    login(){
        this.form.addEventListener('submit', ev => {
            ev.preventDefault()
            this.userResgistred()

            
        })
    }
}