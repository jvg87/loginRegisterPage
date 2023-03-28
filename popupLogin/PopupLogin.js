export class PopupLogin{
    constructor(btnLogin, iconClose, container){
        this.btnLogin = document.querySelector(btnLogin)
        this.iconClose = document.querySelector(iconClose)
        this.container = document.querySelector(container)
        this.openClass = 'open'
        this.closeClass = 'close'
        this.openLogin = this.openLogin.bind(this)
        this.closeLogin = this.closeLogin.bind(this)
    }

    clickLogin(){
        this.btnLogin.addEventListener('click', this.openLogin)
        this.iconClose.addEventListener('click', this.closeLogin)
    }

    openLogin(){
        this.container.classList.add(this.openClass)
        this.container.classList.remove(this.closeClass)
    }

    closeLogin(){
        this.container.classList.add(this.closeClass)
        this.container.classList.remove(this.openClass)
    }

}