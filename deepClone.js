/*
	This function makes a deep clone of another object
*/
function deepClone(obj){
	let nuevo = {};

	for (let key in obj) {
		if(typeof obj[key] !== 'object')
			nuevo[key] = obj[key]
		else if(Array.isArray(obj[key])){
			let nArr = []
			nuevo[key] = nArr
			for(let i = 0; i < obj[key].length; i++){
				nArr[i] = deepClone(obj[key][i])
			}
		}
	  	else
	  		nuevo[key] = deepClone(obj[key])
	  		
	}

	return nuevo;
}