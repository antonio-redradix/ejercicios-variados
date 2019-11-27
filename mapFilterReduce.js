// create a new array with the result of divide every element of the original into two
let arr1 = [8, 12, 20];
let divideTwo = arr1.map((x) => x/2);

// create a new array with the result of convert every element of the original into an string
let arr2 = [1, 7, 50];
let convertToStr = arr2.map((x) => x.toString());

// create a new array with the symbol of the number from the original array
let arr3 = [-2, 5, 15, -7, -8];
let symOfNum = arr3.map((x) => {
  return x > 0? '+':'-';
});

// create a new array which contains the same number of elements transformed into a "string" with the first letter of every word in each element
let arr4 = ['lorem ipsum dolor', 'hello world'];
let firstLetterOfWords = arr4.map((x) => {
  let arrStr = x.split(' ');
  let firstLetter = arrStr.map((str) => str.charAt(0));
  return firstLetter.join('');
});

// create a new array which contains the sum of the elements contained in every sub array
let arr5 = [[1, 2], [34, 20], [11, 11]];
let sumOfEveryArr = arr5.map((x) => {
  return sumArr = x.reduce((acc,curr) => acc+curr);
});

// create a new array with the value of the name key of every object
let arr6 = [{name: 'Alberto'}, {name: 'Fran'}];
let getNames = arr6.map((obj) => obj.name);

// create a new array which contains the sum of the elements contained in every sub array
let arr7 = [[1, 2], [34, 20, 5], [11], [2, 4]];
let sumOfEveryArr2 = arr7.map((x) => {
  return sumArr = x.reduce((acc,curr) => acc+curr);
});



//  filter the odd numbers from an array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let oddNum = arr.filter((x) => x % 2 != 0);


// filter the objects which contains a property 'important:true'

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

let vipPeople = people.filter((obj) => obj.important);


// returns the result of substract all the elements of an array
let arr1 = [100,80,9,3,2];
let subsArr = arr1.reduce((acc, curr) => acc - curr);


// concat all the string from an array
let str1 = ['S','u','s','a','n'];
let concatStr = str1.reduce((acc, curr) => acc + curr, '');

// sums all the elements of an array except the negatives
let arr2 = [1,4,2,33,3,-200,-1,-2,-3];
let sumPositives = arr2.reduce((acc,curr) => {
  if(curr >= 0) {
    return acc + curr;
  }
  return acc;
},0);


// find the max number of an array using reduce
let maxNum = arr2.reduce((acc, curr) => {
  if(curr > acc){
    acc = curr;
  }
  return acc;
},-Infinity);
