// Assignment Code
var generateBtn = document.querySelector("#generate");

// Booleans for characters to include
var genLower = false;
var genUpper = false;
var genNumbers = false;
var genSymbols = false;
var glyphPool = [];

  // Check the checkbox parameters and fill the pool of potential glyphs
function fillPool() {
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 // Actually use the pool to generate a password, using a for loop.
 // Outputs a string.
function generatePassword() {
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);