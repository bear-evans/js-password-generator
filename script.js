// Assignment Code
var generateBtn = document.querySelector("#generate");

// Glyph sets to be added to the pool based on user input
var lowerGlyphs = [
  "a", "b", "c", "d",
  "e", "f", "g", "h",
  "i", "j", "k", "l",
  "m", "n", "o", "p",
  "q", "r", "s", "t",
  "u", "v", "w", "x",
  "y", "z"
];

var upperGlyphs = [
  "A", "B", "C", "D",
  "E", "F", "G", "H",
  "I", "J", "K", "L",
  "M", "N", "O", "P",
  "Q", "R", "S", "T",
  "U", "V", "W", "X",
  "Y", "Z"
];

var numberGlyphs = [
  "0", "1", "2", "3",
  "4", "5", "6", "7",
  "8", "9"
];

var symbolGlyphs = [
  "@", "%", "+", "\\",
  "/", "'", "!", "#",
  "$", "^", "?", ":",
  ",", "(", ")", "{",
  "}", "[", "]", "~",
  "`", "-", "_", ".",
];

// The blank glyph pool
var glyphPool = [];

// Check the checkbox parameters and fill the pool of potential glyphs
function fillPool() {
  }

// Actually use the pool to generate a password, using a for loop.
// Outputs a string.
function generatePassword() {

}

function queryUser() {
  // The glyph pool begins empty. As the user is queried for 
  if (window.confirm("Would you like to use lowercase letters?")) {
    glyphPool = glyphPool.concat(lowerGlyphs);
  }
  if (window.confirm("Would you like to use uppercase letters?")) {
    glyphPool = glyphPool.concat(upperGlyphs);
  }
  if (window.confirm("Would you like to use numbers?")) {
    glyphPool = glyphPool.concat(numberGlyphs);
  }
  if (window.confirm("Would you like to use special characters?")) {
    glyphPool = glyphPool.concat(symbolGlyphs);
  }

  //console.log(glyphPool);

}

// Write password to the #password input
function writePassword() {
  queryUser();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);