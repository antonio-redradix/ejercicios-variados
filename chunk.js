// check!!

function chunk(array, size) {
    let arr = [...array];
    let arrChunked = [];
    for(let i=1; i <= size; i++){
      if(!arr[0]){break}
      let chunk = arr.splice(0,size);
      arrChunked.push(chunk);
    }
    
    return arrChunked;
  }
  
  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)