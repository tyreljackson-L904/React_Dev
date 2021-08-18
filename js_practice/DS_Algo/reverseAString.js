// // given a string, write a function that will reverse the str and return the reverse string

// 1. 
function reverseAString(str) {
    // 2.
    let reversedStr = ""
    // 3.
    for (i = str.length -1; i >=0; i--) {
        // 4.
        reversedStr += str[i]
    }
    // 5.
    return reversedStr;
}
// 0.
console.log(reverseAString("Tyrel"))

// // 1. declare a function that takes a single param
// // 2. declare an empty string to hold the value of the returned reversed string
// // 3. loop over the passed in string starting from the end, return each index to the new string variable
// // 4. return the reversed string
// // 0. print to console the reverse of the passed in string

// // reverse a string in a single line return statement

function reverseAString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseAString("Tyrel"))

