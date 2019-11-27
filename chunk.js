
/*
returns an array with subarray of two elements of the array passed through parameters
*/
let arr = [1,2,3,4,5,6,7,8,9]
function chunk(array, num){
    let sol = []
    //console.log(array.length)
    while(array.length>0){
        //console.log("in")
        if(array.length>num){
            console.log(array.splice(0,num))
            sol.push(array.splice(0,num))
        } else{
            sol.push(array.splice(0))
        }      
        
    }
    return sol
}
console.log(chunk(arr,2))