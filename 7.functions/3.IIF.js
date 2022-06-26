// var add = function(a,b){
//     return a+b
// }
(function(){
    console.log("I am Immediately Invoked Function")
})();

(function(){
    console.log("I am Immediately Invoked Function")
}());

var output = (function(a,b){
    return a +b
})(10, 20)

console.log(output)

// function confirm(){
//     return "Here is the confirmation"
// }

var message = (function confirm(){
    return "Here is the confirmation"
})()

console.log(message)
