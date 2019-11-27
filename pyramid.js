/**
 * This function perform a pyramid build from # of a given number of levels
 */

//This prototype allow to replace a character from a string
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

const createPyramid = number => {

    let len = number*2+1;
    let str = " ".repeat(len);

    for (let i = 0; i < number; i++){
        str = str.replaceAt(number-i, '#');
        str = str.replaceAt(number+i, '#');
        console.log(str)
    }

}

// Test with a base 20 pyramid 
createPyramid(5);