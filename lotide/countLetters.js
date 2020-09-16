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

console.log(countLetters("the quick fox jumped over the lazy dog"));


//You can use for...of loops with strings.


// Therefore countLetters("lighthouse in the house") would return:


// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }