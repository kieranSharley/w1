
const assertEqual = require('./assertEqual')




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
}
//  console.log(eqArrays([ '2', 3 ], [ '2', 3 ])) // => true
//  console.log(eqArrays(["1", "2", "5"], ["1", "2", "3"])) // => false
//  console.log(eqArrays(["1", "2", "3","4"], ["1", "2", "3"])) // => false
//  console.log(eqArrays(["1", "2","4"], ["1", "2", "3"])) // => false
//  console.log(eqArrays(["1", "2","3"], ["3", "2", "1"])) // => false
//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS


module.exports = eqArrays;


