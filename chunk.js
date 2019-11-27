/**
 * For given array and chunk size, divide the array into many subarrays
 * where each subarray is of length chunk size.
 */

function chunk(array, size) {
    let result = [];
    for (let i=0 ; i < array.length; i++){
        if (i%size === 0){
            result.push([array[i]]);
        } else {
            let temp = result[result.length-1];
            temp.push(array[i]);
        }
    }
    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));