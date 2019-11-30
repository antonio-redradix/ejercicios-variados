//Ejercicios de MAP

let array = [1, 2, 3, 4]
let newArray = array.map(x => x*2)
console.log(newArray)


//Filtra esa lista, ese array
let array = [1, 10, 5, 20]
let newArray = array.filter(x => x % 2 === 0)
console.log(newArray)

let lista = [1, 2, 3, 4]
let suma = lista.reduce((acc,x) => acc + x,0)
console.log(suma)

//Queremos que nos devuelva 1999
//Si el valor inicial es una string vacía, al sumar un numero, se indroduce directamente como numero, y los va acumulando
let lista = [1, 9, 9, 9]
let concat = lista.reduce((acc,x) => acc + x, "")
console.log(concat)

let array = [8, 12, 20]
let newArray = array.map(x => x/2)
console.log(newArray)

let array = [1, 7, 50]
let newArray = array.map( x => x + "")
console.log(newArray)

let array = [-2, 5, 15, -7, -8]
let newArray = array.map ( x => {
    if (x>=0) {
    return "+"
    } else {
        return "-"
    }
})
console.log(newArray)

let array = ['lorem ipsum dolor', 'hello world']
let newArray = array.map ( x => {
    let output = x.split(" ")
    output = output.map( word => word[0])
    output = output.join("")
    return output
})
console.log(newArray)

let a  = [[1, 2], [34, 20], [11, 11]]
let newArray = a.map (x => x[0] + x[1])
console.log(newArray) 

let array = [{name: "Alberto"}, {name: "Fran"}]
let newArray = array.map (x => x.name)
console.log(newArray)

let array = [[1, 2], [34, 20, 5], [11], [2, 4]]

//habrá que hacer algo así
let newArray = array.map ( x => {

    let output = x.split(" ")
    output = output.map( word => word[0])
    output = output.join("")
    return output

})
console.log(newArray)



