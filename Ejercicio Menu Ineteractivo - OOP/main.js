//Ejercicio 1 00P
class Shape{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    getArea(){
    }
}

class Rect extends Shape{
    constructor(width, height){
        super(width, height)
    }

    getArea(){
        let area = this.width*this.height
        return area
    }
    
}

class Triangle extends Shape{
    constructor(width, height){
        super(width, height)
    }
    getArea(){
        let area = (this.width*this.height)/2
        return area
    }

}

let rect = new Rect (10,20)
let rect2 = new Rect (100, 200)
let area = rect.getArea()
console.log( area)
console.log(rect2.getArea())
let trian = new Triangle(10, 20)
let areaT = trian.getArea()
console.log(areaT)

//Ejercicio 2 OOP

class Node{
    constructor(type){
        this.type = type
    }
    render(){       
    }
}

class Paragraph extends Node{

    constructor(text){
        super("p")
        this.text=text
    }

    render(){ 
        let createdNode = document.createElement(this.type)
        createdNode.innerHTML = this.text 
        document.body.appendChild(createdNode)    
        this.createdNode = createdNode    
     }
     remove(){
         this.createdNode.remove() 
     }
     
     applyStyle(key, value){
         this.createdNode.style[key] = value
    }
}

class Image extends Node{

    constructor(url){
        super("img")
        this.url=url
    }

    render(){ 
        let createdImg = document.createElement(this.type)
        this.createdImg = createdImg
        this.createdImg.src = this.url
        document.body.appendChild(this.createdImg)      
     }
     remove(){
         this.createdImg.remove() 
     }

}

let parag = new Paragraph ("Irene")
parag.render()
parag.applyStyle("color", "green")
let image1 = new Image ("https://ep01.epimg.net/deportes/imagenes/2019/09/20/actualidad/1568965673_928011_1568979234_noticia_normal.jpg")
image1.render()

//Ejercicio 3
class Option{
    constructor(text, func){
        this.text = text
        this.func = func
    }

    render(parent){
        if (parent === undefined)  parent = document.body
        let createdText = document.createElement("li")
        createdText.innerHTML = this.text
        document.body.appendChild(createdText)    
        this.createdText = createdText

        createdText.onclick = this.func
    }

    remove(){
        this.createdText.remove()
    }

    select(){
        this.createdText.style.backgroundColor = "#C3C3C3"
    }

    unselect(){
        this.createdText.style.backgroundColor = "#FFFFFF"
    }
}

let func = function(){
        console.log("Has pulsado la primera opcion")      
}
let func2 = function(){
    console.log("Has pulsado la segunda opcion")
}
let func3 = function(){
    console.log("Has pulsado la tercera opcion")
}

let option1 = new Option ("Iniciar", func)
option1.render()
let option2 = new Option ("Continuar", func2)
option2.render()
let option3 = new Option ("Salir", func3)
option3.render()

option1.select()
option1.unselect()

class Menu{
    constructor(){
        this.options = []
        this.index = 0
    }   
    
    build(){
        let ul = document.createElement("ul")
        document.body.appendChild(ul)  
        this.ul = ul

        document.addEventListener("keydown", (event)  => {
            if (event.keyCode == 40) {
                console.log("index: ", this.index)

                this.index = this.index+1
                if (this.index >= this.options.length) {
                    this.index = 0
                }
                for (let option of this.options){
                    option.unselect()
                    }
                this.options[this.index].select()            
            }
            if (event.keyCode == 38) {
                console.log("index: ", this.index)

                this.index = this.index-1
                if (this.index < 0) {
                    this.index = 2
                }
                for (let option of this.options){
                    option.unselect()
                    }
                this.options[this.index].select()
                }
            if (event.keyCode == 13) {
               this.options[this.index].func()
            }
            
        })
    }

    addOption(text, func){
        let option = new Option(text, func)
        option.render(this.ul)
        this.options.push(option)
        console.log("options:", this.options)
    }
    removeOption(index){
        this.options[index].remove()
        this.options.splice(index, 1)
    }

}

function x1(){
    console.log("Funcion ejecutada 1")}
function x2(){
    console.log("Funcion ejecutada 2")}
function x3(){
    console.log("Funcion ejecutada 3")}

let menu = new Menu()
menu.build()
menu.addOption("opcion 1", x1)
menu.addOption("option 2", x2)
menu.addOption("option 3", x3)




