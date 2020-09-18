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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0] + word[2]);
const results2 = map(words, word => word.slice(2));
const results3 = map(words, word => word + "oo");
  



console.log(results1);
console.log(results2);
console.log(results3);

console.log(assertEqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertEqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]));


