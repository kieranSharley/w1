
// // Implement without which will return a subset of a given array, removing unwanted elements.
// // This function should take in a source array and a itemsToRemove array. 
// // It should return a new array with only those elements from source that are not present in the itemsToRemove array.
// // Here are a couple examples, but please don't limit your testing to just these scenarios:
// const assertEqArrays = function(arr1, arr2){
//   correct = true
//   for (let i = 0; i < arr1.length; i++){
//     if (arr1.length !== arr2.length){ correct = false ;} 
//     if (arr1[i] !== arr2[i]){ correct = false;}
//   }
//   if (correct === true){console.log("Assertion passed")
// } else if (correct === false) (console.log("Assertion failed"))

//months.splice(1, 1);


const without = function(array, itemsToRemove){
  let output = array
  for (let i = 0; i < itemsToRemove.length; i++){
for (let item of itemsToRemove) {
  if (output[i] === item) {
    output.splice(i,1);
  }

      } 
    } return output;
  }

  console.log(without([4,5,6],[4]))
  //console.log(without([1,2,3],[1]))
  // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
//console.log(without([1, 2, 3], [1, 2, 3]))
//const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"]));

