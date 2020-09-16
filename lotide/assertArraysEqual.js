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
const assertEqArrays = function(actual, expected){
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
  else {console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)}
}
//   correct = true
//   for (let i = 0; i < actual.length; i++){
//     if (actual.length !== expected.length){ correct = false ;} 
//     if (actual[i] !== expected[i]){ correct = false;}
//   }
//   if (correct === true){console.log("Assertion passed")
// } else if (correct === false) (console.log("Assertion failed"))

// }
console.log(assertEqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(assertEqArrays(["1", "2", "5"], ["1", "2", "5"]))
console.log(assertEqArrays(["1", "2", "3","4"], ["1", "2", "3"])) // => false
