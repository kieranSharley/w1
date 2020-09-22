
const without = function(array, itemsToRemove) {
  let output = array;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let item of itemsToRemove) {
      if (output[i] === item) {
        output.splice(i,1);
      }
    }
  } return output;
};

module.exports = without

// console.log(without([4,5,6],[4]));
// console.log(without([1,2,3],[1]));

