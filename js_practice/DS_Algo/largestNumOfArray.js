// Return an array of the largest number from each of provided sub-array.

// 1.
function largestOfFour(arr) {
    // 2. 
    let result = [];
    // 3.
    for (let i = 0; i < arr.length; i++) {
        // 4.
        let largestNumber = arr[i][0];
        // 5.
        for (let j = 0; j < arr[i].length; j++) {
            // 6.
            if (arr[i][j] > largestNumber) {
                // 7.
                largestNumber = arr[i][j];
            }
        }
        // 8.
        result[i] = largestNumber;
    }
    // 9.
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// 1. declare a function that takes a single param, arr
// 2. declare a variable to hold the largest number from each array that we will return
// 3. loop over each array
// 4. set a new largest number variable to the 