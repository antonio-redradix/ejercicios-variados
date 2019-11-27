/**
 * This js create an interactive menu. With the arrow keys (up and down) we can move vertically across 
 * the options. If we reach the limit of the menu (first or last item) the selected item will be oposite one.
 * If we press enter key, a console.log message will appear showing the content of the option. 
 */
class Option {
    constructor(text, func){
        this.text = text;
        this.func = func;
    }

    render(parent){
        this.option = document.createElement('li');
        this.option.innerHTML = this.text;
        this.option.addEventListener('click', this.func);
        parent.appendChild(this.option);
    }

    applyStyle(key, value){
        this.option.style[key] = value;
    }

    remove(){
        this.option.remove()
    }
};

class Menu {
    constructor(){
        this.options = [];
        this.menu = document.createElement('ul');
        this.selected = 0;
    }

    build(){
        this.options[0].applyStyle('background-color','red');
        document.body.appendChild(this.menu);
    }

    addOption(newText, func){
        this.newOption = new Option ( newText, func );
        this.options.push(this.newOption);
        this.newOption.render(this.menu);
        this.build();
    };

    removeOption(index){
        this.options[index].remove();
        this.options.splice(index,1);
    }
}

window.addEventListener('keydown', function(event) {

    if (event.keyCode === 38){
        test.options.forEach(x => x.applyStyle('background-color', 'white'));
        test.selected === 0 ? test.selected = (test.options.length-1) : test.selected--;
    } else if (event.keyCode === 40){
        test.options.forEach(x => x.applyStyle('background-color', 'white'));
        test.selected === test.options.length-1 ? test.selected = 0 : test.selected++;
    }

    test.options[test.selected].applyStyle('background-color', 'red');

    if (event.keyCode === 13) test.options[test.selected].func();
})

let test = new Menu();

test.addOption('prueba 1', ()=> console.log('prueba 1'));
test.addOption('prueba 2', ()=> console.log('prueba 2'));
test.addOption('prueba 3', ()=> console.log('prueba 3'));
test.build();