const eqArrays = require("./eqArrays.js")

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
// console.log(assertArraysEqual(["1", "2", "5"], ["1", "2", "5"]));
// console.log(assertArraysEqual(["1", "2", "3","4"], ["1", "2", "3"])); // => false

module.exports = assertArraysEqual