/* it returns the result of sum all the value numbers of an object 

you can try it with this examples (2) or run the test (npm test):

################################

let numObj = {
    a:1,
    b:2,
    c: {
        d: 3,
        e: 4,
    },
    f: {
        g: 5,
        h: {
            i: 6,
            j: 7,
        },
        k: 8,
    }
};

let numObj2 = {a:1, b:2, c:3};

################################

*/

let sumObjects = (obj) => {
    let values = Object.values(obj);
    let result = values.reduce((obj, elem, i) => {
        if (typeof(elem) == 'object') {
            let sum = obj + sumObjects(elem);
            return sum;
        } else {
            let sum = obj + elem;
            return sum;
        };
    }, 0);
    return result;
};



module.exports = {sumObjects};