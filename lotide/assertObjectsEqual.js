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

const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of keys) {
    const value1 = object1[key];
    const value2 = object2[key];
  
    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
    
  } return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {

    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const a1 = {one: 1, two: ["1", "2", "3"]};
const a2 = { one: 1, two: ["1", "2", "3"]};
console.log(assertObjectsEqual(a1, a2)); // => pass

const cd = { c: "1", d: ["2", 3] };
const cd3 = { c: "1", d: ["2", 5] };
console.log(assertObjectsEqual(cd, cd3)); // => fail

