/**
 * IMPORTANT! 
 * It is required to run this page in a localhost. Lite-server package (npm i lite-server) is
 * a fast and light option.
 * 
 * This function make a request to the API for the first 5 StarWars characters. The asynchrony is handled
 * by the use of Promise. This problem could have been solved by the use of PromiseAll, however it was unknown 
 * at that time of the course.
 * 
 * Along the waiting for the response of the API a GIF is loaded in the html.
 */
const button = document.querySelector('button'),
    div = document.querySelector('div');


function calculateAverage(gang){
    let aux = 0;
    gang.forEach(x => aux+= x[1]);
    div.innerHTML = `La media de altura de ${gang.map(x => x[0]) } es ${aux/5}`;
}

button.addEventListener('click', function(){
    div.innerHTML = '';
    let waitPic = document.createElement('img')
    waitPic.setAttribute('src', 'https://i.gifer.com/lsk.gif');
    div.appendChild(waitPic);
    let gang = [];
    new Promise ((resolve, reject) =>{
        for ( let i = 1; i < 6; i++){
            fetch(`https://swapi.co/api/people/${i}/`)
            .then(response => {
                if (response.status === 200) response.json().then(data =>{
                    let character = [data.name, Number(data.height)];
                    gang.push(character);
                    if ( gang.length === 5) resolve();
                });
            });
        };
    }).then(result => calculateAverage(gang));
})
