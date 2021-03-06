function Hangman() {
  this.words = ["HELLO", "WORLD", "MAGIC", "MATADERO"];
  this.words.length >= 1;
  this.secretWord = "";
  this.letters = [""];
  this.guessedLetter = [""];
  this.errorsLeft = 10;
};

Hangman.prototype._getWord = function() {
  var random = Math.floor((Math.random() * this.words.length));
  var result = this.words[random];
  return result;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if(keyCode >= 65 && keyCode <= 90){
    console.log("TRUE")
    return true;
  }else{
    console.log("FALSE")
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  if (this.words.indexOf(key) == undefined) {
    return false;
  }
  return true;
};

Hangman.prototype._addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this._checkWinner();
};

Hangman.prototype._addWrongLetter = function(letter) {
  this.errorsLeft--;
  this._checkGameOver();
};

Hangman.prototype._checkGameOver = function() {
  return this.errorsLeft == 0;
};

Hangman.prototype._checkWinner = function() {
    return this.secretWord.length == this.guessedLetter.length; {};

}
