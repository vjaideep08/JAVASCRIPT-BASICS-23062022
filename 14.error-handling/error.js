try {
    // code that may or may not throws error
}
catch {
    // code to be executed if an error occurs
}
finally {
    // code to be executed regardless of an error occurs or not
}

try {
    var output = getMessage()
    console.log(output)
} catch(err){
    console.log(err)
    console.log(err.name)
    console.log(err.message)
} finally {
    console.log('This will be executed always')
}


try {
    eval("alert('Hello'")
} catch(ex){
    console.log(ex)
    console.log(ex.name)
    console.log(ex.message)
}

// Throw 

try {
    var student = ["Scott", "Scott"] // getStudents(101)
    var studentCount = student.length
    if(studentCount >1){
        throw {
            id: 101,
            message: "Duplicate Records Found"
        }
    }
} catch(ex){
    console.log(ex)
}