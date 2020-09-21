const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2
assert.isFalse(shouldBuyCar);

describe("#shouldBuyCar()", function() {
  const shouldBuy = shouldBuyCar;

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    assert.isFalse(shouldBuy);
  });
  it("If the car's color is pink then return true", function () {
    const car = {
      color: "pink"
    };
    
    assert.isFalse(shouldBuy)
  });
  it ("if other color", function() {
    const car = {
      color: "white",
      litresPer100km: 10,
      price: 4500
    }
    if (car.color !== "pink" && car.litresPer100km <= 11 && car.pricePer100km <= 5000 ) {
      assert.isFalse(shouldBuy)
    }
  })

});
// const goodLitres = car.litresPer100km && car.litresPer100km >= 6 && car.litresPer100km <= 11;
// const goodPrice = car.price && car.price <= 5000;

// If the car's color is pink then return true.
// Unless it's type is hatchback, then we always return false.
// If it's any other color or type, it must have:
// between 6 and 11 litres/100km
// and be under or equal to $5,000
// If no car gets passed into the function, it should return undefined.