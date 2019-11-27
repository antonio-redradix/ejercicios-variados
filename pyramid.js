/**
 * Pyramid
 *
 * A function that accepts a positive number N.
 * The function prints a pyramid shape
 * with N levels using the # character.
 */

let printPyramid = (rows) => {

    for(let i = 1; i <= rows; i++){
      let str = '';
      
      for(let k = 1; k <= (rows - i); k++){
        str += ' ';
      }
      
      for(let k = 0; k != (2 * i - 1); k++){
        str += '#';
      }
      
      for(let k =  i + 1; k <= rows; k++){
        str += ' ';
      }
      
      console.log(str);
    }
}

//Test
printPyramid(6)