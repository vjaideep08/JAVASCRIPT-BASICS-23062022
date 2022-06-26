// console.log("one")
// setTimeout(function(){
//     console.log("two")
// }, 3000)
// console.log("three")

// // using Promises

// function printNumbers() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("two")
//         }, 3000)
//     })
// }
// console.log("one")
// printNumbers().then(function(data){
//     console.log(data)
//     console.log("three")
// })


function getData(){
    return new Promise(function(resolve, reject){
        // getching the data from database
        var count = 2
        if(count>1){
            setTimeout(function(){
              resolve({id:1, name: "Scott"})  
            }, 3000)
        } else {
            reject("there is no data available")
        } 
    })
}

getData()
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data));

/*
    ? Async & Await
*/
function getnumberTwo(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Two")
        }, 3000)
    })
}

function getMessage(){
    return "Welcome to async and await"
}

// async await 

async function printNumbers(){
    var two = await getMessage()
    console.log("One")
    console.log(two)
    console.log("Three")
}

printNumbers()
