
export function MenuHover(){
    let options = document.querySelectorAll('.Side_Menu__Option')
    
    options = [...options]
    console.log(options)
    options.forEach(option => {
        option.onmouseover = mouseOverOption
        option.onmouseout = mouseLeftOption
    });
}

function mouseOverOption(event){
    console.log(this)
    this.style.backgroundColor="grey"
    this.style.borderLeftColor = "green"
    
}

function mouseLeftOption(event){
    console.log(this)
    this.style.backgroundColor="#0f0e0e"
    this.style.borderLeftColor = "#0f0e0e"
}