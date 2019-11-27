/**
 * This function add all the numbers inside an object and posible objects inside the main object
 */
const objSum = {a:1, b: {c:2, d:5, e: {f:9, g:6}}}

const sumNum = (obj) => {
    let temp = 0;
    for (let [key, value] of Object.entries(obj)){
        temp += (typeof value === 'object') ? sumNum(obj[key]) : value;
    }
    return temp;
}

console.log(sumNum(objSum))