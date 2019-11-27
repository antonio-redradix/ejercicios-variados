// Differents exercises with map function

let array = [8,12,20];
let mid = array.map(x => x/2);
console.log(mid);

array = [1,7,50];
let toStr = array.map(x => x+"");
console.log(toStr);

array = [-2,5,15,-7,-8];
let sumOrSub = array.map(x => {
    if(x > 0){return "+"}
    else{return "-"}
})
console.log(sumOrSub);

array = ["lorem ipsum dolor", "hello world"];
let firstLetter = array.map(x => {
    let words = x.split(" ");
    let fl = "";
    for (let word of words){
        fl = fl + word[0];
    }
    return fl;
})
console.log(firstLetter);

array = [[1,2],[34,20],[11,11]];
let sumArray = array.map(x =>{
    let acc = 0;
    for(let num of x){
        acc = acc+num;
    }
    return acc;
})
console.log(sumArray);

array = [{name:"Alberto"},{name:"Fran"}];
let names = array.map(x => x.name);
console.log(names);

array = [[1,2],[34,20,5],[11],[2,4]];
let sum = array.map(x => {
    let acc = 0;
    for(let num of x){
        acc = acc+num;
    }
    return acc;
})
console.log(sum);