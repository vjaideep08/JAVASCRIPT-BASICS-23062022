/*
    ? var is function scoped
*/
// function sample(){
//     console.log(foo)

//     if(true){
//         var foo ="blue"
        
//     }
//     console.log(foo)
// }

// sample()
// console.log(foo) // ReferenceError: foo is not defined

/*
    ? let and const are block scoped
*/

// function display(){
//     if(true){
//         var foo ="Hello"
//         let bar = "How are you "
//         const baz ="i am fine"

//         console.log(foo)
//         console.log(bar)
//         console.log(baz)
//     }

//     console.log(foo)
//    //  console.log(bar) // ReferenceError: bar is not defined
//    //  console.log(baz) //ReferenceError: bar is not defined
// }

// display()

// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)

// for(let i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i) //ReferenceError: i is not defined



function test(){
    let foo
        foo =101
    //let foo =200 // can't redcalre block scoped variable
    console.log(foo)

    const bar = 10
         // bar =30 // TypeError: Assignment to constant variable.
    console.log(bar)
}

test()

// const can't control object data types
const names = ["Scott", "Adam", "Tuan"]
names.push("Uma")
names.pop()
console.log(names)

const student = {name:"Scott"}
student.name="Great Scott"
student.city="Boston"
delete student.city
console.log(student)