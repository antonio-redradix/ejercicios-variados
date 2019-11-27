
function alertp() {
    alert("¡Hola!")
}

class Option {
    constructor(text, func) {
        this.text = text
        this.func = func
    }

    render(padre) {
        if (padre === undefined) padre = document.body
        this.li = document.createElement("li")
        this.li.innerHTML = this.text
        this.li.onclick = this.func
        padre.appendChild(this.li)
    }

    remove() {
        this.li.remove()
    }

    selected() {
        this.li.style.backgroundColor = 'purple'
    }

    unselected() {
        this.li.style.backgroundColor = 'white'
    }

    getfunc(){
        return this.func
    }
}

class Menu {
    constructor() {
        this.sel = 0
        this.myArray = [new Option("Opcion 1", alertp), new Option("Opcion 2", alertp), new Option("Opcion 3", alertp)]
        this.ul = document.createElement("ul")
        document.body.appendChild(this.ul)
        for (let i = 0; i < this.myArray.length; i++) {
            this.myArray[i].render(this.ul)
        }
        this.myArray[this.sel].selected()
        document.addEventListener('keydown', (event) => {
            if (event.key == 'ArrowUp') {
                this.myArray[this.sel].unselected()
                if (this.sel - 1 < 0) {
                    this.sel = this.myArray.length - 1
                    this.myArray[this.sel].selected()
                } else {
                    this.sel--
                    this.myArray[this.sel].selected()
                }
            } else if (event.key == 'ArrowDown') {
                this.myArray[this.sel].unselected()
                if (this.sel + 1 === this.myArray.length) {
                    this.sel = 0
                    this.myArray[this.sel].selected()
                } else {
                    this.sel++
                    this.myArray[this.sel].selected()
                }

            }   else if(event.key=='Enter'){
                    let a=this.myArray[this.sel].getfunc()
                    a()
            }

        })
    }

    addOption(text, func) {

        let newop = new Option(text, func)
        newop.render(this.ul)
        this.myArray.push(newop)

    }

    removeOption(index) {
        this.myArray[index].remove()
        this.myArray.splice(index, 1)
    }

}


let m = new Menu()
//m.removeOption(0)
m.addOption("Esta antes no estaba", alert2)

function alert2(){
    alert("Pulsada opcion de codigo")
}