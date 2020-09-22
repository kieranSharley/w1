const middle = require("../middle.js")
//const assertArraysEqual = require("../assertArraysEqual.js")

const assert = require('chai').assert;
const { Assertion } = require('chai');


describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns 6 for [5,6,7]", () => {
    assert.deepEqual(middle([5, 6, 7]), [6]);
  });
  it("expects [2,3] for[1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1,2,3,4]) [2, 3]);
  });
});

