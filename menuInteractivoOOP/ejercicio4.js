/*
We create an Option class and a Menu class where we develop the logic of an interactive menu using the keyboard arrows. The selected button will change its color to yellow.
*/
class Option{
    constructor(texto,myFunc){
        this.texto = texto
        this.myFunc = myFunc
    }
    render(parent){
        if(!parent) parent = document.body
        this.li = document.createElement("li")
        this.li.innerHTML = this.texto
        this.li.onclick = this.myFunc
        parent.appendChild(this.li)
    }
    remove(){
        this.li.remove()
    }
    select(){
        this.li.style.backgroundColor = "yellow"
    }
    unselect(){
        this.li.style.backgroundColor = "gray"
    }
}
class Menu{
    constructor(nombre){
        this.ul = document.createElement("ul")
        this.ul.innerText = nombre
        document.body.appendChild(this.ul)
        this.elements = []
    }
    addOption(text,func){
        let li = new Option(text,func)
        li.render(this.ul)
        this.elements.push(li)
    }
    removeOption(index){
        this.elements[index].remove()
        this.elements.splice(index,index)
    }
    gestion(){
        let i=0
        let selected = this.elements[i]
        selected.select()
        document.body.onkeydown = (event) => {
            selected.unselect()
            if (event.keyCode == 40){
                if (i == this.elements.length-1)
                    i = 0
                else
                    i = i+1
                selected = this.elements[i]
                selected.select()
            }
            else if (event.keyCode == 38){
                if (i==0)
                    i = this.elements.length-1
                else
                    i = i-1
                selected = this.elements[i]
                selected.select()
            }
        }
    }
}

let f = function myFunc(){
    let pressed = document.createElement("div")
    pressed.innerHTML = "¡¡Has pulsado!!"
    document.body.appendChild(pressed)
}

let menu = new Menu("MENU")
menu.addOption("Boton 1", f)
menu.addOption("Boton 2", f)
menu.addOption("Boton 3", f)
menu.addOption("Boton 4", f)
menu.addOption("Boton 5", f)
menu.addOption("Boton 6", f)
menu.gestion()