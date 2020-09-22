const eqArrays = require("./eqArrays")
const eqObjects = require("./eqObjects")


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {

    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
// const a1 = {one: 1, two: ["1", "2", "3"]};
// const a2 = { one: 1, two: ["1", "2", "3"]};
// console.log(assertObjectsEqual(a1, a2)); // => pass

// const cd = { c: "1", d: ["2", 3] };
// const cd3 = { c: "1", d: ["2", 5] };
// console.log(assertObjectsEqual(cd, cd3)); // => fail

module.exports = assertObjectsEqual