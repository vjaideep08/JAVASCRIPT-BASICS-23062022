var students = ["Scott", "Adam", "Tuan", "Uma"]

// using for loop
console.log('******* For Loop *******')

for(var i=0; i<students.length; i++){
   // console.log(i, students.length)
    console.log(students[i], i)
}

// using forEach loop
console.log('******* ForEach Method *******')
students.forEach(function(value, index){
    console.log(value, index)
})

// using map loop
console.log('******* Map Method *******')
students.map(function(value, index){
    console.log(value, index)
})

// using forEach loop
console.log('******* ForEach vs Map *******')

var forEachLoop = students.forEach(function(value, index){
    return value
})

var mapLoop = students.map(function(value, index){
    return [value]
})

console.log(forEachLoop)
console.log(mapLoop)

// for in
console.log('******* for in *******')
for(var index in students){
    console.log(index)
}

// for of
console.log('******* for of *******')
for(var student of students){
    console.log(student)
}

for(var [index, value] of Object.entries(students)){
    console.log(value, index)
}

for(var [index, value] of students.entries()){
    console.log(value, index)
}