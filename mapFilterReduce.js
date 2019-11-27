// map  

let arr1 = [8, 12, 20];
let arr2 = [1, 7, 50];
let arr3 = [-2, 5, 15, -7, -8];
let arr4 = ['lorem ipsum dolor', 'hello world'];
let arr5 = [[1, 2], [34, 20], [11, 11]];
let arr6 = [{name: 'Alberto'}, {name: 'Fran'}];
let arr7 = [[1, 2], [34, 20, 5], [11], [2, 4]];

console.log(arr1.map((x) => x/2));

console.log(arr2.map((x) => x.toString()));

console.log(arr3.map((x) => {
  return x > 0? '+':'-';
}));

console.log(arr4.map((x) => {
  let arrStr = x.split(' ');
  let firstLetter = arrStr.map((str) => str.charAt(0));
  return firstLetter.join('');
}));

console.log(arr5.map((x) => {
  return sumArr = x.reduce((acc,curr) => acc+curr);
}));

console.log(arr6.map((obj) => obj.name));

console.log(arr7.map((x) => {
  return sumArr = x.reduce((acc,curr) => acc+curr);
}));

// filter 

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let people = [
  {
    name:'Susan',
    age: 32,
    important:true
  },
  {
    name: 'Pepe',
    age: 56,
    important: false
  },
  {
    name: 'John',
    age: 86,
    important: false
  },
  {
    name: 'Paco',
    age: 75,
    important: true
  },
  {
    name: 'Wenceslao',
    age: 12,
    important: false,
  }
];

console.log(arr.filter((x) => x % 2 != 0));

console.log(people.filter((obj) => obj.important));

// reduce

let arr1 = [100,80,9,3,2];
let str1 = ['S','u','s','a','n'];
let arr2 = [1,4,2,33,3,-200,-1,-2,-3];

console.log(arr1.reduce((acc, curr) => acc - curr));

console.log(str1.reduce((acc, curr) => acc + curr),'');

console.log(arr2.reduce((acc,curr) => {
  if(curr >= 0) {
    return acc + curr;
  }
  return acc;
},0));

console.log(arr2.reduce((acc, curr) => {
  if(curr > acc){
    acc = curr;
  }
  return acc;
},-Infinity));
