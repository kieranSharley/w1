const eqArrays = require("../eqArrays.js")
const assertEqual = require("../assertEqual.js")


console.log(eqArrays([ '2', 3 ], [ '2', 3 ])) // => true
console.log(eqArrays(["1", "2", "5"], ["1", "2", "3"])) // => false
console.log(eqArrays(["1", "2", "3","4"], ["1", "2", "3"])) // => false
console.log(eqArrays(["1", "2","4"], ["1", "2", "3"])) // => false
console.log(eqArrays(["1", "2","3"], ["3", "2", "1"])) // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
