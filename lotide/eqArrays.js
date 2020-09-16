// Implement a function eqArrays which takes in two 
// arrays and returns true or false, based on a perfect match.
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if (arr1.length !== arr2.length){  return false ;} 
    if (arr1[i] !== arr2[i]){  return false;}
  }
  return true;
}
 console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
 console.log(eqArrays(["1", "2", "5"], ["1", "2", "3"])) // => false
 console.log(eqArrays(["1", "2", "3","4"], ["1", "2", "3"])) // => false



