const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter()', function() {
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("shoud return a single name when passed a single name", function() {
    const actual = "name";
    const expected = "name";
    assert.equal(nameInverter(actual), expected);
  })
  it("shoud return return a last-name, first-name when passed a first and last-name", function() {
    const input = "first last";
    const output = "last, first";
    assert.equal(nameInverter(input), output);
  })
});

/*return an empty string when passed an empty string
input: ""
output: ""
return a single name when passed a single name
input: "name"
output: "name"
return a single name when passed a single name with extra spaces
input: " name "
output: "name"
return a last-name, first-name when passed a first and last-name
input: "first last"
output: "last, first" */