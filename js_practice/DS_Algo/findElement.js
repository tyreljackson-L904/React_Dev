// Create a function that looks through an array and finds the first element that passes a "truth test"

function findElement(arr, func) {

    for (let i =0; i < arr.length; i++) {
      let num = arr[i] 

      if (func(num)) {
          // num = 1, 2
        return num;
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);