
//--------------- OOP EXERCISES -----------------------//
//-- Giving width and height it calculates the area of a rectangle and a triangle.--//
class Shape {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
}
class Rect extends Shape {
    constructor(width, height) {
        super(width, height) 
    }
    getarea () {
       let area = (this.width * this.height)
       return area
    }
}
let rect1 = new Rect(10,30)
let ar = rect1.getarea() 
console.log(ar)

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height) 
    }
    getarea () {
       let area = (this.width * this.height / 2)
       return area
    }
}
let tring1 = new Triangle(10,30)
let tr = console.log( tring1.getarea() )


//--- Introduce text and url to get that text and img on the HTML ---------//

class Node {
    constructor(image, parragraph) {
        this.imagen = document.createElement('img')
        this.parragraph = document.createElement("p"); 
    }
}
class Parraf extends Node {
    constructor(image, parragraph) {
        super(image, parragraph) 
    }
    gettext (textoIntroducido) {
        let parrafo = this.parragraph
        let texto = document.createTextNode(textoIntroducido);
        parrafo.appendChild(texto);
        document.body.appendChild(parrafo);
        return texto
    }
    getimg (imagenIntroducida) {
        let imagen = this.imagen
        let img = document.createTextNode(imagenIntroducida);
        imagen.setAttribute("src", imagenIntroducida);
        document.body.appendChild(imagen);
        return img
    }
}

let text1 = new Parraf()
text1.gettext('Introduce el texto que desees.')

let img1 = new Parraf()
img1.getimg("https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo-770x395.png")



//--- Menu interactive. Press up and down arroy key to move along the menu ---------//

class Option {
    constructor(text, func){
        this.text = text
        this.func = func
    }
    render(parent){
        if(parent === undefined) parent = document.body
        this.li = document.createElement('li')
        this.li.innerHTML = this.text
        this.li.onclick = this.func
        parent.append(this.li)
    }
    applyStyle(key, value){
        this.li.style[key] = value
    }
    remove(){
        this.li.remove()
    }
}

class Menu {
    constructor(){
        this.options = []
        this.ul = document.createElement('ul')
        this.selected = 0
    }
    build(){
        this.options[0].applyStyle('background-color','green')
        document.body.appendChild(this.ul)
    }
    addOption(newText, func){
        this.newOption = new Option ( newText, func )
        this.options.push(this.newOption)
        this.newOption.render(this.ul)
        this.build()
    }
    removeOption(index){
        this.options[index].remove()
        this.options.splice(index, 1)
    }
}
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 38){
        menu.options.forEach(x => x.applyStyle('background-color', 'white'));
        menu.selected === 0 ? menu.selected = (menu.options.length-1) : menu.selected--;
    } else if (event.keyCode === 40){
        menu.options.forEach(x => x.applyStyle('background-color', 'white'));
        menu.selected === menu.options.length-1 ? menu.selected = 0 : menu.selected++;
    }
    menu.options[menu.selected].applyStyle('background-color', 'green');
    if (event.keyCode === 13) menu.options[menu.selected].func();
})

let menu = new Menu();
menu.addOption('1. Sistemas', ()=> console.log('hola1'));
menu.addOption('2. Atributos', ()=> console.log('hola 2'));
menu.addOption('3. Aplicaciones', ()=> console.log('hola 3'));
menu.build();





