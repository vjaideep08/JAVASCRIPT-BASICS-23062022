// javascript Object
var JSObj = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed : false
}

// JSON Object

var JSONObj = {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}


var student = {
    name: "Scott",
    email: "Scott@ef.com",
    city: "Boston"
}

var studentStringify = JSON.stringify(student)

console.log(studentStringify, typeof studentStringify)

var studentParse = JSON.parse(studentStringify)

console.log(studentParse, typeof studentParse)