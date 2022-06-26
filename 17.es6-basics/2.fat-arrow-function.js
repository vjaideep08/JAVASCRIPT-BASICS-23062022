/*
    ? => : fat arrow
*/
 
// var add = function(a,b){
//     return a + b
// }

// var add = (a,b) => {
//     return a + b
// }

/*
    * both are same
    ? => a +b
    ? => {retrun a+ b}
*/
//var add = (a,b) => {return a + b}

var add = (a,b) => a + b

console.log(add(10,20))

var data = () =>({name:"Scott"})

console.log(data())