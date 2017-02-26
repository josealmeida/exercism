var Isogram = function (input) {
  this.word = input
    .toLowerCase()
    .replace(/[- ]/igm, '');
};

Isogram.prototype.isIsogram = function () {

  let lettersInWord = [];
  for (let letter of this.word) {
    if (lettersInWord.indexOf(letter) !== -1){
      return false;
    } else{
      lettersInWord.push(letter);
    }
  }
  return true;
};

module.exports = Isogram;
