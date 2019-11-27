// the function allows to make a "deep Clone" from an object, it changes the reference and the value of the new object in the memory

// CHECK!!

function deepClone(obj){
    let arrObj = Object.entries(obj);
    let arrResult = {};
    arrObj.map((item) => {
      if(typeof item === 'string'){
        deepClone(item);
      }
      arrResult[item[0]] = item[1];
    })
    return arrResult;
  };
  
  let obj = {
      things: [1, 2, 3],
      peso: {unit: 'kg', value: 20},
      cosas: 'otras',
      mas: 1
  }
  
  
  let obj2 = deepClone(obj)
  obj.things[1] = 'x'
  obj.peso.unit = 'lbs'
  console.log(obj);
  console.log(obj2);