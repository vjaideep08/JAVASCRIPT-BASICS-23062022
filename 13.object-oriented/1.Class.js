//Class
function Student(){

}

// Instance of the class

function Person(){

}


var person1 = new Person() // person1 is an instance
var person2 = new Person() // person2 is an instance

// Constructor

function Order(){
    console.log('Order is initiated')
}

var order1 = new Order() // Order() is constructor

// Properties
function Customer(gender){
    this.gender = gender // this.gender is a property
}

var customer1 = new Customer('Female')
var customer2 = new Customer('Male')

console.log(customer1)
console.log(customer2)


