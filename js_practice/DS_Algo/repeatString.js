// write a function that takes a string and num, string repeats num times

// function repeatString(str, num) {
//     let repeatStr = "";

//     while (num > 0){
//         repeatStr += str;
//         num--;
//     }
//     return repeatStr;
// }

// repeatStringNumTimes("abc", 3);

// SOLUTION #2: Recursive

function repeatString(str, num){
    let repeatedStr = ""
    
    if (num < 0) {
        return "";
    } else {
        return repeatedStr + (repeatString(str, num -1))
    }
}

repeatStringNumTimes("abc", 3);