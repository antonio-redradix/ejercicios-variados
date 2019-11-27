/**
 * This exercise is a compilation of several RegExp
 */

//  Extract the number from a given string
let a = 'Test 123123329',
    regEx1 = /\d+/;

console.log(a.match(regEx1)[0]);


// Verify if the given string is an email
let mail = 'aaaaaaa ejemplo@gmail.com',
    regEx2 = /(\w+)@(\w+).(\w{2,3}$)/
console.log(regEx2.test(mail));


// Extract all the words between "" in a given string
let b = 'Texto: "captura esto" pero esto no, "aunque esto tambien lo pilla"',
    regEx3 = /"((\w+)(\s*))+"/g;

console.log(b.match(regEx3));
