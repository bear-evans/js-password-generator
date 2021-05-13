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

var glyphPool = []; // The blank glyph pool
var passLength = 0; // The password length

// Actually use the pool to generate a password, using a for loop.
// Outputs a string.
function generatePassword() {
  // First, check to see if we have any glyphs to use. Exit immediately if not.
  if (glyphPool.length === 0) {
    window.alert("Unable to generate password: You must select at least one type of character to include.");
    return;
  }
}

function queryUser() {
  // The glyph pool begins empty. As the user is queried for preferences, the
  // associated glyphs are added to the pool.
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

  // This variable controls the while loop, breaking once a valid 
  // password length is set.
  var isLengthSet = false;
  
  while (isLengthSet === false) {
    passLength = window.prompt("How long should the password be? Choose a whole number between 8 and 128.", 12);

    // checks to see if the password length is within the accepted range,
    // then converts it to a true integer.
    if (passLength > 7 && passLength < 129) {
      passLength = parseInt(passLength, 10);
      isLengthSet = true;
    }
  }
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