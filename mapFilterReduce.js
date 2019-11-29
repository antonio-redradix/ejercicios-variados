
//--------------- MAP EXERCISES -----------------------//

// map [8, 12, 20] -> [4, 6, 10]
let array = [8, 12, 20]
let newArray = array.map(x => x / 2) 
console.log(newArray)

//map [1, 7, 50] -> [“1”, “7”, “50”]
let array2 = [1, 7, 50]
let newArray2 = array2.map(x => x + '') 
console.log(newArray2)

// map [-2, 5, 15, -7, -8] -> [“-”, “+”, “+”, “-”, “-”] 
let array3 = [-2, 5, 15, -7, -8]
let newArray3 = array3.map(x =>{
    if (x >= 0){
        return "+"
    }else
    return "-"
}) 
console.log(newArray3)

// map [“lorem ipsum dolor”, “hello world”] -> [“lid”, “hw”] 
let array4 = ["lorem ipsum dolor", "hello world"];
let newArray4 = array4.map(x => {
    let words = x.split(" ");
    let a = "";
    for (let word of words){
        a = a + word[0];
    }
    return a;
})
console.log(newArray4);

//map [[1, 2], [34, 20], [11, 11]] -> [3, 54, 22]
let array5 = [[1,2],[34,20],[11,11]];
let newArray5 = array5.map(x =>{
    let sum = 0;
    for(let a of x){
        sum = sum + a;
    }
    return sum;
})
console.log(newArray5);

//map[{name: “Alberto”}, {name: “Fran”}] -> [“Alberto”, ”Fran”]
let array6 = [{name:"Alberto"},{name:"Fran"}];
console.log(array6.map(x => x.name));

//map [[1, 2], [34, 20, 5], [11], [2, 4]] -> [3, 59, 11, 6]
let array7 = [[1,2],[34,20,5],[11],[2,4]];
let newArray7 = array7.map(x => {
    let sum = 0;
    for(let a of x){
        sum = sum + a;
    }
    return sum;
})
console.log(newArray7);


//--------------- REDUCE EXERCISES -----------------------//

// map and reduce  [[1, 2], [34, 20], [11, 11]] -> [3, 54, 22]
let arr = [[1, 2], [34, 20], [11, 11]]
let result = arr.map(x => {
    let suma = x.reduce((acc, x) => acc + x)
    return suma
})
console.log(result)

// reduce [1, 2, 2, 2] --> (sum:) 7
let array8 = [1, 2, 2, 2]
let sum = array8.reduce((acc, x) => acc + x )
console.log(sum)

// reduce [1, 2, 2, 2] --> (sum:) 10 (other method to sum)
let array9 = [1, 2, 3, 4]
let newarray9 = array9.reduce((acc, x) => acc + x, 0)
console.log(newarray9)


// reduce [1, 2, 2, 2] --> 1234
let array10 = [1, 2, 3, 4]
let newarray10 = array10.reduce((acc, x) => acc + x , '')
console.log(newarray10)


//--------------- FILTER EXERCISES -----------------------// /* TRUE or FALSE. */

//show odd numbers
let array11 = [2, 10, 5, 21, 7, 8, 6, 31, 96]
let newarray11 = array11.filter(x => x % 2 === 0 )
console.log(newarray11)

// Show property when important is TRUE
let array12 = [{test:'a', result:"yes", important: true}, {test:'b', result:"no", important: false}, 
            {test:'c', result:"no"}, {test:'d', result:"yes2", important: true}]
let newArray12 = array12.filter(x => x["important"] === true)
console.log(newArray12)
















// // Otro ejemplo. 

// // let proto = {c: 3}
// // let obj = Object.create(proto)
// // obj.a = 1
// // obj.b = 'Hola'
// // console.log(obj.a, obj.b, obj.c) //1, 'Hola', 3.


// /* Pasas una url y te pasa un array de promesas. */

// // let urls = []
// // for(let i = 4; i <= 9; i++){ urls.push('https://swapi.co/api/people/' + i)}

// // const getData = url => fetch(url).then(response => response.json())

// // const promises = urls.map(url => getData(url))

// // Promise.all(promises).then(results => {
// //   console.log(results.reduce((acc, data) => acc + parseFloat(data.height), 0) / 5) /* Esto lo suma*/
// // })













// /* ejercicio map */



// /* Implementacion map */

// // Here we have a implementation of the map function
// // without .map() of JS

// // function map (array,func){
// //     let result = [];
// //     for (let element of array){
// //         result.push(func(element));
// //     }
// //     return result;
// // }

// // let array = [1,2,3,4,5,6,7,8,9,10];
// // console.log(map(array,x=>x+1));
// // console.log(map(array,x=>x-3));
// // console.log(map(array,x=>[x]));



// /* max char */

// /**
//  * Max Char
//  *
//  * For given string return the character that is most
//  * commonly used in the string.
//  *
//  * Examples:
//  * maxChar("abcccccccd") === "c"
//  * maxChar("apple 1231111") === "1"
//  */

// function maxChar(str) {
//     let letters = str.split("");
//     let obj = {};
//     for(let char of letters){
//         if (obj[char]){
//             obj[char] += 1;
//         } else {
//             obj[char] = 1;
//         }
//     }
//     let keys = Object.keys(obj);
//     let max = -Infinity;
//     let letter = "";
//     for(let key of keys){
//         if (obj[key] > max){
//             max = obj[key];
//             letter = key;
//         }
//     }
//     console.log(letter);
// }

// maxChar("apple 1231111");
// maxChar("abcccccccd");
// maxChar("abbbbbbbbbbbbbbbbbbbbbbbbbbcccccccd");

// module.exports = maxChar;



// /* reduce ejercicios */

// // Differents exercises with reduce function

// let array = [1,2,3,4,5,6,7,8];
// let sub = array.reduce((acc,x) => acc-x, 0);
// console.log(sub);

// array = ["Hola","amigo","Hola","amigo","Hola","amigo"];
// let concatStr = array.reduce((acc,x) => acc+x, "");
// console.log(concatStr);

// array = [1,2,3,-4,5,6,7,-8];
// let sum = array.reduce((acc,x) => {
//     if(x>0){
//         return acc+x;
//     }
//     return acc;
// }, 0);
// console.log(sum);

// array = [1,-2,30,-4,5,6,7,-8];
// let max = array.reduce((acc,x) => {
//     if(x>acc){
//         return acc = x;
//     }
//     return acc;
// }, 0);
// console.log(max);

// /* implementacin reduce */

// // Here we have a implementation of reduce function
// // without .reduce() of JS



