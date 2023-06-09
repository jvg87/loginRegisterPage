export class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = 'active'
        this.handleClick = this.handleClick.bind(this)
    }

    animetedLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = '') : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`)
        })
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animetedLinks()
    }


    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick)
        this.navLinks.forEach(item => {
            item.addEventListener('click', this.handleClick)
        })
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this
    } 
}