var data = [
            1,
            "Scott",
            true,
            null,
            undefined,
            {name: "Scott"},
            function(name){
                return name
            },
            ["Red", "Green", "Blue"]
           ]

// Access the function 
// pass object name as parameter
// print Scott

console.log(data[6](data[5].name))

// Access the function
// pass object name as parameter
// Access the array value blue
// Print "Scott Likes Blue"

console.log(data[6](data[5].name + " Likes " + data[7][2]))