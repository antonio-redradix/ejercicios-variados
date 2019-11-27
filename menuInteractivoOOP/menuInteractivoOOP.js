class Option {
    constructor (text, func) {
        this.text = text
        this.func = func
        this.node = document.createElement("li")
    }

    render (parent) {
        this.parent = parent
        this.node.innerHTML = this.text
        this.node.onclick = this.func
        this.parent.appendChild(this.node)
    }

    remove () {
        this.node.remove()
    }

    activateOption() {
        this.func()
    }

    highlightOption () {
        this.node.style["background-color"] = "white"
        this.node.style["color"] = "black"
    }

    removeHighlight () {
        this.node.style["background-color"] = ""
        this.node.style["color"] = "white"
    }
}

class Menu {
    constructor (optionsArr) {
        if (optionsArr !== undefined) {
            this.options = optionsArr
        }
        else {
            this.options = []
        }
        this.node = document.createElement("ul")
        this.selectedOption = 0
    }

    build () {
        document.body.appendChild(this.node)
        if (this.options.length > 0) {
            this.options[0].highlightOption()
            this.options.forEach(option => {
                option.render(this.node)
            })
        }
    }

    addOption (text, func) {
        let newOption = new Option(text, func)
        this.options.push(newOption)
        newOption.render(this.node)
    }

    removeOption (index) {
        this.options.splice(index, 1)
    }

    selectNextOption () {  
        this.options[this.selectedOption].removeHighlight()
        if(this.selectedOption == this.options.length-1) {
            this.selectedOption = 0
        }
        else {
            this.selectedOption += 1
        }
        this.options[this.selectedOption].highlightOption()
    }

    selectPreviousOption () {
        this.options[this.selectedOption].removeHighlight()
        if (this.selectedOption == 0) {
            this.selectedOption = this.options.length-1
        }
        else {
            this.selectedOption -= 1
        }
        this.options[this.selectedOption].highlightOption()
    }

    activateCurrentOption() {
        this.options[this.selectedOption].activateOption()
    }
}

//--------------------------Tests
let myFunc = function myFunction() {console.log("Click")}
let option1 = new Option("Option 1", myFunc)
let option2 = new Option("Option 2", myFunc)
let myMenu = new Menu([option1, option2])
let myFunc2 = function myFunction() {console.log("Click Nuevo")}
myMenu.addOption("Option 3", myFunc2)
myMenu.addOption("Option 4", myFunc2)
addOptions(20)
myMenu.build()

function addOptions(number) {
    for (let i = 0; i<number; i++) {
        myMenu.addOption("Option "+i, myFunc2)
    }
}
//--------------------------Tests end

document.onkeydown = checkKey


function checkKey (e) {
    if (e.keyCode == '40') {
        myMenu.selectNextOption()
    }
    else if (e.keyCode == '38') {
        myMenu.selectPreviousOption()
    }
    else if (e.keyCode == '13') {
        myMenu.activateCurrentOption()
    }
}