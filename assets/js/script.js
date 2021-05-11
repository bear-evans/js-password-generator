// Assignment Code
var generateBtn = document.querySelector("#generate");

// Booleans for characters to include, and pool of characters
// associated with them
var genLower = false;
var lowerGlyphs = [
  "a", "b", "c", "d",
  "e", "f", "g", "h",
  "i", "j", "k", "l",
  "m", "n", "o", "p",
  "q", "r", "s", "t",
  "u", "v", "w", "x",
  "y", "z"
];

var genUpper = false;
var upperGlyphs = [
  "A", "B", "C", "D",
  "E", "F", "G", "H",
  "I", "J", "K", "L",
  "M", "N", "O", "P",
  "Q", "R", "S", "T",
  "U", "V", "W", "X",
  "Y", "Z"
];

var genNumbers = false;
var numberGlyphs = [
  "0", "1", "2", "3",
  "4", "5", "6", "7",
  "8", "9"
];

var genSymbols = false;
var symbolGlyphs = [
  "@", "%", "+", "\\",
  "/", "'", "!", "#",
  "$", "^", "?", ":",
  ",", "(", ")", "{",
  "}", "[", "]", "~",
  "`", "-", "_", ".",
];

var glyphPool = [];

// Check the checkbox parameters and fill the pool of potential glyphs
function fillPool() {
  }

// Actually use the pool to generate a password, using a for loop.
// Outputs a string.
function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);