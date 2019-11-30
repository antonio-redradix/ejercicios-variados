//EJERCICIO API II + EJERCICIO AP III

let busqueda = document.querySelector("input")
let buscar = document.querySelector("button")
buscar.onclick = function(){    
    busqueda.value
    fetch("https://pokeapi.co/api/v2/pokemon/"+busqueda.value+"/")
    .then (response => {
        if (response.status === 200){
            console.log(response.status)
            response.json()
            .then (data => {
                console.log(data)

                function getPhotos(){
                    let pics = Object.values(data.sprites)
                    for (let pic of pics){
                    console.log(pic)
                    if (pic !== null){
                        if(!pic.match("back")) {
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

//EJERCICIO API III Muy dificil

let urls = []
for(let i = 1; i<=5; i++){ urls.push('http://swapi.co/api/people/' + i)}

const getData = url => fetch(url).then(response => response.json())

const promises = urls.map(url => getData(url))

Promise.all(promises).then(results => {console.log(result.reduce((acc,data) => acc + parseFloat(data.height),0)/5)
})


//EJERCICIO CONTEXTO

let context = {num:10}
function func(){
    console.log(this.num)
}
func.call(context)
