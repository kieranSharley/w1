

const tail = function(array) {

  let newArray = array.reverse();
  return newArray[0];
};

module.exports = tail;

//console.log(tail([1]));
// console.log(tail([1,2,3,4,5]))
// module.exports = tail