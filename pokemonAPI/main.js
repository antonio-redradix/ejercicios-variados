/*
We make requests to PokeApi to look for photos of the introduced pokemon
*/
let boton = document.getElementById("submit")
boton.onclick = clickCallback
function clickCallback(event){
    fetch("https://pokeapi.co/api/v2/pokemon/"+document.getElementById("buscar").value+"/")
        .then(response => {
            response.json()
                .then(data => {
                    let objeto = Object.entries(data.sprites)
                    for (element of objeto)
                        if (element[0].startsWith("front_")){
                            let image = document.createElement("img")
                            image.setAttribute("src", element[1])
                            document.body.appendChild(image)
                        }
                })
        })
}