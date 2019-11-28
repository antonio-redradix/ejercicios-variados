/*
	 ********* MAP, FILTER, REDUCE *******
*/

/*
	This function transform an array and divide all elemets by 2
*/
function transformMap1(arr){
	return arr.map(x => x/2)
}
//console.log(transformMap1([8,12,20]))

/*
	This function transform an array and make all elements a string
*/
function transformMap2(arr){
	return arr.map(x => `${x}`)
}
//console.log(transformMap2([8,12,20]))

/*
	This function transform an array and get firs letter of each word of each
	position of array
*/
function transformMap3(arr){
	return arr.map(x => x.match(/\b\w/g).join(''))
}
//console.log(transformMap3(["Hola Pepe", " Adios Juan Hijo"]))

/*
	This function transform an array and removes all elements that dont match
	the condition especified
*/
function impares(arr){
	return arr.filter(x => x%2!=0)
}
//console.log(impares([1,2,3,4,5]));

/*
	This function transform an array of objects and removes all elements that dont
	have the property importat in true
*/
function trueObj(arr){
	return arr.filter(x => x.important === true)
}
//console.log(trueObj([{important: true, nombre: "carlos"}, {important: false, nombre: "Juan"}, {important: true, nombre: "Pepe"}]))

/*
	This function transform an array and get firs letter of each word of each
	position of array
*/
function restaArr(arr){
	return arr.reduce((ac, x) => ac - x, 0)
}
//console.log(restaArr([1,2,3,4,5,6]))

function concatena(arr){
	return arr.reduce((ac,x) => ac + x, ' ')
}
//console.log(concatena(["a", "b", "c", "d"]))

function sumaPosi(arr){
	return arr.filter(x => x > 0).reduce((ac, x) => ac + x, 0)
}
//console.log(sumaPosi([1, -1, 1, -2, 3]))

function maxArr(arr){
	return arr.reduce((max, x) => { 
		if(x > max){
			max = x
		}
		return max
	}, 0 )
}