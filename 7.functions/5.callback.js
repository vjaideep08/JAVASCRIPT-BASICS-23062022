/*
     * Callback Function 
     ? Passing a function as parameter to another function 
*/
function display(value){
    console.log(value)
}

var test = function(){

}

display(test)

display(function(){
    
})