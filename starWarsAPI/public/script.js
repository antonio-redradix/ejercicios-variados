/* looks for N persons in the Star Wars API and return an array with their names and the average height

#################

First of all, you must set up a server in your computer, go to the root of the project and type in the console "node index.js" then navigate to "http://localhost:3000/" and you will have the opportunity to check the exercise

#################

*/

const getSWcharacter = async(num) => {
    let response = await fetch(`https://swapi.co/api/people/${num}`);
    let data = await response.json()
    return data;
};

const introduceCharacterIntoArr = async (numToCheck) => {
    let peopleSelected = [];
    for(let i = 1; i <= numToCheck; i++) {
        let char = await getSWcharacter(i);
        peopleSelected.push(char)
    }
    return peopleSelected;
}

const returnNamesAndAverage = async (num) => {
    let arrOfChar = await introduceCharacterIntoArr(num);
    let names = arrOfChar.map((elem) => elem.name);
    let getAverage = (arrOfChar.reduce((sum, elem) => {
        return sum +Number(elem.height);
    }, 0))/num;
    console.log(`Characters selected are: ${names} and the average height is: ${getAverage}`);
}


  