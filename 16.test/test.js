// console.log(multiply(2)(3)(4)) //24

// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z
//         }
//     }
// }

// var a =10
// var b =a
// a =20
// console.log(a)
// console.log(b)

// var a = [1,2]
// var b = a
// a.push(3)
// console.log(a)
// console.log(b)

// // // [1,2,3] ,[1,2]
// // // [1,2,3], [1,2,3]


// var a = [1,2]
// var b = a
// a = [1,2,3]
// console.log(a)
// console.log(b)

// [1,2,3] ,[1,2]
// [1,2,3], [1,2,3]

// var output = (function(x){
//     delete x
//     return x
// })(1)

// console.log(output)

// // undefined
// // error
// // blank output
// // 1

// var output1 = (function(x){
//     delete x
//     return x
// })({a:1})

// console.log(output1)

// var output2 = (function(x){
//     delete x.a
//     return x
// })({a:1})

// console.log(output2)

// How to make an array empty

// var array = ['a', 'b', 'c', 'd', 'e', 'f']

// // Method 1
// //array =[]

// // Method 2
// //array.splice(0, array.length)

// //Method 3
// //array.length =0

// //Method 4
// // var length = array.length
// // for(var i=0; i<length; i++){
// //     console.log(i, length)
// //     array.pop()
// //}

// // //Method 5
// // for( ;array.length>0;){
// //     array.pop()
// // }

// //Method 6
// // while(array.length){
// //     array.pop()
// // }
// console.log(array)
// ternary operator
// var a=10
// var message = a>10 ? "Its a huge Number" : "Its a samll number"
// console.log(message)

// function one(){
//     return {
//         a : 1
//     }
// }


// function two(){
//     return 
//     {
//         b : 1
//     }
// }

// console.log(one())
// console.log(two())

// console.log(1==1)
// console.log(1=='1') // == will only compare values
// console.log(1==='1') // === will compare value and type

// console.log(1!=1)
// console.log(1!='1')
// console.log(1!=='1')

'use strict'
 var a =10
console.log(a)

function b(){
    // 'use strict'
     var c=20
     console.log(c)
}

b()


function sample(){
    console.log(this)
}

sample()