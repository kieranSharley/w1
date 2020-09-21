//Sort numerically and ascending:
var myarray=[25, 8, 7, 41]
console.log(myarray)
myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
    return a - b
})

console.log(myarray)

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// Write a sorting function (sometimes called a custom comparator), 
// that sorts the above array first by the name ascending alphabetically, 
// and in cases where the names are equal sort by descending age