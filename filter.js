// Differents exercises with filter function

let array = [1,2,3,4,5,6,7,8,9];
let odd = array.filter(x => x%2 != 0);
console.log(odd);

array = [{name:"Killian"},{important:true,name:"Julio"},{name:"Killian",important:true,name:"Julio"}];
let important = array.filter(x => {
    if(x.important == true){
        return x;
    }
})
console.log(important);