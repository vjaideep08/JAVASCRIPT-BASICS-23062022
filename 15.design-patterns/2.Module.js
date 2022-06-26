// var Mdule = (function(){

// })()

// console.log(Module)

// private Methods

// var Mdule = (function(){
//     var privateMethod = function(){
//         // Private Method
//     }

//     var publicMethod = function(){
//         // Private Method
//     }
// })()

// console.log(Module)

// Understand Return

// var Module = (function(){
//     var privateMethod = function(){
//         // Private Method
//     }
//     return {
//         message: "This is module pattern",
//         publicMethod: function(){

//         }
//     }
// })()

// console.log(Module)

// Anonymous Object Literal

// var Module = (function(){
//     var privateMethod = function(){

//     }

//     return {
//         publicMethodOne : function(){

//         },
//         publicMethodTwo : function(){

//         },
//         publicMethodThree : function(){

//         }
//     }
// })()

// console.log(Module)

// Locally Scoped Object Literal 

// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObj = {}
//     myObj.someMethod = function(){

//     }
//     return myObj
// })()

// console.log(Module)

// Stacked Locally Scoped Object Literal 

// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObj = {
//         someMethod: function(){

//         },
//         anotherMethod: function(){

//         }
//     }

//     return myObj
    
// })()

//console.log(Module)

// Revealing Module Pattern

// var Module = (function(){
//     var message ="hello"
//     var getMessage = function(){

//     }
//     var sayHello = function(){

//     }
//     var someMethod = function(){

//     }
//     // return {
//     //     sayHello: sayHello,
//     //     someMethod: someMethod
//     // }
//     // return {
//     //     sayHello, someMethod
//     // }
//     return {
//         say: sayHello,
//         some: someMethod
//     }
// })()

// console.log(Module)

// Accessing Private Methods

var Module = (function(){

    var privateMethod = function(message){
        console.log(message)
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        publicMethod: publicMethod
    }
})()

console.log(Module)
Module.publicMethod("I am able to access the private method")