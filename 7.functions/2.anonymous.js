// function getMessage(){
//     return "Welcome to the world of Javascript"
// }


 var getMessage = function (){
    return "Welcome to the world of Javascript"
}

console.log(getMessage())

var getFullName = function(firstName, lastName){
    return firstName + " " + lastName
}

console.log(getFullName("Scott", "Desatnick"))

var getData = function display(){
    return "Here is your data"
}

console.log(getData())
//console.log(display) // Error


function test(){

}

var sample = test

console.log(sample) // This will print the function
console.log(test) // thi will also print the function