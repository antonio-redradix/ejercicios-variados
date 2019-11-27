const chunk = require ('../chunk');

test ('creates subArrays of 3 elements from the original array', () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    let size = 3;
    let result = [[ 1, 2, 3], [4, 5, 6], [7, 8]];
    expect(chunk.chunk(array, size)).toEqual(result);
});