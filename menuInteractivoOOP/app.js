class Option{
	constructor(text, func){
		this.element
		this.text = text
		this.func = func
	}
	render(padre){
		this.element = document.createElement('li')
		this.element.innerHTML = this.text
		padre.appendChild(this.element)
		this.element.addEventListener("click", this.func)
	}
	select(){
		this.element.style.backgroundColor = "red";
	}
	unSelect(){
		this.element.style.backgroundColor = "transparent";
	}
	remove(){
		this.element.remove()
	}
	executeFunc(){
		this.func()
	}
}

class Menu{
	constructor(padre){
		this.elements = []
		this.elementoPadre = padre
		this.element
		this.elementResalted = 0
	}
	render(idMenu){
		this.element = document.createElement('ul')
		this.element.innerHTML = "MENU"
		this.element.id = idMenu
		this.elementoPadre.appendChild(this.element)
		document.addEventListener('keydown', function(event) {
			if(event.key === "ArrowUp"){
				miMenu.next()
			} else if(event.key === "ArrowDown"){
				miMenu.prev()
			} else if(event.key === "Enter"){
				miMenu.enter()
			}
		});
	}
	addOption(text, func){
		let op = new Option(text, func)
		this.elements.push(op)
		op.render(this.element)
	}
	remove(index){
		this.elements[index-1].remove()
		this.elements.splice(index-1, index-1)
	}
	initialSelected(){
		this.elements[0].select()
	}
	next(){
		if(this.elementResalted < this.elements.length - 1){
			this.elementResalted += 1
			this.elements[this.elementResalted].select()
			this.elements[this.elementResalted-1].unSelect()
		}
		else {
			this.elements[this.elementResalted].unSelect()
			this.elementResalted = 0
			this.elements[this.elementResalted].select()
		}
	}
	prev(){
		if(this.elementResalted > 0){
			this.elementResalted -= 1
			this.elements[this.elementResalted].select()
			this.elements[this.elementResalted+1].unSelect()
		}
		else {
			this.elements[this.elementResalted].unSelect()
			this.elementResalted = this.elements.length -1
			this.elements[this.elementResalted].select()
		}
	}
	enter(){
		this.elements[this.elementResalted].executeFunc()
	}
	getUl(){
		return this.element.id
	}
}

let p1 = document.getElementById('prueba')
let miMenu = new Menu(p1)
miMenu.render("menu1")
miMenu.addOption("opcion1", func =>{ console.log("A")})
miMenu.addOption("opcion2", func =>{ console.log("B")})
miMenu.addOption("opcion3", func =>{ console.log("C")})
miMenu.addOption("opcion4", func =>{ console.log("D")})
miMenu.initialSelected()

