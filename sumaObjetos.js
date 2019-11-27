/**
 * Object Numbers Sum
 *
 * A function that returns all number's (even if they're inside
 * other objects) sum.
 * Ex: given object {a:1,b:{c:2,d:5,e:{f:9,g:6}}}
 *     1+2+5+9+6 = 23, so it returns 23
 */

function sumNums(obj) {
    let aux = 0
    for(let propt in obj){
        if (typeof obj[propt] === 'object') {           
            aux += sumNums(obj[propt])
        }
        else if (typeof obj[propt] === 'number') {
            aux += obj[propt]
        }
    }
    return aux
}
//Test
const myObject = {a:1,b:{c:2,d:5,e:{f:9,g:6}}}
console.log(sumNums(myObject))