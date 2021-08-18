// Return an array of the largest number from each of provided sub-array.

// 1.
function largestOfFour(arr) {
    // 2. 
    let result = []; // empty, 
    // 3. i = 1
    for (let i = 0; i < arr.length; i++) {
        // 4. largestNumber = 13
        let largestNumber = arr[i][0];
        // 5. j = 3
        for (let j = 1; j < arr[i].length; j++) {
            // 6.
            if (arr[i][j] > largestNumber) {
                // 7. i = 0, 4,
                largestNumber = arr[i][j];
            }
        }
        // 8. [5, 27]
        result[i] = largestNumber;
    }
    // 9.
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// 1. declare a function that takes a single param, arr
// 2. declare a variable to hold the largest number from each array that we will return
// 3. Create an outer loop to iterate through the outer array.
// 4. Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
// 5. Create inner loop to work with the sub-arrays.
// 6. Check if the element of the sub array is larger than the currently stored largest number. 
// 7. If so, then update the number in the variable.
// 8. Set the result to the largest number array
// 9. Return the array result

// // SOLUTION #2: DECLARATIVE APPROACH

function largestOfFour(arr) {
// 1.
  return arr.map(function(group) {
    // 2. 
    return group.reduce(function(prev, current) {
    // 3. 
      return current > prev ? current : prev;
    });
  });
}

// 1. we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
// 2. within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
// 3. the callback function passed to the reduce method takes the previous value and the current value and compares the two values
// 4. if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item

// // SOLUTION #3: DECLARATIVE APPROACH
function largestOfFour(arr) {
    return arr.map(newArr => Math.max(...newArr));
}

// 1. We build a special callback function (using the Function.bind method), that works just like Math.max but also has Function.prototype.apply's ability to take arrays as its arguments.

// // SOLUTION #4: RECURSIVE APPROACH
function largestOfFour(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}