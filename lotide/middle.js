
const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")


const middle = function(array) {
let total = array.length;
let middleOf1 = Math.round(total/2)
let middleOf2 = Math.floor(total/2)
let output = []
if (total < 3){
  return []
} else if (total % 2 === 0) {
  output.push(array[middleOf1-1], array[middleOf2])
} else if (total % 2 !== 0) {
  output.push (array[middleOf1-1])
}return output;
}



module.exports = middle

// //TestAssertions
// console.log(assertArraysEqual(middle([1]), [1] ))// => []
// console.log(assertArraysEqual(middle([1, 2]), [] )) // => []
// console.log(assertArraysEqual(middle([15, 16, 17]), [16] )) // => [16]
// console.log(assertArraysEqual(middle([11, 12, 13, 14, 15]),[13] )) // => [13]
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])) // => 