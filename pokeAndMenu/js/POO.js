/*
	interactive menu with options
	arrow keys up and down allows to change selected option
*/

class Option {
    constructor(txt, func){
        this.txt = txt
        this.func = func
    }
    render(parentNode){
        this.li = document.createElement("li")
        this.li.innerText = this.txt
        this.li.onclick = this.func
        this.li.style.fontSize = "30px"
        parentNode.appendChild(this.li)
    }

    remove(){
        this.li.remove()
    }

    select(){
        this.li.style.backgroundColor = "blue"
    }
    unselect(){
        this.li.style.backgroundColor = ""
    }
}

class Menu {

    constructor(){
        this.options = []
        this.div = document.createElement("ul")  
        this.div.setAttribute("class","menu-test")
        document.querySelector("#POO-EJ").appendChild(this.div)
    }

    addOption(text, func){
        let op = new Option(text, func)
        op.render(this.div)
        this.options.push(op)
    }

    removeOption(index){
        this.options[index].remove()
        this.options.splice(index,1)
    }

    build(){
        this.options.forEach(element => {
            element.render()
        });
    }
}



let menu = new Menu()
for(let i = 0; i<=10;i++){
    menu.addOption(`Option ${i}`, function(){console.log(`soy la opcion ${i}`)}) 
}
let menu_select = -Infinity

document.body.addEventListener("keydown",(event)=>{
    
    console.log("Key down")
    if(event.keyCode === 40){
        console.log("Arrowown")
        if(menu_select < menu.options.length){
            if(menu_select < 0) menu_select=0
            else{
                if(menu_select == menu.options.length-1) menu_select=0
                else menu_select ++
            }
            // console.log(this.options[this.menu_select].style)
            console.log(menu.options[menu_select].li)
            menu.options[menu_select].select()
            if(menu_select === 0) menu.options[menu.options.length-1].unselect()
            else menu.options[menu_select-1].unselect()
        }
        
    }if(event.keyCode === 38){
        if(menu_select < menu.options.length){
            if(menu_select < 0) menu_select =  0
            else{
                if(menu_select === 0) menu_select =  menu.options.length-1
                else menu_select --
            }
            // console.log(this.options[this.menu_select].style)
            console.log(menu.options[menu_select].li)
            menu.options[menu_select].select()
            if(menu_select === menu.options.length-1) menu.options[0].unselect()
            else menu.options[menu_select+1].unselect()
        }
    }if(event.keyCode === 13){
        menu.options[menu_select].func()
    }

})