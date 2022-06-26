// var person = {
//     firstName: "Scott",
//     lastname: "Desatnick",
//     age:46
// }

// person.email ="Scott@ef.com" // CREATE
// person.firstName ="Great Scott" // UPDATE
// delete person.age // DELETE
// console.log(person) // READ



/*
    * Object.preventExtensions()
    ? can not add new properties
    ? update and delete the properties
*/

// var studentPreventExtensions = {
//     firstName: "Scott",
//     lastname: "Desatnick",
//     age:46
// }

// Object.preventExtensions(studentPreventExtensions)

// studentPreventExtensions.email ="Scott@ef.com" // CREATE
// studentPreventExtensions.firstName ="Great Scott" // UPDATE
// delete studentPreventExtensions.age // DELETE
// console.log(studentPreventExtensions) // READ


/*
    * Object.seal()
    ? can update the properties
    ? can't delete the properties
    ? can't add new properties
*/
// var studentSeal = {
//     firstName: "Scott",
//     lastname: "Desatnick",
//     age:46
// }

// Object.seal(studentSeal)

// studentSeal.email ="Scott@ef.com" // CREATE
// studentSeal.firstName ="Great Scott" // UPDATE
// delete studentSeal.age // DELETE
// console.log(studentSeal) // READ


/*
    * Object.freeze()
    ? can't update the properties
    ? can't delete the properties
    ? can't add new properties
*/
var studentFreeze = {
    firstName: "Scott",
    lastname: "Desatnick",
    age:46,
    address: {
        city: "Boston"
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)

studentFreeze.email ="Scott@ef.com" // CREATE
studentFreeze.firstName ="Great Scott" // UPDATE
studentFreeze.address.city="Hyderabad"
delete studentFreeze.age // DELETE
console.log(studentFreeze) // READ


var studentStringify = JSON.stringify(studentFreeze)
console.log(studentStringify)

var stuentParse = JSON.parse(studentStringify)
stuentParse.firstName ="Great Scott"

console.log(stuentParse)