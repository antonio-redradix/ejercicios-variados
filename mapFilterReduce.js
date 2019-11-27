/**
 * Conversion using map
 */

//  [8, 12, 20] -> [4, 6, 10]
let arr1 = [8, 12, 20];
let rta1 = arr1.map(x => x/2);
console.log(rta1);

// [1, 7, 50] -> [“1”, “7”, “50”]
let arr2 = [1, 7, 50];
let rta2 = arr2.map(x => x.toString());
console.log(rta2);

// [-2, 5, 15, -7, -8] -> [“-”, “+”, “+”, “-”, “-”]
let arr3 = [-2, 5, 15, -7, -8];
let rta3 = arr3.map( x => x<0 ? '-' : '+');
console.log(rta3);

// [“lorem ipsum dolor”, “hello world”] -> [“lid”, “hw”]
let arr4 = ['lorem ipsum dolor', 'hello world'];
let rta4 = arr4.map(x => {
    let temp = x.split(' ');
    return temp.map(x => x[0]).join('');
})
console.log(rta4)

// [[1, 2], [34, 20], [11, 11]] -> [3, 54, 22]
let arr5 = [[1,2], [34, 20], [11,11]];
let rta5 = arr5.map( x => x[0]+x[1]);
console.log(rta5)

// [{name: “Alberto”}, {name: “Fran”}] -> [“Alberto”, ”Fran”]
let arr6 = [{name: 'Alberto'}, {name: 'Fran'}];
let rta6 = arr6.map(x => x.name);
console.log(rta6)

// [[1, 2], [34, 20, 5], [11], [2, 4]] -> [3, 59, 11, 6]
let arr7 = [[1,2], [34,20,5], [11], [2,4]];
let rta7 = arr7.map( x => (x.reduce((acc, x2)=> acc+x2, 0)))
console.log(rta7)


/**
 * Exercises with filter
 */

// Preserve the odd numbers
let arr8 = [8, 12, 20, 17, 97];
let rta8 = arr8.filter(x => x%2 === 0)
console.log(rta8)

// Preserve the objects with the value important
let arr9 = [{name: 'Alberto', importan: true}, {name: 'Fran', importan:false}]
let rta9 = arr9.filter(x => x.importan === true);
console.log(rta9)


/**
 * Exercises with reduce 
 */

//  Obtain the sub from an array
let rta10 = arr1.reduce((acc,x) => acc - x , 0)
console.log(rta10);

// Concatenate the string from an array
let arr11 = ['unir', 'esto', 'junto'];
let rta11 = arr11.reduce((acc, x)=> acc + x, '');
console.log(rta11)

// Add all the positive numbers from an array
let rta12 = arr3.reduce((acc,x) => (x>=0) ? acc+x : acc, 0)
console.log(rta12);

// Find the max value from an array
let rta13 = arr3.reduce((acc, x) => (x>acc) ? acc = x : acc, 0)
console.log(rta13);