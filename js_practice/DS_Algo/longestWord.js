// // Find the longest word in a string

// // Return the length of the longest word in a provided sentence
// // Response should be a number

/// SOLUTION #1 FOR LOOP
function longestWord(str) {
    // 1.
    let words = str.split(' ');
    // 2.
    let maxLength = 0;
    // 3.
    for (let i = 0; i < words.length; i++) {
        // 4.
        if (words[i].length > maxLength) {
            // 5.
            maxLength = words[i].length;
        }
    }
    // 6.
    return maxLength;
}

console.log(longestWord("This is a string with the longest word!"));

// // 1. split the str into seperate strings inside an array
// // 2. set the max length of a string
// // 3. iterate over the length of each word in the array
// // 4. if the length of the word is greater than 0
// // 5. set the value of max length to the length of that string
// // 6. return the number of the longest string in the sentence

/// SOLUTION #2 MATH.MAX
// Using the map function, return the same value as above

function longestWord(str) {
    let words = str.split(' ')
    let lengths = words.map(word => word.length)

    return Math.max(...lengths)
}

console.log(longestWord("This is a string with the longest word!"))

// SOLUTION #3 SORT()

function longestWord(str) {
    let words = str.split(' ');
    let sortedWords = words.sort((firstWord, secondWord) => secondWord.length - firstWord.length
    )
    console.log(sortedWords)
    return sortedWords[0].length
}

console.log(longestWord("This is a string with the longest word!"))