var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (input) {
  let output = '';

  for (let inputNucleotide of input) {
    switch (inputNucleotide) {
      case 'G':
        output = output + 'C';
        break;
      case 'C':
        output = output + 'G';
        break;
      case 'T':
        output = output + 'A';
        break;
      case 'A':
        output = output + 'U';
        break;
      default:
        throw new Error('Invalid input');
    }
  }
  return output;
};

module.exports = DnaTranscriber;
