class Toast extends HTMLElement
{
    constructor(){
        super();
    }

    /*
        O método estático "observerAttributes" retorna um array contendo os nomes dos atributos que devem ser observados pelo elemento modal.
        Isso significa que se o valor de um desses atributos for alterado, o método "attributeChangedCallback" será chamado.
    */
    static get observerAttributes(){
        return ["title","message","type"];
    }

    /*
        É um getter torna mais facil de obter atributo for
        ex: this.for
    */
    get title(){return this.getAttribute("title");}
    get message(){return this.getAttribute("message");}
    get type(){return this.getAttribute("type");}

    //Quando o valor do atributo "for" muda, o método "attributeChangedCallback" é chamado e o método "render" é chamado para atualizar o conteúdo do modal.
    attributeChangedCallback(prop,oldVal,newVal)
    {
        if(prop == "for"){this.render()}
    }

    //Quando o elemento é adicionado ao DOM, o método "connectedCallback" é chamado
    connectedCallback(){
        this.render();

    }

    //O método "render" substitui o conteúdo interno do elemento modal por uma div com a classe "modal-content" e o conteúdo original do elemento.
    render(){
        this.innerHTML = 
        `
        <div class="toast-1 toast-1-`+this.type+`">
            <div class="toast-1-left">
                <div class="border-left"></div>
                <div class="toast-1-icon">
                    <i class="logo"></i>
                </div>
    
                <div>
                    <h6>` + this.title + `</h6>
                    <p>` + this.message + `</p>
                </div>  
            </div>
            <div class="toast-1-right">
       
            </div>
        </div>
        `;
    }
}

customElements.define("ui-toast",Toast);

document.head.insertAdjacentHTML("afterbegin", `
<style>



<style/>
`);


function showToast(elementId){
    var toast = document.getElementById(elementId);

    if(toast.classList.contains("active")){return;}

    toast.style.display = "block";
    toast.style.position = "fixed";
    toast.style.right = "15px";
    toast.style.top = "30px";
    toast.style.transform = "translate(100%, 0)";
    toast.style.opacity = "1";
    toast.classList.add("active");
    
    
    setTimeout(function() {
        toast.style.transition = "transform 0.8s ease-out";
        toast.style.transform = "translate(0%,0)";
    }, 20);

    setTimeout(function() {
        toast.style.transition = "opacity 0.5s ease-out";
        toast.style.opacity = "0";
    }, 1500);
    // Faz com que o span desapareça após 800 milissegundos
    setTimeout(function() {
        toast.style.display = "none";
        toast.classList.remove("active");
    }, 2000);
    
}