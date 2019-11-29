class Option{
    constructor(text,func){
        this.text=text
        this.func=func
    }
    render(padre){
        if(!padre){ padre= document.body}
        this.node=document.createElement("li")
        this.node.innerHTML=this.text
        this.node.onclick=this.func
        padre.appendChild(this.node)
        
    }
    remove(){
        this.node.remove()
    }
    select(){
            this.node.style.backgroundColor="red"
    }
    unselect(){
        this.node.style.backgroundColor="#FFFF"
    }
}

class Menu{
    constructor(){
        this.options=[]
        this.index=0
    }
    build(){
        this.ul=document.createElement("ul")
        document.body.appendChild(this.ul)

        document.addEventListener("keydown",(event) => {
            if (event.keyCode == 40) { 
                console.log("index",this.index)
                this.index=this.index+1
                if(this.index>=this.options.length){
                    this.index=0
                }
                for(let option of this.options){
                    option.unselect()
                }
                this.options[this.index].select()
            }
            if(event.keyCode==38){
                this.index=this.index-1
                if(this.index<0){
                    this.index=2
                }
                for(let option of this.options){
                    option.unselect()
                }
                this.options[this.index].select()
            }
            if(event.keyCode==13){
                this.options[this.index].func()
            }

            
        })
    }
    
    
    addOption(text,func){
        let option=new Option(text,func)
        option.render(this.ul)
        this.options.push(option)

    }
    removeOption(index){
        this.options[index].remove()
        console.log(this.array)
        this.options.splice(index,1)
    }
}
function changeColor(){
    alert("me has llamado1")
}
function changeColor1(){
    alert("me has llamado2")
}
function changeColor2(){
    alert("me has llamado3")
}
let menu = new Menu()
menu.build()
menu.addOption("Option1", changeColor)
menu.addOption("Option2", changeColor1)
menu.addOption("Option3", changeColor2)