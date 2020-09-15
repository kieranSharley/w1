const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = "";
    if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      output = words;
    } else if (i % multiples[1] === 0) {
      output += words[1];
    } else if (i % multiples[0] === 0) {
      output =  words[0];
 
    } else if (i) {
      output = i;
    }
    console.log(output);
  }
};
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));


