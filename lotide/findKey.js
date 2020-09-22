const egfindKey = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
// x => x.stars === 2) // => "noma"

//~~~~~~~~~~~~~~~~~~~~~~~
const findKey = function(object, matchKey){
 // const theMatch;
  for (let key in object) {
    if (matchKey(object[key])) {
      return key;
    }
  }
}
console.log(findKey(egfindKey, x => x.stars === 20))


module.exports = findKey;

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));
// console.log(assertEqual("five", "five"));
// console.log(assertEqual(1,2));
