/**
 * A list of several exercises using map, filter and reduce
 * to modify and obtain data from arrays
 *  */

console.log([8, 12, 20].map(x => x/2));

console.log([1, 7, 50].map(x => x+""));

console.log([-2, 5, 15, -7, -8].map(x => {
    if(x > 0){
        return "+";
    }
    return "-"
}));

console.log(["lorem ipsum dolor", "hello world"].map(x => {
    return x.split(" ").map(y => y.charAt(0)).join('');
}));

console.log([[1, 2],  [32, 20], [11, 11]].map(x => {
    return x.reduce((acc, y) => acc + y, 0);
}));


console.log([{name: "Alberto"}, {name: "Fran"}].map(x => x.name));

console.log([[1, 2],  [34, 20, 5], [11], [2, 4]].map(x => {
    return x.reduce((acc, y) => acc + y, 0);
}));

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter( x=> x%2 !== 0));

console.log([{name: "Alberto", important: true}, {name: "Fran"}].filter(x => x.important == true));

console.log([1, 2, 3].reduce((acc, x) => acc - x, 0 ));

console.log(["Hola ",  "qué ", "tal"].reduce((acc, x) => acc + x, ""));

console.log([1, -2, 3].reduce((acc, x) => {
    if (x > 0) {
        return acc + x;
    }else{
        return acc;
    }
}, 0));
