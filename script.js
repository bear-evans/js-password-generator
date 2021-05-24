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
  // If the user didn't specify any glyphs to use, abort.
  if (glyphPool.length === 0) {
    window.alert("Unable to generate password: You must select at least one type of character to include.");
    return;
  }
  // If the user canceled the input prompt, abort.
  if (passLength === null) {
    return;
  }
  // Generate the password based on the defined parameters.
  var password = generatePassword(glyphPool, passLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Assembles a pool based on user input.
function queryUser() {
  //  reset the glyph pool each run
  glyphPool = [];
  // Query the user, and add the glyphs they want to the pool.
  if (window.confirm("Would you like to use lowercase letters?")) {
    glyphPool = glyphPool.concat(Array.from("abcdefghijklmnopqrstuvwxyz"));
  }
  if (window.confirm("Would you like to use uppercase letters?")) {
    glyphPool = glyphPool.concat(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  }
  if (window.confirm("Would you like to use numbers?")) {
    glyphPool = glyphPool.concat(Array.from("1234567890"));
  }
  if (window.confirm("Would you like to use special characters?")) {
    glyphPool = glyphPool.concat(Array.from("!@#$%^(){}[]~`?-_.:/\\"));
  }

  // Keep asking the user for input until they abort or give a valid number
  var isLengthSet = false;
  while (isLengthSet === false) {
    setLength = window.prompt("How long should the password be? Choose a whole number between 8 and 128, inclusive.", 12);
    // Handle inappropriate input first, then accept.
    if (setLength === null) {
      return null;
    } else if(setLength < 8) {
      window.alert("Invalid input. Password length must be 8 or more.");
    } else if (setLength > 128) {
      window.alert("Invalid input. Password length must be 128 or less.");
    } else if (isNaN(setLength)) {
      window.alert("Invalid input. Password length must be an integer.");
    } else {
      passLength = parseInt(setLength, 10); // Normalizes the number in case of a decimal.
      isLengthSet = true;  
    }
  }
}

// Use pool to generate a password.
function generatePassword(pool, length) {
  var pwd = [];

  for (var i = 0; i < length; i++) {
    glyph = pool[getRandom(pool.length)];
    pwd.push(glyph);
  }
  // Combines the array into a string, and sends it.
  pwd = pwd.join('');
  return pwd;
}

// Quick and dirty random number generation.
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

//===========================
// Runtime Code
//===========================

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);