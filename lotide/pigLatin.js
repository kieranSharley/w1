// for (let j = 0; j < process.argv.length; j++) {
//   console.log(j + ' -> ' + (process.argv[j]));
// }
//let userInput =  process.argv.splice(2,0);

const pigLatin = function(arr) {
  let newArr = arr.split(" ");
  result = [];
  for (let i = 0; i < newArr.length; i++) {
    let newTail = newArr[i][0];
    let newHead = newArr[i].slice(1);
    let joined = (newHead + newTail + "ay");
    result.push(joined)
  }
  return result.join(" ")
}


 module.exports = pigLatin;
