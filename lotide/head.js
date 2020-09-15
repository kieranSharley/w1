const head = function(array){
  newArray = 0
  newArray = array[0]
  return newArray;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

console.log(assertEqual(head([5,6,7]), 5))
;
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));