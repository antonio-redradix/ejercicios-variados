//Various exercises usind map(),filter()and reduce()

let numbers = [8, 12, 20]
console.log(numbers.map(x => x / 2))

let numbers2 = [1, 7, 50]
console.log(numbers2.map(x => x.toString()))

let numbers3 = [-2, 5, 15, -7, -8]
console.log(numbers3.map((x) => {
    if (Math.sign(x) === 1) return '+'
    else return '-'

}))

let numbers4 = [[1, 2],[34, 20, 5],[11],[2, 4]]

console.log(numbers4.map((x) => {
    let suma = 0
    for (let i = 0; i < x.length; i++) {
        suma += x[i]
    }
    return suma
}))

let strings = ["lorem ipsum dolor", "hello world"]

console.log(strings.map((x) => {
    let aux = x.split("")
    let res = ""
    for (let i = 0; i < 3; i++) {
        res += aux[i]
    }
    return res
}))


let people = [{
    name: "Alberto"
}, {
    name: "Fran"
}]

console.log(people.map(x => x.name))

console.log(numbers2.filter(x => x % 2 !== 0))

let people2 = [{
    name: "Alberto",
    important: false
}, {
    name: "Fran",
    important: true
}]

console.log(people2.filter(x => x.important === true))

console.log(numbers.reduce((acc, x) => acc - x, 0))

console.log(strings.reduce((acc, x) => acc + x, ""))

console.log(numbers3.reduce((acc, x) => {
    if (Math.sign(x) === 1)
        return acc += x
    else return acc
}, 0))

let maxn = [2, 34, 523, -3234, 32453252]
console.log(maxn.reduce((acc, x) => {
    if (x > acc) acc = x
    return acc
}, -Infinity))