

const eqArrays = require("./eqArrays")





const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
  }

  for (let key of keys) {
    const value1 = object1[key];
    const value2 = object2[key];
  
    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
    
  }return true;
};

module.exports = eqObjects

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const cd3 = { c: "1", d: ["2", 3] };
// console.log(eqObjects(cd, cd3)); // => true


// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false