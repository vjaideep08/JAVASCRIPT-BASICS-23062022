var person = {}

// 1st Way
person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

//2nd way
var cityName = "city"
person[cityName] ="Boston"

//3rd Way
person.email = "Scott@ef.com"

//4th way 

Object.defineProperty(person, "age", {
    value: 46,
    writable: false
})

person.age = 49

person.address = {}

person.address.state ="Massachusetts"
person.address.country = "USA"

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])
console.log(person["cityName"])
console.log(person[cityName])
console.log(person.email)
console.log(person.age)
console.log(person.address.state)
console.log(person.address.country)


var student = {
    id:1,
    name: "Scott",
    isAdmin: true,
    department: null,
    branch: undefined,
    address: {
        city: "Boston",
        country: "USA"
    },
    getName: function(){
        return this.name
    },
    subjects: ["Maths", "Astronomy", "Physics"]
}

console.log(student.id)
console.log(student.name)
console.log(student.address.city)
console.log(student.getName())
console.log(student.subjects)