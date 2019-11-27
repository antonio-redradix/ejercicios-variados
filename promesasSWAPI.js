function firstN(obj, n) {
    return Object.keys(obj) //get the keys out
        .sort() //this will ensure consistent ordering of what you will get back
        .slice(0, n) //get the first N
        .reduce(function(memo, current) { //generate a new object out of them
        memo[current] = obj[current]
        return memo;
        }, {})
}

//This function print the height average from the first "num" of people from the api
function fetchPeople(num) {
    fetch("https://swapi.co/api/people")
    .then(response => {            
        response.json()
            .then(data => {
                let heightArr = []
                let newObj = firstN(data.results, num)
                Object.entries(newObj).forEach(entry => {
                    heightArr.push(entry[1].height)
                });
                let average = 0
                heightArr.forEach(element => {
                    average += parseInt(element)
                });
                console.log(heightArr)
                console.log(average / heightArr.length)
            })
    })
}

//Test:
fetchPeople(5)