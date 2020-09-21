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
const assertArrayaEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(assertArrayaEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArrayaEqual(["1", "2", "5"], ["1", "2", "5"]));
console.log(assertArrayaEqual(["1", "2", "3","4"], ["1", "2", "3"])); // => false
