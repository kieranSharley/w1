const tail = require("../tail.js")
const assert = require('chai').assert;
const { Assertion } = require('chai');

describe("#tail", () => {
  it("returns  for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
  it("returns 7 for [5,6,7]", () => {
    assert.strictEqual(tail([5,6,7]), 7)
  });
})



//console.log(tail([1,2,3]));