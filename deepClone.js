/* the function allows to make a "deep clone" from an object, it changes the reference of the new object in the memory /it is applied to the values too in case to be an object-array 

you can try it with this example or run the test (npm test):

################################

let obj = {
    things: [1, 2, 3],
    peso: {unit: 'kg', value: 20},
    cosas: 'otras',
    mas: 1
}
    
let obj2 = deepClone(obj)
obj.things[1] = 'x'
obj.peso.unit = 'lbs'
console.log(obj2);
console.log(obj);

################################
*/

let deepClone = (obj) => {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let objClone = values.reduce((obj, elem, index) => {
      if (Array.isArray(elem)) {
        let arrClone = [...elem];
        obj[keys[index]] = arrClone;
        return obj;
      } else if (typeof(elem) === 'object') {
        obj[keys[index]] = deepClone(elem);
        return obj;
      } else {
        obj[keys[index]] = elem;
        return obj;
  
      };
    },{});
    return objClone;
  };
  
  module.exports = {deepClone};
