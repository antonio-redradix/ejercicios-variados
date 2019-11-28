let sumaObjetos = require ('../sumaObjetos');

test ('check if the result of sum all the numbers is equal to a number', () => {
    let dummy = {
        a: 1,
        b: {
            c: 3,
            d: 5,
        },
        e: {
            f: 7,
            g: {
                h: 9,
                i: 11,
            },
            j: 13,
        }
    };

    expect(sumaObjetos.sumObjects(dummy)).toBe(49);

});