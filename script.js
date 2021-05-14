//===========================
// Variables
//===========================

var glyphPool = []; // The blank glyph pool
var passLength = 0; // The password length

//===========================
// Functions
//===========================

// Write password to the #password input
function writePassword() {
  queryUser();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function queryUser() {
  if (window.confirm("Would you like to use lowercase letters?")) {
    glyphPool = glyphPool.concat(Array.from('abcdefghijklmnopqrstuvwxyz'));
  }
  if (window.confirm("Would you like to use uppercase letters?")) {
    glyphPool = glyphPool.concat(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
  }
  if (window.confirm("Would you like to use numbers?")) {
    glyphPool = glyphPool.concat(Array.from('1234567890'));
  }
  if (window.confirm("Would you like to use special characters?")) {
    glyphPool = glyphPool.concat(Array.from('!@#$%^(){}[]~`?-_.:/\\'));
  }

  var isLengthSet = false;
  
  while (isLengthSet === false) {
    passLength = window.prompt("How long should the password be? Choose a whole number between 8 and 128, inclusive.", 12);

    switch (passLength) {
      case (passLength < 8) :
        window.alert("Invalid input. Password length must be 8 or more.");
        break;
      case (passLength > 128) :
        window.alert("Invalid input. Password length must be 128 or less.");
        break;
      case (isNaN(passLength)) :
        window.alert("Invalid input. Password length must be an integer.");
        break;
      case (passLength === null) :
        return null;
      default:
        passLength = parseInt(passLength, 10);
        isLengthSet = true;  
        break;
    }
  }
}

// Actually use the pool to generate a password, using a for loop.
// Outputs a string.
function generatePassword() {
  // First, check to see if we have any glyphs to use. Exit immediately if not.
  if (glyphPool.length === 0) {
    window.alert("Unable to generate password: You must select at least one type of character to include.");
    return;
  }
}

//===========================
// Runtime Code
//===========================

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);