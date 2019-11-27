/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str) {
    let words = str.split(" ");
    let counter = 0;
    let newWords = [];
    for (let word of words){
        newWords[counter] = word[0].toUpperCase() + word.slice(1,str.length-1);
        counter++;
    }
    let newStr = newWords.join(" ");
    console.log(newStr);
}

capitalize('a lazy fox')
capitalize('look, it is working!')