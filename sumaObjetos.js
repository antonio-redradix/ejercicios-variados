/* 
given an object whose values are number or objects of the same type,
adds all the numerical values and returns the sum  using regular exp
*/


let ObjTT = {a:1,b:{c:2, d:5, e:{f:2,g:6}}}

function sum_obj_regex(obj){    
    let ObjTT_str = JSON.stringify(obj) 
    matches = ObjTT_str.toString().match(/(\d+)/g)
    let sum = 0
    matches.forEach(element => {
        sum +=  parseInt(element)
    });
    return sum
}

console.log(sum_obj_regex(ObjTT))