
//This page lets search a pokemon name and shows all the front images of it

let pokemonName = document.getElementById("textInput")
let button = document.getElementById("inputButton")
button.onclick = searchPokemon;

function searchPokemon() {
    let parent = document.body

    function removeImages() {
        document.querySelectorAll(".pokeimage").forEach(function(a){
            a.remove()
        })
    }

    function newImage(url) {
        let newImage = document.createElement("img")
        newImage.className = "pokeimage"
        newImage.src = url
        parent.appendChild(newImage)
    }

    function notFound() {
    }

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName.value + "/")
    .then(response => {            
        response.json()
            .then(data => {
                removeImages()
                Object.entries(data.sprites).forEach(entry => {
                    if (entry[0].startsWith("front_")) {
                        newImage(entry[1])
                    }                        
                });
            })
            .catch(error => {
                notFound()
            })
    })
}