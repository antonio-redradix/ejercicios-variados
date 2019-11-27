/*
	This function prints a pyramid of elements #, its heigh is determined
	by the parameter n.
	There are two diferent version i tryed to do
 */
function pyramid(n) {
	let m = n/2
	let has = ""
	for(i=0; i<n; i++){
		has = ""
		for(j=0; j<i; j++){
			if(j < m)
				has += " "
			else
				has += "#"
		}
		console.log(has)
	}
}

function pyramid2(n) {
	let m = n/2

	for(i=0; i<n; i++){
		has = ""
		for(j=0; j<(n/2)-i-1; j++){
			has += " "
		}
		for (k=j;k<n-1; k++){
			has += "#"
		}
		if(i%2 != 0)
			console.log(has)
	}
}