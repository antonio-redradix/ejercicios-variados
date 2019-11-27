//Some exercises with Map, Filter and Reduce. Each kind inside a different function

function ejMap() {
    let array1 = [8, 12, 20]
    let newArray1 = array1.map(x => x/2)

    let array2 = [1, 7, 50]
    let newArray2 = array2.map(x => x.toString())

    let array3 = [-2, 5, 15, -7, -8]
    let newArray3 = array3.map(x => x >= 0 ? "+" : "-")

    let array4 = ["lorem ipsum dolor", "hello world"]
    let newArray4 = array4.map(x => {
        let matches = x.match(/\b(\w)/g)
        return matches.join('')
    })

    let array5 = [[1, 2], [34, 20], [11, 11]]
    let newArray5 = array5.map(x => x.reduce((acc, x) => acc + x, 0))

    let array6 = [{name: "Alberto"}, {name: "Fran"}]
    let newArray6 = array6.map(x => x["name"])
}

function ejFilter() {
    let array1 = [1, 5, 2, 10, 11, 23, 3, 6]
    let newArray1 = array1.filter(x => x % 2 === 0)

    let array2 = [{a:1, b:"hola", important: true}, {a:[1, 2], b:{c:2}}, {important: true, b:{c:2}}]
    let newArray2 = array2.filter(x => x["important"] === true)
    console.log(newArray2)
}

function ejReduce() {
    let array1 = [100, 20, 6]
    let newArray1 = array1.reduce((acc, x) => acc - x, 0)

    let array2 = ["sum", "ar", "lo"]
    let newArray2 = array2.reduce((acc, x) => acc + x, "")

    let array4 = [2, 4, 18, 24, 7, 11]
    let newArray4 = array4.reduce((acc, x) => (x < acc ? acc=x : acc=acc), Infinity)
    console.log(newArray4)
}