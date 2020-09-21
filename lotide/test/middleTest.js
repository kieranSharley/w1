const middle = require("../middle.js")
const assertArraysEqual = require("../assertArraysEqual.js")


console.log(assertArraysEqual(middle([1]), [1] ))// => []
console.log(assertArraysEqual(middle([1, 2]), [] )) // => []
console.log(assertArraysEqual(middle([15, 16, 17]), [16] )) // => [16]
console.log(assertArraysEqual(middle([11, 12, 13, 14, 15]),[13] )) // => [13]
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]))