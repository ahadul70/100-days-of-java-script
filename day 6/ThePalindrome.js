// make a palindrome of a string






const isPali = (str) => {
    str = str.toLowerCase().replace(/\W/g, "")
    let r_str = str.split("").reverse().join("")
    console.log(r_str);
    return str===r_str?true:false
}

console.log(isPali("A man, a plan, a canal Panama"));
console.log(isPali("racecar"));
console.log(isPali("hello"));