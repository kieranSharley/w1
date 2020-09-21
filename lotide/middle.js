const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertEqArrays = function(actual, expected) {
  if (middle(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
let total = array.length;
let middleOf1 = Math.round(total/2)
let middleOf2 = Math.floor(total/2)
let output = []
if (total < 3){
  return
} else if (total % 2 === 0) {
  output.push(array[middleOf1-1], array[middleOf2])
} else if (total % 2 !== 0) {
  output.push (array[middleOf1-1])
}return output;
}
// console.log(total) 
// console.log(middleOf) 
// if (middleOf = )
// }




// //TestAssertions
console.log(middle([1]), [] )// => []
console.log(middle([1, 2]), [] ) // => []
console.log(middle([15, 16, 17]), [16] ) // => [616]
console.log(middle([11, 12, 13, 14, 15]),[13] ) // => [13]
console.log(middle([1, 2, 3, 4]), [2, 3]) // => [
console.log(middle([1, 2, 3, 4, 5, 6]),[3, 4]) // => [