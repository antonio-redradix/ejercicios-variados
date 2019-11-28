/* num defines the number of element at the bottom of the tree (or pyramid), then, it build up a tower which decrease the number of elements in each floor 

you can try it with this example in the console:

################################

christmasTree(5);

it will return s.t. like this:

  #
 ###
#####

################################
*/

let  christmasTree = (num) =>{
    for(let i = 1; i <= num; i += 2){
      console.log(`${' '.repeat((num-i)/2)}${'#'.repeat(i)}`);
    }
  };
  
  