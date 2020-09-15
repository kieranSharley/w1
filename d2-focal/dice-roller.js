
for (let j = 0; j < process.argv.length; j++) {
  console.log(j + ' -> ' + (process.argv[j]));
}
let userText =  process.argv[2]

const diceRoller = function(numOfRolls){
 let results = [];
  for (let i = 0; i < numOfRolls; i++){
  let diceRoller = Math.floor(Math.random()*6)+1;
results.push(diceRoller)
  } return results
}
  
console.log(diceRoller(userText))

