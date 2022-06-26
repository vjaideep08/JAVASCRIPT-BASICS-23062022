var a = 10
    a = "Scott"
    a = true
    a = null
    a = undefined
    a = {}
    a = function(){}
   // a = []

console.log(a, typeof a)
console.log(a)
/* 
    ? Object and Array are of type object, 
    ? so use Array.isArray method to findout
    ? if some variable is an array
*/

var x ={}
var y = []

console.log(typeof x == typeof y)

console.log(Array.isArray(x))
console.log(Array.isArray(y))
//Static Typing 
// bool i = true
 // i =10 // invalid castiing

//  var message = "hello"

//  var x =20

//      message ="Hey"

//      console.log(message)