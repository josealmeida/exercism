var Words = function () {};

Words.prototype.count = function (input) {
  let countWords = {};
  let phrase = input
    .toLowerCase()
    // ignores punctuation
    .replace(/[¡¿.:!?&@$%^&]/igm, '')
    // counts words with quotations start
    .replace(/( ')/igm, ' ')
    // counts words with quotations end
    .replace(/(' )/igm, ' ')
    // counts multiline
    .replace(/(\n)/igm, ' ')
    // counts tabs as white space
    .replace(/(\t)/igm, ' ')
    // handles cramped lists
    .replace(/,/igm, ' ')
    .split(' ')
    .filter(function (elem) {
      if (elem) {
        return elem;
      }
    });

  for (let word of phrase) {
    if (countWords.hasOwnProperty(word)) {
      countWords[word] ++;
    } else {
      countWords[word] = 1;
    }
  }

  return countWords;
};

module.exports = Words;
