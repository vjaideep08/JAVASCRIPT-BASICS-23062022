function One(){
    return function Two(){
        return function Three(){
            return "Four"
        }
    }
}

var output1 = One()
var output2 = output1()
var output3 = output2()
console.log(output3)

// Four

console.log(One()()())


function getData(){

    var name ="Scott"

    var city = "Boston"

    var getUser = function(){
        return name + " " + city
    }

    // var getUser = function(){
    //     return function(){
    //         return name + " " + city
    //     }
    // }

    // var user = getUser()
    // return user

    return getUser()
}

console.log(getData())