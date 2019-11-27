/**
* Longest Word
*
* Write a function that returns the longest word in the passed sentence.
* If there are two or more words that are the same length, return
* the first word from the string with that length.
*
* Examples:
* longestWord("Hello there") === "Hello"
* longestWord("My name is Adam") === "name"
*/

function longestWord(sen) {
    let words = sen.split(" ");
    let longestWord = words[0];
    for (let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    console.log(longestWord);
}

module.exports = longestWord;

longestWord("My name is Adam")
longestWord("Hello there")
longestWord("Hello there, brother")