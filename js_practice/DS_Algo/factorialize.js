// Return the factorial of the given integer
// If the integer is represented with the letter n, a factorial is the product of all positive integers less tha or equal to n.
// Factorials are often represented with the shorthand notation n!

function factorialize(num) {
    // you cannot factorialize a negative integer, returns false
    if (num < 0) {
      return -1;
      // factor of 0 = 1
    } else if (num === 0) {
      return 1;
      // factorialize num and its next smallest number
    } else {
      return (num * (factorialize(num - 1)));
    }
  }
  
  console.log(factorialize(9));