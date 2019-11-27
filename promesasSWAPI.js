//Gets the first four names of swapi.Need to calcualte heights
export function main() {
   let names=[]
   let stature=[]
for(let i=1;i<5;i++){
    let string="https://swapi.co/api/people/"+i
    fetch(string)
    .then(response => {
        console.log(response.status)
        if (response.status == 200)
            response.json()
            .then(data => {
                names.push(data.name)
               
            })
    })

}
console.log(names)


    
}


        

