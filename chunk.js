/**
 * Array Chunk
 *
 * For given array and chunk size, it divides the array into many subarrays
 * where each subarray is of length chunk size.
 */

function chunk(arr, chunkSize) {
    let aux = Array.from({ length: Math.ceil(arr.length / chunkSize) }, (v, i) =>
        arr.slice(i * chunkSize, i * chunkSize + chunkSize)
    )
    return aux
}

//Test
let arr = [1,2,3,4,5]
console.log(chunk(arr,3))