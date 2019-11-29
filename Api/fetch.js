/*
Exercise that connect a pokemon api to download the image of a front image pokemon
*/
let query = document.querySelector("input")
let search = document.querySelector("button")
search.onclick = function(){
    query.value
    fetch("https://pokeapi.co/api/v2/pokemon/"+query.value+"/")
    .then(response => {
        if (response.status === 200){
            console.log(response.status)
            response.json()
            .then (data => {
                console.log(data)

                function getPhotos() {
                    let pics = Object.values(data.sprites)
                    for (let pic of pics){
                        console.log(pic)
                        if (pic != null) {
                            if(!pic.match ("back")) {
                            let img = document.createElement("img")
                            img.setAttribute("src", pic)
                            document.body.appendChild(img)
                            }
                        }

                    }
                }
                getPhotos()
            })
        }

    })

}



