// You must create a server (lite-server for example)
// Response contains only front pictures from the pokemon you introduces by input

function getPokemon(){
    var input = document.getElementById("pokemon").value;
    document.getElementById('pictures').remove();
    let promise = fetch("https://pokeapi.co/api/v2/pokemon/"+ input);
    promise.then(response => {
        if (response.status == 200){
            response.json()
                .then(data => {
                    console.log(data)
                    let divPictures = document.createElement('div');
                    divPictures.setAttribute("id","pictures")
                    document.getElementById('container').appendChild(divPictures);
                    for(let [key,value] of Object.entries(data.sprites)){
                        if (key.includes("front") && value != null){
                            let img = document.createElement('img');
                            img.src = value;
                            document.getElementById('pictures').appendChild(img); 
                        };
                    };
                });
        };
    });
};