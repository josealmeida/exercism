var Hamming = function () {};

Hamming.prototype.compute = function (inputA, inputB) {
  let distance = 0;

  if (inputA.length === inputB.length) {
    for (var i = 0; i < inputA.length; i++) {
      if (inputA.charAt(i) !== inputB.charAt(i)) {
        distance++;
      }
    }
    return distance;
  } else {
    throw new Error('DNA strands must be of equal length.');
  }
};

module.exports = Hamming;
