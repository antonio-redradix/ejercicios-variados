const deepClone = require ('../deepClone');

test ('it must create an object diferent from the first one', () => {
    let obj = {
        things: [1, 2, 3],
        peso: {unit: 'kg', value: 20},
        cosas: 'otras',
        mas: 1
    };
    
    let obj2 = deepClone.deepClone(obj);
    obj.things[1] = 'x'
    obj.peso.unit = 'lbs'
    
    expect(obj).not.toEqual(obj2);
});