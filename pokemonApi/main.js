//Print front- sprites of specficied pokemn in the text box. Needs a server 
export function main() {
   
    fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
        .then(response => {
            console.log(response.status)
            if (response.status == 200)
                response.json()
                .then(data => {
                    console.log(data)
                })
        })

    let but = document.querySelector('#boton')
    but.onclick = onclick
 
   
}


function onclick() {
    let string = caja.value
    console.log(string)
    let dir = "https://pokeapi.co/api/v2/pokemon/" + string
    console.log(dir)
    fetch(dir)
        .then(response => {
            console.log(response.status)
            if (response.status == 200)
                response.json()
                .then(data => {
                    let sprites = data.sprites
                    let img = document.createElement("img")
                    img.src = sprites.front_default
                    document.body.appendChild(img)
                    if (sprites.front_female != null) {
                        img = document.createElement("img")
                        img.src = sprites.front_female
                        document.body.appendChild(img)
                        img = document.createElement("img")
                        img.src = sprites.front_shiny_female
                        document.body.appendChild(img)
                    }

                    img = document.createElement("img")
                    img.src = sprites.front_shiny
                    document.body.appendChild(img)

                })
        })
        
}


        

