// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
//   } else if (actual !== expected) {
//     return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//   }
// };


const countLetters = function(aString) {
  let results = {};
  for (const char of aString) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

//console.log(countLetters("the quick fox jumped over the lazy dog"));

module.exports = countLetters