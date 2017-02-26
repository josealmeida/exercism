var Pangram = function (input) {
  this.sentence = input
    .toLowerCase();
};

Pangram.prototype.isPangram = function (input) {

  let lettersInSentence = [];
  for (let letter of this.sentence) {
    if (letter.match(/[a-z]/igm) && lettersInSentence.indexOf(letter) === -1){
      lettersInSentence.push(letter);
    }
  }

  return lettersInSentence.length === 26;
};

module.exports = Pangram;
