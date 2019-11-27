function pyramid(n) {
    for (let i=1; i<=n; i++){
        //we have to repeat (n-i) spaces left and right, and the number of # printed are given by the equation (i*2-1)
        console.log(" ".repeat(n-i)+"#".repeat(i*2-1)+" ".repeat(n-i))
    }
}
pyramid(15)