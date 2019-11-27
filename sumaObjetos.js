
/**
 * This function returns the add of all numbers from an
 * object, nested or not.
 */

let obj = {a: 1, b:{c:2, d:5, e:{f:9, g:6}}};
let obj2 = {a: {j:2, z:7}, b:{c:2, d:5, e:{f:9, g:6}}};


function addObject(o){
    let array = Object.values(o);
    let acc = 0;
    for(let i=0; i<array.length; i++){
        (typeof array[i] === 'number') ? acc += array[i] : acc += addObject(array[i]);
    }
    return acc;
}
console.log(addObject(obj));
console.log(addObject(obj2));