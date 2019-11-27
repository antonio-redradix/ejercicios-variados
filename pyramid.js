/*
function pyramid(n), given a number n, pyramid prints a pyramid
of n floors, adding two # per plant
*/

function pyramid(n){
    for(let i = 1; i<=n; i++){
        let aux = n-i
        console.log(" ".repeat(aux)+ "#".repeat(i*2-1) +" ".repeat(aux))
    }
}

pyramid(15)
