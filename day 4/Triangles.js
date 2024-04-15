//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

const checkTriangleType = (a, b, c) => {
    if (a === b && b === c && a === c) return "all sides are same"
    
    if (a === b || b === c || a === c) return "two sides are same"
    
    return "no sides are equal"

}


console.log(checkTriangleType(3, 3,3)); // Output: "equilateral"
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"
