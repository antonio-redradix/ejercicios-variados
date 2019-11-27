// Here we have a implementation of the map function
// without .map() of JS

function map (array,func){
    let result = [];
    for (let element of array){
        result.push(func(element));
    }
    return result;
}

let array = [1,2,3,4,5,6,7,8,9,10];
console.log(map(array,x=>x+1));
console.log(map(array,x=>x-3));
console.log(map(array,x=>[x]));
