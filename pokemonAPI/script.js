/**
 * This code allows to find different Pokemon from a searchbar
 * placed on the page by HTML. Clicking on the button with the correct
 * name of any Pokemon, the code will get information from the API and
 * it will appear on the screen with all his sprites 
 * looking at front. 
 * 
 * This requires using npm lite-server
 */

let button = document.querySelector("#button");
let input = document.querySelector("#input");
let url = 'https://pokeapi.co/api/v2/pokemon/';

button.onclick = getPokemon;

function getPokemon() {
    let newUrl = url + input.value;
    console.log(newUrl);
    fetch(newUrl).then(response => {
        response
            .json()
            .then(data => {
                console.log(data);
                let keys = Object.keys(data.sprites);
                for(let i=0; i<keys.length; i++){
                    let keyName = keys[i];
                    let urlImage = data.sprites[keyName];
                    if(keyName.indexOf("front") !== -1 && urlImage != null){
                        createImg(urlImage);
                    }
                }   
                
            })
            .catch((err) => {console.log(err)});
    })
}

function createImg(image){
    let img = document.createElement("img");
    img.src = image;
    document.body.appendChild(img);
}