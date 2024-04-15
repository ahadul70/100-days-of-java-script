//*-
//* Programming Question: Hash Tag Generator
//*.
//? You are required to implement a function generateHash that generates a hash tag from a given input string.
// //The hash tag should be constructed as follows:
// ? The input string should be converted to a hash tag format, where each word is capitalized and concatenated
// together without spaces.
// //? If the length of the input string is greater than 280 characters or if the input string is empty or
// contains only whitespace, the function should return false.
// //? Otherwise, the function should return the generated hash tag prefixed with #.
// //* Write a function generateHash to accomplish this task. T

const generateHash = (str) => {
  if (str.trim().length === 0 || str.length > 280) {
    return false;
  }

  str = str.split(" ");
  console.log(str, "This is after split");
  str = str.map((curElem) =>
    curElem.replace(curElem[0], curElem[0].toUpperCase())
  );
  console.log(str, "this is after the first letter is Capital letter");
  str = `#${str.join("")}`; // we use .join to join the rest of the word together there is a space in the bracket to show that we dont want any "," there
  console.log(str, "this is the final joining");
  return str;
};

console.log(generateHash("my name is ahadul islam"));

const generateHash2 = (str2) => {
  if (str2.trim().length === 0 || str2.length > 280) {
    return false;
    }
    
      str2 = str2.split(" ");
      console.log(str2, "This is after split2");
      str2 = str2.map((curElem) =>
        curElem.charAt(0).toUpperCase()+curElem.slice(1)                         
    );
     console.log(str2, "This is after turing 2 in to uppercase");
     str2 = `#${str2.join("")}`; // we use .join to join the rest of the word together there is a space in the bracket to show that we dont want any "," there
     console.log(str2, "this is the final joining");
     return str2;
      
};
console.log(generateHash2("my name is ahadul islam"));

//o/p = "#MyNameIsThapaTechnical"
