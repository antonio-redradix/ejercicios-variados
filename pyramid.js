/* num defines the number of element at the bottom of the tree (or pyramid), then, it build up a tower which decrease the number of elements in each floor */

let  christmasTree = (num) =>{
    for(let i = 1; i <= num; i += 2){
      console.log(`${' '.repeat((num-i)/2)}${'#'.repeat(i)}`);
    }
  };
  
  christmasTree(5);