// The function will return a "slice of the array with elements 
// taken from the beginning." It should keep going until the 
// callback/predicate returns a truthy value.


const takeUntil = function(array, callback) {
  let newArray = [];
 for (let elem of array){

    if (callback(elem)) { 

      return newArray}

  else {
    newArray.push(elem);
  }
}return newArray;
}


module.exports = takeUntil;



// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x === 5);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
