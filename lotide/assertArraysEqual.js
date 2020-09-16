//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
//   } else if (actual !== expected) {
//     return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//   }
//};
const assertEqArrays = function(arr1, arr2){
  correct = true
  for (let i = 0; i < arr1.length; i++){
    if (arr1.length !== arr2.length){ correct = false ;} 
    if (arr1[i] !== arr2[i]){ correct = false;}
  }
  if (correct === true){console.log("Assertion passed")
} else if (correct === false) (console.log("Assertion failed"))

}
console.log(assertEqArrays(["1", "2", "3"], ["1", "2", "3"]))
//console.log(assertEqArrays(["1", "2", "5"], ["1", "2", "3"])) // => false
//console.log(assertEqArrays(["1", "2", "3","4"], ["1", "2", "3"])) // => false
