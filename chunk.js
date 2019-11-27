/* create sub arrays from the original one, each of one contains "N=size" elements, if still remains elements from the original one, it adds this elements at the end of the arrChunked in an small subArray */

let chunk = (array, size) => {
  let arr = [...array];
  let arrChunked = [];
  for(let i=1; i <= size; i++){
    if(!arr[0]){break}
    let chunk = arr.splice(0,size);
    arrChunked.push(chunk);
  }
  
  return (arr[0]) ? arrChunked.concat([arr]) : arrChunked;
}

chunk([1, 2, 3, 4, 5], 10);

module.exports = {chunk};