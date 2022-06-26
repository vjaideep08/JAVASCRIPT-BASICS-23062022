// /*
//     ? return type of function
// */

// function sample(){
//     //return 1
//     //return "Scott"
//     //return true
//     // return null
//     // return undefined
//     // return {}
//     // return function(){}
//     // return []
//     return
// }

// console.log(sample()) 


/*
    ? pass parameters
*/

// function getName(firstName, lastName){
//     return firstName + " " + lastName
// }

// console.log(getName("Scott", "Desatnick"))
// console.log(getName("Adam", "Colson"))
// console.log(getName("Tuan", "Bui"))

function getData(name, email, city){
    return name + " " + email + " " + city
}

function getData(name, email){
    return name + " " + email 
}

function getData(name){
    return name  
}

function getData(){

}

console.log(getData("Scott", "Scott@ef.com", "Boston"))
console.log(getData("Adam", "Adam@ef.com"))
console.log(getData("Tuan"))