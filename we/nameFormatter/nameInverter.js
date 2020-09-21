const nameInverter = function(name) {
  if (name === '') {
    return '';
  }


const splitAndFlip = name.trim(", ").split(' ').reverse("")
//console.log("beforTostring", splitAndFlip)
//console.log("toString", splitAndFlip.toString())
return splitAndFlip
}
console.log(nameInverter("Kieran Sharley"))
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

module.exports = nameInverter;