/* 
the app let the user to navegate throught the menu with the UP and DOWN keys

if you want to test the code, insert this command lines in the console, it will create a new object menu which will be an instance from the MENU class

################################

let menu = new Menu();

menu.addOption('susan');
menu.addOption('pulsa aquí', () => {console.log('Y pasa esto')});
menu.addOption('pepe');
menu.addOption('susan');
menu.addOption('pulsa aquí', () => {console.log('Y pasa esto')});
menu.addOption('pepe');
menu.build();

################################

*/

let counter = 0;

let elementSelected = (select) => {
    try {
        let arrayOfElem = [...document.querySelectorAll('li')];
        arrayOfElem[select].style.backgroundColor = 'red';
    } catch (e) {
        return console.log(e);
    };
};

class Option {
    constructor (text, foo) {
        this.text = text;
        this.foo = foo;
    };

    create () {
        this.listElem = document.createElement('li');
        this.listElem.innerText = this.text;
        this.listElem.addEventListener('click', this.foo);
        return this.listElem;
    };

    executeFunction() {
        this.foo();
    };

    remove() {
        this.listElem.remove();
    };
};

class Menu {
    constructor () {
        this.ulNode = document.createElement('ul');
        this.elements = [];
        this.arrayOfNodes = [];
        this.counter = 0;
    };

    build() {
        document.body.appendChild(this.ulNode);
        elementSelected(0);
    };

    addOption (text, func) {
        let list = new Option (text, func);
        let liNode = list.create();
        this.elements.push(liNode);
        this.arrayOfNodes.push(list);
        this.elements.forEach((elem) => this.ulNode.appendChild(elem));
        // this.ulNode.appendChild(liNode);
        elementSelected(0); 
    };

    removeOption (index) {
        this.ulNode.innerHTML = '';
        this.elements.splice(index,1);
        this.elements.forEach((elem) => this.ulNode.appendChild(elem));
        elementSelected(0);
    };

    static changeElementSelected () {
        let liNode = [...document.querySelectorAll('li')];
        if (counter >= liNode.length) {
            counter = 0;
        } else if (counter < 0) {
            counter = liNode.length-1;
        };
        liNode.forEach((item) => item.style.backgroundColor = 'transparent');
        liNode[counter].style.backgroundColor = 'red';     
    };

    launchFunctionality () {
        this.arrayOfNodes[counter].executeFunction();
    };
};


document.addEventListener('keydown', (e) => {
    if (e.keyCode == 38) {
        counter ++;
        Menu.changeElementSelected();
    } else if (e.keyCode == 40) {
        counter --;
        Menu.changeElementSelected();
    } else if (e.keyCode == 13) {
        menu.launchFunctionality();
    };
});

console.log('hola!');