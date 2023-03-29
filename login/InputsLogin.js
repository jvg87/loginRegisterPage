export class InputsLogin{
    constructor(input, label, icon){
        this.input = document.querySelector(input)
        this.label = document.querySelector(label)
        this.icon = document.querySelector(icon)
    }

    view(){
        this.icon.addEventListener('click', () => {
            if (this.input.type === 'password'){
                this.input.setAttribute('type', 'text')
                this.icon.className = 'fa-solid fa-eye-slash'
            } else {
                this.input.setAttribute('type', 'password')
                this.icon.className = 'fa-solid fa-eye'
            }
        })
    }
}