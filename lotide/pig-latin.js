for (let j = 0; j < process.argv.length; j++) {
  console.log(j + ' -> ' + (process.argv[j]));
}
let array =  process.argv.slice(2);
//console.log(array)

const tail = function(array) {
  let newTail = array.slice(1);
  return newTail;
};

const head = function(array) {
  let newHead = array[0];
  return newHead;
};
const pLatin = [];
for (let i = 0; i < array.length; i++) {
  pLatin.push(tail(array[i]) + head(array[i]) + "ay");

}
console.log(pLatin.join(' '));
