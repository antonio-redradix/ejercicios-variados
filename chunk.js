/**
 * Array Chunk
 *
 * For given array and chunk size, divide the array into many subarrays
 * where each subarray is of length chunk size.
 *
 * Examples:
 * chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]
 */

function chunk(array,size){
    let result = [];
    while(array.length > size){
        let chunk = array.splice(0,size);
        result.push(chunk);
    }
    result.push(array);
    console.log(result);
}

chunk([1, 2, 3, 4], 2);
chunk([1, 2, 3, 4, 5], 2);
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
chunk([1, 2, 3, 4, 5], 4);
chunk([1, 2, 3, 4, 5], 10);