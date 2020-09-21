const myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);
//~~~~~~~~~~~~~
const findWaldo = function(names, found) {
  //refactor to use .foreach instead of for loop
  //array1.forEach(element => console.log(element));
// = a, b, c
  for (let i = 0; i < names.length; i++) {
    let name = names[i];    
    if (name === "Waldo") {
// Modify the findWaldo function so that it passes the index 
// array to the callback

      found(i);   // execute callback
    }
  }
}
//Modify the actionWhenFound function to let it receive and use the index
const actionWhenFound = function(index) {
  console.log(`found him at ${index}!`);
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`found him at ${index}!`);
});
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

