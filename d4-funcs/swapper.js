const findKeyByValue = function (object, keyInput) {
  for (let element in object) {
    if (element === keyInput) {
      return  object[keyInput]; 
    }
  }
  return undefined; 
}; 


const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!'); 
  let newValue1 = findKeyByValue(object1, key1);
  let newValue2 = findKeyByValue(object2, key2);
  object1[key1] = newValue2; 
  object2[key2] = newValue1; 
  console.log('object1: ', object1)
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });
