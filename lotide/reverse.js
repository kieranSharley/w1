// node reverse.js hello goodbye
// olleh
// eybdoog
//console.log(splitIt)
for (let j = 0; j < process.argv.length; j++) {
  console.log(j + ' -> ' + (process.argv[j]));
}
let userText =  process.argv[2]
const reverse = function(string){
let reversed = ""
for (let i = string.length-1; i >= 0; i--){
  reversed += string[i]
}
return reversed
}

console.log(reverse(userText))

