var Gigasecond = function (date) {
  this.inputDate = date;
};

Gigasecond.prototype.date = function () {
  let gigasecondsMili = 1000000000 * 1000;
  let gigasecondsSum = gigasecondsMili + this.inputDate.getTime();

  return new Date(gigasecondsSum);
};

module.exports = Gigasecond;
