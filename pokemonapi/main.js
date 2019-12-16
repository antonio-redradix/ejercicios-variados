let busqueda = document.querySelector("input")
let buscar=document.querySelector("button")
let image=document.createElement("img")
let errorMsg=document.createElement("p")
buscar.onclick=function(){
    busqueda.value
    fetch(" https://pokeapi.co/api/v2/pokemon/"+busqueda.value+"/")
    .then(response => {
    if(response.status===200){
            console.log(response.status)
            response.json()
                .then(data => {
                console.log(data)
                function imprimir(){
                let foto = Object.values(data.sprites)
                    for( let fotos of foto){
                    if(fotos!=null){
                        if(!fotos.match("back")){
                    
                    image.setAttribute("src",fotos)
                    frame.append(image)}}
                        }
                    }
                
                imprimir()
            })
        }
        else{
            function errFound(){
                errorMsg.innerHTML="Ha habido un error. Comprueba que tu pokemon está bien escrito"
                document.body.append(errorMsg)
            }
            errFound()
        }
    })
}

                
                
            
            
    

