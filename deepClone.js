/**
 * This function create a clone of the given object. Both objects must be independent and any change made in
 *  one object can't provoke any modification in the other one.
 */

function deepClone(obj){
    let obj2 = {},
        keys = Object.keys(obj);
    
    keys.forEach(key => {
        // Check if it is an object
        if (typeof obj[key] === 'object'){
            // Check if it is an array
            if (Array.isArray(obj[key])){
                obj2[key] = obj[key].map(el => (typeof el === 'object') ? deepClone(el) : el)
            } else {
                obj2[key] = deepClone(obj[key]);
            }
        } else {
            obj2[key] = obj[key];
        }
    })
    return obj2;
};

// Two objects are created
let obj = {
    things: [1,2,{test1: 1, test2: 2}],
    peso: {unit: 'kg', value: 20}
}
let obj2 = deepClone(obj)

// Some changes are made in the first object
obj.things[0]= 9
obj.things[2].test2 = 'x'
obj.peso.unit = 'lbs'

// We check if the changes are just in one object
console.log(obj2)
console.log(obj)