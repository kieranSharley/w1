const assertArraysEqual = require("../assertArraysEqual.js")

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "5"], ["1", "2", "5"]));
console.log(assertArraysEqual(["1", "2", "3","4"], ["1", "2", "3"])); // => false
