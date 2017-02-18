var Bob = function () {};

Bob.prototype.hey = function (input) {
  let sentence = input.split(' ');

  let yelledWords = 0;
  let numberWords = 0;
  let silence = true;

  sentence.forEach(function (word) {
    if (word !== '') {
      silence = false;
    }
    if (word === word.toUpperCase()) {
      yelledWords++;
    }
    if (Number(word.charAt(0))) {
      numberWords++;
    }
  });

  if (silence === true) {
    return 'Fine. Be that way!';
  } else if (numberWords === sentence.length && !(input.endsWith('?'))) {
    return 'Whatever.';
  } else if (numberWords === sentence.length && input.endsWith('?')) {
    return 'Sure.';
  } else if (yelledWords === sentence.length) {
    return 'Whoa, chill out!';
  } else if (input.endsWith('?')) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
