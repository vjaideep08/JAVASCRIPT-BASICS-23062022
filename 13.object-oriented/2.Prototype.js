function Student(){
    this.name= "Scott"
    this.gender="Male"
}

Student.prototype.city = "Boston"

var stuObj1 = new Student()
//stuObj1.city="Boston"
console.log(stuObj1)

var stuObj2 = new Student()
console.log(stuObj2)


function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + " "+ this.lastName
    // }
}

Person.prototype.getFullName = function(){
    return this.firstName + " "+ this.lastName
}

var person1 = new Person("Scott", "Desatnick")
console.log(person1)

var person2 = new Person("Adam", "Colson")
console.log(person2)