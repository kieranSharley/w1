

// for (let j = 0; j < process.argv.length; j++) {
//   console.log(j + ' -> ' + (process.argv[j]));
// }
let userText =  process.argv[2]
// console.log(userText)

const reverse = function(str){
  let reversed = ""
  for (let i = str.length-1; i >= 0; i--){
    reversed += str[i]
  }
  return reversed
}

//console.log(reverse(userText))

module.exports = reverse;