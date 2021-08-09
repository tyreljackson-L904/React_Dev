// Declare a function and log value to console
// function basicFunction() {
//     console.log("This function prints to console")
// }

// basicFunction() // Function call

// Declare teh same function as above as a arrow function
// const basicFunction = () => {
//     console.log("This is an arrow function")
// }

// basicFunction()

// // Declare a function that takes a single param
// const singleArgFunction = (name) => {
//     console.log(name)
// }

// singleArgFunction("Tyrel")

// // Declare a function that takes in two params
// const doubleParamFunc = (firstName, lastName) => {
//     console.log(firstName + " " + lastName)
// }

// doubleParamFunc("Tyrel", "Jackson")

// // Declare a function that takes one param, pass in two
// const anotherFunction = first => {
//     console.log(first)
// }

// anotherFunction("first", "second")

// // function that takes two params, pass in one
// const singleParam = (first, second) => {
//     console.log(first, second)
// }

// singleParam("first param only")

// // function that returns the sum of two numbers
// const sumOfTwo = (a, b) => {
//     return a + b
// }

// console.log(sumOfTwo(12, 3))

// // write the same function as above with implicit return
// const implicitReturn = (a, b) => a + b 

// console.log(implicitReturn(22, 7))

// // write a function that includes an array
// const arrayFunction = () => {
//     const myArr = [1, 2, 3, 4, 5, 6]
//     return myArr.map(newArray => newArray * 2)
// }

// // console.log(myArr) //// Scope is the issue, returns undefined

// const myArray = [1, 2, 3, 4, 5, 6]

// const newArray = myArray.map(num => num * 4)

// console.log(newArray) // returns input 

// var newCar = {
//     make: "Honda",
//     model: "Civic",
//     color: "brown",
//     year: 1997
// }
// console.log(newCar.color)

// 2D dimensional arrays

// const myNumbers = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// const subsetNumbers = myNumbers[1][1]
// console.log(subsetNumbers)

// Multi Dimensional Arrays

// myNumbers = [[1],[1,2,3],[4,[5],6],7]

// const numberSubset = myNumbers[2][1][0] // 5 - you are going 3 levels deep
// console.log(numberSubset)

// loop over an array for loop

