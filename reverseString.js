/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str) {
    let newStr = "";
    for(let i = str.length-1;i>=0;i--){
        newStr = newStr + str[i];
    }
    return newStr;
}

console.log(reverse('Greetings!'));
console.log(reverse('hello'));
console.log(reverse('apple'));

module.exports = reverse;