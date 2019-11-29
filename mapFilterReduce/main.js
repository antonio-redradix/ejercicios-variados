/*
 Exercise to apply the functions map, filter and reduce into an array list
 */
let array = [8, 12, 20]
let newArray = array.map(x=> x - (x/2))
console.log(newArray) 


let lista = [1, 7, 50]
let newLista = lista.map (x=> x + "")
console.log(newLista)


let array = [-2, 5, 15, -7, -8]
let newArray = array.map (x => {
    if (x > 0) {
       return '+'
    } else {
        return '-'
    }
})
console.log(newArray)



let arr = ['lorem ipsum dolor', 'hello  world']
let result = arr.map(x=> {
    let output = x.split(' ')
    output = output.map(word => word[0])
    output = output.join('')
    return output 
})

console.log(result)



let arr =  [[1, 2], [34, 20], [11, 11]] 
let newArray = arr.map(x => x[0] + x[1])
console.log(newArray)



let array = [{name: "Alberto"}, {name: "Fran"}]
let newArray = array.map (x => x.name)
console.log(newArray)


let array = [1, 2, 3, 4]
let newArray = array.map(x=>x * 2)
console.log(newArray)

let lista = [20, 10, 5, 3, 1]
let newLista= lista.filter (x=> x % 2 === 0)
console.log(newLista)

let lista = [1, 2, 3, 4]
let suma = lista.reduce((acc, x) => acc + x, 0)
console.log(suma)


let lista = [1, 9, 9, 9]
let concat = lista.reduce((acc, x) => acc + x, '') 
console.log(concat)