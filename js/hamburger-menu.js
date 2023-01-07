class HamburgerMenu extends HTMLElement {
    constructor() { super(); }
    static get observerAttributes(){ return ["for", "icon-animation","type-container"]; }
    get for(){return this.getAttribute("for");}
    get container(){return this.getAttribute("type-container");}
    get links(){return this.querySelector(".all-links");}
    //Quando o valor do atributo "for" muda, o método "attributeChangedCallback" é chamado e o método "render" é chamado para atualizar o conteúdo do modal.
    attributeChangedCallback(prop,oldVal,newVal)
    {

        if(prop == "for"){this.render()}
        if(prop == "icon-animation"){this.render()}
    }
    connectedCallback() {
        this.render();

        this.addEventListener("click",(event)=>{
            if(event.target.classList.contains("bar") || event.target.classList.contains("hamburger-icon")){
                this.classList.toggle("active");
            }
       });

    }

    render(){
        
        this.innerHTML = `
        <div class='hamburger-icon'>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <div class="hamburger-close">
            <div class='hamburger-icon active'>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
        <div class="all-links">` + this.innerHTML + "</div>";
  
    }
}



customElements.define('hamburger-menu', HamburgerMenu);

document.head.insertAdjacentHTML('afterbegin',`
<style>
hamburger-menu {
    padding: 10px;
    user-select: none;

    cursor:pointer;
  }

  hamburger-menu div.hamburger-close {
    display: none;
  }

  hamburger-menu.active div.hamburger-close .hamburger-icon {
    height: 31px;
  }


  hamburger-menu .all-links {
    display: none;
  }

  hamburger-menu .hamburger-icon {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  hamburger-menu .hamburger-icon .bar {
    width: 34px;
    height: 5px;
    border-radius: 2px;
    background-color: white;
    transition: all 300ms ease-in-out;
  }

  hamburger-menu.active {
    min-width: 54px;
    min-height: 51px;
  }

  hamburger-menu.active .hamburger-icon {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }





  /*--------------------------------------------------------------------------*/

  hamburger-menu[type-container="4"] .all-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: fixed;

    left: 0px;
    top: 0px;

    width: 100vw;
    height: 100vh;
    transform: translate(100vw);
    transition: all 0.5s;
    gap: 10px;
    padding-block: 20px;
    padding-inline: 20px;
    background-color: white;
    z-index: 1;
  }

  hamburger-menu.active[type-container="4"] .all-links {
    transform: translateX(0);
    z-index:99;
  }

  /*--------------------------------------------------------------------------*/

  hamburger-menu.active[icon-animation="1"]
    .hamburger-icon
    .bar:nth-child(1) {
    position: absolute;
    left: -2px;
    top: 13px;
    transform: rotate(-45deg);
  }

  hamburger-menu.active[icon-animation="1"]
    .hamburger-icon
    .bar:nth-child(2) {
    position: absolute;
    opacity: 0;
    transition: opacity 250ms;
  }
  hamburger-menu.active[icon-animation="1"]
    .hamburger-icon
    .bar:nth-child(3) {
    position: absolute;
    left: -2px;
    top: 12px;
    transform: rotate(45deg);
  }

  /*--------------------------------------------------------------------------*/

  hamburger-menu.active[icon-animation="2"]
    .hamburger-icon
    .bar:nth-child(1) {
    position: absolute;
    left: -1px;
    bottom: 7px;
    width: 20px;
    transform: rotate(45deg);
  }

  hamburger-menu.active[icon-animation="2"]
    .hamburger-icon
    .bar:nth-child(2) {
    position: absolute;
    left: 1px;
    top: 12px;
    width: 31px;
    transform: rotate(90deg);
  }
  hamburger-menu.active[icon-animation="2"]
    .hamburger-icon
    .bar:nth-child(3) {
    position: absolute;
    right: 0px;
    bottom: 7px;
    width: 20px;
    transform: rotate(-45deg);
  }

  hamburger-menu.active[type-container="4"] div.hamburger-close {
    display: block;
    position: fixed;
    right: 34px;
    top: 38px;
    z-index: 100;
    min-width: 54px;
    min-height: 51px;
    padding: 10px;
  }


</style>
`);
