
const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0] + word[2]);
// const results2 = map(words, word => word.slice(2));
// const results3 = map(words, word => word + "oo");
  



// console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
// console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

module.exports = map
