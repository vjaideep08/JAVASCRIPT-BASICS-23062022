/*
    ? Splice - To add or remove elements
*/
// adding elements
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(2,0, "Lemon", "Kiwi")

console.log(fruits)

// Removing elements

var fruitsOne = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruitsOne.splice(0, 2);
console.log(fruitsOne)

// Adding and Removing 

var fruitsTwo = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruitsTwo.splice(0, 2, "Lemon");
console.log(fruitsTwo)

/*
    ? Slice - To add or remove elements
*/

var fruitsThree = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var output1 = fruitsThree.slice(0,3)
console.log(output1)

var fruitsFour = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var output2 = fruitsFour.slice(-4, -2)
console.log(output2)

var fruitsFive = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var output3 = fruitsFive.slice(-1, -3)
console.log(output3)

