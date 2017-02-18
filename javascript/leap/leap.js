//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
  this.year = input;
};

Year.prototype.isLeap = function () {
  if (this.isEvenlyDivisibleBy4()) {
    if (this.isEvenlyDivisibleBy100()) {
      if (this.isEvenlyDivisibleBy400()) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

Year.prototype.numberIsFloat = function (n) {
  return Number(n) === n && n % 1 !== 0;
};

Year.prototype.isEvenlyDivisibleBy4 = function () {
  return !(this.numberIsFloat(this.year / 4));
};

Year.prototype.isEvenlyDivisibleBy100 = function () {
  return !(this.numberIsFloat(this.year / 100));
};

Year.prototype.isEvenlyDivisibleBy400 = function () {
  return !(this.numberIsFloat(this.year / 400));
};

module.exports = Year;
