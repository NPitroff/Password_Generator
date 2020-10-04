// Assignment Code
var generateBtn = document.querySelector("#generate");
var inputLength = document.querySelector('input[name="quantity"]');
var smallLetter = document.querySelector('input[name="lowercase"]');
var bigLetter = document.querySelector('input[name="uppercase"]');
var num = document.querySelector('input[name="number"]');
var sym = document.querySelector('input[name="symbol"]');
var generate = document.getElementById("generate");
var copy = document.getElementById("copy");

const passKeys = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Copy text function
function clipboardFunction() {
  var copyText = document.querySelector("#password");

  copyText.select();
  copyText.setSelectRange(0,99999)
  
  document.execCommand("copy");

  alert("Your password: " + copyText.value + " has been copied to your clipboard!")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
