/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
    let letters = str.split("");
    let obj = {};
    for(let char of letters){
        if (obj[char]){
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }
    let keys = Object.keys(obj);
    let max = -Infinity;
    let letter = "";
    for(let key of keys){
        if (obj[key] > max){
            max = obj[key];
            letter = key;
        }
    }
    console.log(letter);
}

maxChar("apple 1231111");
maxChar("abcccccccd");
maxChar("abbbbbbbbbbbbbbbbbbbbbbbbbbcccccccd");

module.exports = maxChar;