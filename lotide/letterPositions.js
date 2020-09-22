
const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")


const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;


//assertArraysEqual(letterPositions("hello").h, [0]);
