
  function press(){
    let name = document.querySelector('#pokemonName').value
    console.log(name)
      fetch("https://pokeapi.co/api/v2/pokemon/" + name).then(response => {
      console.log(response.status),
      response.json()
          .then(data => {
              let arr = Object.values(data.sprites)
              let arr2 = arr.slice(4, arr.lenght);
              for( var i = arr2.length; i--;){
                  if ( arr2[i] === 'foo') arr2.splice(i, 1);
                  }
              for (let elements of arr2) { 
                  let img = document.createElement("img");
                  img.src = elements;
                  let src = document.getElementById("box");
                  src.appendChild(img);
                }           
          })
  })
}
