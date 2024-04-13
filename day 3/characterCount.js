//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

countChar=(word, char)  => {
    word = word.toLowerCase()
    char = char.toLowerCase()
    totalCount = word.split("").reduce((acc, curChar) => {
        if (curChar === char) {
            acc++
        }
        return acc;
    }, 0)
    console.log(totalCount);
    return totalCount;
    
}
console.log(countChar("mississippi" , "i"));
