/**
 * IMPORTANT! 
 * It is required to run this page in a localhost. Lite-server package (npm i lite-server) is
 * a fast and light option.
 * 
 * This app downloads and shows the pictures of the given Pokemon. It will only show the pictures
 * which shows the face and discards the back pictures.
 */

const button = document.getElementById('pokemon');
const pokemonCenter = document.getElementById('pokemonCenter');

function printData(data){
    let album = data.sprites;
    pokemonCenter.innerHTML = '';
    for ( let [key, value] of Object.entries(album)){
        if(key.includes('front') && value !== null){
            let img = document.createElement('img');
            img.setAttribute('src', value);
            pokemonCenter.appendChild(img);
        }
    }
}

button.addEventListener('click', function(){
    let nombre = document.getElementById('nombre')
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.value}/`)
        .then(response => {
            if (response.status === 200) {
                nombre.style.cssText="border: none";
                response.json().then(data => printData(data));
            }else{
                pokemonCenter.innerHTML = 'El nombre introducido no coincide con ningun pokemon';
                pokemonCenter.style.cssText = 'font-size: 20px; color: red';
            }
        }).catch(()=> nombre.style.cssText="border: 1px solid red");
})