//* Programming Question: Longest Word in a String
//*
//? Q: Write a function find Longest Word that takes a string as input and returns the longest word in the string. If there are
//multiple longest words, return the first one encountered.
//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.
//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.



const findthelongestWord = (str) => {
    if (str.trim().length === 0) {
        return false
    }
    strArr = str.split(" ").sort((a, b) => a.length - b.length)
    console.log(strArr);
    return strArr.at(-1)
}


console.log(
findthelongestWord("find the longest word the string remember to use everything you learned so far")
);
