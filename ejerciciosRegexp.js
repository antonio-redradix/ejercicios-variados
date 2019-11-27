/*
Exercises with regular expressions:
1.Extraction of numbers
2.Validation email format
3.Extraction of quoted text
*/
let matches
//matches = "1----123".match(/^(\d{1})/)
matches = "aboboi130983092nslknq89e39udi230s019xw".match(/(\d+)/ig)
console.log(matches)
matches = /^\w+@\w+\.\w+$/ig.test("chamo1111@hotmail.es")
console.log(matches)
let regexEntreComillas = /\"([\w|\s])+\"/ig
matches = 'ajsj"aaad"msdiede "ss "'.match(regexEntreComillas)
console.log(matches)