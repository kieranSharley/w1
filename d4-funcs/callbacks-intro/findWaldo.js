

const findWaldo = function(names, found) {
  names.forEach(function(name){
    if (name === "Waldo") {
      found();
    }
  })
}

const actionWhenFound = function() {
  console.log(`found him!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);