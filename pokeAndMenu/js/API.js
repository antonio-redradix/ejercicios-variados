
/*
Seearch in pokeapi de pokemon name introduced in the input Pokemon_Name
add to the html the pokemon front images
*/
function searchPokemon(){
    console.log("searchPoke")
    document.querySelector("#PhotoZone").innerHTML = ""
    let name = document.querySelector("#Pokemon_Name").value
    fetch("https://pokeapi.co/api/v2/pokemon/"+name)
        .then(response => {
            if(response.status == "200"){
                response.json()
                    .then(response => {
                        Represent(response.sprites)
                    })
            }

            else console.log("Algo ha ido mal. Codigo: "+ response.status)
        }).catch(error => console.log(error))

}

function Represent(sprites){
    console.log(sprites)
    let photos = Object.values(sprites)
    console.log(photos)
    let img
    for(let i =4; i<photos.length; i++){
        if(photos[i]!==null){
            console.log(photos[i])
            img = document.createElement("img")
            img.setAttribute("src",photos[i])
            document.querySelector("#PhotoZone").appendChild(img)
        }
    }
}

function getPokemon(name){
    console.log("...loading "+name)
    fetch("https://pokeapi.co/api/v2/pokemon/"+name)
        .then(response => {
            if(response.status == "200"){
                //console.log(response)
                return response            
            }

            else console.log("Algo ha ido mal. Codigo: "+ response.status)
        }).catch(error => console.log(error))
}

getPokemon("mewtwo")