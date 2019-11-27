
//This functions prints a pyramid of n steps in the console, given its number by the user

function pyramid(n) {

    for(let i=0;i<n;i++){
        let string=""
    
        for(let j=1;j<n-i;j++){
            string+= " "
         }
        
    for(let k=1;k<=(2*i+1);k++){
        string+="#"}
        console.log(string)
    }
}
