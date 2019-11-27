function christmasTree(num){
    for(let i = 1; i <= num; i += 2){
      console.log(`${' '.repeat((num-i)/2)}${'#'.repeat(i)}`);
    }
  };
  
  christmasTree(5);