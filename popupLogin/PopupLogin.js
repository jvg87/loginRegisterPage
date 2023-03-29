export class PopupLogin{
    constructor(btnLogin, iconClose, container, registerLink, loginLink){
        this.btnLogin = document.querySelector(btnLogin)
        this.iconClose = document.querySelector(iconClose)
        this.container = document.querySelector(container)
        this.registerLink = document.querySelector(registerLink)
        this.loginLink = document.querySelector(loginLink)
        this.openClass = 'open'
        this.closeClass = 'close'
        this.activeClass = 'active'
        this.openLogin = this.openLogin.bind(this)
        this.closeLogin = this.closeLogin.bind(this)
        this.addActive = this.addActive.bind(this)
        this.removeActive = this.removeActive.bind(this)
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

    switchLogin(){
        this.registerLink.addEventListener('click', this.addActive )
        this.loginLink.addEventListener('click', this.removeActive )
    }

    addActive(){
        this.container.classList.add(this.activeClass)
    }

    removeActive(){
        this.container.classList.remove(this.activeClass)
    }

}

