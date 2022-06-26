function greetParent(message){
    var city = "Boston"
    return function greetChild(name){
        return message + ' to ' + city + ' Mr.' + name
    }
}

var sayHello = greetParent("Hey")
console.log(sayHello)

var wishMe = sayHello("Scott")
console.log(wishMe)