// From DOM to JS
let btnStart = document.querySelector('#btn-start');
let inputPokemon = document.querySelector('#poke-input');
let display = document.querySelector('#display-photos');
let mainPhoto = document.querySelector('.game__photo');
let gameGallery = document.querySelector('.game__gallery');

let getPokemonName = () => {

    let pokemonName = inputPokemon.value.toLowerCase();
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    let getArrImg = (obj) => {
        let arrImages = [];
        for (let i in obj) {
            if (i.includes('front') && obj[i]) {
                arrImages.push(obj[i]);
            }
        }
        return arrImages;
    };

    let renderImg = (arr) => {
        arr.forEach((elem) => {
            let elemImage = document.createElement('img');
            elemImage.src = elem;
            gameGallery.appendChild(elemImage);
            console.log(elemImage);
        });
    }

    
    fetch(pokemonUrl)
    .then(response => {
        if(response.status == 404) {
            console.log('El pokemon no existe');
        } else {
            response.json()
            .then(data => {
                console.log(data.sprites);
                renderImg(getArrImg(data.sprites));
            })
        } 
    })
}

btnStart.addEventListener('click', getPokemonName);
