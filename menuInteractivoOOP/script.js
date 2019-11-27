/**
 * This is a menu created entirely on JavaScript
 * The options on the menu can be selected by the arrow keys
 * By pressing the enter key, it prints the value on the browser output
 * This can also be made by clicking con the option with the mouse cursor
 */
class Option{
    constructor(text, func){
        this.text = text;
        this.func = func;
        this.node;
    }
    render(parent){
        this.node = document.createElement("li");
        this.node.innerHTML = this.text;
        this.node.style.paddingLeft = "20px";
        this.node.style.borderRadius = "30px 15px";
        this.node.style.fontSize = "25px";
        this.node.onclick = this.func;
        parent.appendChild(this.node);
    }
    pressed(){
        this.func();
    }
    changeBackground(color){
        this.node.style.backgroundColor = color;
    }
    changeColor(color){
        this.node.style.color = color;
    }
    remove(){
        //this.node.parentNode.removeChild(this.node); //forma antigua
        this.node.remove();
    }
}

class Menu{
    constructor(parent){
        this.options = [];
        this.selected = 0;
        this.node = document.createElement("ul");
        parent.appendChild(this.node)
    }
    addOption(text, func){
        let option = new Option(text, func);
        option.render(this.node);
        this.options.push(option);
    }
    getLength(){
        return this.options.length-1;
    }
    getSelected(){
        return this.selected;
    }
    pressedEnter(){
        this.options[this.selected].pressed();
    }
    removeOption(index){
        (index > this.options.length) ? console.log("Index no válido") : this.options[index-1].remove(); this.options.splice(index, 1);
    }
    setSelected(num){
        this.selected = num;
    }
    updateRender(){
        for(let option of this.options){option.changeBackground("inherit"); option.changeColor("white")}
        this.options[this.selected].changeBackground("rgba(255, 255, 255, 0.8)");
        this.options[this.selected].changeColor("rgb(138, 114, 0)");
    }
}

function pressedKey(event){
    let index = menu.getSelected();
    switch(event.keyCode){
        case 40: index >= menu.getLength() ? menu.setSelected(0) : menu.setSelected(index+1);
            break;
        case 38: index <= 0 ? menu.setSelected(menu.getLength()) : menu.setSelected(index-1);
            break;
        case 13: menu.pressedEnter();
            break;
    }
    menu.updateRender();
}

document.onkeydown = pressedKey;


let placeholder = document.querySelector('#placeholder');
placeholder.style.backgroundColor = "orange";
placeholder.style.padding = "20px";
placeholder.style.lineHeight = "60px";
placeholder.style.borderRadius = "60px";
placeholder.style.width = "30%";
placeholder.style.marginLeft = "auto";
placeholder.style.marginRight = "auto";
placeholder.style.marginTop = "10%";
placeholder.style.border = "solid 15px #8a7200";


let menu = new Menu(placeholder);
menu.addOption("Iniciar partida", () => {console.log("Iniciando partida")});
menu.addOption("Borrar partida", () => {console.log("Borrando partida")});
menu.addOption("Salir", () => {console.log("Saliendo")});
menu.updateRender();