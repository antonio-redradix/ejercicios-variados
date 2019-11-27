/*
	This exercise needs a server instace for a properly functionality
*/

document.getElementById("buscaPokemon").addEventListener("click", buscaPokemon)
document.getElementById("buscaPersonas").addEventListener("click", buscaPersonas)


function buscaPokemon(obj){
	let pokemon = document.getElementById("nombrePoke").value
	let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon + "/"
	let contImagenes = document.getElementById("imagenes1")
	var parentDiv = contImagenes.parentNode

	fetch(url)
		.then(response => {
				response.json().then(data => {
					let imagenes = data.sprites
					for(i in imagenes){
						let img = document.createElement("img")
						img.src = imagenes[i]
						parentDiv.insertBefore(img, contImagenes);
					}
				})
		}).catch(error => {
			console.log(error)
		})
}

async function buscaPersonas2(obj){
	let arr = []
	let sum = 0;

	for(let i = 1; i<5; i++){
		let url = "https://swapi.co/api/people/" + i + "/"
		await fetch(url).then(response => {
			response.json().then(data => {
				arr.push(parseInt(data.height))
			})
		})
	}
	
	for(let i=0; i< arr.length; ++i){
		console.log(arr[i])

		sum += arr[i]
	}
}

let throwOneCoin = new Promise((response, reject) =>{

	for(let i = 1; i<6; i++){
		let url = "https://swapi.co/api/people/" + i + "/"
		fetch(url)
			.then(response => {
					response.json().then(data => {
						//console.log(data.height)
						average += data.height
					})
			}).catch(error => {
				console.log(error)
			})
	}

})

func.call(obj)
func.apply(obj, [10])
let func2 = func.bind(obj)
func2()
