const nameInverter = function(name) {
  if (name === '') {
    return '';
  }
  const splitAndFlip = name.trim().split(' ').reverse().join(", ");
  return splitAndFlip
}

module.exports = nameInverter;