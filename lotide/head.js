const assertEqual = require('./assertEqual');


const head = function(array){
  newArray = 0
  newArray = array[0]
  return newArray;
}


// console.log(assertEqual(head([5,6,7]), 5));
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

module.exports = head;