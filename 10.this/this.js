console.log(this)

function sample(){
    console.log(this)
}

sample()


// var obj = {
//     fname: "Scott",
//     getName: function(){
//         console.log(this)
//         this.fname = "Desatnick"
//         console.log(this)

//         var updateName = function(){
//             this.fname = "Great Scott"
//             console.log(this)
//         }
//         updateName()
//     }
// }

// obj.getName()

// // use self varaible

// var obj = {
//     fname: "Scott",
//     getName: function(){
//         var self = this
//         console.log(self)
//         self.fname = "Desatnick"
//         console.log(self)

//         var updateName = function(){
//             self.fname = "Great Scott"
//             console.log(self)
//         }
//         updateName()
//     }
// }

// obj.getName()

// pass this as a parameter to inner function

// var obj = {
//     fname: "Scott",
//     getName: function(){
//         console.log(this)
//         this.fname = "Desatnick"
//         console.log(this)

//         var updateName = function(value){
//             value.fname = "Great Scott"
//             console.log(value)
//         }
//         updateName(this)
//     }
// }

// obj.getName()

// Use bind, call and apply

var obj = {
    fname: "Scott",
    getName: function(){
        console.log(this)
        this.fname = "Desatnick"
        console.log(this)

        var updateName = function(){
            this.fname = "Great Scott"
            console.log(this)
        }
        // var getData = updateName.bind(this)
        // getData()
        // updateName.call(this)
        updateName.apply(this)
    }
}

obj.getName()


var student = {
    id: 1,
    getStudent: function(){
        setTimeout(function(){
            console.log(this)
        }.bind(this), 2000)
    }
}

student.getStudent()
