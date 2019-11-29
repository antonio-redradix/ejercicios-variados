let array1=[1, 2, 3, 4]
let newArray1=array1.map(x => x*2)
console.log(newArray1)

let lista = [20, 10, 5, 3, 1]
let newLista = lista.filter(x=> x%2===0)
console.log(newLista)

let lista1 = [1, 2, 3, 4]
let suma = lista1.reduce((acc, x)=> acc + x, 0)
console.log(suma)

let lista2 = [1, 9, 9, 9]
let concat = lista2.reduce((acc, x)=> acc + x, "")
console.log(concat)
let array=[8,12,20]
let newArray=array.map(x=> x/2)
console.log(newArray)
let arra=[1,5,50]
let newArra=arra.map(x=> x+"")
console.log(newArra)
let arr=[-2, -5 ,15, -7, -8]
let newArr=arr.map(x=> {
    if(x>0){
        return "+"
    }else{
        return "-"
    } }

     )
console.log(newArr)

let ar=["lorem ipsum dolor", "hello world"]
let newAr=ar.map(x=>x.split(" ").map(word=>word[0]).join(""))
console.log(newAr)

let a=[[1,2],[34,20],[11,11]]
let newA=a.map(x=>x[0]+x[1])
console.log(newA)

let b=[{name:"Alberto"},{name:"Fran"}]
let newB=b.map(x=>x.name)
console.log(newB)