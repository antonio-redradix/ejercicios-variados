
/*
function fiveCharacter() makes 5 fetch to swapi and 
returns the name of the first five items in the database
 and displays by console the measure of their height

needs an active server to be able to fetch
*/
function fiveCharacter(){
    let characters = []
    for(i=1;i<6;i++){
        fetch("https://swapi.co/api/people/"+i)
        .then(response => {
            if(response.status == "200"){
                //console.log(response)
                response.json()
                    .then((response)=>{
                        characters.push(response)
                        if(characters.length === 5){
                            let names = []
                            let height = []
                            characters.forEach(element => {
                                names.push(element.name)
                                height.push(element.height)
                            });
                            let sum = height.reduce((acc,x)=> acc+ parseInt(x) , 0)
                            console.log( "Medium height: " + sum/heigh.length)
                            return names
                            
                        }
                    })           
            }

            else {
                console.log("Something went wrong. Code: "+ response.status)
                return 0
            }
        }).catch(error => console.log(error))
    }
}
