// Differents exercises with reduce function

let array = [1,2,3,4,5,6,7,8];
let sub = array.reduce((acc,x) => acc-x, 0);
console.log(sub);

array = ["Hola","amigo","Hola","amigo","Hola","amigo"];
let concatStr = array.reduce((acc,x) => acc+x, "");
console.log(concatStr);

array = [1,2,3,-4,5,6,7,-8];
let sum = array.reduce((acc,x) => {
    if(x>0){
        return acc+x;
    }
    return acc;
}, 0);
console.log(sum);

array = [1,-2,30,-4,5,6,7,-8];
let max = array.reduce((acc,x) => {
    if(x>acc){
        return acc = x;
    }
    return acc;
}, 0);
console.log(max);