/*
exercises with lists using their map, reduce and filter functions
*/

let array = [8,12,20]
let resul = array.map(x => x/2)
console.log(resul)

array = [1,7,50]
resul = array.map(x => x.toString())
console.log(resul)

array = [-2,5,15,-7,-8]
resul = array.map(x => {
    if(x>=0) return "+"
    return "-"
})
console.log(resul)

array = ["lorem ipsum dolor", "hello world"]
resul = array.map(x => {
    let res= ""
    let aux = x.split(" ")
    aux.forEach(element => {
        res += element[0]
    });
    return res
})
console.log(resul)

array = [[1,2],[34,20],[11,11]]
resul = array.map(x=>{
    let suma = 0
    x.forEach(element => {
        suma += element
    });
    return suma
})
console.log(resul)

array = [{name:"Alberto"},{name:"Fran"}]
resul = array.map(x => x.name)
console.log(resul)

array = [[1,2],[34,20,5],[11],[2,4]]
resul = array.map(x=>{
    let suma = 0
    x.forEach(element => {
        suma += element
    });
    return suma
})
console.log(resul)

//map casera
console.log("map propia")
function map(arr, func){
    let res = []
    arr.forEach(element => {
        res.push(func(element))
    });
    return res
}
resul=map(array,x=>{
    let suma = 0
    x.forEach(element => {
        suma += element
    });
    return suma
})
console.log(resul)

//Filter

array = [1,2,3,4,5,5,6,7,9,0,10,22]
resul = array.filter(x=> x%2===1)
console.log(resul)

array = [{name:"Alberto",important:"true"},{name:"Fran"},{name:"Nano",important:"false"},{name:"Luffy",important:"true"}]
resul = array.filter(x=>x.important==="true")
console.log(resul)

//reduce
array = [1,2,3,4,5,5,6,7,9,0,10,22]
resul = array.reduce((acc,x)=>acc-x, 0)
console.log(resul)

array = ["lorem ipsum dolor", "hello world"]
resul = array.reduce((acc,x)=>acc.concat(x),"")
console.log(resul)

array = [1,-2,-3,4]
resul = array.reduce(function(acc,x){
    acc+x;
},0)
console.log(resul)