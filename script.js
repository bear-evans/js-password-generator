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


  if (glyphPool.length === 0) { // The user didn't specify any glyphs to use.
    window.alert("Unable to generate password: You must select at least one type of character to include.");
    return;
  }

  if (passLength === null) { // The user canceled the input prompt.
    return;
  }

  var password = generatePassword(glyphPool, passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function queryUser() {

  glyphPool = []; //  reset the glyph pool each time

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
    setLength = window.prompt("How long should the password be? Choose a whole number between 8 and 128, inclusive.", 12);
    console.log(passLength);
    if (setLength === null) {
      return null;
    } else if(setLength < 8) {
      window.alert("Invalid input. Password length must be 8 or more.");
    } else if (setLength > 128) {
      window.alert("Invalid input. Password length must be 128 or less.");
    } else if (isNaN(setLength)) {
      window.alert("Invalid input. Password length must be an integer.");
    } else {
      passLength = parseInt(setLength, 10);
      isLengthSet = true;  
    }
  }
}

// Actually use the pool to generate a password, using a for loop.
// Outputs a string.
function generatePassword(pool, length) {
  var pwd = [];
  for (var i = 0; i <= length; i++) {
    glyph = pool[getRandom(pool.length)];
    pwd.push(glyph);
  }

  pwd = pwd.join('');

  return pwd;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

//===========================
// Runtime Code
//===========================

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);