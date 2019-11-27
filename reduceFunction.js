// Here we have a implementation of reduce function
// without .reduce() of JS

function reduce(array,func,init=0){
    let acc = init;
    for (let element of array){
        acc = func(element,acc);
    }
    return acc;
}

let array = [1,2,3,4,5,6,7,8,9,10];
console.log(reduce(array,((x,acc)=>acc+x),0));
console.log(reduce(array,((x,acc)=>acc-x),0));
array = ["H","o","l","a"," ","M","a","n","u","e","l"];
console.log(reduce(array,((x,acc)=>acc+x),""));
