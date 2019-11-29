/* 
Exercise to create an interactive menu using classes and getting the option position with the keycode
*/
class Option {
    constructor(text, funct){
        this.text = text
        this.funct = funct
    }

    render() {
        let createText = document.createElement("li")
        createText.innerHTML = this.text
        document.body.appendChild(createText)
        this.createText = createText
        createText.onclick = this.funct
    }
    remove() {
        this.createText.remove()
    }
    select() {
        console.log(this.createText)
        this.createText.style.backgroundColor =  "#D2D2D2"
    }
    unselect() {
        this.createText.style.backgroundColor = "#FFFFFF"
    }

}

class Menu {
    constructor(){
        this.options = []
        this.index = 0
    }
    
    Build(){
        this.ul = document.createElement("ul")
        document.body.appendChild(this.ul)
        document.addEventListener("keydown", (event) =>{
            if(event.keyCode === 40){
                console.log("index: ", this.index)
                this.index = this.index + 1
                if (this.index >= this.options.length){  //usamos length para poder añadir mas options
                    this.index = 0
                }
                for (let option of this.options){
                    option.unselect()
                }
                this.options[this.index].select()
            }
            if(event.keyCode === 38){
                console.log("index: ", this.index)
                this.index = this.index - 1
                if (this.index < 0){
                    this.index = 2
                }
                for (let option of this.options){
                    option.unselect()
                }
                this.options[this.index].select()
            }
            if(event.keyCode === 13){
                this.options[this.index].func() 
            }
        })
    }


    addOption(text, funct){
        let option = new Option(text, funct)
        option.render(this.ul)
        this.options.push(option)
        console.log("options:", this.options)
    }
    removeOption(index){
        this.options[index].remove()
        this.options.splice(index, 1)
    }
}

function funct1() {console.log("option1")}
function funct2() {console.log("option1")}
function funct3() {console.log("option1")}

let menu = new Menu ()
menu.Build()
menu.addOption("Start", funct1)
menu.addOption("Continue", funct2)
menu.addOption("Stop", funct3)
